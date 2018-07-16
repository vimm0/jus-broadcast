<template>
    <div class="landing">
        <template v-if="checkUserLogin()">
            <header>
                <layout></layout>
            </header>
            <div @androidback="back">
                <!--<text>{{ Item }}</text>-->
                <!--<text @click="getItem">Get</text>-->
                <!--<text class="button" @click="getRoute">Tap me</text>-->
                <router-view style="flex:1"></router-view>
            </div>
        </template>
        <template v-else>
            <p>UnAuthenticated</p>
            <sign-in></sign-in>
        </template>
    </div>
</template>

<script>
    //    import Nav from './components/UIComponent/Nav.vue'
    import Layout from "@/components/app/Layout.vue";
    import axios from "axios";
    import Helper from "@/mixins/Helper";
    import SignIn from "@/components/app/user/SignIn";

    const storage = weex.requireModule('storage')

    var globalEvent = weex.requireModule('globalEvent');
    globalEvent.addEventListener('androidback', function (e) {
        // that.$router.go(-1)
        // weex.requireModule('close').closeApp()
    })

    //    import config from "../configs/config";
    // import { mapState, mapGetters } from "vuex";
    var navigator = weex.requireModule('navigator')
    var modal = weex.requireModule('modal')
    import Vue from "vue";
    //import Helper from "./mixins/Helper";
    //import { mapState, mapGetters } from "vuex";
    export default {
        name: "App",
        data() {
            return {
                view: "",
                Item: ""
            };
        },
        components: {
            // 'nav': Nav,
            Layout,
            SignIn
        },
        computed: {
            // ...mapGetters(["token"])
        },
        created() {
            // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
            // axios.defaults.xsrfCookieName = "csrftoken";
            // axios.defaults.baseURL = "http://localhost:8000/v1/";
            // console.log(this)
             if (this.$store.state.user) {
//                 headers
            // //   console.log(this.$store.getters.token);
            // //    global.axios.post'jwt/refresh/', {'token': this.$store.getters.token}).then(
            // //         ({data}) => {
            // //           console.log(data)
            // //           this.$store.dispatch('login', {
            // //             userData: data
            // //           })
            // //         }
            // //       )
             }
            console.log('app created hook')
            global.axios = axios;
            global.Vue = Vue;
        },
        mixins: [Helper],
        methods: {
            back() {
                this.$router.back()
            },
            getItem() {
                console.log(this.$store.state.user)
                storage.getItem('user', event => {
                    this.Item =  event.data
                })
//                this.Item = this.$store.state.user
            },
            getRoute(event) {
                console.log('will jump')
                navigator.push({
                    url: 'https://vuejs-tips.github.io/cheatsheet/',
                    animated: "true"
                }, event => {
                    modal.toast({message: 'callback: ' + event})
                })
            }
//                console.log(this.$store.state.route)
//                console.log(this.$route)
        }
    }
</script>


<style scoped>
    .wrapper {
        flex-direction: column;
        justify-content: center;
    }

    .button {
        font-size: 60px;
        width: 450px;
        text-align: center;
        margin-top: 30px;
        margin-left: 150px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-width: 2px;
        border-style: solid;
        color: #666666;
        border-color: #DDDDDD;
        background-color: #F5F5F5
    }

    .wrapper {
        justify-content: center;
        align-items: center;
    }

    .logo {
        width: 424px;
        height: 200px;
    }

    .greeting {
        text-align: center;
        margin-top: 70px;
        font-size: 50px;
        color: #41b883;
    }

    .message {
        margin: 30px;
        font-size: 32px;
        color: #727272;
    }
</style>
