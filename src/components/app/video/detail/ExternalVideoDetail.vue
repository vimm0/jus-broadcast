<template>
    <div class="wrapper" style="overflow: visible;">
        <scroller class="scroller">
            <!--https://blog.csdn.net/u013836363/article/details/55210452-->
            <web ref="webview" :src="videoId" class="wrapper-webview"></web>
            <div class="content video-meta">
                <text class="text-title">{{ obj.name }}</text>
                <text class="text-view">9,000,000 views</text>
                <text class="text-published-on">Published On: {{ obj.release_date }}</text>
                <!--<text class="text-description" v-if="obj.description" style="white-space: pre-line;">-->
                <!--{{obj.description}}-->
                <!--<a class=""-->
                <!--v-if="obj.description.length > 20"-->
                <!--@click="showMore = !showMore">Show {{ moreOrLess }}-->
                <!--</a>-->
            </div>
        </scroller>
    </div>
</template>
<script>
    import Helper from '../../../../mixins/Helper.js'
    import mapGetters from "vuex";

    const webview = weex.requireModule('webview')
    const stream = weex.requireModule('stream')
    export default {
        name: 'ExternalVideoDetail',
        data() {
            return {
                obj: '',
                showMore: false,
                moreOrLess: '',
                videoId: ''
            }
        },
        computed: {},
        mixins: [Helper],
        created() {
            if (this.$route.params.slugId) {
                this.getVideo('external/video/' + this.$route.params.slugId, res => {
                    console.log(res.data)
                    this.obj = res.ok ? res.data : this.$router.push('/error')
                    this.videoId = res.ok ? 'http://www.youtube.com/embed/' + res.data.video_id : this.$router.push('/error')
                    console.log(this.videoId)
                })
            }
        },
        methods: {
            getVideo(url, callback) {
                let self = this;
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://52.202.70.246/v1/' + url,
                    headers: {
                        'Authorization': `JWT ${self.$store.getters.token}`
                    }
                }, callback)
            },
        }
    }
</script>
<style scoped>
    .wrapper {
        width: auto;
        height: auto;
        background: #EBEBEB;
        color: #4d4d4d;
    }

    .wrapper-webview {
        /*width: 1500vw;*/
        height: 500vh;
        transform-origin: 0 0;
        transform: scale(1);
    }

    .scroller {
        width: auto;
        height: auto;
    }

    .video-meta {
        padding-left: 10px;
    }

    .text-title {
        font-size: 23px;
        padding: 5px 0 5px 0;
    }

    .text-view {
        font-size: 15px;
        padding: 5px 0 5px 0;
        color: #848484;
    }

    .text-published-on {
        font-size: 15px;
        padding: 2px 2px 2px 2px;
        color: #848484;
    }

    .text-description {
        font-size: 15px;
        color: #848484;
    }
</style>
