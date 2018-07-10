<template>
    <div>
        <p class="bookmark" align="right">
            <i class="fas fa-bookmark"></i>
        </p>
        <p style="font-size: 0.71rem;
    text-align: center;">
            Nothing on your watchlist
        </p>
        <wxc-button class="start-browsing" text="Start Browsing" style="width:650px;background-color: #000;"></wxc-button>
    </div>
</template>
<script>
import { WxcButton, WxcPopup, WxcIcon, WxcCell } from "weex-ui";

export default {
  name: "WatchList",
  components: {
    WxcButton
  }
};
</script>
<style>
.svg-inline--fa.fa-w-12 {
  width: 1.25em;
  height: 1.2rem;
  font-size: 48px;
}

.bookmark {
  vertical-align: middle;
  text-align: center;
  left: 40%;
  position: relative; /*makes left effective*/
  display: table-cell;
  margin: auto;
  padding: auto;
  border-radius: 2rem;
  border: solid 1px;
  width: 2rem;
  height: 2rem;
}
.start-browsing {
  left: 7%;
}
</style>