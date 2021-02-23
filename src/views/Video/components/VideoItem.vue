<template>
  <div class="video-item">
    <a :href="item.url" target="_blank">
      <div
        class="video-info"
        :style="
          `background-image: url('https://geeker-cdn.devhub.top/cover/${item.cover}')`
        "
      >
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          ></path>
        </svg>
        <span class="video-time">
          {{ item.duration }}
        </span>
      </div>
    </a>
    <div class="content">
      <h3 class="video-title title-primary">{{ item.title }}</h3>
      <div class="tags" v-if="item.topics.length">
        <p>
          <a
            class="link-hover"
            href=""
            v-for="(item, index) in item.topics"
            :key="index"
          >
            #{{ item.name }}
          </a>
        </p>
      </div>
      <div class="category">
        <span>
          <img
            src="https://geeker-cdn.devhub.top/assets/favicon_video_youtube.png"
            width="20"
            height="20"
            alt="favicon"
            class="favicon"
          />
          <a class="link-hover" href="/source/YouTube">
            YouTube
          </a>
          <span>
            &nbsp;/&nbsp;
            <a class="link-hover" href="/author/CodeLit">
              CodeLit
            </a>
          </span>
        </span>
        <div class="like" @click="handleClick(item)">
          <svg
            :class="{ liked: item.isLiked }"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            ></path>
          </svg>
          <span>{{ item.likeCount }}人喜欢</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { like } from '../../../api/article'
export default {
  name: 'VideoItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    async handleClick(item) {
      try {
        await like(item._id)

        if (item.isLiked) {
          item.likeCount--
        } else {
          item.likeCount++
        }
        item.isLiked = !item.isLiked
      } catch (error) {
        // console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.video-item {
  overflow: hidden;
  border-radius: 8px;
  margin: 10px 0;
  border: 1px solid #dfe1e6;
  .video-info {
    height: 250px;

    position: relative;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    svg {
      left: 0.5rem;
      color: #ffc400;
      bottom: 0.5rem;
      position: absolute;
      font-size: 2rem;
      fill: currentColor;
      width: 1em;
      height: 1em;
      display: inline-block;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      flex-shrink: 0;
      user-select: none;
    }
    .video-time {
      color: #fff;
      right: 0.25rem;
      bottom: 0.25rem;
      padding: 2px 5px;
      position: absolute;
      font-size: 12px;
      border-radius: 5px;
      background-color: #00000090;
    }
  }
  .content {
    padding: 16px;
    background-color: #f4f5f7;
    .video-title {
      font-size: 15px;
      font-weight: bold;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .tags {
      margin: 16px 0;
      p {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.43;
        a {
          color: #42526e;
          line-height: 1.85;
          margin-right: 12px;
        }
      }
    }
    .category {
      display: flex;
      margin-top: 16px;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      span {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.43;
        color: #42526e;
        img {
          margin-right: 8px;
          vertical-align: bottom;
        }
        a {
          color: #42526e;
          font-size: 0.875rem;
          font-family: -apple-system, system-ui, BlinkMacSystemFont,
            Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
            Arial, sans-serif;
          font-weight: 400;
          line-height: 1.43;
        }
      }
      .like {
        cursor: pointer;
        white-space: nowrap;
        margin-right: 0px;
        color: #42526e;
        svg {
          margin-right: 6px;
          vertical-align: bottom;
          font-size: 1.25rem;
          fill: currentColor;
          width: 1em;
          height: 1em;
          display: inline-block;
          font-size: 1.5rem;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          flex-shrink: 0;
          user-select: none;
          &.liked {
            fill: #ff5630;
          }
        }
      }
    }
  }
}
</style>
