<template>
    <div>
        <!--<text class="bookmark" align="right">-->
            <!--<i class="fas fa-bookmark"></i>-->
        <!--</text>-->
        <image src="http://www.endlessicons.com/wp-content/uploads/2014/03/bookmark-icon-3-614x460.png" style="height: 445px;"></image>
        <p style="font-size: 25px;text-align:center;align-items: center;justify-content: center;">
            Nothing on your watchlist
        </p>
        <wxc-button class="start-browsing" text="Start Browsing"
                    style="width:650px;background-color: #000;"></wxc-button>
    </div>
</template>
<script>
    import {WxcButton, WxcPopup, WxcIcon, WxcCell} from "weex-ui";

    export default {
        name: "WatchList",
        components: {
            WxcButton
        }
    };
</script>
<style>
    /*.svg-inline--fa.fa-w-12 {*/
        /*width: 50px;*/
        /*height: 140px;*/
        /*font-size: 48px;*/
    /*}*/

    /*.bookmark {*/
        /*vertical-align: middle;*/
        /*text-align: center;*/
        /*left: 289px;*/
        /*position: relative; !*makes left effective*!*/
        /*display: table-cell;*/
        /*margin: auto;*/
        /*padding: auto;*/
        /*border-radius: 75px;*/
        /*!*border-radius: 2rem;*!*/
        /*border: solid 1px;*/
        /*width: 155px;*/
        /*height: 155px;*/
    /*}*/

    .start-browsing {
        left: 50px;
    }
</style>