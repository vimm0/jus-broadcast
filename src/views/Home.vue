<template>
    <div class="home">
        <template v-if="checkUserLogin()">
            <text>Namaste</text>
            <!--<scroller>-->
            <!--<video-list ref="router"></video-list>-->
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
        },
        updated() {
//            var self = this
//            var containerEl = this.$refs.router
//Animation . transition ( containerEl , {
//        Styles : {
//            Color :  ' #000 ' ,
//            Transform :  ' Translate (100px, 100px) sacle (1.3) ' ,
//            backgroundColor :  ' #CCC '
//        },
//            DURATION :  800 , // MS
//            timingFunction :  ' EASE ' ,
//            needLayout : false ,
//            Delay :  0  // ms
//        }, function () {
//             // animation finished.
//        })
//            animation.transition(containerEl, {
//                    styles: {
//                        opacity: 1,
//                        // transformOrigin: 'right',
//                        // backgroundColor: '#FF0000',
//                        transform: 'translateX(-100%);',
//                    },
//                    duration: 0, //ms
//                    timingFunction: 'ease',
//                    needLayout: false,
//                    delay: 0 //ms
//                }, function () {
//                    modal.toast({message: 'animation finished.'})
//                }
//            )
//            animation.transition(containerEl, {
//                    styles: {
//                        opacity: 1,
//                        // transformOrigin: 'right',
//                        // backgroundColor: '#FF0000',
//                        transform: 'translateX(0%);',
//                    },
//                    duration: 300, //ms
//                    timingFunction: 'ease-in-out',
//                    needLayout: false,
//                    delay: 0 //ms
//                }, function () {
//                    modal.toast({message: 'last animation finished.'})
//                }
//            )
        }
    };
</script>
<style>
</style>