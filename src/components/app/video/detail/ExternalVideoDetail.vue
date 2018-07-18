<template>
    <div class="wrapper" style="overflow: visible;">
        <scroller class="scroller">
            <web ref="webview" :src="videoId" class="wrapper-webview"></web>
            <text @click="fullScreen">Fullscreen</text>
            <div class="content video-meta">
                <text class="text-title">{{ obj.name }}</text>
                <text class="text-view">9,000,000 views</text>
                <text class="text-published-on">Published On: {{ obj.release_date }}</text>
            </div>
        </scroller>
    </div>
</template>
<script>

    import Helper from '../../../../mixins/Helper.js'
    import mapGetters from "vuex";

    const webview = weex.requireModule('webview')
    const stream = weex.requireModule('stream')
    const modal = weex.requireModule('modal')


    export default {
        name: 'ExternalVideoDetail',
        data() {
            return {
                obj: '',
                showMore: false,
                moreOrLess: '',
                fullscreen: false,
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
                    this.videoId = res.ok ? 'http://www.youtube.com/embed/' + res.data.video_id + '?autoplay=1&controls=1&fs=1&loop=1&rel=0&showinfo=0&disablekb=1' : this.$router.push('/error')
                    console.log(this.videoId)
                })
            }
        },
        mounted() {
            console.log(this.$store)
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
            fullScreen(argument) {
                console.log(this)
//                this.$refs.webview.$el.allowFullscreen = true
//                this.$refs.webview.$el.onwebkitfullscreenchange = true
            }
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
