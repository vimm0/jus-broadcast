<template>
    <div class="external-video-detail">
        <text class="text">flaskdj</text>
        <!--<div class="external-video-detail__video-container">-->
            <!--<iframe :src="['http://www.youtube.com/embed/' + videoId]" frameborder="0" allowfullscreen-->
                    <!--v-if="obj.is_completed"></iframe>-->
        <!--</div>-->
        <!--<div class="content video-meta">-->
            <!--<p class="title">{{ obj.name }}</p>-->
            <!--<p class="p__release-date">-->
                <!--Published On: {{ obj.release_date-->
                <!--}}</p>-->
            <!--<p class="p__views">-->
                <!--9,000,000 views</p>-->
            <!--<p class="p__description" v-if="obj.description">-->
                <!--{{obj.description}}-->
                <!--&lt;!&ndash;<a class=""&ndash;&gt;-->
                <!--&lt;!&ndash;v-if="obj.description.length > 20"&ndash;&gt;-->
                <!--&lt;!&ndash;@click="showMore = !showMore">Show {{ moreOrLess }}&ndash;&gt;-->
                <!--&lt;!&ndash;</a>&ndash;&gt;-->
            <!--</p>-->
        <!--</div>-->
    </div>
</template>

<script>

//    import Helper from '../../../../mixins/Helper.js'
//
//    var stream = weex.requireModule('stream')

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
//        mixins: [Helper],
//        created() {
//            if (this.$route.params.slugId) {
//                this.getVideo('external/video/' + this.$route.params.slugId, res => {
//                    global.Vue.set(this.$data, 'obj', res.data)
//                    this.videoId = res.ok ? res.data.video_id : '(network error)'
//                })
//            }
//        },
//        methods: {
//            getVideo(url, callback) {
//                return stream.fetch({
//                    method: 'GET',
//                    type: 'json',
//                    url: 'http://52.202.70.246/v1/' + url
//                }, callback)
//            }
//        }
    }
</script>
<!--<style>-->
    <!--div.video-meta {-->
        <!--margin: 1rem auto auto 0.5rem;-->
    <!--}-->

    <!--p.p__release-date {-->
        <!--color: #999;-->
    <!--}-->

    <!--p.title {-->
        <!--font-size: 0.4rem;-->
    <!--}-->

    <!--p.p__views {-->
        <!--font-size: 0.3rem;-->
    <!--}-->

    <!--p.p__description {-->
        <!--overflow: hidden;-->
        <!--white-space: pre-wrap;-->
        <!--font-size: .2rem !important;-->
        <!--/* margin-left: -1rem; */-->
    <!--}-->

    <!--/*Youtube-iframe responsive container*/-->
    <!--.external-video-detail__video-container {-->
        <!--position: relative;-->
        <!--padding-bottom: 56.25%;-->
        <!--padding-top: 30px;-->
        <!--height: 0;-->
        <!--overflow: hidden;-->
    <!--}-->

    <!--.external-video-detail__video-container iframe,-->
    <!--.external-video-detail__video-container object,-->
    <!--.external-video-detail__video-container embed {-->
        <!--position: absolute;-->
        <!--top: 0;-->
        <!--left: 0;-->
        <!--width: 100%;-->
        <!--height: 100%;-->
    <!--}-->

<!--</style>-->