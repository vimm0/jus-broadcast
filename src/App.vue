<template>
    <div @androidback="$router.push({name:'Home'})" bubble="true">
        <template v-if="checkUserLogin()">
            <layout></layout>
        </template>
        <transition enter-class="slide-fade-enter" mode="out-in" @enter="enter" @leave="leave">
            <router-view ref="router"></router-view>
        </transition>
    </div>
</template>

<script>
    import Vue from "vue";
    import Layout from "@/components/app/Layout.vue";
    import Helper from "@/mixins/Helper";
    import SignIn from "@/components/app/user/SignIn";

    const modal = weex.requireModule("modal");
    const animation = weex.requireModule("animation");
    const globalEvent = weex.requireModule("globalEvent");
    console.log(weex.config.bundleUrl)
    console.log(weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/' + 'path' + '.js')

    function slider(action, el, callback = () => {
    }) {
        const x = action === 'out' ? '40px' : '0'
        animation.transition(el, {
            styles: {
                transform: 'translateX(' + x + ')',
                opacity: action === 'out' ? 0 : 1
            },
            duration: 400,
            timingFunction: 'ease-' + action,
            delay: -100
        }, callback)
    }

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
            enter() {
                slider('in', this.$refs.router, () => console.log("done"))
            },
            leave() {
                slider('out', this.$refs.router, () => console.log("done"))
            }
        }
    };
</script>
<style>
    .slide-fade-enter {
        transform: translateX(40px);
        opacity: 0;
    }
</style>