<template>
  <div class="list-item">
    <el-row>
      <el-col :sm="4" :xs="4">
        <p class="cate-name">{{ item.caterage }}</p>
      </el-col>
      <el-col :sm="20" :xs="20">
        <div class="topics-name">
          <div
            class="name-item"
            :class="{ selected: followingTopicId.indexOf(item._id) > -1 }"
            v-for="(item, index) in item.lists"
            :key="index"
            @click="handleClick(item._id)"
          >
            {{ item.name }}({{ item.articles }})
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import bus from '../../../bus'
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    followingTopicId: {
      //已关注的话题id
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {
    handleClick(id) {
      // console.log(id)
      const index = this.followingTopicId.indexOf(id)
      if (index > -1) {
        this.followingTopicId.splice(index, 1)
      } else {
        this.followingTopicId.push(id)
      }
      //   bus.$emit('sendId', {
      //     followingTopicId: this.followingTopicId,
      //     count: this.followingTopicId.length,
      //   })
      bus.$emit('followingTopicId', this.followingTopicId)
      bus.$emit('count', this.followingTopicId.length)
    },
  },
}
</script>

<style lang="scss" scoped>
.list-item {
  padding: 1rem 0 0;
  border-bottom: 1px solid #dfe1e6;
  .cate-name {
    font-weight: bold;
    font-size: 0.875rem;
    line-height: 1.43;
  }
}
.topics-name {
  display: flex;
  flex-wrap: wrap;

  .name-item {
    border: 1px solid #6b778c;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    text-transform: initial;
    padding: 5px 10px;
    color: #42526e;
    font-size: 13px;
    cursor: pointer;
    user-select: none;
    &:hover {
      background-color: rgba(23, 43, 77, 0.04);
    }
    &.selected {
      color: #00875a;
      border-color: #00875a;
      background-color: #abf5d1a0;
    }
  }
}
</style>
