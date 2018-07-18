<template>
    <div @androidback="back">
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
        created() {
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
                this.$router.push('/');
                // exit from app
            }
        },
        mounted() {
            console.log(this.$router.history.stack)
        }
    }
    ;
</script>