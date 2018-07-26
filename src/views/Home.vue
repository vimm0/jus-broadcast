<template>
    <div class="home">
        <template v-if="checkUserLogin()">
            <!--<scroller>-->
            <video-list ref="router"></video-list>
            <!--</scroller>-->
        </template>
        <template v-else>
            <sign-in></sign-in>
        </template>
    </div>
</template>

<script>
    import Layout from "../components/app/Layout.vue";
    import List from "../components/app/video/VideoList.vue";
    import SignIn from "../components/app/user/SignIn";
    import Helper from "../mixins/Helper";

    const animation = weex.requireModule("animation");

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
        methods: {},
        mixins: [Helper],
        mounted() {
            console.log(this.$route.name);
        }
    };
</script>
<style>
</style>