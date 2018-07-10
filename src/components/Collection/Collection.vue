<template>
  <div>
    <slot name="results" :results="results">
    </slot>
  </div>
</template>
<script>
export default {
  props: ['endPoint'],
  data () {
    return {
      currentEndPoint: this.endPoint,
      results: []
      // count: ''
    }
  },
  methods: {
    $_get (url) {
//        console.log('here')
      global.axios.get(url).then(
        ({data}) => {
          this.currentEndPoint = url
          this.results = data
          // console.log(this.results)
        }
      )
    }
  },
  created () {
    this.$_get(this.endPoint)
  }
}
</script>
