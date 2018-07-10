<template>
    <div>
        <div dataRole = "navbar" class="tabbar">
            <div class="tab active" :style="{ left: activeTab * 150 + 'px'}"></div>
            <div v-for="(tab, i) in tabs" :key="i" class="tab" @click="activeTab = i">
                <router-link :to="tab.link">
                    <!-- <image class="icon" :src="tab.icon" /> -->
                    <i class="icon" :class="tab.icon"></i>
                    <text class="title">{{tab.title}}</text>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: "HOME",
          icon: "fas fa-sign-out-alt",
          link: "/"
        },
        {
          title: "SIGN UP",
          icon: "fas fa-sign-out-alt",
          link: "/signup"
        },
        {
          title: "SIGN IN",
          icon: "fas fa-sign-out-alt",
          link: "/signin"
        },
        // {
        //   title: "name",
        //   icon: "//img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png",
        //   link: "/"
        // },
        // {
        //   title: "SignIn",
        //   icon: "//gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png",
        //   link: "/"
        // }
      ]
    };
  }
};
</script>

<style scoped>
.tabbar {
  flex-direction: row;
  background-color: #425ea5;
}

.tab {
  height: 120px;
  width: 150px;
  justify-content: center;
  align-items: center;
}

.active {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(100, 100, 100, 0.2);
  transition: left 0.2s ease-in-out;
}

.icon {
  width: 45px;
  height: 45px;
}

.title {
  font-size: 28px;
  color: #fff;
  margin-top: 10px;
}
</style>
