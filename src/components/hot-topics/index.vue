<template>
  <div class="hot-topics" v-if="hotTopicList.length">
    <div class="head">
      <p>热门话题</p>
    </div>
    <div class="topic-list">
      <ul>
        <li v-for="(item, index) in hotTopicList" :key="index">
          <p
            :style="
              `width:${(item.articles / 20000) * 100}%;
                background-color: rgba(9, 30, 66, ${item.articles / 25000})`
            "
          ></p>
          <router-link :to="`/topic/${item.name}`">
            <div>
              <span style="font-size: 0.95rem;">{{ item.name }}</span>
              <span style="opacity: 0.65; font-size: 0.85rem;">
                ({{ item.articles }})
              </span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getTopics } from '../../api/topics'
export default {
  name: 'HotTopics',
  data() {
    return {
      hotTopicList: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const {
        data: { data },
      } = await getTopics()
      // console.log(data)
      this.hotTopicList = data
    },
  },
}
</script>

<style lang="scss" scoped>
.hot-topics {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  .head {
    padding: 8px 16px;
    background-color: #f4f5f7;
    p {
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.75;
    }
  }
  .topic-list {
    background-color: #f4f5f7;
    ul {
      li {
        position: relative;
        &:nth-child(-n + 2) {
          a {
            color: rgb(255, 255, 255);
          }
        }
        p {
          position: absolute;
          //   background-color: rgba(9, 30, 66, 0.85);
          //   width: 100%;
          height: 100%;
        }
        a {
          padding-left: 16px;
          padding-top: 10px;
          padding-bottom: 10px;
          display: block;
          position: relative;
          color: #172b4d;
          position: relative;
        }
      }
    }
  }
}
</style>
