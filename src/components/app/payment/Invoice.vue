<template>
  <div id='payment'>
    <p class="card-header-title">Payment History</p>
    <template v-if="$store.state.user.user.has_expired === 'Admin does not expires at all.'">
      <div class="card-content">
        <p>Admin does not have Invoice history</p>
      </div>
    </template>
    <template v-else>
        <p>User have invoices</p>
      <!-- <b-table
        :data="isEmpty ? [] : invoiceLogs"
        :bordered="isBordered"
        :striped="isStriped"
        :narrowed="isNarrowed"
        :hoverable="isHoverable"
        :loading="isLoading"
        :focusable="isFocusable"
        :mobile-cards="hasMobileCards" class="column is-three-quarters-mobile">

        <template slot-scope="props">
          <b-table-column field="receipt_number" label="Receipt Number">
            {{ props.row.receipt_number }}
          </b-table-column>
          <b-table-column field="stripe_id" label="Invoice Id">
            {{ props.row.stripe_id }}
          </b-table-column>
          <b-table-column field="customer" label="Customer">
            {{ $options.filters.capitalizeText(props.row.customer) }}
          </b-table-column>
          <b-table-column field="description" label="Description">
            {{ $options.filters.capitalizeText(props.row.description) }}
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
          <b-table-column label="Payment">
            <span class="tag" :class="props.row.paid === true ? 'is-success' : 'is-light'">
              <template v-if="props.row.paid  === true">
                <p>Paid</p>
              </template>
              <template v-else>
                <p>Unpaid</p>
              </template>
            </span>
          </b-table-column>

          <b-table-column label="Created">
            {{ props.row.created_at }}
          </b-table-column>
          <b-table-column field="period" label="Period">
            {{ props.row.period }}
          </b-table-column>
          <b-table-column label="Total">
            {{ props.row.total }}
          </b-table-column>
        </template>

        <template slot="empty" class="content has-text-grey has-text-centered">
          <section class="section" style="padding: 1rem 25.5rem;">
            <div class="content has-text-grey has-text-centered">
              <p class="has-text-centered">Sorry, there is nothing to display here.</p>
            </div>
          </section>
        </template>
      </b-table> -->
    </template>
  </div>
</template>

<script>
  import Helper from '../../../mixins/Helper'
  import Form from '../../../mixins/Form.js'

  export default {
    name: 'invoice',
    data () {
      return {
        isEmpty: false,
        isBordered: false,
        isStriped: false,
        isNarrowed: false,
        isHoverable: false,
        isFocusable: false,
        isLoading: false,
        hasMobileCards: true,
        error: '',
        invoiceLogs: []
      }
    },
    computed: {
      InvoiceLog () {
        return this.$store.getters.getInvoiceLog
      }
    },
    created () {
      if (this.$store.state.user.user.has_expired !== 'Admin does not expires at all.') {
        global.axios.get('invoice/').then(response => {
          console.log(response)
          global.axios.get('invoice-log/').then(response => {
            global.Vue.set(this.$data, 'invoiceLogs', response.data)
          }).catch(error => {
            console.log(error.response.data.response)
          })
        }).catch(error => {
          console.log(error.response.data.response)
          global.Vue.set(this.$data, 'error', error.response.data.response)
        })
      }
    },
    endPoint: '',
    mixins: [Helper, Form]
  }
</script>
