<template>
    <list class="local-video-detail wrapper">
        <!--<list>-->
        <!--<giraffeplayer style="height:555;width:555;" >Player not supported</giraffeplayer>-->
        <cell class="banner">
            <giraffeplayer style="height:555;width:auto;" :src="src">Player not supported</giraffeplayer>

        </cell>
        <cell>
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
            <!--</list>-->
        </cell>

    </list>
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
        created() {
            if (this.$route.params.slugId) {
                this.getVideo('local/video/' + this.$route.params.slugId, res => {
                    console.log(res.data)
                    this.src = res.ok ? res.data.quality[0].url : this.$router.push({name: "/error", params: {res}});
                    console.log(res)
                })
            }
        }
        ,
        methods: {
            getVideo(url, callback) {
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'http://52.202.70.246/v1/' + url || ' ',
                    // headers: {
                    //     'Authorization': `JWT ${self.$store.getters.token}`
                    // }
                }, callback)
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
    }

    .wrapper-webview {
        height: auto;
    }

    .banner {
        /*height: 350px;*/
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        margin-bottom: 10px;
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

</style>