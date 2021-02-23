<template>
  <div class="tweet-wrap">
    <el-row :gutter="20">
      <el-col :sm="16">
        <tweet-list />
      </el-col>
      <el-col :sm="8" class="hidden-xs-only">
        <hot-topics />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TweetList from './components/TweetList.vue'
import HotTopics from '../../components/hot-topics'
export default {
  components: { TweetList, HotTopics },
  name: 'Tweet',
}
</script>

<style lang="scss" scoped></style>
