<template>
    <div class="wrapper" style="overflow: visible;">
        <scroller class="scroller">
            <!--<web ref="webview" :src="videoId" class="wrapper-webview"></web>-->
            <!--<giraffeplayer style="height:555;width:555;" :src="videoId">Player</giraffeplayer>-->
            <!--<giraffeplayer style="height:555;width:555;" src="https://www.youtube.com/embed/YqeW9_5kURI?autoplay=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1">Player</giraffeplayer>-->
            <youtubeplayer style="height:555;width:auto;" :src="src">Player</youtubeplayer>
            <!--<giraffeplayer style="height:555;width:555;" src="https://www.youtube.com/embed/YqeW9_5kURI?autoplay=1&controls=0&disablekb=1&fs=0&playsinline=1&rel=0&showinfo=0">Player</giraffeplayer>-->
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
    const dom = weex.requireModule('dom')


    export default {
        name: 'ExternalVideoDetail',
        data() {
            return {
                obj: '',
                showMore: false,
                moreOrLess: '',
                src: ''
            }
        },
        computed: {},
        mixins: [Helper],
        created() {
            if (this.$route.params.slugId) {
                this.getVideo('external/video/' + this.$route.params.slugId, res => {
                    console.log(res.data)
                    this.obj = res.ok ? res.data : this.$router.push('/error')
                    // + '?autoplay=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1'
//                    this.src = res.ok ? 'https://www.youtube.com/embed/' + res.data.video_id  : this.$router.push({name: "/error", params: {res}});
                    this.src = res.ok ? res.data.video_id  : this.$router.push({name: "/error", params: {res}});
                    console.log(this.videoId)
                     modal.toast({
                        message: this.videoId
                    })
                })
            }
        },
        methods: {
            getVideo(url, callback) {
                let self = this;
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://52.202.70.246/v1/' + url || ' ',
//                    headers: {
//                        'Authorization': `JWT ${self.$store.getters.token}`
//                    }
                }, callback)
            },
            pause: function () {
                this.playStatus = 'pause'
                modal.toast({'message': 'click pause'})
            },
            play: function () {
                this.playStatus = 'play'
                modal.toast({'message': 'click play'})
            },
            onpause: function (e) {
                this.playStatus = e.playStatus
                modal.toast({'message': 'video pause'})
            },
            onstart: function (e) {
                this.playStatus = e.playStatus
                modal.toast({'message': 'video start'})
            },
            onfinish: function (e) {
                this.playStatus = e.playStatus
                modal.toast({'message': 'video finish'})
            },
            onfail: function (e) {
                this.playStatus = e.playStatus
                modal.toast({'message': 'video fail'})
            }
        }
    }
</script>
<style scoped>
    .video {
        width: 750px;
        height: 460px;
        margin-bottom: 80px;
    }
</style>