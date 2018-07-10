<template>
    <div class="external-video-detail">
        <div class="external-video-detail__video-container">
            <iframe :src="['http://www.youtube.com/embed/' + videoId]" frameborder="0" allowfullscreen
                    v-if="obj.is_completed"></iframe>
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
    </div>
</template>

<script>

    import Helper from '../../../../mixins/Helper.js'

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
        mixins: [Helper],
        mounted() {
            this.getVideo()
        },
        methods: {
            getVideo() {
                if (this.$route.params.slugId) {
                    global.axios.get('external/video/' + this.$route.params.slugId)
                        .then(({data}) => {
                            console.log(data)
                            global.Vue.set(this.$data, 'obj', data)
                            this.videoId = data.video_id
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

</style>