<template>
    <div class="landing">
        <div @androidback="back">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import Layout from "@/components/app/Layout.vue";
    import Helper from "@/mixins/Helper";
    import SignIn from "@/components/app/user/SignIn";

    const storage = weex.requireModule('storage')
    const modal = weex.requireModule('modal')
    const globalEvent = weex.requireModule('globalEvent');
    globalEvent.addEventListener('androidback', function (e) {
        this.$router.go(-1)
        // weex.requireModule('close').closeApp()
         console.log('android back button')
    })

    export default {
        name: "App",
        data() {
            return {
                view: ""
            };
        },
        components: {
            Layout,
            SignIn
        },
        computed: {},
        created() {
            if (this.$store.state.user) {
            }
//            global.axios = axios;
            global.Vue = Vue;
        },
        mixins: [Helper],
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>