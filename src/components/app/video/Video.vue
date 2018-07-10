<template>
<div class="video">
    <p>video</p>
    <router-view :key="$route.fullPath"></router-view>
</div>
</template>
<script>
export default {
  name: "video"
};
</script>
<style>
</style>