<template>
    <div class="home">
        <!--<template v-if="checkUserLogin()">-->
        <!--<header>-->
        <!--<layout></layout>-->
        <!--</header>-->
        <!--<text class="text">{{ $store.state.user }}</text>-->
        <!--<text class="text" @click="$store.dispatch('getAll')">Get All</text>-->
        <!--<text class="text" @click="$store.getters.token">log token</text>-->
        <scroller>
            <!--<video class="video" -->
            <!--src="http://g.tbcdn.cn/ali-wireless-h5/res/0.0.6/toy.mp4"-->
            <!--auto-play="true"></video>-->
            <!--<iframe src="//www.youtube.com/embed/YqeW9_5kURI" frameborder="0" allowfullscreen></iframe>-->
            <!--<iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">-->
            <!--</iframe>-->
            <video-list></video-list>
            <!--<iframe class="video_iframe" data-vidtype="2" style=" z-index:1; " height="375" width="500" frameborder="0" src="https://v.qq.com/iframe/preview.html?vid=i1311rc2w48&width=500&height=375&auto=0" allowfullscreen=""></iframe>-->
            <!--<web src="http://www.youtube.com/embed/YqeW9_5kURI" frameborder="0" allowfullscreen width="100%"-->
            <!--height="400px"></web>-->

            <!--<iframe class="video_iframe" data-vidtype="2" style=" z-index:1; " height="375" width="500" frameborder="0" src="https://v.qq. Com/iframe/preview.html?vid=l1311xh9q2w&width=500&height=375&auto=0" allowfullscreen=""></iframe>-->
        </scroller>
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