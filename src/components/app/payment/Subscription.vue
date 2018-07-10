<template>
    <div id='payment'>
        <!-- <b-collapse class="card"> -->
        <!-- <div slot="trigger" slot-scope="props" class="card-header"> -->
        <p class="card-header-title">Subscription Information</p>
        <!-- </div> -->
        <template v-if="$store.state.user.user.has_expired === 'Admin does not expires at all.'">
            <div class="card-content">
                <p>Admin does not need subscription at all.</p>
            </div>
        </template>
        <template v-else>
            <div class="card-content">
                <template v-if="$store.state.user.user.is_expire === false">

                    <div class="notification">
                        Is On Trial Until <strong>{{ $store.state.user.user.has_expired }}</strong>
                    </div>

                </template>
                <template v-if="isSubscriptionActive && !subscriptionEnds && !problemInSubscription">
                    <template v-if="subscription[0].status === 'trialing'">
                        <p><span>{{ verboseTrialStatus(subscription[0].trial_start, subscription[0].trial_end)
                            }} Days left </span> on {{ $options.filters.capitalizeText(subscription[0].status)
                            }} Subscription</p>
                    </template>
                    <h2 class="title">✓ {{ $options.filters.capitalizeText(subscription[0].status)
                        }} Subscription</h2>
                    <!-- <div v-for="obj in subscription">
                      <template v-if="obj.cancel_at_period_end">
                        <div class="notification is-warning">
                          <strong>Your Subscription has been cancelled, but you can still watch videos until</strong>: {{
                          tzDateToJsDate(obj.current_period_end)
                          }}
                        </div>
                      </template>
                      <template v-else>
                        <div class="notification is-info">
                          <strong>{{ $options.filters.capitalizeText(subscription[0].status) }} Until</strong>: {{
                          tzDateToJsDate(obj.current_period_end) }}
                          <br>
                          <strong>Will automatically renew for {{ plan[0].amount }} on {{ getDateAndTime(obj.current_period_end)
                            }}</strong>
                        </div>
                      </template>
                      <div>
                        <p><b>Customer Name:</b> {{ $options.filters.capitalizeText(obj.customer)}}</p>
                        <p><b>Plan Name:</b> {{ $options.filters.capitalizeText(obj.plan) }}</p>
                        <p><b>Status:</b> {{ $options.filters.capitalizeText(obj.status) }}</p>
                        <template v-if="obj.trial_end">
                          <p><b>On Trial Until:</b> {{ getDateAndTime(obj.trial_end) }}</p>
                        </template>
                        <template v-else>
                          <p><b>Current period:</b> {{ tzDateToJsDate(obj.current_period_start)
                            }} - {{ tzDateToJsDate(obj.current_period_end) }}</p>
                        </template>
                        <br/>
                        <p>
                          <button class="button is-danger" :disabled="current_period_end" @click="cancelSubscription(obj.id)">
                            Cancel Subscription
                          </button>
                        </p>
                      </div>
                    </div> -->
                </template>
                <template v-if="$store.state.user.user.is_expire === true">
                    <template v-if="noSubscription || subscriptionEnds">
                        <!--<div class="field is-horizontal">-->
                        <!--<div class="field-label">-->
                        <!--<label class="label">Select Plan: </label>-->
                        <!--</div>-->
                        <!--<div class="field-body">-->
                        <!--<text v-model="isPlanPublic"></text>-->
                        <!--<select v-model="isPlanPublic" @click="onClick">-->
                        <!--&lt;!&ndash;<button class="button is-small" type="button">&ndash;&gt;-->
                        <!--<template v-if="isPlanPublic">-->
                        <!--<text value="None"></text>-->
                        <!--</template>-->
                        <!--<template v-else>-->
                        <!--<text>{{ selectedPlan.name }}</text>-->
                        <!--</template>-->
                        <!--&lt;!&ndash;</button>&ndash;&gt;-->

                        <!--<option v-for="plan in plans" :key="plan.id">-->
                        <!--<div class="media" @click="planDropDownSelected(plan)">-->
                        <!--<div class="media-content">-->
                        <!--<small>Plan Name: {{ $options.filters.capitalizeText(plan.name) }}-->
                        <!--</small>-->
                        <!--<br>-->
                        <!--<small>Trial Period: {{ plan.trial_period_days }} {{ plan.interval-->
                        <!--}}{{ humanizeCount(plan.trial_period_days) }}-->
                        <!--</small>-->
                        <!--<h3>{{ plan.amount }} every {{ plan.interval_count }} {{ plan.interval-->
                        <!--}}{{ humanizeCount(plan.interval_count) }}</h3>-->
                        <!--</div>-->
                        <!--</div>-->
                        <!--</option>-->
                        <!--</select>-->
                        <!--</div>-->
                        <!--</div>-->
                        <drop-down></drop-down>


                            <!--<div class="field is-horizontal">-->
                            <!--<div class="field-label">-->
                            <!--<label class="label">Select Card: </label>-->
                            <!--</div>-->
                            <!--<div class="field-body">-->
                            <!--&lt;!&ndash;<select v-model="isCardPublic">&ndash;&gt;-->
                            <!--&lt;!&ndash;<button class="button is-small" type="button" slot="trigger">&ndash;&gt;-->
                            <!--&lt;!&ndash;<template v-if="isCardPublic">&ndash;&gt;-->
                            <!--&lt;!&ndash;<span>None</span>&ndash;&gt;-->
                            <!--&lt;!&ndash;</template>&ndash;&gt;-->
                            <!--&lt;!&ndash;<template v-else>&ndash;&gt;-->
                            <!--&lt;!&ndash;<span> {{ selectedCard.fingerprint }} </span>&ndash;&gt;-->
                            <!--&lt;!&ndash;</template>&ndash;&gt;-->
                            <!--&lt;!&ndash;</button>&ndash;&gt;-->
                            <!--&lt;!&ndash;<option v-for="card in cards" :key="card.id">&ndash;&gt;-->
                            <!--&lt;!&ndash;<div class="media" @click="cardDropDownSelected(card)">&ndash;&gt;-->
                            <!--&lt;!&ndash;<div class="media-content">&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;<h1>Name: {{ $options.filters.capitalizeText(card.customer) }}</h1>&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;<p>Card Type: {{ $options.filters.capitalizeText(card.funding) }}</p>&ndash;&gt;-->
                            <!--&lt;!&ndash;<b>****{{ card.last4 }} Ending {{card.exp_month}}/{{card.exp_year}}</b>&ndash;&gt;-->
                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                            <!--&lt;!&ndash;</option>&ndash;&gt;-->
                            <!--&lt;!&ndash;</select>&ndash;&gt;-->
                            <!--</div>-->
                            <!--</div>-->
                            <div class="field is-horizontal">
                                <div class="field-label">
                                </div>
                                <div class="field-body">
                                    <button @click="subscribe" class="button">Start Subscription
                                    </button>
                                </div>
                            </div>
                    </template>
                </template>
                <template v-if="problemInSubscription">
                    Problem occured
                </template>
                <!--<hr v-if="subscriptionLogs.length > 0">-->
                <!-- <b-table
                  :data="isEmpty ? [] : subscriptionLogs"
                  :bordered="isBordered"
                  :striped="isStriped"
                  :narrowed="isNarrowed"
                  :hoverable="isHoverable"
                  :loading="isLoading"
                  :focusable="isFocusable"
                  :mobile-cards="hasMobileCards" class="column is-three-quarters-mobile">

                  <template slot-scope="props">
                    <b-table-column field="customer" label="Customer">
                      {{ $options.filters.capitalizeText(props.row.customer) }}
                    </b-table-column>
                    <b-table-column field="stripe_id" label="Subscription Id">
                      {{ props.row.stripe_id }}
                    </b-table-column>
                    <b-table-column label="Status">
                      <span class="tag" :class="props.row.status === 'trialing' ? 'is-primary' : 'is-success'">
                        <template v-if="props.row.status  === 'trialing'">
                          <p>Trial</p>
                        </template>
                        <template v-else>
                          <p>{{ props.row.status }}</p>
                        </template>
                      </span>
                    </b-table-column>
                    <b-table-column field="cancel_at_period_end" label="Cancelled">
                      <span class="tag" :class="props.row.cancel_at_period_end  === true ? 'is-danger' : 'is-light'">
                        <template v-if="props.row.cancel_at_period_end === true">
                          <p>{{ getDateAndTime(props.row.canceled_at) }}</p>
                        </template>
                        <template v-else>
                          <p>No</p>
                        </template>
                      </span>
                    </b-table-column>
                    <b-table-column field="period" label="Period" centered>
                      {{ props.row.period }}
                    </b-table-column>

                    <b-table-column field="Created" label="Created">
                      {{ props.row.created_at }}
                    </b-table-column>
                  </template>
                </b-table> -->
            </div>
        </template>
        <!-- </b-collapse> -->
    </div>
</template>

<script>
    import Helper from '../../../mixins/Helper'
    import Form from '../../../mixins/Form.js'
    import {mapGetters} from 'vuex'
    import DropDown from '../../UIComponent/DropDown.vue'

    let stripe = Stripe(`pk_test_WDp74uo5iUtGPi9bGz2UnWag`)
    let elements = stripe.elements()
    let card = undefined

    export default {
        name: 'subscription',
        data() {
            return {
                isEmpty: false,
                isBordered: false,
                isStriped: false,
                isNarrowed: false,
                isHoverable: false,
                isFocusable: false,
                isLoading: false,
                hasMobileCards: true,
                isPlanPublic: true,
                isCardPublic: true,
                selectedPlan: '',
                selectedCard: '',
                error: '',
                subscription: null,
                isSubscriptionActive: false,
                noSubscription: false,
                subscriptionEnds: false,
                problemInSubscription: false,
                current_period_end: false,
                cards: '',
                plan: '',
                subscriptionLogs: []
            }
        },
        computed: {
            ...mapGetters([
                'token',
            ]),
            plans() {
                return this.$store.getters.getPlan
            },
            user() {
                return this.$store.getters.user
            }
        },
        components: {
            DropDown
        },
        methods: {
            onClick() {
                console.log(this)
            },
            planDropDownSelected(planSelected) {
                console.log('you selected plan', planSelected.name)
                global.Vue.set(this.$data, 'selectedPlan', planSelected)
            },
            cardDropDownSelected(cardSelected) {
                console.log('you selected card', cardSelected.customer)
                global.Vue.set(this.$data, 'selectedCard', cardSelected)
            },
            cancelSubscription(id) {
                if (!confirm('Are you sure you want to cancel your subscription?')) {
                    return false
                }
                if (this.current_period_end === false) {
                    global.axios.delete(`subscription/${id}`).then(response => {
                        console.log(response)
                        this.$router.go()
                    }).catch(error => {
                        console.log(error.response.data.response)
//        global.Vue.set(this.$data, 'error', error.response.data.response)
                    })
                } else {
                    console.log(this)
                    console.log('prevent default on click event')
                    event.target.preventDefault()

                }
            },
            subscribe() {
                console.log('subscribe clicked')
                global.axios.post('subscription/', {
                    'plan': this.selectedPlan.id,
                    'source': this.selectedCard.stripe_id
                }).then(response => {
                    console.log(response)
                    this.$router.go()
                }).catch(error => {
                    console.log(error.response.data.response)
                    global.Vue.set(self.$data, 'error', error.response.data.response)
                })
            },
            disableButton() {

            }
        },
        created() {
            console.log(this.$store.state.user.user)
            if (this.$store.state.user.user.has_expired !== 'Admin does not expires at all.' && this.$store.state.user.user.is_expire !== false) {
                global.axios.get('subscription/').then(response => {
                    console.log(Object.keys(response.data).length)
                    global.axios.get('subscription-log/').then(response => {
                        global.Vue.set(this.$data, 'subscriptionLogs', response.data)
                    }).catch(error => {
                        console.log(error.response.data.response)
                    })
                    if (Object.keys(response.data).length === 0) {
                        console.log('no subscription')
                        global.Vue.set(this.$data, 'noSubscription', true)
                    } else if (Object.keys(response.data).length > 1) {
                        global.Vue.set(this.$data, 'problemInSubscription', true)
                    } else if (response.data[0].cancel_at_period_end) {
                        let end_date = response.data[0].current_period_end
                        console.log(this.tzDateToJsDate(end_date))
                        global.Vue.set(this.$data, 'current_period_end', true)
                        this.disableButton()
                        if (end_date > new Date(Date.now()).toLocaleString('en-US')) {
                            console.log('date manipulation')
                            global.Vue.set(this.$data, 'subscriptionEnds', true)
                        }
                    }
                    global.Vue.set(this.$data, 'subscription', response.data)
                    if (Object.keys(response.data).length > 0) {
                        global.Vue.set(this.$data, 'isSubscriptionActive', true)
                    } else {
                        global.Vue.set(this.$data, 'isSubscriptionActive', false)
                    }
                }).catch(error => {
                    console.log(error)
                    console.log(error.response.data.response)
                    global.Vue.set(this.$data, 'error', error.response.data.response)
                })
                global.axios.get('plan/').then(response => {
                    console.log(response)
                    global.Vue.set(this.$data, 'plan', response.data)
                }).catch(error => {
                    console.log(error.response.data.response)
                    global.Vue.set(this.$data, 'error', error.response.data.response)
                })
                global.axios.get('card/').then(response => {
                    console.log(response)
                    global.Vue.set(this.$data, 'cards', response.data)
                }).catch(error => {
                    console.log(error.response.data.response)
                    global.Vue.set(this.$data, 'error', error.response.data.response)
                })
            }
            else if (this.$store.state.user.user.is_expire === false) {
                global.axios.get('user/').then(({data}) => {
                    console.log(data[0])
                    global.axios.post('jwt/refresh/', {'token': this.token}).then(
                        ({data}) => {
                            console.log(data)
                            this.$store.dispatch('login', {
                                userData: data
                            })
                        })
                })
            }
        },
        mixins: [Helper, Form]
    }
</script>
