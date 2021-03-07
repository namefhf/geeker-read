<template>
  <div class="list-item">
    <div class="author-info">
      <div class="avatar">
        <img
          :src="`https://geeker-cdn.devhub.top/${item.user.avatar}`"
          width="35"
          height="35"
          alt="favicon"
        />
      </div>
      <div class="info">
        <p class="author">
          <a
            :href="`https://www.weibo.com/${item.user.id}`"
            target="_blank"
            class="link-hover"
          >
            极客阅读号
          </a>
        </p>
        <p class="desc">
          jikeyuedu.cn
          官微：极客阅读，一站式的阅读到来自互联网技术大咖的文章。公众号：极客阅读号
        </p>
      </div>
    </div>
    <div class="article-wrap">
      <div class="article-content">
        <p>{{ item.text }}&#8203;</p>
      </div>
      <div class="pic" v-if="item.pictures.length">
        <img
          v-for="(item, index) in item.pictures"
          :key="index"
          :src="
            `https://geeker-cdn.devhub.top/${item}?imageView2/0/q/100|imageslim`
          "
          alt="配图"
        />
      </div>
    </div>
    <template v-if="item.retweeted">
      <retweet-item :item="item.retweeted" />
    </template>
  </div>
</template>

<script>
import RetweetItem from './retweet-item'
export default {
  name: 'OffcialListItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    RetweetItem
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  background-color: #fafbfc;
  &::after {
    color: #c1c7d0;
    width: 100%;
    height: 10px;
    content: '';
    display: block;
    font-size: 10px;
    background: repeating-linear-gradient(
      45deg,
      #344563,
      #344563 10px,
      #172b4d 10px,
      #172b4d 20px
    );
    text-align: center;
    letter-spacing: 20px;
    background-color: #344563;
  }
}
.author-info {
  padding: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebecf0;
  background-color: #fafbfc;
  .avatar {
    margin-right: 16px;
    img {
      width: 35px;
      height: 35px;
      font-size: 14px;
      border-radius: 50%;
    }
  }
  .info {
    .author {
      font-weight: bold;
      font-size: 0.875rem;
      line-height: 1.43;
      a {
        color: #42526e;
      }
    }
  }
  .desc {
    width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.75rem;
  }
}
.article-wrap {
  padding: 0 16px;
  .article-content {
    color: #344563;
    font-size: 14px !important;
    p {
      margin: 1rem 0;
      line-height: 1.6;
      word-break: break-all;
    }
  }
  .pic {
    margin: 10px 0;
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    //   margin: 16px 0;
    img {
      display: block;
      max-width: 100%;
    }
  }
}
</style>
