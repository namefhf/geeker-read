<template>
  <div class="favorite">
    <el-row :gutter="20">
      <el-col :sm="16">
        <div class="total">
          <p>我的喜欢(共{{ count }}条)</p>
        </div>
        <el-tabs v-model="activeName">
          <el-tab-pane label="post" name="first">
            <article-list :list="posts" />
          </el-tab-pane>
          <el-tab-pane label="video" name="second">
            <video-list :list="videos" />
          </el-tab-pane>
          <el-tab-pane label="book" name="third">
            <book-list :list="books" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :sm="8" class="hidden-xs-only">
        <div style="padding:12px 0"><official-list /></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getFavorites } from '../../api/user'
import ArticleList from '../../components/article-list'
import OfficialList from '../../components/official-list'
import BookList from '../BookStore/components/BookList'
import VideoList from '../SeriesDetail/components/VideoList'
export default {
  name: 'MyFavorite',
  components: {
    ArticleList,
    OfficialList,
    BookList,
    VideoList,
  },
  data() {
    return {
      lists: [],
      count: 0,
      activeName: 'first',
      posts: [],
      videos: [],
      books: [],
    }
  },
  computed: {},
  created() {
    this.getData()
  },
  mounted() {},
  methods: {
    async getData() {
      const {
        data: {
          data: { articles, count },
        },
      } = await getFavorites()
      //   console.log('articles', articles)
      //   console.log('count', count)
      this.count = count
      this.lists = articles
      const posts = this.lists.filter((item) => {
        return item.article.type === 'post'
      })
      const videos = this.lists.filter((item) => {
        return item.article.type === 'video'
      })
      const books = this.lists.filter((item) => {
        return item.article.type === 'book'
      })

      this.videos = videos
      // 我炸了。。。。。
      posts.forEach((item) => {
        item.article.isLiked = item.isLiked
      })
      posts.forEach((item, index) => {
        posts[index] = posts[index].article
      })
      this.posts = posts
      books.forEach((item) => {
        item.article.isLiked = item.isLiked
      })
      books.forEach((item, index) => {
        books[index] = books[index].article
      })
      this.books = books
      videos.forEach((item) => {
        item.article.isLiked = item.isLiked
      })
      videos.forEach((item, index) => {
        videos[index] = videos[index].article
      })
      this.videos = videos
      // console.log('video', this.videos)
    },
  },
}
</script>

<style lang="scss" scoped>
.total {
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  background-color: #ebecf0;
  padding: 8px;
  border-radius: 4px;
  p {
    color: #253858;
    font-size: 0.875rem;
    font-weight: 500;

    background-color: #ebecf0;
  }
}
::v-deep .el-tabs .el-tabs__active-bar {
  background-color: #7af3c1;
}
::v-deep .el-tabs .el-tabs__item.is-active {
  color: #000000;
}
::v-deep .el-tabs__item:hover {
  color: #000000;
}
</style>
