<!--<template>-->
<!--<div class="wrapper" style="overflow: visible;">-->
<!--&lt;!&ndash;<scroller class="scroller">&ndash;&gt;-->
<!--&lt;!&ndash;<web ref="webview" :src="videoId" class="wrapper-webview"></web>&ndash;&gt;-->
<!--&lt;!&ndash;<iframe src="[https://www.youtube.com/embed/Cjo9iq8k-bc](https://www.youtube.com/embed/Cjo9iq8k-bc)"&ndash;&gt;-->
<!--&lt;!&ndash;width="600" height="480" frameborder="0" webkitallowfullscreen="" mozallowfullscreen=""&ndash;&gt;-->
<!--&lt;!&ndash;allowfullscreen=""></iframe>&ndash;&gt;-->
<!--&lt;!&ndash;<text @click="fullScreen">Fullscreen</text>&ndash;&gt;-->
<!--&lt;!&ndash;<div class="content video-meta">&ndash;&gt;-->
<!--&lt;!&ndash;<text class="text-title">{{ obj.name }}</text>&ndash;&gt;-->
<!--&lt;!&ndash;<text class="text-view">9,000,000 views</text>&ndash;&gt;-->
<!--&lt;!&ndash;<text class="text-published-on">Published On: {{ obj.release_date }}</text>&ndash;&gt;-->
<!--&lt;!&ndash;</div>&ndash;&gt;-->
<!--&lt;!&ndash;</scroller>&ndash;&gt;-->
<!--</div>-->
<!--</template>-->
<template>
    <div class="wrapper" style="overflow: visible;">
        <scroller class="scroller">
            <web ref="webview" :src="videoId" class="wrapper-webview"></web>
            <giraffeplayer style="height:555;width:555;" :src="https://www.youtube.com/embed/ysrFrinoyCA">Player</giraffeplayer>

            <!--<iframe src="[https://www.youtube.com/embed/Cjo9iq8k-bc](https://www.youtube.com/embed/Cjo9iq8k-bc)"-->
                    <!--width="600" height="480" frameborder="0" webkitallowfullscreen="" mozallowfullscreen=""-->
                    <!--allowfullscreen=""></iframe>-->
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
    var dom = weex.requireModule('dom')


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
                    this.videoId = res.ok ? 'http://www.youtube.com/embed/' + res.data.video_id + '?autoplay=1&controls=1&fs=1&loop=1&rel=0&showinfo=0&disablekb=1' : this.$router.push('/error')
                    console.log(this.videoId)
                })
            }
        },
        mounted() {
//            var webview = this.$refs['webview'].$el
//            var screen = dom.onwebkitfullscreenchange = true
//            console.log(screen)
//            console.log(this.$refs['webview'])
//            webview.allowFullscreen = true
//            console.log(this.$store)
//            this.$refs[webview][0].$el.allowFullscreen = true
//            this.$refs.webview.$el.fullscreenEnabled = true
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
            fullScreen(argument) {
                console.log(this)
//                this.$el.requestFullscreen()
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
<!--<style scoped>-->
<!--.wrapper {-->
<!--width: auto;-->
<!--height: auto;-->
<!--background: #EBEBEB;-->
<!--color: #4d4d4d;-->
<!--}-->

<!--.wrapper-webview {-->
<!--/*width: 1500vw;*/-->
<!--height: 500vh;-->
<!--transform-origin: 0 0;-->
<!--transform: scale(1);-->
<!--}-->

<!--.scroller {-->
<!--width: auto;-->
<!--height: auto;-->
<!--}-->

<!--.video-meta {-->
<!--padding-left: 10px;-->
<!--}-->

<!--.text-title {-->
<!--font-size: 23px;-->
<!--padding: 5px 0 5px 0;-->
<!--}-->

<!--.text-view {-->
<!--font-size: 15px;-->
<!--padding: 5px 0 5px 0;-->
<!--color: #848484;-->
<!--}-->

<!--.text-published-on {-->
<!--font-size: 15px;-->
<!--padding: 2px 2px 2px 2px;-->
<!--color: #848484;-->
<!--}-->

<!--.text-description {-->
<!--font-size: 15px;-->
<!--color: #848484;-->
<!--}-->
<!--</style>-->


<style scoped>
    .video {
        width: 750px;
        height: 460px;
        margin-bottom: 80px;
    }
</style>

<!--<script>-->
<!--var modal = weex.requireModule('modal')-->
<!--module.exports = {-->
<!--data: function () {-->
<!--return {-->
<!--playStatus: 'play'-->
<!--}-->
<!--},-->
<!--components: {-->
<!--//      button: require('../include/button.vue')-->
<!--},-->
<!--methods: {-->
<!--pause: function() {-->
<!--this.playStatus = 'pause'-->
<!--modal.toast({ 'message': 'click pause' })-->
<!--},-->
<!--play: function() {-->
<!--this.playStatus = 'play'-->
<!--modal.toast({ 'message': 'click play' })-->
<!--},-->
<!--onpause: function(e) {-->
<!--this.playStatus = e.playStatus-->
<!--modal.toast({ 'message': 'video pause' })-->
<!--},-->
<!--onstart: function(e) {-->
<!--this.playStatus = e.playStatus-->
<!--modal.toast({ 'message': 'video start' })-->
<!--},-->
<!--onfinish: function(e) {-->
<!--this.playStatus = e.playStatus-->
<!--modal.toast({ 'message': 'video finish' })-->
<!--},-->
<!--onfail: function(e) {-->
<!--this.playStatus = e.playStatus-->
<!--modal.toast({ 'message': 'video fail' })-->
<!--}-->
<!--}-->
<!--};-->
<!--</script>-->