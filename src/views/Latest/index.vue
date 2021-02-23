<template>
  <div class="latest-index">
    <el-row :gutter="20">
      <el-col :sm="16">
        <!-- 话题 -->
        <div class="topics-warp">
          <span
            class="topic-item"
            v-for="(item, index) in topicsList"
            :key="index"
            @click="handleClick(item.topics)"
          >
            <router-link :to="`/latest/${item.path}`" class="title-primary">
              {{ item.name }}
            </router-link>
          </span>
        </div>
        <!--  -->
        <div class="switch-btn" style="margin:10px 0">
          <span
            style="color: #172b4d;font-size: .85rem;font-weight: bold;margin-right:5px"
          >
            只看中文
          </span>
          <el-switch
            v-model="flag"
            active-color="#8792A3"
            inactive-color="#9F9F9F"
            @change="handleSwitch"
          ></el-switch>
        </div>
        <article-list :list="latestList" />
      </el-col>
      <el-col :sm="8" class="hidden-xs-only">
        <official-list />
        <hot-topics />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getTopics } from '../../api/topics'
import { getLatest } from '../../api/article'
import ArticleList from '../../components/article-list'
import OfficialList from '../../components/official-list'
import HotTopics from '../../components/hot-topics'

export default {
  name: 'LatestIndex',
  components: {
    ArticleList,
    OfficialList,
    HotTopics,
  },
  data() {
    return {
      topicsList: [
        {
          id: 0,
          path: '',
          name: '全部',
          topics: [],
        },
        {
          id: 1,
          name: '前端',
          path: 'web',
          topics: [
            '5d9c8e24e109bff0108fe4d9',
            '5d9c9022e109bff0108fe4dd',
            '5d9c9085e109bff0108fe4e4',
            '5d9c907de109bff0108fe4e3',
          ],
        },
        {
          id: 2,
          name: 'Node.js',
          path: 'nodejs',
          topics: [
            '5d9c9032e109bff0108fe4de',
            '5d9c9436e109bff0108fe4f1',
            '5d9c943de109bff0108fe4f2',
          ],
        },
        {
          id: 3,
          name: 'Java',
          path: 'java',
          topics: ['5d9c903be109bff0108fe4df', '5d9c9396e109bff0108fe4ec'],
        },
        {
          id: 4,
          name: 'Python',
          path: 'python',
          topics: ['5d9c904be109bff0108fe4e1'],
        },
        {
          id: 5,
          name: '架构',
          path: 'architecture',
          topics: [
            '5d9c8cb0e109bff0108fe4d4',
            '5d9c8eeee109bff0108fe4da',
            '5dde29a0539769a7727afa51',
            '5e37df498d15502cfd8f84d2',
          ],
        },
        {
          id: 6,
          name: '数据库',
          path: 'database',
          topics: [
            '5d9c9345e109bff0108fe4eb',
            '5d9c951ce109bff0108fe4fa',
            '5d9c9608e109bff0108fe504',
            '5d9c95e9e109bff0108fe502',
          ],
        },
        {
          id: 7,
          name: '大数据',
          path: 'BigData',
          topics: [
            '5d9c8ceae109bff0108fe4d8',
            '5f32358f27017038a269987b',
            '5d9d2c6c2cfd20fdc59cae5d',
            '5d9d2c552cfd20fdc59cae5c',
            '5d9c9608e109bff0108fe504',
            '5d9d2c9a2cfd20fdc59cae60',
            '5dce884af38aae04747302a2',
            '5dcf921ef38aae04747302a8',
            '5d9d2cc12cfd20fdc59cae62',
            '5fa4a03b26df9a16e2763488',
          ],
        },
        {
          id: 8,
          name: '算法',
          path: 'algorithm',
          topics: ['5d9c8ca5e109bff0108fe4d3'],
        },
        {
          id: 9,
          name: '容器技术',
          path: 'docker',
          topics: [
            '5d9c8f68e109bff0108fe4db',
            '5d9d2f312cfd20fdc59cae70',
            '5d9d2f202cfd20fdc59cae6f',
          ],
        },
        {
          id: 10,
          name: '机器学习',
          path: 'MachineLearning',
          topics: ['5dbcccd0d1a6600314832823', '5e37e35a8d15502cfd8f84f4'],
        },
        {
          id: 11,
          name: '移动开发',
          path: 'mobiledevelope',
          topics: [
            '5dc580cb61037d71b5c8e920',
            '5d9d313f2cfd20fdc59cae81',
            '5d9d31462cfd20fdc59cae82',
          ],
        },
        {
          id: 12,
          name: '交互设计',
          path: 'design',
          topics: ['5d9d36532cfd20fdc59cae94', '5f32331827017038a269986f'],
        },
        {
          id: 13,
          name: '安全',
          topics: ['5d9d36532cfd20fdc59cae94', '5f32331827017038a269986f'],
        },
        {
          id: 14,
          name: '运维',
          path: ' DevOps',
          topics: [
            '5d9d2e422cfd20fdc59cae68',
            '5d9d2e222cfd20fdc59cae66',
            '5d9c8cd8e109bff0108fe4d7',
          ],
        },
        {
          id: 15,
          name: '测试',
          path: 'test',
          topics: ['5d9d32e72cfd20fdc59cae91'],
        },
        {
          id: 16,
          name: '科普',
          path: 'Popularscience',
          topics: ['5e104246a5e32e035eef8c4c'],
        },
      ],
      latestList: [],
      flag: JSON.parse(localStorage.getItem('flag')) || false,
      currentTopic: [],
    }
  },
  computed: {
    language() {
      if (this.flag == true) {
        return 'zh-cn'
      } else {
        return ''
      }
    },
  },
  created() {
    // console.log('language', this.language)
    this.getTopicLatest()
    // console.log('local', typeof JSON.parse(localStorage.getItem('flag')))
    // console.log('data', this.flag)
    // console.log('language', this.language)
  },
  methods: {
    async getTopicLatest() {
      this.latestList = []
      const {
        data: { data },
      } = await getLatest({
        topics: this.currentTopic,
        language: this.language,
      })
      // console.log(data)
      this.latestList = data
    },
    async handleClick(topics) {
      // console.log('click')
      this.currentTopic = topics
      this.getTopicLatest({
        topics: this.currentTopic,
        language: this.language,
      })
    },
    handleSwitch() {
      // this.language = this.language == 'zh-cn' ? '' : 'zh-cn'
      // this.flag = !this.flag
      localStorage.setItem('flag', JSON.stringify(this.flag))
      this.getTopicLatest()
    },
  },
}
</script>

<style lang="scss" scoped>
.topic-item {
  display: inline-block;
  font-size: 0.8rem;
  margin-right: 8px;
  line-height: 1.43;
  border-radius: 20px;
  margin-bottom: 8px;
  background-color: #dfe1e6;
  overflow: hidden;
  a {
    display: inline-block;
    padding: 4px 12px;
    &.router-link-exact-active {
      color: white;
      background-color: #344563;
    }
  }
}
</style>
