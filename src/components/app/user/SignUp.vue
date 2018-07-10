<template>
  <div class="signup">
    <vue-form :fields="fields" :action="endpoint()" @success="successCallback">
      <template slot="form-fields" slot-scope="form">
            <!-- <text :type="form.errors.get('full_name') ? 'is-danger': null"
            :message="form.errors.get('full_name')"></text> -->
          <input type="text" placeholder="Full Name" :autofocus=true v-model="fields.full_name" ref="kl" class="input"/>
           <!-- <text :type="form.errors.get('email') ? 'is-danger': null"
        :message="form.errors.get('email')"></text> -->
          <input type="email" placeholder="Email" v-model="fields.email" class="input"/>
        <!-- <text :type="form.errors.get('password') ? 'is-danger': null"
        :message="form.errors.get('password')"></text> -->
          <input type="password" placeholder="Password" class="input" v-model="fields.password"/>
        <div class="form-button has-text-centered" slot="submit control">
          <button >Sign Up</button>
          <!-- <wxc-button text="Sign Up"
              @wxcButtonClicked="wxcButtonClicked" style="text-align:center;margin: 0.25rem;">
              </wxc-button> -->
        </div>
           <!-- <div class="" slot="submit control">
          <wxc-button text="Sign Up"
              @wxcButtonClicked="wxcButtonClicked" style="text-align:center;margin: 0.25rem;">
              </wxc-button>
              </div>
          <div class="login-message">
            <p style="text-align:center;">Already registered?Sign In.</p>
          </div> -->
      </template>
    </vue-form>
  </div>
</template>

<script>
import Form from "../../../mixins/Form.js";
import Helper from "../../../mixins/Helper.js";
import { WxcButton } from "weex-ui";

export default {
  name: "Signup",
  data() {
    return {
      currentActiveTab: 1
    };
  },
  components: { WxcButton },
  mixins: [Form, Helper],
  endpoint: "users/create/",
  methods: {
    successCallback (data) {
      // this.$emit('notify', 'Signed up successfully. Please sign in with  your credentials.')
      this.$router.push({name: 'Home'})
    },
    wxcButtonClicked(e) {
      console.log(e);
    }
  },
  mounted() {
    // console.log(this.$refs.kl)
    if (this.$store.state.user) {
      this.$router.push({ path: "/" });
    }
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