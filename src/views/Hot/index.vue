<template>
  <div class="hot-index">
    <el-row :gutter="20">
      <el-col :sm="16">
        <!-- 左侧 -->
        <!-- 小编推荐 -->
        <editor-recommend />
        <!-- Featured Vedio -->
        <featured-video :list="videos" />
        <!-- article list -->
        <article-list :list="hotList" />
      </el-col>
      <el-col :sm="8" class="hidden-xs-only">
        <!-- 右侧 -->
        <book-recommend :list="books" />
        <news-card :list="newsletter">
          <template slot="title">期刊</template>
        </news-card>
        <news-card :list="news">
          <template slot="title">资讯</template>
        </news-card>
        <series-list :list="series" />
        <official-list />
        <hot-topics />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getHot, getFacets } from '../../api/article'
import EditorRecommend from './components/EditorRecommend'
import FeaturedVideo from './components/FeaturedVideo.vue'
import ArticleList from '../../components/article-list'
import NewsCard from '../../components/news-card'
import SeriesList from './components/SeriesList.vue'
import OfficialList from '../../components/official-list'
import HotTopics from '../../components/hot-topics'
import BookRecommend from './components/BookRecommend'
export default {
  name: 'HotIndex',
  components: {
    EditorRecommend,
    FeaturedVideo,
    ArticleList,
    NewsCard,
    SeriesList,
    OfficialList,
    HotTopics,
    BookRecommend,
  },
  data() {
    return {
      videos: [],
      hotList: [], //热门页面文章数据
      recommendVideo: {}, //精选视频
      news: [], //期刊
      newsletter: [], //资讯
      series: [], //专栏
      books: [], //好书推荐
    }
  },
  created() {
    this.getHotList()
    this.getfacets()
  },
  methods: {
    async getHotList() {
      const {
        data: { data },
      } = await getHot()
      // console.log(data)
      this.hotList = data
    },
    async getfacets() {
      const {
        data: {
          data: { videos, news, newsletter, series, books },
        },
      } = await getFacets()
      // console.log('videos', videos)
      // console.log('news', news)
      // console.log('newsletter', newsletter)
      // console.log('series', series)
      this.videos = videos
      this.news = news
      this.newsletter = newsletter
      this.series = series
      this.books = books
    },
  },
}
</script>

<style lang="scss" scoped></style>
