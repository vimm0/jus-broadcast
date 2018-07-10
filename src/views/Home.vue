<template>
    <div class="home">
        <template v-if="checkUserLogin()">
            <router-view></router-view>
        </template>
        <template v-else>
            <sign-in></sign-in>
        </template>
    </div>
</template>

<script>
//    import Layout from "../components/app/Layout.vue";
//    import List from '../components/app/video/VideoList'
//    import SignUp from '../components/app/user/SignUp'
//    import SignIn from '../components/app/user/SignIn'
//    import Slider from '../components/UIComponent/Slider'
//    import Helper from '../mixins/Helper'
//    import WatchList from '@/components/app/video/feature/WatchList'

    export default {
        name: 'home',
        components: {
//            'layout': Layout,
//            'list': List,
//            'sign-up': SignUp,
//            'slider': Slider,
//            'sign-in': SignIn,
//            WatchList
        },
//        mixins: [Helper],
        mounted() {
            console.log(this.$route.name)
        }
    }
</script>
<style>

</style>