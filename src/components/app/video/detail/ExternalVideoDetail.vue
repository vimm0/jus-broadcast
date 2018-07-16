<template>
    <div class="wrapper">
        <text class="text">{{videoId}}</text>
        <!--https://blog.csdn.net/u013836363/article/details/55210452-->
        <web ref="webview" :src="videoId" class="wrapper-webview"></web>
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

    const webview = weex.requireModule('webview')
    const stream = weex.requireModule('stream')
    import Helper from '../../../../mixins/Helper.js'
    import mapGetters from "vuex";

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
            let user = JSON.parse(this.$store.state.user)
            console.log(user.token)
            if (this.$route.params.slugId) {
                this.getVideo('external/video/' + this.$route.params.slugId, user.token, res => {
                    console.log(res.data)
                    this.obj = res.ok ? res.data : '(network error)'
                    this.videoId = res.ok ? 'http://www.youtube.com/embed/' + res.data.video_id : '(network error)'
                    console.log(this.videoId)
                })
            }
        },
        methods: {
            getVideo(url, token, callback) {
                console.log(token)
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://52.202.70.246/v1/' + url,
                    headers: {
                        'Authorization': `JWT ${token}`
                    }
                }, callback)
            },
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
</style>
