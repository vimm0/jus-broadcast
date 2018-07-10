<template>
    <list>
        <video-list :endPoint="this.$options.endpoint">
            <template slot="results" slot-scope="res">
                <cell v-for="video in chunkedHomeVideo(res.results.slice(0,8))" :key="video.id">
                    <div class="column" v-for="obj in video" :key="obj.slug" v-if="obj.is_completed">
                        <template v-if="obj.is_local">
                            <router-link :to="{ name: 'Local Video Detail', params: { slugId: obj.slug } }">
                                <img :src="obj.pic" class="video-image">
                                <div class="meta">
                                    <text class="text">{{obj.name}}</text>
                                    <text class="text">{{obj.created}}</text>
                                </div>
                            </router-link>
                        </template>
                        <template v-else>
                            <router-link :to="{ name: 'External Video Detail', params: { slugId: obj.slug } }">
                                <img :src="obj.pic" class="video-image">
                                <div class="meta">
                                    <text class="text">{{obj.name}}</text>
                                    <text class="text">{{obj.created}}</text>
                                </div>
                            </router-link>
                        </template>
                    </div>
                </cell>
            </template>
        </video-list>
    </list>
</template>

<style scoped>
    .panel {
        border-color: rgb(79, 192, 141);
        background-color: rgba(79, 192, 141, 0.2);
    }

    .image .video-image {
        max-width: 100%;
        width: auto;
        height: 320px;
        margin-right: 0.7rem;
        margin-left: 0.7rem;
        margin-top: 35px;
        margin-bottom: 35px;
        flex-direction: column;
        justify-content: center;
    }

    .meta {
        margin-left: 0.7rem;
        margin-right: 0.7rem;
    }

    .text {
        font-size: 0.4rem;
    }
</style>
<script>
    import Collection from '../../Collection/Collection.vue'
    import Helper from '../../../mixins/Helper'

    export default {
        name: 'home',
        data() {
            return {
                videosObject: '',
                hideButton: true
            }
        },
        mixins: [Helper],
        components: {
            'video-list': Collection
        },
        endpoint: 'video/?page_size=0',
    }
</script>