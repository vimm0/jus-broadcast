<template>
    <div class="signin">
        <scroller>
            <wxc-button :text="signup"
                        :textStyle="textStyle"
                        type="white"
                        @wxcButtonClicked="wxcButtonClicked"
                        style="margin-top:10px;margin-left: 25px;"></wxc-button>
            <text style="text-align:center;color:#a2a1a1;">OR</text>
            <br/>
            <vue-form :fields="fields" :bus="bus" :action="endpoint()" ref="form" @success="successCallback">
                <template slot="form-fields" slot-scope="form">
                    <!--&lt;!&ndash; <text :type="form.errors.get('email') ? 'is-danger': null"-->
                    <!--:message="form.errors.get('email')"></text> &ndash;&gt;-->
                    <input type="email" placeholder="Email" ref='email' slot="fields" v-model="fields.email"
                           class="input"/>
                    <!--&lt;!&ndash; <text :type="form.errors.get('password') ? 'is-danger': null"-->
                    <!--:message="form.errors.get('password')"></text> &ndash;&gt;-->
                    <input type="password" placeholder="Password" class="input" v-model="fields.password"
                           return-key-type="done" @return="onreturn"/>
                    <!--<div class="form-button has-text-centered" slot="submit control">-->
                    <!--<button ref='signin' @click="wxcButtonClicked">Sign In</button>-->
                    <!--<wxc-button :text="text"-->
                    <!--:type="type"-->
                    <!--:disabled="disabled"-->
                    <!--:btn-style="btnStyle"-->
                    <!--:text-style="textStyle"-->
                    <!--@wxcButtonClicked="wxcButtonClicked"></wxc-button>-->
                    <!--</div>-->
                    <!--<text @click="axiosTest">axiosTest</text>-->
                    <!--<div class="panel">-->
                    <!--<text class="text" @click="setItem">set Item</text>-->
                    <!--<text class="text" @click="getAll">Get all</text>-->
                    <!--</div>-->

                    <!--<text>{{ results }}</text>-->
                    <!--<router-link to="/signup">-->
                    <!--<text>Sign Up first</text>-->

                    <!--</router-link>-->
                    <!--<div slot="submit control">-->
                    <text class="button" @click.prevent ="signInClicked"
                          style="margin-top:20px;margin-left: 25px;font-weight:600;">sign in
                    </text>
                    <!--<wxc-button :text="signin"-->
                    <!--:textStyle="textStyle"-->
                    <!--type="white"-->
                    <!--style="margin-top:20px;margin-left: 25px;font-weight:600;"></wxc-button>-->

                    <!--</div>-->


                </template>
            </vue-form>
            <!--<p>sign in form</p>-->
            <!--<text>state: {{ state }}</text>-->
            <!--<text>token: {{ token }}</text>-->
            <!--<text class="text">{{results}}</text>-->
            <!--<text class="text">state: {{state}}</text>-->
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
                username: "", results: "", signup: 'SIGN UP', signin: 'SIGN IN', textStyle: '', bus: new Vue(),
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
//                console.log('bus')
//                this.bus.$emit('clicked');
                console.log(this)
                this.$refs.form.submit()
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
            axiosTest() {
                let self = this;
                modal.toast({
                    message: "videos: comming"
                });
                stream.fetch(
                    {
                        method: "POST",
                        url: "http://52.202.70.246/v1/jwt/create/",
                        type: "json",
                        body: config.toParams({
                            email: "admin@admin.com",
                            password: "admin"
                        }),
                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                    },
                    function (ret) {
                        if (!ret.ok) {
                            console.log("request failed");
                            modal.toast({
                                message: ret
                            });
                        } else {
                            self.results = ret.data;
                            modal.toast({
                                message: "username: " + ret.data.user.full_name
                            });
                            self.$store.dispatch("login", {
                                userData: self.results
                            });
                        }
                    },
                    function (response) {
                        console.log("response", response);
                    }
                )
            },
            wxcButtonClicked() {
                this.$router.push({name: "Sign Up"});
            },
            successCallback(data) {
                console.log(data)
                console.log('success callback')
                modal.toast({
                    message: 'success callback'
                });
                this.$store.dispatch("login", {
                    userData: data.data
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
        endpoint: 'jwt/create/',
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
