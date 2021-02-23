<template>
  <div class="following-wrap">
    <el-row :gutter="20">
      <el-col :sm="16">
        <!-- 登录时显示 -->
        <div v-if="$store.state.user">
          <div class="top-head" v-if="flag">
            <p>以下内容来自您关注的来源、作者或话题</p>

            <el-button type="info" size="small" @click="handleClick">
              关注话题
            </el-button>
          </div>
          <div class="top-head" v-else>
            <p>选择你关注的话题：已选择（{{ count }}个）</p>
            <el-button
              type="danger"
              size="small"
              :disabled="disabled"
              :loading="isLoading"
              @click="handleSave"
            >
              保存话题
            </el-button>
          </div>
          <component
            :is="component"
            :list="articleLists"
            @change="disabled = $event"
          />
        </div>
        <!-- 未登录时显示 -->
        <div class="not-signin" v-else>
          <p>
            <router-link to="/signin" class="link-hover title-primary">
              登录
            </router-link>
            后可查看你关注的文章
          </p>
        </div>
      </el-col>
      <el-col :sm="8" class="hidden-xs-only">
        <official-list />
        <hot-topics />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OfficialList from '../../components/official-list'
import HotTopics from '../../components/hot-topics'
import TopicList from './components/TopicList'
import ArticleList from '../../components/article-list'
import NoData from './components/NoData'
import bus from '../../bus'
import { saveFollowingTopic } from '../../api/user'
import { Message } from 'element-ui'
import { getFollowingArticle } from '../../api/article'
export default {
  name: 'FollowingIndex',
  components: {
    OfficialList,
    HotTopics,
    TopicList,
    ArticleList,
    count: '',
    NoData,
  },
  data() {
    return {
      component: 'ArticleList',
      articleLists: [],
      flag: true,
      disabled: true,
      selectedTopicId: [],
      count: 0, //已选话题数量
      isLoading: false, //保存按钮loading
    }
  },
  created() {
    bus.$on('followingTopicId', (value) => {
      this.selectedTopicId = value
    })
    bus.$on('count', (value) => {
      this.count = value
    })
    // console.log('父', this.selectedTopicId)
    if (this.$store.state.user) {
      this.getData()
    }
  },
  beforeDestroy() {
    // bus.$off('selectedTopicId')
  },
  methods: {
    handleClick() {
      this.count = 0
      this.component =
        this.component === 'TopicList' ? 'ArticleList' : 'TopicList'
      this.flag = !this.flag
    },
    async handleSave() {
      // console.log(this.selectedTopicId)
      this.isLoading = true
      const { data } = await saveFollowingTopic(this.selectedTopicId)
      if (data.statusCode === 200) {
        this.isLoading = false
        Message.success({
          message: '保存成功',
        })
      }
      // console.log(data)
      this.flag = !this.flag
      this.disabled = true
      this.component =
        this.component === 'TopicList' ? 'ArticleList' : 'TopicList'
      this.getData()
    },
    async getData() {
      const {
        data: {
          data: { articles },
        },
      } = await getFollowingArticle({ language: '' })
      this.articleLists = articles
      if (articles.length === 0) {
        this.component = NoData
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.top-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}
.not-signin {
  margin: 40px 0;
  text-align: center;
  p {
    color: #97a0af;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      display: inline-block;
      width: 15px;
      height: 1px;
      background: #97a0af;
    }
    &::after {
      content: '';
      display: inline-block;
      width: 15px;
      height: 1px;
      background: #97a0af;
    }
  }
}
</style>
