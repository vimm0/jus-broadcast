<template>
  <div>
   <div class="navigation">
      <template v-if="getRoute !== 'Home'">
        <wxc-icon class="nav-weex-icon" name="back" @wxcIconClicked="backIconClicked" style={color:red,fontSize:60px}></wxc-icon>
      </template>
      <template v-if="getRoute">
        <p class=" nav-route-name">{{ getRoute }}</p>             
      </template>
      <p class="nav-home-icon" @click="userIconClicked"><i class="fas fa-user"></i></p>
   </div>
    <wxc-popup width="500"
               pos="left"
               :show="isShow"
               @wxcPopupOverlayClicked="overlayClicked">
                 <div class="container">
              <div class="demo">
                  <wxc-cell title="PROFILE"
                            :has-arrow="true"
                            @wxcCellClicked="profileCellClicked"
                            :has-top-border="false">
                  </wxc-cell>
                  <wxc-cell title="WATCHLIST"
                            :has-arrow="true"
                            @wxcCellClicked="watchListCellClicked"
                            :has-top-border="false">
                  </wxc-cell>               
                  <wxc-cell title="CARD"
                            :has-arrow="true"
                            @wxcCellClicked="cardCellClicked"
                            :has-top-border="true">
                  </wxc-cell>
                  <wxc-cell title="SUBSCRIPITION"
                            :has-arrow="true"
                            @wxcCellClicked="subscriptionCellClicked"
                            :has-top-border="true">
                  </wxc-cell>
                  <wxc-cell title="INVOICE"
                            :has-arrow="true"
                            @wxcCellClicked="invoiceCellClicked"
                            :has-top-border="true">
                  </wxc-cell>
                  <wxc-cell title="SIGN OUT"
                            @wxcCellClicked="signOutCellClicked"
                            :has-top-border="true">
                  </wxc-cell>
              </div>
  </div>
    </wxc-popup>
  </div>
</template>

<script>
import { WxcButton, WxcPopup, WxcIcon, WxcCell } from "weex-ui";

module.exports = {
  components: { WxcButton, WxcPopup, WxcIcon, WxcCell },
  data: () => ({
    isShow: false,
    view: ""
  }),
  computed: {
    getRoute() {
      return this.$route.name;
    }
  },
  methods: {
    backIconClicked() {
      this.$router.push({ path: "/" });
    },
    userIconClicked() {
      this.isShow = true;
    },
    overlayClicked() {
      this.isShow = false;
    },
    profileCellClicked(e) {
      this.$router.push({ name: "Profile" });
      this.isShow = false;
    },
    watchListCellClicked() {
      this.$router.push({ name: "WatchList" });
      this.isShow = false;
    },
    cardCellClicked() {
      this.$router.push({ name: "Card" });
      this.isShow = false;
    },
    subscriptionCellClicked() {
      this.$router.push({ name: "Subscription" });
      this.isShow = false;
    },
    invoiceCellClicked() {
      this.$router.push({ name: "Invoice" });
      this.isShow = false;
    },
    signOutCellClicked() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>
<style>
/*svg:not(:root).svg-inline--fa {*/
  /*color: rgb(102, 102, 102);*/
/*}*/
/*.svg-inline--fa.fa-w-14 {*/
  /*font-size: 0.6rem;*/
  /*color: rgb(102, 102, 102);*/
  /*font-family: weexUiIconFont;*/
  /*font-size: 48px;*/
  /*display: inline;*/
  /*margin-right: 4rem;*/
/*}*/
.navigation {
  display: inline;
}
p.nav-route-name {
  padding-left: 3.5rem;
  font-size: 0.7rem;
  width: 1rem;
}
.weex-root p {
  display: inline;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
/*.weex-root p.nav-home-icon {*/
  /*margin-right: -3.69rem;*/
/*}*/
.nav-weex-icon {
  font-size: 48px;
  margin-right: 4rem;
  float: left;
}
.nav-home-icon {
  float: right;
}
.fas {
  float: left;
}
</style>