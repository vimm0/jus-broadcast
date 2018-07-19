<template>
    <div @androidback="$router.push({name:'Home'})">
        <!--<text @click="back">back</text>-->
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from "vue";
    import Layout from "@/components/app/Layout.vue";
    import Helper from "@/mixins/Helper";
    import SignIn from "@/components/app/user/SignIn";

    const modal = weex.requireModule("modal");
    const globalEvent = weex.requireModule("globalEvent");


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
        mounted() {
            if (this.$store.state.user) {
            }
            global.Vue = Vue;
            globalEvent.addEventListener('androidback', function (e) {
                modal.toast({
                    message: "Android back button"
                })
            })

        },
        mixins: [Helper],
        methods: {
            back() {
                modal.toast({
                    message: "okay lets do this"
                })
                // exit from app on double back press
            }
        }
    };
</script>