<template>
    <div class="external-video-detail">
        <text class="text">{{videoId}}</text>
        <div class="external-video-detail__video-container">
            <!--<object data="http://iamawesome.com" type="text/html" width="200" height="200">-->
            <!--<a href="http://iamawesome.com">access the page directly</a>-->
            <!--</object>-->
            <!--<video class="video" :src="videoId" autoplay controls-->
            <!--@start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>-->
            <!--<text class="info">state: {{state}}</text>-->
            <!--<iframe :src="['http://www.youtube.com/embed/' + videoId]" frameborder="0" allowfullscreen-->
            <!--v-if="obj.is_completed" width="100%" height="100%"></iframe>-->
            <!--<video class="video" onpause="onpause" onstart="onstart" onfinish="onfinish" onfail="onfail"-->
            <!--src="http://cloud.video.taobao.com/play/u/522794875/p/2/e/6/t/1/d/ld/fv/2/23335165.mp4"-->
            <!--auto-play="false"http://192.168.0.125:8081/dist/index.js?_wx_tpl=http://192.168.0.125:8081/dist/index.js play-status="{{playStatus}}">-->
            <!--</video>-->

        </div>
        <div class="content video-meta">
            <p class="title">{{ obj.name }}</p>
            <p class="p__release-date">
                Published On: {{ obj.release_date
                }}</p>
            <p class="p__views">
                9,000,000 views</p>
            <p class="p__description" v-if="obj.description">
                {{obj.description}}
                <!--<a class=""-->
                <!--v-if="obj.description.length > 20"-->
                <!--@click="showMore = !showMore">Show {{ moreOrLess }}-->
                <!--</a>-->
            </p>
        </div>
        <!--<web src="https://vuejs.org"></web>-->
        <!--<i-frame :videoId="videoId" :obj="obj"></i-frame>-->
    </div>
</template>

<script>

    import Helper from '../../../../mixins/Helper.js'
    import IFrame from './iframe'

    var stream = weex.requireModule('stream')

    export default {
        name: 'ExternalVideoDetail',
        data() {
            return {
                obj: '',
                showMore: false,
                moreOrLess: '',
                videoId: '',
                state: '----',
                src: 'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
            }
        },
        mixins: [Helper],
        components: {
            'i-frame': IFrame
        },
        created() {
            if (this.$route.params.slugId) {
                this.getVideo('external/video/' + this.$route.params.slugId, res => {
                    console.log(res.data)
                    this.obj = res.ok ? res.data : '(network error)'
                    this.videoId = res.ok ? 'http://www.youtube.com/embed/' + res.data.video_id : '(network error)'
                    console.log(this.videoId)
                })
            }
        },
        methods: {
            getVideo(url, callback) {
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://52.202.70.246/v1/' + url,
                    // headers: {
                    //     'Authorization': `JWT ${self.$store.getters.token}`
                    // }
                }, callback)
            },
            onstart(event) {
                this.state = 'onstart'
            },
            onpause(event) {
                this.state = 'onpause'
            },
            onfinish(event) {
                this.state = 'onfinish'
            },
            onfail(event) {
                this.state = 'onfinish'
            }

        }
    }
</script>
<style>
    div.video-meta {
        margin: 1rem auto auto 0.5rem;
    }

    p.p__release-date {
        color: #999;
    }

    p.title {
        font-size: 0.4rem;
    }

    p.p__views {
        font-size: 0.3rem;
    }

    p.p__description {
        overflow: hidden;
        white-space: pre-wrap;
        font-size: .2rem !important;
        /* margin-left: -1rem; */
    }

    /*Youtube-iframe responsive container*/
    .external-video-detail__video-container {
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 30px;
        height: 0;
        overflow: hidden;
    }

    .external-video-detail__video-container iframe,
    .external-video-detail__video-container object,
    .external-video-detail__video-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .video {
        width: 630px;
        height: 350px;
        margin-top: 60px;
        margin-left: 60px;
    }

    .info {
        margin-top: 40px;
        font-size: 40px;
        text-align: center;
    }
</style>

<!--<script>-->
<!--export default {-->
<!--data() {-->
<!--return {-->
<!--state: '&#45;&#45;&#45;&#45;',-->
<!--src: 'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'-->
<!--}-->
<!--},-->
<!--methods: {-->
<!--onstart(event) {-->
<!--this.state = 'onstart'-->
<!--},-->
<!--onpause(event) {-->
<!--this.state = 'onpause'-->
<!--},-->
<!--onfinish(event) {-->
<!--this.state = 'onfinish'-->
<!--},-->
<!--onfail(event) {-->
<!--this.state = 'onfinish'-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->