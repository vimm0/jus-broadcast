<template>
    <div class="wrapper">
        <list>
            <!--<text class="title">{{ videoObjects.name }}</text>-->
            <!--<video-list :endPoint="this.$options.endpoint">-->
            <!--<template slot="results" slot-scope="res">-->
            <!--<cell v-for="video in videoObjects" :key="video.id">-->
            <cell class="column" v-for="obj in videoObjects" :key="obj.slug" v-if="obj.is_completed">
                <template v-if="obj.is_local">
                    <router-link :to="{ name: 'Local Video Detail', params: { slugId: obj.slug } }">
                        <image :src="obj.pic" class="video-image"/>
                        <div class="meta">
                            <text class="text">{{obj.name}}</text>
                            <text class="text">{{obj.created}}</text>
                        </div>
                    </router-link>
                </template>
                <template v-else>
                    <router-link :to="{ name: 'External Video Detail', params: { slugId: obj.slug } }">
                        <!--<image style="width:500px;height:500px"-->
                        <!--src="https://vuejs.org/images/logo.png"></image>-->
                        <image :src="obj.pic" class="video-image"></image>
                        <div class="meta">
                            <text class="text">{{obj.name}}</text>
                            <text class="text">{{obj.created}}</text>
                        </div>
                    </router-link>
                </template>
            </cell>
            <!--</cell>-->
            <!--</template>-->
            <!--</video-list>-->
        </list>
    </div>
</template>

<script>
    import Helper from '../../../mixins/Helper'

    var stream = weex.requireModule('stream')
    export default {
        data() {
            return {
                videoObjects: ''
            }
        },
        methods: {
            getVideos(url, callback) {
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://52.202.70.246/v1/' + url
                }, callback)
            }
        },
        mixins: [Helper],
        created() {
            this.getVideos('video/?page_size=0', res => {
                this.videoObjects = res.ok ? res.data : '(network error)'
            })
        }
    }
</script>


<style scoped>
    .wrapper {
        flex-direction: column;
        justify-content: center;
    }

    .group {
        flex-direction: row;
        justify-content: center;
        margin-bottom: 40px;
    }

    .title {
        font-size: 45px;
        color: #888888;
    }

    .count {
        font-size: 45px;
        font-weight: bold;
        margin-left: 12px;
        color: #41B883;
    }

    .panel {
        border-color: rgb(79, 192, 141);
        background-color: rgba(79, 192, 141, 0.2);
    }

    .video-image {
        /*max-width: 200;*/
        width: 700px;
        height: 450px;
        /*background-size: cover;*/
        /*margin-right: 0.2px;*/
        /*margin-left: 35px;*/
        margin-top: 35px;
        margin-bottom: 35px;
        flex-direction: column;
        justify-content: center;
    }

    .meta {
        margin-left: 7px;
        margin-right: 7px;
    }

    .text {
        font-size: 30px;
    }
</style>