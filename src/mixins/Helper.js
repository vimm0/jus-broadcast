export default {
  name: "Helper",
  data() {
    return {
      activeTab: 0,
      videosObject: '',
      // isComponentModalActive: false,
      hideButton: true
    }
  },
  filters: {
    truncate: function (text, stop, clamp) {
      return text.split(" ").slice(0, stop).join(" ") + (stop < text.length ? clamp || "  ..." : "")
    },
    capitalizeText: function (data) {
      return data.replace(/\b\w/g, l => l.toUpperCase())
    }
  },
  methods: {
    checkUserLogin() {
      if (this.$store.state.user !== null) {
        // console.log('Authorized')
        return true
      } else {
        // console.log('Un-Authorized')
        return false
      }
    },
    signUpComplete: function (updatedTab) {
      // Usage: ModalAuthentication, Navbar
      // this.activeTab = 1 // reach conceptual $emit (child-parent) data passing but at last applied hardwired value for activeTab.
      // if (updatedTab === 1) {
      // this.$snackbar.open({
      //   duration: 5000,
      //   message: this.$options.filters.capitalizeText(' Sign Up Completed '),
      //   type: 'is-success',
      //   position: 'is-top'
      // })
      // }
      this.activeTab = updatedTab
    },
    // openModal () {
    //   // this.$route.router.push('/modal')
    //   this.isComponentModalActive = !this.isComponentModalActive
    // },
    chunkedVideo(val) {
      let chunk = require("chunk")
      return chunk(val, 4)
    },
    chunkedHomeVideo(videos) {
      let counter = []
      let chunk = require("chunk")
      videos.forEach(function (element) {
        if (element.is_completed === true) {
          counter.unshift(element)
        }
      });
      global.Vue.set(this.$data, 'videosObject', counter.length)
      if (counter.length > 4) {
        this.addLoadMoreButtonForVideoList()
      }
      return chunk(videos, 4)
    },
    shuffleArray(array) {
      // Using Durstenfeld shuffle algorithm.
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array
    },
    sliderChunked(objs) {
      let filterSlugId= this.$route.params.slugId
      let filtered = objs.filter(function (el) {
        return el.id !== Number(filterSlugId)
      })
      return this.shuffleArray(filtered.slice(0, 3))
    },
    addLoadMoreButtonForVideoList() {
      global.Vue.set(this.$data, 'hideButton', false)
    },
    getDescription(data) {
      if (this.showMore === false) {
        data.length > 20 ? this.moreOrLess = "More" : this.showMore = false
        return this.$options.filters.truncate(data, 20, " ...")
      } else if (this.showMore === true) {
        this.moreOrLess = "Less"
        return data
      }
    },
    tzDateToJsDate(date) {
      let ts = new Date(date)
      return ts.toLocaleDateString("en-US")
    },
    humanizeCount(count) {
      if (count > 1) {
        return "s"
      } else {
        return ""
      }
    }
  }
}
