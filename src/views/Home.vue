<template>
    <div class="home">
        <template v-if="checkUserLogin()">
            <!-- <header>
                <layout></layout>
            </header> -->
            <scroller>
                  <!-- <refresh class="refresh-view" :display="refresh_display" @refresh="onrefresh" @pullingdown="pullingdown"> -->
                            <!-- <wxc-loading :show="isShow" type="trip"></wxc-loading> -->
            <!-- </refresh> -->
            <video-list></video-list>
            </scroller>
        </template>
        <template v-else>
            <text>UnAuthenticated</text>
            <sign-in></sign-in>
        </template>
    </div>
</template>

<script>
import Layout from "../components/app/Layout.vue";
import List from "../components/app/video/VideoList.vue";
import SignIn from "../components/app/user/SignIn";
import Helper from "../mixins/Helper";
// import WxcLoading from "weex-ui";
// import { WxcLoading, WxcPartLoading } from "weex-ui";

export default {
  name: "home",
  data() {
    return {
      refreshing: false,
    //   isShow: false,
    //   refresh_display: "hide",
    //   loading_display: "hide"
    };
  },
  components: {
    layout: Layout,
    "video-list": List,
    "sign-in": SignIn
    // WxcLoading,
    // WxcPartLoading
    // WatchList
  },
  methods: {
    // onrefresh: function(e) {
    //   var self = this;
    //   self.refresh_display = "show";
    //   self.isShow = true;
    //   setTimeout(function() {
    //     self.isShow = false;
    //     self.refresh_display = "hide";
    //   }, 3000);
    // },
    // onloading: function(e) {
    //   var self = this;
    //   self.loading_display = "show";
    //   setTimeout(function() {
    //     self.loading_display = "hide";
    //   }, 3000);
    // },
    // pullingdown: function(e) {
    //   var dy = e.dy;
    //   var pullingDistance = e.pullingDistance;
    //   var viewHeight = e.viewHeight;
    // }
  },
//   mounted() {
//     const result = dom.getComponentRect(this.$refs.scroller, option => {
//       console.log("getComponentRect:", option);
//     });
//   },
  mixins: [Helper],
  mounted() {
    console.log(this.$route.name);
  }
};
</script>
<style>
</style>