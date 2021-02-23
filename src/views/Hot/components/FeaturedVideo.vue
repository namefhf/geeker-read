<template>
  <div class="featured-video" v-if="list.length">
    <h2>
      <a href="" class="link-hover title-primary">
        精选视频
        <svg focusable="false" viewBox="0 0 24 24" style="vertical-align: sub;">
          <path
            d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
          ></path>
        </svg>
      </a>
    </h2>
    <el-row>
      <el-col :sm="8" v-for="(item, index) in list" :key="index">
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
            <h3 class="video-title title-primary">{{ item.title }}</h3>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getFacets } from '@/api/article'
export default {
  name: 'FeaturedVideo',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  // data() {
  //   return {
  //     videoList: [],
  //   }
  // },
  created() {
    // this.getData()
  },
  methods: {
    // async getData() {
    //   const {
    //     data: {
    //       data: { videos },
    //     },
    //   } = await getFacets()
    //   console.log(videos)
    //   this.videoList = videos
    // },
  },
}
</script>

<style lang="scss" scoped>
.featured-video {
  margin-bottom: 28px;
  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    svg {
      fill: currentColor;
      width: 1em;
      height: 1em;
      display: inline-block;
      font-size: 1.5rem;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      user-select: none;
    }
  }
}
.video-item {
  padding: 8px;
  .video-info {
    border: 1px solid #ebecf0;
    height: 120px;
    @media (max-width: 768px) {
      height: 200px;
    }
    position: relative;
    border-radius: 8px;
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
  .video-title {
    font-size: 15px;
    font-weight: bold;
    margin-block-start: 1em;
  }
}
</style>
