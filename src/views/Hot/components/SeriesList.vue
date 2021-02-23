<template>
  <div class="series-wrap" v-if="list.length">
    <h3>
      <a href="" class="title-primary">
        专栏
        <svg
          class="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          style="vertical-align: sub;"
        >
          <path
            d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
          ></path>
        </svg>
      </a>
    </h3>
    <div class="series-list">
      <router-link
        :to="`/series/${item._id}`"
        target="_blank"
        v-for="(item, index) in list"
        :key="index"
      >
        <div
          class="cover"
          :style="
            `background-image:url('https://geeker-cdn.devhub.top/cover/${item.cover_full}')`
          "
        ></div>
        <h4>{{ item.name }}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeriesList',
  props: {
    list: {
      type: Array,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.series-wrap {
  h3 {
    font-weight: bold;
    font-size: 18px;
    margin-block-end: 1em;
    svg {
      width: 18px;
      height: 1em;
      font-size: 1.5rem;
      user-select: none;
    }
  }
  .series-list {
    a {
      border: 1px solid #ebecf0;
      display: block;
      overflow: hidden;
      position: relative;
      border-radius: 8px;
      margin-bottom: 16px;
      .cover {
        height: 145px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      h4 {
        font-weight: bold;
        color: #ffffff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
        padding: 8px 16px;
        font-size: 14px;
        background-color: #000000bb;
      }
    }
  }
}
</style>
