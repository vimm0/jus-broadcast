<template>
    <!--<div class="landing">-->
    <div @androidback="back">
        <text @click="back">Hello</text>
        <router-view></router-view>
    </div>
    <!--</div>-->
</template>

<script>
    import Vue from "vue";
    import Layout from "@/components/app/Layout.vue";
    import Helper from "@/mixins/Helper";
    import SignIn from "@/components/app/user/SignIn";

    const native = weex.requireModule('event');

    const storage = weex.requireModule("storage");
    const modal = weex.requireModule("modal");
    const dom = weex.requireModule("dom");
    const globalEvent = weex.requireModule("globalEvent");
    // console.log(globalEvent.addEventListener("androidback"))


    export default {
        name: "App",
        data() {
            return {
                view: "",
            };
        },
        components: {
            Layout,
            SignIn
        },
        created() {
            if (this.$store.state.user) {
            }
            //            global.axios = axios;
            global.Vue = Vue;
            globalEvent.addEventListener('androidback', function (e) {
//                modal.toast({
//                    message: "Android back button"
//                })
                // 这里就可以做返回事件操作了，如返回上一页或退出应用
                this.$router.go(-1)
                // weex.requireModule('close').closeApp()
            })

        },
        mixins: [Helper],
        methods: {
            back() {
                 this.$router.go(-1);
//                console.log('Android button pressed successful')
                // modal.toast({
                //     message: "Android back button"
                // })
            },
            goBack() {
                native.backToMain()
            }
        }
    };
</script>