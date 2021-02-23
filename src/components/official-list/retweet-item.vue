<template>
  <div class="retweet-item">
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
            {{ item.user.name }}
          </a>
        </p>
        <p class="desc">
          {{ item.user.description }}
        </p>
      </div>
    </div>
    <div class="article-wrap">
      <div class="atticle-content">
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
  </div>
</template>

<script>
export default {
  name: 'RetweetItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.retweet-item {
  background-color: #dfe1e6;
}
.author-info {
  padding: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c1c7d0;
  background-color: #dfe1e6;
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
  .atticle-content {
    color: #344563;
    font-size: 14px !important;
    p {
      margin-top: 1rem;
      line-height: 1.6;
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
