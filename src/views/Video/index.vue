<template>
  <div class="video-index">
    <el-row :gutter="20">
      <el-col :sm="24">
        <hot-field />
      </el-col>
      <el-col :sm="12" v-for="(item, index) in videoLists" :key="index">
        <video-item :item="item" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getVideos } from '../../api/article'
import HotField from './components/HotField.vue'
import VideoItem from './components/VideoItem.vue'
export default {
  components: { HotField, VideoItem },
  name: 'VideoIndex',
  data() {
    return {
      videoLists: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const {
        data: { data },
      } = await getVideos()
      // console.log(data)
      this.videoLists = data
    },
  },
}
</script>

<style lang="scss" scoped></style>
