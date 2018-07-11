<template>
    <div class="wrapper">
        <!--<header>-->
            <!--<layout></layout>-->
        <!--</header>-->
        <router-view/>
    </div>
</template>

<script>
    //    import Nav from './components/UIComponent/Nav.vue'
    import Layout from "@/components/app/Layout.vue";
    import axios from "axios";
    //    import config from "../configs/config";
    import Vue from "vue";
    //import Helper from "./mixins/Helper";
    //import { mapState, mapGetters } from "vuex";
    export default {
        name: 'App',
        data() {
            return {
                view: "",
//                logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
            }
        },
        components: {
            // 'nav': Nav,
            Layout
        },
        created() {
            axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
            axios.defaults.xsrfCookieName = "csrftoken";
            axios.defaults.baseURL = 'http://52.202.70.246/v1/'
            global.axios = axios;
            global.Vue = Vue;
        },
    }
</script>

<style scoped>
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
        color: #41B883;
    }

    .message {
        margin: 30px;
        font-size: 32px;
        color: #727272;
    }
</style>
