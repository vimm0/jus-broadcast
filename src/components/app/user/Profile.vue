<template>
    <div class="user-profile">
        <!--em not supported use pixel instead-->
        <div style="flex-direction:row;justify-content: center;">
            <image class="profile-image" src="https://avatars3.githubusercontent.com/u/17888497?s=460&v=4"
                   style="height:400px;width:400px;border-radius:400;margin:200px;"></image>
        </div>
        <wxc-cell label="Full Name" :title=user.full_name :has-top-border="false"></wxc-cell>
        <wxc-cell label="Name" title="Sandesh Rana" :has-top-border="false"></wxc-cell>
        <wxc-cell label="Email" :title=user.email :has-top-border="false"></wxc-cell>
        <!--<wxc-cell label="Mobile"-->
        <!--title="**********"-->
        <!--:has-top-border="false-->
        <!--</wxc-cell>-->
    </div>
</template>
<script>
    import {WxcCell} from "weex-ui";

    export default {
        name: "Profile",
        components: {
            WxcCell
        },
        computed: {
            user() {
                return this.$store.state.userInfo
            }
        }
    };
</script>
<style>

    .weex-root figure {
        width: 500px;
        height: 500px;
        margin: 0 130px;
    }
</style>