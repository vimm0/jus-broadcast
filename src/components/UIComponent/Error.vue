<template>
    <div class="error">
        <!-- <wxc-result type="errorPage"
              :show="show"
              padding-top="232"
              @wxcResultButtonClicked="wxcResultButtonClicked"></wxc-result> -->
        <text>Error in page render</text>
        <text @click="reloadPage">Button for go</text>
        <!-- <text>{{ errorResponse }}</text> -->
    </div>
</template>
<script>
import { WxcResult } from "weex-ui";
const modal = weex.requireModule("modal");
export default {
  components: { WxcResult },
  data: () => ({
    show: true,
    errorResponse: ""
  }),
  created() {
    this.errorResponse = this.$route.params.res;
  },
  methods: {
    wxcResultButtonClicked(e) {
      //   modal.toast({
      // message: e.type,
      // duration: 1
      //   });
    },
    reloadPage() {
      this.$router.push({ name: "Home" });
    //   var navigator = weex.requireModule("navigator");
    //   var modal = weex.requireModule("modal");
    //   var bundleUrl = weex.config.bundleUrl;
    //   navigator.push(
    //     {
    //       url: bundleUrl,
    //       animated: "true"
    //     },
    //     event => {
    //       modal.toast({ message: "callback: " + event });
    //     }
    //   );
      modal.toast({
        message: "reloading page..."
        // duration: 1
      });
    }
  }
};
</script>