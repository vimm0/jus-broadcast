<template>
    <div class="payment-card-registration">
        <p class="card-header-title">My Cards</p>
        <template v-if="$store.state.user.user.has_expired === 'Admin does not expires at all.'">
            <div class="card-content">
                <p class="has-text-success">Admin does not need card at all.</p>
            </div>
        </template>
        <template v-else>
            <div class="">
                <text class="" v-if="error">
                  There's been an issue regarding your card. <br/> {{ error }} <br/> Please use use another card or update the
                  card info.
                </text>
                <div ref="card"></div>
                <p class=" ">{{ validationError }}</p>
                <button v-on:click="purchase" class="button">Add A New Card
                </button>
                <!--<hr v-if="cards.length > 0">-->
                <h2 class="title" v-if="cards.length > 0">All Cards</h2>
                <div v-for="customer_obj in customer" :key="customer_obj.id">
                    <div class="card list-card" v-for="card in cards" :key="card.id">
                        <section>
                            <p class="card-header-title">
                                {{card.brand}} ****{{card.last4}}, Ending {{tzDateToJsDate(card.created_at)}}
                            </p>
                            <div class="card-action">
                                <template v-if="customer_obj.default_source === card.stripe_id">
                                    <span class="tag">✓ Active</span>
                                </template>
                            </div>
                            <a class="card-header-icon">
                                <!--<b-icon-->
                                        <!--:icon="isOpen ? 'fas fa-chevron-down' : 'fas fa-chevron-up'">-->
                                <!--</b-icon>-->
                            </a>
                            <div class="card-content">
                                <div class="content">
                                    <p>Type: {{card.brand}} {{card.funding}} card</p>
                                    <p>Origin: {{card.country}}</p>
                                    <p>Expires: {{card.exp_month}}/{{card.exp_year}}</p>
                                    <p>Number: ****{{card.last4}}</p>
                                </div>
                                <template v-if="customer_obj.default_source !== card.stripe_id">
                                    <button class="button"
                                            @click="changeDefaultCard(card.id, card.stripe_id)">
                                        Make Default
                                    </button>
                                    <button class="button" @click="removeCard(card.id)">Remove
                                    </button>
                                </template>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
    import Helper from "../../../mixins/Helper";
    import Form from "../../../mixins/Form.js";
    let stripe = Stripe(`pk_test_WDp74uo5iUtGPi9bGz2UnWag`);
    let elements = stripe.elements();
    let card = undefined;

    export default {
        name: "MyCard",
        data() {
            return {
                fields: "",
                error: "",
                validationError: "",
                isOpen: false,
                customer: "",
                cards: ""
            };
        },
        mounted: function () {
            if (
                this.$store.state.user.user.has_expired !==
                "Admin does not expires at all."
            ) {
                card = elements.create("card", {
                    style: {
                        base: {
                            iconColor: "#666EE8",
                            color: "#31325F",
                            lineHeight: "40px",
                            fontWeight: 300,
                            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                            fontSize: "15px",
                            "::placeholder": {
                                color: "#CFD7E0"
                            }
                        }
                    }
                });
                card.mount(this.$refs.card.$el);
            }
        },
        computed: {
            subscriptions() {
                return this.$store.getters.getSubscription;
            }
        },
        methods: {
            purchase() {
                let self = this;

                stripe.createToken(card).then(function (result) {
                    console.log(result);
                    if (result.error) {
                        console.log(result.error);
                        global.Vue.set(self.$data, "validationError", result.error.message);
                    }
                    let cardData = result.token.card;
                    console.log(cardData);
                    global.axios
                        .post("card/", {
                            stripeToken: result.token.id
                        })
                        .then(response => {
                            console.log(response);
                            self.$router.go();
                        })
                        .catch(error => {
                            console.log(error.response.data.response);
                            global.Vue.set(self.$data, "error", error.response.data.response);
                        });

                    if (result.error) {
                        console.log(result.error);
                        global.Vue.set(self.$data, "validationError", result.error.message);
                        self.hasCardErrors = true;
                        self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
                        return;
                    }
                });
            },
            removeCard(id) {
                console.log(id);
                if (confirm("Are you sure you want to remove this card?")) {
                    global.axios
                        .delete(`card/${id}`)
                        .then(response => {
                            console.log(response);
                            this.$router.go();
                        })
                        .catch(error => {
                            console.log(error.response.data.response);
                            //        global.Vue.set(this.$data, 'error', error.response.data.response)
                        });
                }
            },
            changeDefaultCard(id, newDefaultSource) {
                console.log(newDefaultSource);
                global.axios
                    .put(`card/${id}/`, {
                        defaultSource: newDefaultSource
                    })
                    .then(response => {
                        console.log(response);
                        this.$router.go();
                    })
                    .catch(error => {
                        console.log(error.response.data.response);
                        //        global.Vue.set(this.$data, 'error', error.response.data.response)
                    });
            }
        },
        created() {
            if (
                this.$store.state.user.user.has_expired !==
                "Admin does not expires at all."
            ) {
                //         this.$store.dispatch('getPlan')
                this.$store.dispatch("getCard");
                this.$store.dispatch("getSubscription");
                this.$store.dispatch("getInvoice");
                this.$store.dispatch("getSubscriptionLog");
                this.$store.dispatch("getInvoiceLog");
                let date = new Date();
                let timestamp = date.getTime();
                console.log(timestamp);
                global.axios
                    .get("card/")
                    .then(response => {
                        console.log(response);
                        //          global.Vue.set(this.$data, 'etag', response.headers.etag)
                        //          if (this.etag !== response.headers.etag) {
                        global.Vue.set(this.$data, "cards", response.data);
                        //          } else {
                        //            console.log(this.$data)
                        //          }
                    })
                    .catch(error => {
                        console.log(error.response);
                        global.Vue.set(self.$data, "error", error.response);
                    });
                global.axios
                    .get("customer/")
                    .then(response => {
                        console.log(response);
                        global.Vue.set(this.$data, "customer", response.data);
                    })
                    .catch(error => {
                        console.log(error.response.data.response);
                        global.Vue.set(self.$data, "error", error.response.data.response);
                    });
            }
        },
        destroyed() {
            if (
                this.$store.state.user.user.has_expired !==
                "Admin does not expires at all."
            ) {
                console.log(card);
                card.destroy(this.$refs.card);
                console.log(this);
            }
        },
        mixins: [Helper, Form]
    };
</script>

<style>
    /**
     * The CSS shown here will not be introduced in the Quickstart guide, but shows
     * how you can use CSS to style your Element's container.
     */
    /*.StripeElement {*/
        /*background-color: white;*/
        /*padding: 2px 6px;*/
        /*border-radius: 4px;*/
        /*border: 1px solid #d2d2d2;*/
        /*box-shadow: 0 1px 3px 0 #e6ebf1;*/
        /*-webkit-transition: box-shadow 150ms ease;*/
        /*transition: box-shadow 150ms ease;*/
    /*}*/

    /*.StripeElement--focus {*/
        /*box-shadow: 0 1px 3px 0 #cfd7df;*/
    /*}*/

    /*.StripeElement--invalid {*/
        /*border-color: #fa755a;*/
    /*}*/

    /*.StripeElement--invalid .is-danger {*/
        /*color: #de4425;*/
        /*font-size: 15px;*/
        /*margin-top: 6px;*/
    /*}*/

    /*.StripeElement--webkit-autofill {*/
        /*background-color: #fefde5 !important;*/
    /*}*/

    /*.card-action {*/
        /*margin-top: 12px;*/
    /*}*/

    /*.list-card .card {*/
        /*background: #f4f7fb;*/
    /*}*/
</style>
