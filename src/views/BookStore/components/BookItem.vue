<template>
  <div class="book-item">
    <div class="pic">
      <a :href="item.url" target="_blank">
        <div
          :style="
            `background-image:url('https://geeker-cdn.devhub.top/cover/${item.cover}')`
          "
        ></div>
      </a>
    </div>
    <div class="info">
      <h2>
        <a :href="item.url" target="_blank" class="link-hover">
          {{ item.title }}
        </a>
      </h2>
      <div class="content">
        <div class="author">
          <p>
            <strong>作者：</strong>
            <a href="" class="link-hover">{{ item.authors[0] }}</a>
          </p>
          <p>
            <strong>出版社：</strong>
            <a href="" class="link-hover">{{ item.publisher }}</a>
          </p>
          <p>
            <strong>出版时间：</strong>

            {{ item.publishedAt | bookFormat }}
          </p>
        </div>
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
            {{ item.quote }}
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
            </svg>
          </p>
        </blockquote>
      </div>
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
        <p class="tags" v-if="item.topics.length">
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
  </div>
</template>

<script>
import likeOperate from '../../../mixins/likeMixin'
export default {
  name: 'BookItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
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
.book-item {
  padding: 16px;
  display: flex;
  border-bottom: 1px solid #dfe1e6;
  .pic {
    flex-basis: 25%;
    padding: 0 10px;
    flex-shrink: 0;
    @media screen and(max-width:960px) {
      display: none;
    }
    a {
      div {
        height: 160px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
  .info {
    flex: 1;
    width: calc(75% - 10px);
    h2 {
      font-weight: bold;
      font-size: 1.15rem;
      color: #172b4d;
      line-height: 1.6;

      a {
        color: #172b4d;
        &:visited {
          color: #7a869a;
        }
      }
    }
    .content {
      margin-top: 16px;
      margin-bottom: 16px;
      color: rgb(66, 82, 110);
      .author {
        display: flex;
        flex-wrap: wrap;
        p {
          margin-right: 1rem;
          color: #42526e;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.43;
          flex-shrink: 0;
          strong {
            font-weight: bold;
          }
          a {
            color: #42526e;
          }
        }
      }
      blockquote {
        color: #97a0af;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.43;
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
}
</style>
