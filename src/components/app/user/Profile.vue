<template>
   <div>
    <image style="width:500px;height:500px;margin:auto;padding:auto;border-radius: 5rem;" src="https://avatars3.githubusercontent.com/u/17888497?s=460&v=4" />
    <wxc-cell label="User"
        title="Vimm0"
        :has-top-border="false">
    </wxc-cell>
    <wxc-cell label="Name"
        title="Sandesh Rana"
        :has-top-border="false">
    </wxc-cell>

    <wxc-cell label="Email"
        title="vimmrana0@gmail.com"
        :has-top-border="false">
    </wxc-cell>
    <wxc-cell label="Mobile"
        title="**********"
        :has-top-border="false">
    </wxc-cell>        
   </div>
</template>
<script>
import { WxcCell } from "weex-ui";
export default {
  name: "Profile",
  components: {
    WxcCell
  }
};
</script>