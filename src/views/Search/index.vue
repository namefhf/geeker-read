<template>
  <div class="search-index">
    <el-row :gutter="20">
      <el-col :sm="16">
        <div class="keyword">
          <p>{{ $route.query.keyword }}</p>
        </div>
        <article-list :list="results" />
      </el-col>
      <el-col :sm="8" class="hidden-xs-only">
        <official-list />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getSearch } from '../../api/article'
import ArticleList from '../../components/article-list'
import OfficialList from '../../components/official-list'
export default {
  name: 'SearchIndex',
  components: {
    ArticleList,
    OfficialList,
  },
  data() {
    return {
      results: [],
    }
  },
  created() {
    console.log(this.$route.query.keyword)
    this.getData()
  },
  watch: {
    $route() {
      this.getData()
    },
  },
  methods: {
    async getData() {
      const {
        data: { data },
      } = await getSearch(this.$route.query.keyword)
      console.log(data)
      this.results = data
    },
  },
}
</script>

<style lang="scss" scoped>
.keyword {
  text-align: center;
  background-color: rgb(244, 245, 247);
  border-radius: 4px;
  color: rgb(23, 43, 77);
  // position: relative;
  margin-top: 16px;
  padding-top: 12px;
  margin-bottom: 16px;
  padding-bottom: 12px;
}
</style>
