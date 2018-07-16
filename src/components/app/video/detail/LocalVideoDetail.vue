<template>
    <div class="local-video-detail">
        <video class="video" :src="src" autoplay controls></video>
        <div class="content video-meta">
            <p class="title">{{ obj.name }}</p>
            <p class="p__release-date" v-if="obj.release_date">
            Published
            On: {{ obj.release_date }}</p>
            <p class="p__views">9,000,000 views</p>
            <!--<p class="p__description is-size-7-touch is-size-7-mobile" v-if="obj.description">{{-->
            <!--getDescription(obj.description) }}-->
            <!--<a class=""-->
            <!--v-if="obj.description.length > 20"-->
            <!--@click="showMore = !showMore">Show {{ moreOrLess }}-->
            <!--</a>-->
            <!--</p>-->
        </div>
    </div>
</template>

<script>
    import Helper from '../../../../mixins/Helper.js'
    //    import VueDPlayer from 'vue-dplayer'
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
                    this.src = res.ok ? res.data.quality[0].url : '(network error)'
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
    }

</style>