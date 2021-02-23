<template>
  <div class="video-list" v-if="list.length">
    <video-item v-for="(item, index) in list" :key="index" :item="item" />
  </div>
</template>

<script>
import VideoItem from './VideoItem.vue'

export default {
  components: { VideoItem },
  name: 'VideoList',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.video-list {
  border: 1px solid rgb(223, 225, 230);
  border-radius: 8px;
  overflow: hidden;
}
</style>
