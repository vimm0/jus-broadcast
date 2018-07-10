<template>
  <div class="vue-form non-printable"
       :style="this.formStyle">
    <div class="card" :style="this.cardStyle">
      <form method="POST" enctype="multipart/form-data" @submit.prevent="save(action)" @focusin="errors.clear($event)">
        <slot name="form-header">
        </slot>
        <div class="card-content">
          <div class="content">
            <slot name="form-fields" :errors="errors">
            </slot>
            <slot name="submit" :remove="remove">
              <!--<button class="card-footer-item" @click="save(action)" v-if="fields.id" :disabled="errors.any()"-->
              <!--&gt;Update-->
              <!--</button>-->
              <!--<button class="card-footer-item" @click="save(action)" :disabled="errors.any()" v-else>-->
              <!--Create-->
              <!--</button>-->
              <!--<button class="card-footer-item" @click.prevent="remove(action)" v-if="fields.id">-->
              <!--Delete-->
              <!--</button>-->
              <slot name="extra_actions">
              </slot>
            </slot>

    <!--<slot name="submit" :remove="remove">-->
      <!--<v-btn color="primary" @click="save(action)" v-if="fields.id" :disabled="errors.any()">Update</v-btn>-->
      <!--<v-btn color="primary" @click="save(action)" :disabled="errors.any()" v-else>Create</v-btn>-->
      <!--<v-btn color="primary" @click.prevent="remove(action)" v-if="fields.id">Delete</v-btn>-->
      <!--<slot name="extra_actions">-->
      <!--</slot>-->
    <!--</slot>-->
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
class Errors {
  constructor () {
    this.errors = {}
  }

  has (field) {
    return this.errors.hasOwnProperty(field)
  }

  any () {
    return Object.keys(this.errors).length > 0
  }

  get (field) {
    if (this.errors[field]) {
      return this.errors[field][0]
    }
  }

  nestedGet (...args) {
    let value = null
    for (let arg in args) {
      //        console.log(args[arg])
      if (this.errors[args[arg]]) {
        value = this.errors[args[arg]]
      }
    }
    return value
  }

  record (errors) {
    this.errors = errors
  }

  clear (event = null) {
    if (event) {
      const field = event.target.name
      if (event.target.getAttribute('row') === 'true' && this.errors.hasOwnProperty('rows')) {
        global.Vue.delete(this.errors, 'rows')
        return
      }
      if (field) {
        global.Vue.delete(this.errors, field)
        return
      }
    }
    this.errors = {}
  }
}

export default {
  props: ['fields', 'action', 'submitAsModal', 'defaultFieldsValues', 'successUrl', 'formStyle', 'cardStyle', 'enableResetFormOnSuccess'],
  data () {
    let dct = {}
    dct.original_fields = Object.assign({}, this.fields)
    dct.field_names = []
    for (let field in this.data) {
      dct.field_names.push(field)
    }
    dct.errors = new Errors()
    return dct
  },
  //    created(){
  //      debugger
  //    },
  methods: {
    reset () {
      this.errors.clear()
    },
    getFieldsData () {
      let payload = this.fields
      if (this.defaultFieldsValues !== 'undefined') {
        payload = Object.assign({}, payload, this.defaultFieldsValues)
      }

      return payload
    },
    save (url) {
      let verb
      if (this.fields.id || this.formInstanceId) {
        verb = 'put'
      } else {
        verb = 'post'
      }
      this.submit(verb, url)
        .then(data => {
          console.log(data)
        //   let tab = 1
        //   this.$store.dispatch('getSignUpStatus', [data, tab])
        // })
        // .catch((error) => {
        //   this.$store.dispatch('getSignUpStatus', [error, tab])
        })
    },
    post (url) {
      return this.submit('post', url)
    },
    put (url) {
      return this.submit('put', url)
    },
    patch (url) {
      return this.submit('patch', url)
    },
    remove (url) {
      return this.submit('delete', url)
    },
    resetForm () {
      Object.assign(this.fields, this.original_fields)
    },
    submit (requestType, url) {
      return new Promise((resolve, reject) => {
        global.axios[requestType](url, this.getFieldsData())
          .then(({data}) => {
            this.onSuccess(data)
            // console.log(this.submitAsModal)
            if (this.submitAsModal) {
              this.$emit('saveAsModal', data) // catch by Modal.vue, to update selectize options
            } else {
              if (this.successUrl) {
                this.$emit('success', data, this.successUrl)
              } else {
                this.$emit('success', data)
              }
            }
            if (this.enableResetFormOnSuccess) {
              this.resetForm()
            }
            resolve(data)
          })
          .catch(error => {
            // console.log(error.response.data)
            this.onFail(error.response.data)
            this.$parent.$emit('failure', error.response.data)
            reject(error.response.data)
          })
      })
    },
    onSuccess (data) {
      this.reset()
    },
    onFail (errors) {
      if (errors.hasOwnProperty('error')) {
        this.$error(errors.error[0])
        setTimeout(() => {
          global.Vue.delete(this.errors.errors, 'error')
        }, 1000)
      }
      this.errors.record(errors)
    }
  }
}
</script>
