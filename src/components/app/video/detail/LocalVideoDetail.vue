<template>
    <div class="local-video-detail">
        <d-player ref="player" :options="playerOptions" :key="obj.id" @play="play"></d-player>
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
    import VueDPlayer from 'vue-dplayer'

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
                }
            }
        },
        mixins: [Helper],
        components: {
            'd-player': VueDPlayer,
        },
        computed: {
            player() {
                return this.$refs.player.dp
            }
        },
        mounted() {
            this.getVideo()
        },
        methods: {
            getVideo() {
                if (this.$route.params.slugId) {
                    global.axios.get('local/video/' + this.$route.params.slugId).then(({data}) => {
                        // console.log(data)
                        global.Vue.set(this.$data, 'obj', data)
                        // console.log(this.obj)
                        let videoObj = Object.assign({
                                pic: JSON.parse(JSON.stringify(data.pic)),
                                defaultQuality: JSON.parse(JSON.stringify(0))
                            }, Object.assign({
                                quality: data.quality
                            })
                        )
                        let logo = Object.assign(JSON.parse(JSON.stringify(data.pic)))
                        global.Vue.set(this.playerOptions, 'video', videoObj)
//                        global.Vue.set(this.playerOptions, 'logo', logo)
                    }).catch((error) => {
                        // Error
                        console.log(error.response)
                        console.log('Error', error.message)

                        return error
                    })
                }
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
    }

</style>