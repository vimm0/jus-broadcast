import VueForm from '../components/Form/VueForm.vue'

// import VueForm from '@/helpers/components/form/VueForm.vue'

export default {
  components: {VueForm},
  data () {
    return {
      loading: true,
      fields: {}
    }
  },
  methods: {
    endpoint () {
      let endpoint = this.$options.endpoint
      if (this.$route.params.pk) {
        endpoint += this.$route.params.pk + '/'
      } else if (this.formInstanceId) {
        endpoint += this.formInstanceId + '/'
      }
      return endpoint
    },
    successCallback (data) {
      if (this.$options.success_url) {
        this.$router.push({path: this.$options.success_url})
      }
    }
  },
  computed: {
    success_message () {
      return this.$options.success_message || 'Saved'
    },
    pk () {
      return this.$route.params.pk
    }
  },
  created () {
    // if (this.saveAsModalCallback)
    if (this.$route.params.pk || this.formInstanceId) {
      global.axios.get(this.endpoint()).then(({data}) => {
        this.fields = data
      })
    }
    if (this.$options.dependencies) {
      this.$options.dependencies.forEach((model) => {
        global.axios.get(model.endpoint).then(({data}) => {
          this.$store.commit('update_collection', [model.collection_name, data])
        })
      })
    }
  },
  mounted () {
    // this.$on('success', this.successCallback)
  }
}
