<template>
    <div @androidback="$router.push({name:'Home'})">
        <!--<text @click="back">back</text>-->
        <!--<template v-if="checkUserLogin()">-->
        <layout></layout>
        <!--</template>-->
        <router-view ref="router"></router-view>
    </div>
</template>

<script>
    import Vue from "vue";
    import Layout from "@/components/app/Layout.vue";
    import Helper from "@/mixins/Helper";
    import SignIn from "@/components/app/user/SignIn";

    const modal = weex.requireModule("modal");
    const globalEvent = weex.requireModule("globalEvent");
    const animation = weex.requireModule("animation");
    console.log(weex.config.bundleUrl)
    console.log(weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/' + 'path' + '.js')
    export default {
        name: "App",
        data() {
            return {
                view: "",
                isActive: false,
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
        },
        updated() {
            var self = this
            var containerEl = this.$refs.router

            animation.transition(containerEl, {
                    styles: {
                        opacity: 1,
                        // transformOrigin: 'right',
                        // backgroundColor: '#FF0000',
                        transform: 'translateX(-100%);',
                    },
                    duration: 0, //ms
                    timingFunction: 'ease',
                    needLayout: false,
                    delay: 0 //ms
                }, function () {
                    modal.toast({message: 'animation finished.'})
                }
            )
            animation.transition(containerEl, {
                    styles: {
                        opacity: 1,
                        // transformOrigin: 'right',
                        // backgroundColor: '#FF0000',
                        transform: 'translateX(0%);',
                    },
                    duration: 300, //ms
                    timingFunction: 'ease-in-out',
                    needLayout: false,
                    delay: 0 //ms
                }, function () {
                    modal.toast({message: 'last animation finished.'})
                }
            )
        }
    };
</script>
<style>

</style>