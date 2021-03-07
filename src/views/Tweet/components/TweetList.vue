<template>
  <div class="tweet-list-wrap" v-if="tweetList.length">
    <tweet-item
      v-for="(item, index) in tweetList"
      :key="index"
      :item="item"
    ></tweet-item>

    <!-- <div class="tweet-item  " v-for="(item, index) in tweetList" :key="index">
      <div class="head">
        <div class="avatar">
          <img
            :src="`https://geeker-cdn.devhub.top/${item.user.avatar}`"
            alt=""
            width="35;"
            height="35;"
          />
        </div>
        <div class="content">
          <p>
            <span class="author">
              <a href="" class="link-hover">{{ item.user.name }}</a>
              <span style="rgb(107, 119, 140);">
                ({{ item.createdAt | dateFormate }}，来自：{{ item.source }})
              </span>
            </span>
          </p>
          <p class="desc" style="color: rgb(66, 82, 110);">
            {{ item.user.description }}
          </p>
        </div>
      </div>
      <div class="tweet-content">
        <p>
          {{ item.text }}
        </p>
        <div class="pics" v-if="item.pictures.length">
          <div class="item" v-for="(item, index) in item.pictures" :key="index">
            <img
              :src="
                `https://geeker-cdn.devhub.top/${item}?imageView2/0/q/100|imageslim`
              "
              alt=""
            />
          </div>
        </div>
        <div class="topics" v-if="item.topics.length">
          <template v-for="item in item.topics">
            <a :href="`/topic/${item.name}`" class="link-hover" :key="item._id">
              #{{ item.name }}
            </a>
          </template>
        </div>
      </div>








    </div> -->
  </div>
  <div class="tweet-list-wrap Skeleton" v-else>
    <div class="tweet-item  " v-for="(item, index) in 5" :key="index">
      <div class="head" style="width:calc(100% - 32px)">
        <div
          class="avatar"
          style="width:30px;height:30px;border-radius:50%;background-color: rgba(0, 0, 0, 0.11);"
        ></div>
        <div class="content" style="width:100%">
          <p
            style="width:60%;height:10px;background-color: rgba(0, 0, 0, 0.11);margin-bottom:10px"
          ></p>
          <p
            class="desc"
            style="width:40%;height:10px;background-color: rgba(0, 0, 0, 0.11);"
          ></p>
        </div>
      </div>
      <div class="tweet-content">
        <p
          style="width:90%;height:200px;background-color: rgba(0, 0, 0, 0.11);margin-bottom:10px"
        ></p>
        <div
          class="topics"
          style="width:40%;height:20px;background-color: rgba(0, 0, 0, 0.11);margin-bottom:10px"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTimeline } from '../../../api/tweet'
import TweetItem from './TweetItem'
export default {
  name: 'TweetList',
  components: {
    TweetItem
  },
  data() {
    return {
      tweetList: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const {
        data: { data }
      } = await getTimeline({ id: 0, limit: 20 })
      // console.log(data)
      this.tweetList = data
    }
  }
}
</script>

<style lang="scss" scoped>
.tweet-list-wrap {
  border: 1px solid rgb(223, 225, 230);
  border-radius: 8px;
  overflow: hidden;
  .tweet-item {
    border-bottom: 1px solid #dfe1e6;
  }
  .head {
    padding: 24px 16px 0 16px;
    display: flex;
    align-items: center;
    .avatar {
      margin-right: 16px;
      img {
        border-radius: 50%;
      }
    }
    .content {
      p {
        color: #42526e;
        .author {
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.43;
          a {
            color: #42526e;
            font-weight: 600;
          }
        }
      }
      .desc {
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.66;
      }
    }
  }
  .tweet-content {
    padding: 24px 16px;
    font-size: 1rem;
    color: #172b4d;
    font-weight: 500;
    line-height: 1.6;
    word-wrap: break-word;
    .pics {
      display: flex;
      margin-top: 10px;
      .item {
        margin-right: 10px;
        img {
          display: block;
          max-width: 100%;
        }
      }
    }
    .topics {
      margin-top: 10px;
      a {
        color: #42526e;
        margin-right: 12px;
      }
    }
  }
}
</style>
