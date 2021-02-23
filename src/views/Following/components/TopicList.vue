<template>
  <div class="topic-list" v-loading="loading" element-loading-text="拼命加载中">
    <list-item
      v-for="(item, index) in lists"
      :key="index"
      :item="item"
      :followingTopicId="followingTopicId"
    />
  </div>
</template>

<script>
import { getAllTopics } from '../../../api/topics'
import { getFolloingTopic } from '../../../api/user'
import ListItem from './ListItem.vue'
import bus from '../../../bus'

export default {
  components: { ListItem },
  name: 'TopicList',
  data() {
    return {
      loading: true,
      lists: [],
      followingTopicId: [],
    }
  },
  created() {
    this.getTopicData()
    this.getFollowingData()
  },
  methods: {
    async getTopicData() {
      const {
        data: { data },
      } = await getAllTopics()

      let cates = []
      data.forEach((item) => {
        //获取所有分类
        if (cates.indexOf(item.category) < 0) {
          cates.push(item.category)
        }
      })
      //   console.log(cates)
      let neededArray = []
      cates.forEach((cate) => {
        let lists = []
        data.forEach((item) => {
          if (item.category === cate) {
            lists.push(item)
          }
        })
        neededArray.push({ caterage: cate, lists: lists })
        // console.log(lists)
      })
      //   console.dir(neededArray)
      this.lists = neededArray
      this.loading = false
    },
    async getFollowingData() {
      const {
        data: {
          data: { topics },
        },
      } = await getFolloingTopic()
      //   console.log(topics)
      let followingId = []
      topics.forEach((item) => {
        followingId.push(item._id)
      })
      this.followingTopicId = followingId
      // console.log(this.followingTopicId)
      this.$emit('change', false)
      bus.$emit('count', this.followingTopicId.length)
    },
  },
}
</script>

<style lang="scss" scoped></style>
