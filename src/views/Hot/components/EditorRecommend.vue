<template>
  <div class="editor-recommend" v-if="JSON.stringify(recommendList) !== '{}'">
    <h2>小编推荐</h2>
    <div class="recommend-list">
      <el-row>
        <el-col :sm="12" v-for="(item, index) in recommendList" :key="index">
          <div class="recommend-item">
            <a :href="item.url" target="_blank">▪ {{ item.title }}</a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getRecommend } from '@/api/article.js'
export default {
  name: 'EditorRecommend',
  data() {
    return {
      recommendList: {},
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const { data } = await getRecommend()
      const articles = data.data.articles
      let recommendList = []
      for (var key in articles) {
        // console.log(articles[key])
        recommendList.push(articles[key])
      }
      // console.log(recommendList)
      this.recommendList = recommendList
    },
  },
}
</script>

<style lang="scss" scoped>
.editor-recommend {
  // background: #d3dce6;
  margin-bottom: 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid #dfe1e5;
  h2 {
    color: #172b4d;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }
}
.recommend-item {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 8px 8px 0px 8px;
  font-size: 15px;
  a {
    color: #172b4d;
  }
}
</style>
