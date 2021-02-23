<template>
  <div class="HomeIndex">
    <div class="navigation">
      <div class="nav-list">
        <router-link to="/following" class="nav-item link-hover">
          关注
        </router-link>
        &nbsp;|&nbsp;
        <router-link to="/hot" class="nav-item link-hover">
          热门
        </router-link>
        &nbsp;|&nbsp;
        <router-link to="/latest" class="nav-item link-hover">
          最新
        </router-link>
        &nbsp;|&nbsp;
        <router-link to="/tweet" class="nav-item link-hover">
          大咖说
        </router-link>
        &nbsp;|&nbsp;
        <router-link to="/series" class="nav-item link-hover">
          专栏
        </router-link>
        &nbsp;|&nbsp;
        <router-link to="/video" class="nav-item link-hover">
          视频
        </router-link>
        &nbsp;|&nbsp;
        <router-link to="/book-store" class="nav-item link-hover">
          书库
        </router-link>
        &nbsp;|&nbsp;
        <router-link to="/newsletter" class="nav-item link-hover">
          期刊
        </router-link>
      </div>
    </div>
    <router-view :key="$route.query.t"></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  created() {
    // console.log('enter')
    // console.log(this.$route)
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.navigation {
  //   border: 1px solid black;
  box-sizing: border-box;
  padding: 12px 0;
}
.nav-list {
  margin-top: 24px;
  color: #ddd;

  .nav-item {
    padding: 0 8px;
    color: #42526e;
    font-size: 1rem;
    margin-bottom: 10px;
    display: inline-block;
    &:first-child {
      padding-left: 0;
    }
    &.router-link-active {
      color: #172b4d;
      font-weight: bold;
      background-size: 100% 210%;
      background-image: linear-gradient(
        transparent 0%,
        transparent calc(50% - 9px),
        #79f2c0 calc(50% - 9px),
        #79f2c0 100%
      );
    }
  }
}
</style>
