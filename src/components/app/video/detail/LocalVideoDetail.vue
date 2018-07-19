<template>
    <!--<text @click="callJava">testMyModule</text>-->
    <richText tel="12305" style="width:200;height:100">12305</richText>
    <!--<text @click="click">click me</text>-->
    <!--<video-web-view></video-web-view>-->
    <!--<div class="local-video-detail wrapper">-->
    <!--consider vue-dplayer, builtin video player have low functionalities-->
    <!--<web ref="webview" class="wrapper-webview" :src="src"></web>-->
    <!--<div class="content video-meta">-->
    <!--<text class="text-title">{{ obj.name }}</text>-->
    <!--<text class="text-view">9,000,000 views</text>-->
    <!--<text class="text-published-on">Published On: {{ obj.release_date }}</text>-->
    <!--&lt;!&ndash;<text class="text-description" v-if="obj.description" style="white-space: pre-line;">&ndash;&gt;-->
    <!--&lt;!&ndash;{{obj.description}}&ndash;&gt;-->
    <!--&lt;!&ndash;<a class=""&ndash;&gt;-->
    <!--&lt;!&ndash;v-if="obj.description.length > 20"&ndash;&gt;-->
    <!--&lt;!&ndash;@click="showMore = !showMore">Show {{ moreOrLess }}&ndash;&gt;-->
    <!--&lt;!&ndash;</a>&ndash;&gt;-->
    <!--</div>-->
    <!--<text>{{ variable }}</text>-->
    <!--<text @click="requestFullscreen">clickme</text>-->
    <!--</div>-->
</template>

<script>
    import Helper from '../../../../mixins/Helper.js'

    const stream = weex.requireModule('stream')
    const web = weex.requireModule('webview')
    export default {
        name: 'LocalVideoDetail',
        data() {
            return {
                obj: '',
                logo: '',
                showMore: false,
                moreOrLess: '',
                playerOptions: {
                    video: {}
                },
                state: '----',
                src: '',
                variable: ''
            }
        }
        ,
        mixins: [Helper],
        components:
            {
//            'd-player': VueDPlayer,
        }
        ,
        computed: {
            player() {
//                return this.$refs.player.dp
            }
        },
        created() {
            // this.variable = weex
            if (this.$route.params.slugId) {
                this.getVideo('local/video/' + this.$route.params.slugId, res => {
                    console.log(res.data)
                    this.src = res.ok ? res.data.quality[0].url : this.$router.push('/error')
                    console.log(res)
                })
            }
        }
        ,
        methods: {
            callJava() {
                const event = weex.requireModule('event')
                console.log(event)
                event.openURL("http://www.github.com", function (resp) {
                    console.log(resp.result);
                });
            },
            click: function () {
                weex.requireModule('MyModule').printLog("I am a weex Module!");
            },
            getVideo(url, callback) {
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://52.202.70.246/v1/' + url || ' ',
                    // headers: {
                    //     'Authorization': `JWT ${self.$store.getters.token}`
                    // }
                }, callback)
            }, requestFullscreen() {
                console.log(this)
                // var element = this.$el[0];
                // var method = this.requestFullscreen;

                // if (this.requestFullscreen) {
                //     this.requestFullscreen();
                // } else if (this.mozRequestFullScreen) {
                //     this.mozRequestFullScreen();
                // } else if (this.webkitRequestFullscreen) {
                //     this.webkitRequestFullscreen();
                // } else if (this.msRequestFullscreen) {
                //     this.msRequestFullscreen();
                // }

                // if (method) {
                //     element[method]();
                // }
                if (this.webkitEnterFullscreen) {
                    this.webkitEnterFullscreen && this.webkitEnterFullscreen();
                    // element.enterFullScreen && element.enterFullScreen();
                }
                // else {
                //     // Simulate full screen  enterFullWindow();     } }
                //

                // // Simulate full-screen js core code
                // _mockFullscreen()
                // {
                //     if (curEl.hasClass('normal')) {
                //         this.fullscreen = false;
                //
                //
                //         playerEl.css({
                //             width: this.originWidth,
                //             height: this.originHeight,
                //             left: 0
                //         }).removeClass('fullscreen');
                //
                //         wrapperEl.css({
                //             width: this.wrapperOriginWidth,
                //             height: this.wrapperOriginHeight
                //         });
                //
                //         videoEl.css('height', '100%');
                //
                //         curEl.removeClass('normal');
                //         contentEl.removeClass('fullscreen');
                //     } else {
                //         this.fullscreen = true;
                //
                //
                //         This.originWidth = playerEl.width();
                //         this.originHeight = playerEl.height();
                //
                //
                //         This.wrapperOriginWidth = wrapperEl.width();
                //         this.wrapperOriginHeight = wrapperEl.height();
                //
                //
                //         playerEl.css({
                //             width: $(window).height(),
                //             height: $(window).width(),
                //             left: $(window).width()
                //         }).addClass('fullscreen');
                //
                //         wrapperEl.css({
                //             width: $(window).height(),
                //             height: $(window).width()
                //         });
                //
                //         videoEl.css('height', videoEl.height() - controlsHeight);
                //
                //         curEl.addClass('normal');
                //         contentEl.addClass('fullscreen');
                //     }
                // }
                // pagestart() {
                //     console.log(this)
                // }
                // }
            }
        }
    }
</script>
<style>
    .wrapper {
        width: auto;
        height: auto;
        color: #4d4d4d;
        background: #EBEBEB;
        /*transform: rotate(90deg);*/
    }

    .wrapper-webview {
        /*width: 1500vw;*/
        height: auto;
        /*transform-origin: 0 0;*/
        /*transform: scale(1);*/
        /*-ms-transform: rotate(90deg); !* IE 9 *!*/
        /*-ms-transform-origin: 50% 50%; !* IE 9 *!*/
        /*-webkit-transform: rotate(90deg); !* Safari 3-8 *!*/
        /*-webkit-transform-origin: 0% 0%; !* Safari 3-8 *!*/
        /*transform: rotate(90deg);*/
        /*transform-origin: 50% 50%*/
    }

    /*.video-meta {*/
    /*padding-left: 10px;*/
    /*}*/

    /*.text-title {*/
    /*font-size: 23px;*/
    /*padding: 5px 0 5px 0;*/
    /*}*/

    /*.text-view {*/
    /*font-size: 15px;*/
    /*padding: 5px 0 5px 0;*/
    /*color: #848484;*/
    /*}*/

    /*.text-published-on {*/
    /*font-size: 15px;*/
    /*padding: 2px 2px 2px 2px;*/
    /*color: #848484;*/
    /*}*/

    /*.text-description {*/
    /*font-size: 15px;*/
    /*color: #848484;*/
    /*}*/
    Video ::-webkit-media-controls-start-playback-button {
        display: none;
    }

</style>