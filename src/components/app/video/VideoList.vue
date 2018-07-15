<template>
    <div class="wrapper">
        <list>
            <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator">Refreshing ...</text>
                <!--<loading-indicator></loading-indicator>-->
                <!--TODO: later for loading  -->
                <loading class="loading" :display="loadinging ? 'show' : 'hide'">
                    <text class="indicator">Loading ...</text>
                </loading>
            </refresh>                <!--<text class="title">{{ videoObjects.name }}</text>-->
            <!--<loading-indicator style="width:60;height:60"></loading-indicator>-->

            <!--<video-list :endPoint="this.$options.endpoint">-->
            <!--<template slot="results" slot-scope="res">-->
            <!--<cell v-for="video in videoObjects" :key="video.id">-->
            <cell class="column" v-for="obj in videoObjects" :key="obj.slug" v-if="obj.is_completed">
                <!--<template v-if="obj.is_local">-->
                <div class="text-cell" @click="routeTo(obj.slug)">
                    <!--<external @click="routeTo(obj.slug)">-->
                    <image :src="obj.pic" class="video-image"/>
                    <div class="meta">
                        <text class="text">{{obj.name}}</text>
                        <text class="text">{{obj.created}}</text>
                    </div>
                </div>
                <!--</external>-->
                <!--</template>-->
                <!--<template v-else>-->
                <!--<router-link :to="{ name: 'External Video Detail', params: { slugId: obj.slug } }">-->
                <!--&lt;!&ndash;<image style="width:500px;height:500px"&ndash;&gt;-->
                <!--&lt;!&ndash;src="https://vuejs.org/images/logo.png"></image>&ndash;&gt;-->
                <!--<image :src="obj.pic" class="video-image"></image>-->
                <!--<div class="meta">-->
                <!--<text class="text">{{obj.name}}</text>-->
                <!--<text class="text">{{obj.created}}</text>-->
                <!--</div>-->
                <!--</router-link>-->
                <!--</template>-->
            </cell>
            <!--</cell>-->
            <!--</template>-->
            <!--</video-list>-->
            <!--</refresh>-->
        </list>
    </div>
</template>

<script>
    import Helper from '../../../mixins/Helper'
    //    import External from './detail/ExternalVideoDetail'
    //    import router from '../../../router'
    const modal = weex.requireModule('modal')

    var stream = weex.requireModule('stream')
    export default {
        data() {
            return {
                videoObjects: '',
                refreshing: false,
                showLoading: 'hide',
                loadinging: false
            }
        },
        components: {
//            External
        },
        methods: {
            getVideos(url, callback) {
                var self = this;
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://52.202.70.246/v1/' + url,
                    // headers: {
                        // if (self.$store.getters.token) {
                        // 'Authorization': `JWT ${self.$store.getters.token}`
                        // }
                    // }
                }, callback)
            },
            onrefresh(event) {
                console.log('is refreshing')
                this.loadinging = true

                this.showLoading = 'show'
                this.refreshing = true
                console.log(this.showLoading)
                if (this.refreshing === true) {
                    this.getVideos('video/?page_size=0', res => {
                        this.videoObjects = res.ok ? res.data : '(network error)'
                    })
                    this.refreshing = false
                    this.showLoading = 'hide'
                    console.log(this.showLoading)
                }
                setTimeout(() => {
                    this.loadinging = false
                }, 2000)

            },
//            onloading(event) {
//                modal.toast({message: 'loading', duration: 1})
//                this.showLoading = 'show'
//                setTimeout(() => {
//                    const length = this.lists.length
//                    this.getVideos('video/?page_size=0', res => {
//                        this.videoObjects = res.ok ? res.data : '(network error)'
//                    })
//                    this.showLoading = 'hide'
//                }, 1500)
//            },
            routeTo(slug) {
//                if (obj.is_local){
//                    this.$router.push({ name: 'Local Video Detail', params: { slugId: obj.slug } })
//                } else {
                console.log('clicked me')
                this.$router.push({name: 'External Video Detail', params: {slugId: slug}})
//                }
            }
        }
        ,
        mixins: [Helper],
        created() {
            if (this.refreshing === true) {
                this.refreshing = false
            }
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

    /*REFRESH*/
    .indicator {
        color: #888888;
        font-size: 42px;
        text-align: center;
    }

    .panel {
        width: 600px;
        height: 250px;
        margin-left: 75px;
        margin-top: 35px;
        margin-bottom: 35px;
        flex-direction: column;
        justify-content: center;
        border-width: 2px;
        border-style: solid;
        border-color: #DDDDDD;
        background-color: #F5F5F5;
    }

    /*.text {*/
    /*font-size: 50px;*/
    /*text-align: center;*/
    /*color: #41B883;*/
    /*}*/
</style>