<template>
    <div class="home">
        <!--<template v-if="checkUserLogin()">-->
        <!--<header>-->
        <!--<layout></layout>-->
        <!--</header>-->
        <!--<text class="text">{{ $store.state.user }}</text>-->
        <!--<text class="text" @click="$store.dispatch('getAll')">Get All</text>-->
        <!--<text class="text" @click="$store.getters.token">log token</text>-->
        <!--<scroller>-->
            <video-list></video-list>

        <!--</scroller>-->
        <!--</template>-->
        <!--<template v-else>-->
        <!--<p>UnAuthenticated</p>-->
        <!--<sign-in></sign-in>-->
        <!--</template>-->
    </div>
</template>

<script>
    import Layout from "../components/app/Layout.vue";
    import List from "../components/app/video/VideoList.vue";
    //    import SignUp from '../components/app/user/SignUp'
    import SignIn from "../components/app/user/SignIn";
    //    import Slider from '../components/UIComponent/Slider'
    import Helper from "../mixins/Helper";
    //    import WatchList from '@/components/app/video/feature/WatchList'

    export default {
        name: "home",
        data() {
            return {
                refreshing: false
            };
        },
        computed: {
            token() {
                return this.$store.getters.token;
            }
        },
        components: {
            layout: Layout,
            "video-list": List,
            //            'sign-up': SignUp,
            //            'slider': Slider,
            "sign-in": SignIn
            //            WatchList
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