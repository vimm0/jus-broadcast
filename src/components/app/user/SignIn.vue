<template>
  <div class="signin">
      <vue-form :fields="fields" :action="endpoint()" @success="successCallback">
      <template slot="form-fields" slot-scope="form">
        <!-- <text :type="form.errors.get('email') ? 'is-danger': null"
        :message="form.errors.get('email')"></text> -->
          <input type="email" placeholder="Email" ref='email' v-model="fields.email" class="input"/>
        <!-- <text :type="form.errors.get('password') ? 'is-danger': null"
        :message="form.errors.get('password')"></text> -->
          <input type="password" placeholder="Password" class="input" v-model="fields.password" return-key-type="done" @return = "onreturn" />
        <div class="form-button has-text-centered" slot="submit control">
          <button ref='signin'>Sign In</button>
        </div>
        <text @click="signUpFirst">Sign Up first</text>
        <router-link to="/signup"><text>Sign Up first</text></router-link>
         
      </template>
      </vue-form>
  </div>
</template>

<script>
import Form from "../../../mixins/Form.js";
import { WxcButton } from "weex-ui";

export default {
  name: "Signin",
  data() {
    return { username: "" };
  },
  components: { WxcButton },

  mixins: [Form],
  endpoint: "jwt/create/",
  methods: {
    wxcButtonClicked(e) {
      console.log(e);
    },
    signUpFirst(e) {
      this.$router.push({ name: "Sign Up" });
    },
    onreturn() {
      console.log(this.$refs);
      const elem = this.$refs.signin
      elem.click()
      // TODO: Take to list page on return signin
      // console.log(elem.click)

    },
    signIn () {console.log('signed in')},
    successCallback(data) {
      console.log("sign in callback");
      console.log(data);
      this.$store.dispatch("login", {
        userData: data
      });
      this.$router.push({ name: "Home" });
    }
  },
  mounted() {
    this.$refs.email.focus();
  }
};
</script>
<style>
.weex-input {
  border: solid 1px black;
  margin: 0.61rem;
  height: 1rem;
}
input::placeholder {
  padding-left: 0.5rem;
}
p.button {
  /* text-align:center; */
  background-color: dimgrey;
  margin: 0.61rem;
  text-align: center;
}
.login-message {
  text-align: center;
}
</style>
