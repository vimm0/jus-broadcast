<template>
    <div class="wrapper">
        <scroller>
            <list>
                <refresh class="refresh-view" :display="refresh_display" @refresh="onrefresh"
                         @pullingdown="pullingdown">
                    <wxc-loading :show="isShow" type="trip"></wxc-loading>
                </refresh>
                <cell class="video-cell" v-for="obj in videoObjects" :key="obj.slug" v-if="obj.is_completed">
                    <div class="text-cell" @click="routeTo(obj)">
                        <image :src="obj.pic" class="video-image"/>
                        <div class="meta">
                            <text class="text-title">{{obj.name}}</text>
                            <text class="text-created">{{obj.created}}</text>
                        </div>
                    </div>
                </cell>
            </list>
        </scroller>
    </div>
</template>

<script>
    import Helper from "../../../mixins/Helper";
    import {WxcLoading, WxcPartLoading} from "weex-ui";

    const dom = weex.requireModule("dom");
    const modal = weex.requireModule("modal");
    const stream = weex.requireModule("stream");
    export default {
        data() {
            return {
                videoObjects: "",
                refreshing: false,
                showLoading: "hide",
                loadinging: false,
                refresh_display: "hide",
                loading_display: "hide",
                isShow: false
            };
        },
        components: {
            WxcLoading,
            WxcPartLoading
        },
        methods: {
            getVideos(url, callback) {
                var self = this;
                return stream.fetch(
                    {
                        method: "GET",
                        type: "json",
                        url: "http://52.202.70.246/v1/" + url
//          headers: {
//            Authorization: `JWT ${self.$store.getters.token}`
//          }
                    },
                    callback
                );
            },
            onrefresh(event) {
                console.log("videolist refresh");
                this.loadinging = true;

                this.showLoading = "show";
                this.refresh_display = "show";
                this.isShow = true;

                console.log(this.showLoading);
                if (this.isShow === true) {
                    this.getVideos("video/?page_size=0", res => {
                        this.videoObjects = res.ok ? res.data : this.$router.push("/error");
                        this.isShow = false;
                        this.refresh_display = "hide";
                    });
                }
                this.refreshing = false;
                this.showLoading = "hide";
            },
            // onloading: function(e) {
            //   var self = this;
            //   self.loading_display = "show";
            //   setTimeout(function() {
            //     self.loading_display = "hide";
            //   }, 3000);
            // },
            pullingdown: function (e) {
                var dy = e.dy;
                var pullingDistance = e.pullingDistance;
                var viewHeight = e.viewHeight;
            },
            routeTo(obj) {
                console.log(obj);
                if (obj.is_local) {
                    this.$router.push({
                        name: "Local Video Detail",
                        params: {slugId: obj.slug}
                    });
                } else {
                    console.log("clicked me");
                    this.$router.push({
                        name: "External Video Detail",
                        params: {slugId: obj.slug}
                    });
                }
            }
        },
        mixins: [Helper],
        created() {
            if (this.refreshing === true) {
                this.refreshing = false;
            }
            this.getVideos("video/?page_size=0", res => {
                this.videoObjects = res.ok ? res.data : this.$router.push("/error");
            });
        },
        mounted() {
            const result = dom.getComponentRect(this.$refs.scroller, option => {
                console.log("getComponentRect:", option);
            });
        }
    };
</script>


<style scoped>
    .video-image {
        width: auto;
        height: 450px;
        margin-top: 5px;
        margin-bottom: 35px;
        flex-direction: column;
        justify-content: center;
    }

    .meta {
        margin-bottom: 15px;
        margin-left: 10px;
    }

    .text-title {
        font-size: 25px;
        padding: 0;
    }

    .text-created {
        font-size: 20px;
        color: #848484;
        padding-top: 0;
    }

    /*!*REFRESH*!*/
    /*.indicator {*/
    /*color: #888888;*/
    /*font-size: 42px;*/
    /*text-align: center;*/
    /*}*/

    /*.panel {*/
    /*width: 600px;*/
    /*height: 250px;*/
    /*margin-left: 75px;*/
    /*margin-top: 35px;*/
    /*margin-bottom: 35px;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    /*border-width: 2px;*/
    /*border-style: solid;*/
    /*border-color: #DDDDDD;*/
    /*background-color: #F5F5F5;*/
    /*}*/
</style>