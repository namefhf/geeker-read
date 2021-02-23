<template>
  <div class="video-item">
    <div class="l">
      <div class="head">
        <div class="avatar">
          <img
            src="https://geeker-cdn.devhub.top/assets/favicon_video_youtube.png"
            alt=""
            width="22"
            height="22"
          />
        </div>
        <p>
          <span>
            <a href="" class="link-hover title-primary">{{ item.siteName }}</a>
          </span>
          /
          <span>
            <a href="" class="link-hover title-primary">
              {{ item.authors[0] }}
            </a>
          </span>
          <span>({{ item.publishedAt | dateFormate }})</span>
        </p>
      </div>

      <h2>
        <a :href="item.url" class="link-hover" target="_blank">
          {{ item.title }}
        </a>
      </h2>
      <p class="series-name" v-if="item.series.length">
        <router-link
          title="专栏"
          :to="`/series/${item._id}`"
          v-for="(item, index) in item.series"
          :key="index"
        >
          <svg
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM9.07 16L12 14.12 14.93 16l-.89-3.36 2.69-2.2-3.47-.21L12 7l-1.27 3.22-3.47.21 2.69 2.2z"
            ></path>
          </svg>
          {{ item.name }}
        </router-link>
      </p>

      <div class="bottom">
        <div class="like" @click="handleClick(item)">
          <svg
            :class="{ liked: item.isLiked }"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
            ></path>
          </svg>
          <span>{{ item.likeCount }}人喜欢</span>
        </div>
        <p class="tags">
          <router-link
            :to="`/topic/${item.name}`"
            class="link-hover"
            v-for="(item, index) in item.topics"
            :key="index"
          >
            #{{ item.name }}
          </router-link>
        </p>
      </div>
    </div>
    <div class="r" v-if="item.cover">
      <div class="vido-card">
        <a href="">
          <div
            class="video-info"
            :style="
              `background-image: url('https://geeker-cdn.devhub.top/cover/${item.cover}')`
            "
          >
            <svg
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              ></path>
            </svg>
            <span>{{ item.duration }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import likeOperate from '../../../mixins/likeMixin'
export default {
  name: 'VideoItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    // console.log(this.$route.params.id)
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
.video-item {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #dfe1e6;
  border-radius: 0;
  background-color: #fdfdfd;
  .l {
    width: 60%;
    .head {
      display: flex;
      align-items: center;
      padding-bottom: 12px;
      .avatar {
        margin-right: 8px;
      }
      p {
        color: #42526e;
        font-size: 0.875rem;
        font-weight: 400;
      }
    }
    h2 {
      font-weight: bold;
      font-size: 1.15rem;
      color: #172b4d;
      line-height: 1.6;
      a {
        word-break: break-all;
        color: #172b4d;
      }
    }
    .series-name {
      margin-top: 16px;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.43;
      a {
        color: #0065ff;
        display: inline-block;
        line-height: 1.85;
        margin-right: 16px;
        svg {
          font-size: 17px;
          vertical-align: bottom;
          fill: currentColor;
          width: 1em;
          height: 1em;
          display: inline-block;
          font-size: 1.5rem;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          flex-shrink: 0;
          user-select: none;
        }
      }
    }
    .bottom {
      display: flex;
      margin-top: 16px;
      align-items: center;
      color: #42526e;
      .like {
        cursor: pointer;
        white-space: nowrap;
        margin-right: 16px;

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
        span {
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.43;
        }
      }
      .tags {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.43;
        a {
          color: #42526e;
          margin-right: 12px;
        }
      }
    }
  }
  .r {
    flex-grow: 1;
    flex-shrink: 0;
    .vido-card {
      padding: 8px;
      .video-info {
        cursor: pointer;
        height: 130px;
        @media (max-width: 599.95px) {
          height: 80px;
        }
        display: block;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 1;
        overflow: hidden;
        position: relative;
        margin-top: 5px;
        border-radius: 4px;
        background-color: #0052cc10;
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
          font-size: 1.5rem;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          flex-shrink: 0;
          user-select: none;
          cursor: pointer;
        }
        span {
          color: #fff;
          right: 0.25rem;
          bottom: 0.25rem;
          padding: 2px 5px;
          position: absolute;
          font-size: 12px;
          border-radius: 5px;
          background-color: #00000090;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.43;
        }
      }
    }
  }
}
</style>
