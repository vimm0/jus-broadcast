<template>
    <div>
        <div class="navigation">
            <mini-bar @rightButtonClicked="rightButtonClicked" :title="getRoute"></mini-bar>
        </div>
        <wxc-popup width="500"
                   pos="right"
                   :show="isShow"
                   @wxcPopupOverlayClicked="overlayClicked">
            <div class="container">
                <div class="demo">
                    <wxc-cell title="PROFILE"
                              @wxcCellClicked="profileCellClicked"
                              :has-top-border="false">
                    </wxc-cell>
                    <wxc-cell title="WATCHLIST"
                              @wxcCellClicked="watchListCellClicked"
                              :has-top-border="false">
                    </wxc-cell>
                    <!--<wxc-cell title="CARD"-->
                    <!--:has-arrow="true"-->
                    <!--@wxcCellClicked="cardCellClicked"-->
                    <!--:has-top-border="true">-->
                    <!--</wxc-cell>-->
                    <!--<wxc-cell title="SUBSCRIPITION"-->
                    <!--:has-arrow="true"-->
                    <!--@wxcCellClicked="subscriptionCellClicked"-->
                    <!--:has-top-border="true">-->
                    <!--</wxc-cell>-->
                    <!--<wxc-cell title="INVOICE"-->
                    <!--:has-arrow="true"-->
                    <!--@wxcCellClicked="invoiceCellClicked"-->
                    <!--:has-top-border="true">-->
                    <!--</wxc-cell>-->
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
    import {WxcButton, WxcPopup, WxcIcon, WxcCell} from "weex-ui";
    import MiniBar from '@/components/UIComponent/MiniBar.vue'

    module.exports = {
        components: {WxcButton, WxcPopup, WxcIcon, WxcCell, MiniBar},
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
            },
            rightButtonClicked() {
                this.isShow = true;
            },
            overlayClicked() {
                this.isShow = false;
            },
            profileCellClicked(e) {
                this.$router.push({name: "Profile"});
                this.isShow = false;
            },
            watchListCellClicked() {
                this.$router.push({name: "WatchList"});
                this.isShow = false;
            },
            cardCellClicked() {
                this.$router.push({name: "Card"});
                this.isShow = false;
            },
            subscriptionCellClicked() {
                this.$router.push({name: "Subscription"});
                this.isShow = false;
            },
            invoiceCellClicked() {
                this.$router.push({name: "Invoice"});
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
        /*padding-top: 0.3rem;*/
        /*padding-bottom: 0.3rem;*/
    }

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