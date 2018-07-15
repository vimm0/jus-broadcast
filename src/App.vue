<template>
    <!--<div class="wrapper">-->
    <!--<header>-->
    <!--<layout></layout>-->
    <!--</header>-->
    <!--<router-view/>-->
    <div @androidback="back">
        <router-view style="flex:1"></router-view>
    </div>
    <!--</div>-->
</template>

<script>
//    import Nav from './components/UIComponent/Nav.vue'
import Layout from "@/components/app/Layout.vue";
import axios from "axios";
//    import config from "../configs/config";
// import { mapState, mapGetters } from "vuex";

import Vue from "vue";
//import Helper from "./mixins/Helper";
//import { mapState, mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      view: ""
    };
  },
  components: {
    // 'nav': Nav,
    Layout
  },
  computed: {
    // ...mapGetters(["token"])
  },
  created() {
    // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    // axios.defaults.xsrfCookieName = "csrftoken";
    // axios.defaults.baseURL = "http://localhost:8000/v1/";
    // console.log(this)
    // if (this.$store.state.user) {
    // //   console.log(this.$store.getters.token);
    // //    global.axios.post('jwt/refresh/', {'token': this.$store.getters.token}).then(
    // //         ({data}) => {
    // //           console.log(data)
    // //           this.$store.dispatch('login', {
    // //             userData: data
    // //           })
    // //         }
    // //       )
    // }
    global.axios = axios;
    global.Vue = Vue;
  },
  methods: {
    back: function() {
      this.$router.back();
    }
  }
};
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
  color: #41b883;
}

.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
</style>
