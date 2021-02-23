<template>
  <div class="article-list" v-if="list.length > 0">
    <div class="article-item" v-for="(item, index) in list" :key="index">
      <div class="head">
        <el-avatar size="small" style="margin-right:5px">
          {{ item.authors.length ? item.authors[0].substring(0, 1) : '无' }}
        </el-avatar>
        <!-- <div class="avatar">
          <img
            src="https://geeker-cdn.devhub.top/assets/favicon_weixin.png"
            alt=""
            class="avatar"
            width="22px"
            heigh="22px"
          />
        </div> -->
        <p>
          <span class="source" title="来源">
            <a href="" class="link-hover">{{ item.siteName }}</a>
          </span>
          <span class="author" title="作者">
            <template v-if="item.authors.length">/</template>

            <a href="" class="link-hover">{{ item.authors[0] }}</a>
          </span>
          <span class="time">({{ item.publishedAt | dateFormate }})</span>
        </p>
      </div>
      <h2>
        <span class="recommend" v-if="item.isRecommended">推荐</span>
        <a
          :href="item.url"
          target="_blank"
          class="title-primary link-hover"
          :class="{ recommend: item.isRecommended }"
        >
          {{ item.title }}
        </a>
      </h2>
      <div class="bottom">
        <div class="like" @click="handleClick(item)">
          <svg
            :class="{ liked: item.isLiked }"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
            ></path>
          </svg>
          <span>{{ item.likeCount }}人喜欢</span>
        </div>
        <div class="tag" v-if="item.topics.length">
          <a
            href=""
            class="link-hover"
            v-for="(item, index) in item.topics"
            :key="index"
          >
            #{{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- 骨架 -->
  <div class="article-list" v-else>
    <div class="article-item Skeleton" v-for="(item, index) in 6" :key="index">
      <div class="head">
        <div
          style="width:20px;height:20px;border-radius:50%;margin-right:10px;background-color: rgba(0, 0, 0, 0.11);"
        ></div>
        <p
          style="width:40%;height: 20px;background-color: rgba(0, 0, 0, 0.11);"
        ></p>
      </div>
      <h2
        style="width: 80%;
    height: 20px;background-color: rgba(0, 0, 0, 0.11);"
      ></h2>
      <div
        class="bottom"
        style="width: 30%;
    height: 20px;background-color: rgba(0, 0, 0, 0.11);"
      ></div>
    </div>
  </div>

  <!-- <div>
      无数据
    </div> -->
</template>

<script>
import likeOperate from '../../mixins/likeMixin'
export default {
  name: 'ArticleList',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isShow: true,
    }
  },
  mixins: [likeOperate],
  methods: {
    handleClick(item) {
      this.handleLike(item)
    },
  },
}
</script>

<style lang="scss" scoped>
.article-list {
  border: 1px solid rgb(223, 225, 230);
  border-radius: 8px;
  overflow: hidden;
}
.article-item {
  border-bottom: 1px solid #dfe1e6;
  &:last-child {
    border: none;
  }
  border-radius: 0;
  background-color: #fdfdfd;
  padding: 16px;
  .head {
    display: flex;
    align-items: center;
    padding-bottom: 12px;
    // .avatar {
    //   margin-right: 8px;
    // }
    p {
      color: #42526e;
      font-size: 0.875rem;
    }
    a {
      color: #42526e;
    }
  }
  h2 {
    font-weight: bold;
    font-size: 1.15rem;
    line-height: 1.6;
    span.recommend {
      color: #0052cc;
      display: inline-block;
      padding: 2px 8px;
      font-size: 0.8rem;
      font-weight: normal;
      margin-right: 6px;
      border-radius: 15px;
      vertical-align: middle;
      background-color: #deebff;
    }
    a.recommend {
      background-size: 100% 210%;
      background-image: linear-gradient(
        transparent 0%,
        transparent calc(50% - 9px),
        #79f2c0 calc(50% - 9px),
        #79f2c0 100%
      );
    }
    a:visited {
      color: #7a869a;
    }
  }
  .bottom {
    margin-top: 16px;
    display: flex;
    align-items: center;
    .like {
      margin-right: 16px;
      white-space: nowrap;
      cursor: pointer;
      span {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.43;
      }

      svg {
        fill: currentColor;
        width: 1em;
        height: 1em;
        display: inline-block;
        font-size: 1.5rem;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        flex-shrink: 0;
        user-select: none;
        margin-right: 6px;
        vertical-align: middle;
        &.liked {
          fill: #ff5630;
        }
      }
    }
    .tag {
      font-weight: 400;
      line-height: 1.43;
      margin-right: 12px;
      font-size: 0.875rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    a {
      color: #42526e;
    }
  }
}
</style>
