<template>
  <wxc-result type="errorPage"
              :show="show"
              padding-top="232"
              @wxcResultButtonClicked="wxcResultButtonClicked"></wxc-result>
</template>
<script>
  import { WxcResult } from 'weex-ui';
  export default {
    components: { WxcResult },
    data: () => ({
        show: true
    }),
    methods: {
      wxcResultButtonClicked(e){
        modal.toast({
          'message': e.type,
          'duration': 1,
        })
      }
    }
  };
</script>