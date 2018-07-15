<template>
    <div class="web-view">
        <iframe :src="videoId" frameborder="0" allowfullscreen
                v-if="obj.is_completed"></iframe>
        <text>{{videoId}}</text>
    </div>
</template>
<script>
    export default {
        props: ['videoId', 'obj']
    }
</script>