<template>
  <div style="justify-content:center">
    <slider class="slider size" auto-play="true">
      <div v-for="src in posters">
        <image class="size" resize="cover" :src="src"></image>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        posters: [
          'https://gw.alicdn.com/tfs/TB1TKvQk79WBuNjSspeXXaz5VXa-900-1312.jpg',
          'https://gw.alicdn.com/tfs/TB1nDsrkYSYBuNjSspfXXcZCpXa-1080-1575.jpg',
          'https://gw.alicdn.com/tfs/TB1MqHJkVuWBuNjSszbXXcS7FXa-1080-1574.jpg',
          'https://gw.alicdn.com/tfs/TB1u1gjkY1YBuNjSszhXXcUsFXa-1080-1518.jpg'
        ]
      }
    }
  }
</script>

<style scoped>
  .size {
    width: 750px;
    height: 1080px;
  }
  .slider {
    position: relative;
  }
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.3);

    itemColor: #DDDDDD;
    itemSelectedColor: rgb(0, 180, 255);
  }
</style>