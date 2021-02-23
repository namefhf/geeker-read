<template>
  <div class="news-card" v-if="list.length">
    <h3>
      <a href="" class="title-primary">
        <slot name="title"></slot>
        <svg
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
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <a target="_blank" :href="item.url" class="title-primary">
          {{ item.title }}
        </a>
        <em>({{ item.publishedAt | dateFormate }})</em>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.news-card {
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 12px;
  background-color: #f8f8f8;
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-block-end: 1em;
    svg {
      width: 18px;
      height: 1em;
      font-size: 1.5rem;
      user-select: none;
    }
  }
  ul {
    li {
      margin-left: 16px;
      margin-bottom: 10px;
      list-style: square;
      a {
        font-size: 14px;
      }
      em {
        color: #6b778c;
        font-size: 12px;
        font-style: normal;
        margin-left: 5px;
      }
    }
  }
}
</style>
