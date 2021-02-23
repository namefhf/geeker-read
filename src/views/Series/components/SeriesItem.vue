<template>
  <div v-if="seriesLists.length">
    <div class="series-item" v-for="(item, index) in seriesLists" :key="index">
      <router-link :to="`/series/${item._id}`">
        <div
          class="img-wrap"
          :style="
            `background-image:url('https://geeker-cdn.devhub.top/cover/${item.cover_full}')`
          "
        >
          <svg
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style="position: absolute; bottom: 1rem; left: 1rem; color: rgb(38, 132, 255); font-size: 2.5rem;"
          >
            <path
              d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"
            ></path>
          </svg>
        </div>
      </router-link>
      <div class="content">
        <h2>
          <router-link :to="`/series/${item._id}`">
            {{ item.name }}
          </router-link>
        </h2>
        <div class="desc">
          <blockquote>
            <p>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style="transform: rotate(180deg);"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
              </svg>
              {{ item.summary }}
              <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
              </svg>
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSeries } from '../../../api/series'
export default {
  name: 'SeriesItem',
  data() {
    return {
      seriesLists: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const {
        data: { data },
      } = await getSeries()
      // console.log(data)
      this.seriesLists = data
    },
  },
}
</script>

<style lang="scss" scoped>
.series-item {
  border: 2px solid #000000;
  // display: flex;
  box-shadow: none;
  border-radius: 20px;
  margin-bottom: 16px;
  background-color: #fdfdfd;
  border-right-width: 8px;
  border-bottom-width: 8px;
  overflow: hidden;
  .img-wrap {
    background-color: rgb(51, 51, 51);
    background-size: cover;
    height: 250px;
    position: relative;
    background-position: center center;
    @media (max-width: 599.95px) {
      height: 180px !important;
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
    }
  }
  .content {
    padding: 24px 16px;
    h2 {
      font-weight: bold;
      font-size: 1.15rem;
      color: #172b4d;
      line-height: 1.6;
      a {
        color: #091e42;
        background-size: 100% 210%;
        background-image: linear-gradient(
          transparent 0%,
          transparent calc(50% - 9px),
          #b3d4ff calc(50% - 9px),
          #b3d4ff 100%
        );
        &:visited {
          color: #7a869a;
        }
      }
    }
    .desc {
      margin-top: 16px;
      blockquote {
        color: #42526e;
        svg {
          font-size: 1.25rem;
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
  }
}
</style>
