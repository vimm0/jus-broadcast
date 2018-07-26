<template>
    <div class="signin">
        <scroller>
            <wxc-button :text="signup"
                        :textStyle="textStyle"
                        type="white"
                        @wxcButtonClicked="signUpButtonClicked"
                        style="margin-top:10px;margin-left: 25px;"></wxc-button>
            <text style="text-align:center;color:#a2a1a1;">OR</text>
            <br/>
            <vue-form :fields="fields" :action="endpoint()" ref="form" @success="successCallback">
                <template slot="form-fields" slot-scope="form">
                     <text :type="form.errors.get('email') ? 'is-danger': null"
                    :message="form.errors.get('email')"></text>
                    <input type="email" placeholder="Email" ref='email' slot="fields" v-model="fields.email"
                           class="input"/>
                    <text :type="form.errors.get('password') ? 'is-danger': null"
                    :message="form.errors.get('password')"></text>
                    <input type="password" placeholder="Password" class="input" v-model="fields.password"
                           return-key-type="done" @return="onreturn"/>

                    <!--<text class="button" @click="signInClicked"-->
                          <!--style="margin-top:20px;margin-left: 25px;signUpClickedfont-weight:600;">sign in-->
                    <!--</text>-->
                    <wxc-button :text="signin"
                            :textStyle="textStyle"
                            type="white"
                            @wxcButtonClicked="signInClicked"
                            style="margin-top:10px;margin-left: 25px;"></wxc-button>
                </template>
            </vue-form>
        </scroller>
    </div>
</template>

<script>
    import Vue from 'vue'

    import Form from "../../../mixins/Form.js";
    import Helper from "../../../mixins/Helper.js";
    import {WxcButton} from "weex-ui";

    const modal = weex.requireModule("modal");
    const storage = weex.requireModule("storage");
    const stream = weex.requireModule("stream");

    export default {
        name: "Signin",
        data() {
            return {
                username: "", results: "", signup: 'SIGN UP', signin: 'SIGN IN', textStyle: '',
            };
        },
        components: {WxcButton},
        computed: {
            state() {
                return this.$store.state
            }
        },
        mixins: [Form, Helper],
        methods: {
            signInClicked() {
                const $form = this.$refs.form
                if ($form) {
                    $form.save("http://52.202.70.246/v1/jwt/create/")
                }
            },
            signIn(e) {
                console.log(e);
                console.log(this)
                modal.toast({
                    message: e
                });
            },
            getAll() {
                storage.getItem('user', event => {
                    modal.toast({
                        message: event.data
                    })
                })
            },
            signUpButtonClicked() {
                this.$router.push({name: "Sign Up"});
            },
            successCallback(data) {
                this.$store.dispatch("login", {
                    userData: data
                });
            }
            //            onreturn() {
            //                console.log(this.$refs);
            //                const elem = this.$refs.signin
            //                elem.click()
            //                // TODO: Take to list page on return signin
            //                // console.log(elem.click)
            //                modal.toast({
            //                    message: 'sign in callback'
            //                })
            //
            //            },
            //            signIn() {
            //                console.log('signed in')
            //            },
        },
        endpoint: "http://52.202.70.246/v1/jwt/create/",
        created() {
            this.textStyle = {
                fontWeight: 800
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

    /*.btn-text {*/
    /*font-weight: 800;*/
    /*}*/
</style>
