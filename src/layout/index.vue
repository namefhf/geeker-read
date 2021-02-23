<template>
  <div class="layout-index">
    <div class="app-container">
      <app-header />
      <div class="main">
        <router-view />
      </div>
      <app-footer />
    </div>
    <to-top />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader'
import ToTop from '../components/toTop'
export default {
  name: 'LayoutIndex',
  components: {
    AppHeader,
    AppFooter,
    ToTop,
  },
}
</script>

<style lang="scss" scoped>
.layout-index {
  background-color: #ebecf0;
  min-height: 100vh;
}
.app-container {
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #ffffff;
  @media screen and (min-width: 960px) {
    max-width: 960px;
  }
}
.main {
  padding: 0 20px;
  border-top: 1px solid #ebecf0;
}
</style>
