<template>
  <div class="book-recommend" v-if="list.length">
    <h3>
      <router-link to="/book-store" class="title-primary">
        <slot name="title">好书推荐</slot>
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
      </router-link>
    </h3>
    <div class="book-list">
      <div class="book-item" v-for="(item, index) in list" :key="index">
        <a :href="item.url" target="_blank" :title="item.title">
          <div>
            <img
              :src="`https://geeker-cdn.devhub.top/cover/${item.cover}`"
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookRecommend',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.book-recommend {
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
  .book-list {
    display: flex;
    flex-wrap: wrap;
    .book-item {
      width: 50%;
      padding: 4px;
      box-sizing: border-box;
      img {
        height: 140px;
      }
    }
  }
}
</style>
