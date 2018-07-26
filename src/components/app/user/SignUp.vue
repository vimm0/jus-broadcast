<template>
    <div class="signup">
        <wxc-button :text="signin"
                    :textStyle="textStyle"
                    type="white"
                    @wxcButtonClicked="signInButtonClicked"
                    style="margin-top:10px;margin-left: 25px;"></wxc-button>
        <text style="text-align:center;color:#a2a1a1;">OR</text>
        <br/>
        <!--<text style="color:rgb(61, 61, 61);font-weight:800;">sign up</text>-->

        <vue-form :fields="fields" ref="form" :action="endpoint()" @success="successCallback">
            <template slot="form-fields" slot-scope="form">
                <text type="is-danger" :value="form.errors.get('non_field_errors')"
                      :class="form.errors.get('non_field_errors') ? 'is-danger': null"
                      v-if="form.errors.get('non_field_errors')"></text>
                <text :type="form.errors.get('full_name') ? 'is-danger': null"
                      :message="form.errors.get('full_name')"></text>
                <input ref='full_name' type="text" placeholder="Full Name" :autofocus=true v-model="fields.full_name"
                       class="input"/>
                <text :type="form.errors.get('email') ? 'is-danger': null"
                      :message="form.errors.get('email')"></text>
                <input type="email" placeholder="Email" v-model="fields.email" class="input"/>
                <text :type="form.errors.get('password') ? 'is-danger': null"
                      :message="form.errors.get('password')"></text>
                <input type="password" placeholder="Password" class="input" v-model="fields.password"/>
                <wxc-button :text="signup"
                            :textStyle="textStyle"
                            type="white"
                            @wxcButtonClicked="signUpClicked"
                            style="margin-top:10px;margin-left: 25px;"></wxc-button>
            </template>
        </vue-form>
    </div>
</template>

<script>
    import Form from "../../../mixins/Form.js";
    import Helper from "../../../mixins/Helper.js";
    import {WxcButton} from "weex-ui";

    const modal = weex.requireModule("modal");

    export default {
        name: "Signup",
        data() {
            return {
                currentActiveTab: 1,
                signup: 'SIGN UP',
                signin: 'SIGN IN',
            };
        },
        components: {WxcButton},
        mixins: [Form, Helper],
        endpoint: "http://52.202.70.246/v1/users/create/",
        methods: {
            signUpClicked() {
                const $form = this.$refs.form
                if ($form) {
                    $form.save("http://52.202.70.246/v1/users/create/")
                }
            },
            successCallback(data) {
                console.log(data)
                // this.$emit('notify', 'Signed up successfully. Please sign in with  your credentials.')
                modal.toast({
                    message: 'Signed up successfully. Please sign in with  your credentials.'
                })
                this.$router.push({name: 'Sign In'})
            },
            signInButtonClicked(e) {
                this.$router.push({name: "Sign In"});
            }
        },
        created() {
            this.textStyle = {
                fontWeight: 800
            }
        },
        mounted() {
            this.$refs.full_name.focus();
            if (this.$store.state.user) {
                this.$router.push({path: "/"});
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

    .input {
        width: 650px;
        margin-top: 20px;
        margin-left: 50px;
        font-size: 50px;
        padding: 20px;
        color: #414a4c;
        border-width: 1px;
        border-style: solid;
        border-color: #4f5758db;
        border-radius: 10px;
    }
</style>