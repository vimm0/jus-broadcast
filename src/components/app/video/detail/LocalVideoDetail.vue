<template>
    <div class="local-video-detail wrapper">
        <!--consider vue-dplayer, builtin video player have low functionalities-->
        <web ref="webview" class="wrapper-webview" :src="src" allowfullscreen='true'></web>
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
    </div>
</template>

<script>
    import Helper from '../../../../mixins/Helper.js'

    const stream = weex.requireModule('stream')
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
                src: ''
            }
        },
        mixins: [Helper],
        components: {
//            'd-player': VueDPlayer,
        },
        computed: {
            player() {
//                return this.$refs.player.dp
            }
        },
        created() {
            if (this.$route.params.slugId) {
                this.getVideo('local/video/' + this.$route.params.slugId, res => {
                    console.log(res.data)
                    this.src = res.ok ? res.data.quality[0].url : this.$router.push('/error')
                    console.log(res)
                })
            }
            this.getVideo()
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
            }
        }
    }
</script>
<style>
    .video {
        width: auto;
        height: 500vh;
        /*margin-top: 60px;*/
        /*margin-left: 60px;*/
    }

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