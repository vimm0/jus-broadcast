<template>
    <div class="signin">
        <scroller>
            <vue-form :fields="fields" :action="endpoint()" @success="successCallback">
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
                    <!--&lt;!&ndash;<wxc-button :text="text"&ndash;&gt;-->
                    <!--&lt;!&ndash;:type="type"&ndash;&gt;-->
                    <!--&lt;!&ndash;:disabled="disabled"&ndash;&gt;-->
                    <!--&lt;!&ndash;:btn-style="btnStyle"&ndash;&gt;-->
                    <!--&lt;!&ndash;:text-style="textStyle"&ndash;&gt;-->
                    <!--&lt;!&ndash;@wxcButtonClicked="wxcButtonClicked"></wxc-button>&ndash;&gt;-->
                    <!--</div>-->
                    <text @click="axiosTest">axiosTest</text>
                    <!--<div class="panel">-->
                    <!--<text class="text" @click="setItem">set Item</text>-->
                    <!--<text class="text" @click="getAll">Get all</text>-->
                    <!--</div>-->

                    <!--<text>{{ results }}</text>-->
                    <!--&lt;!&ndash;<router-link to="/signup"><text>Sign Up first</text></router-link>&ndash;&gt;-->
                </template>
            </vue-form>
            <p>sign in form</p>
            <!--<text>state: {{ state }}</text>-->
            <!--<text>token: {{ token }}</text>-->
            <!--<text class="text">{{results}}</text>-->
            <!--<text class="text">state: {{state}}</text>-->
        </scroller>
    </div>
</template>

<script>
    var stream = weex.requireModule("stream");
    var config = require("./config.js");

    import Form from "../../../mixins/Form.js";
    import {WxcButton} from "weex-ui";

    const modal = weex.requireModule("modal");
    const storage = weex.requireModule("storage");

    export default {
        name: "Signin",
        data() {
            return {username: "", results: ""};
        },
        components: {WxcButton},
        computed: {
            state() {
                return this.$store.state
            }
        },
        mixins: [Form],
        endpoint: "jwt/create/",
        methods: {
            wxcButtonClicked(e) {
                console.log(e);
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

            //            signUpFirst(e) {
            //                this.$router.push({name: "Sign Up"});
            //            },
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
        mounted() {
            this.$refs.email.focus();
        },
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
