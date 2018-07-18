<template>
    <div class="home">
        <template v-if="checkUserLogin()">
            <header>
                <layout></layout>
            </header>
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

    export default {
        name: "home",
        data() {
            return {
                refreshing: false,
            };
        },
        components: {
            layout: Layout,
            "video-list": List,
            "sign-in": SignIn
        },
        methods: {

        },
        mixins: [Helper],
        mounted() {
            console.log(this.$route.name);
        }
    };
</script>
<style>
</style>