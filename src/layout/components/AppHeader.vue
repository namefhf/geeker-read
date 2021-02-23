<template>
  <header>
    <nav class="app-nav">
      <!-- logo -->
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="" />
        </router-link>
      </div>
      <!-- 导航栏 -->
      <div class="nav-list">
        <router-link to="/" class="nav-item link-hover" exact>
          首页
        </router-link>
        <a
          href="https://wj.qq.com/s2/7498860/5519/"
          target="_blank"
          class="nav-item link-hover"
        >
          公众号投稿
        </a>
      </div>
      <!-- 搜索 -->
      <div class="search-wrap">
        <i class="el-icon-search"></i>
        <input
          type="text"
          placeholder="按回车键搜索..."
          v-model="keyword"
          @keyup.enter="handleEnter"
        />
      </div>
      <!-- 已登录时展示 -->
      <div class="user-operation" v-if="$store.state.user">
        <router-link to="/favorites" class="nav-item link-hover">
          我的喜欢
          <sup></sup>
        </router-link>
        <em
          style="color: rgb(193, 199, 208); margin: 0px 0.5rem; font-weight: 800;"
        >
          ·
        </em>
        <router-link to="/history" class="nav-item link-hover">
          浏览记录
        </router-link>
        <!-- 点击头像弹出菜单栏 -->
        <el-dropdown trigger="click">
          <div class="avatar">
            <img
              src="https://geeker-cdn.devhub.top/user/avatar/default.jpg"
              alt=""
            />
          </div>
          <el-dropdown-menu>
            <el-dropdown-item>
              <router-link to="/my" class="title-primary">个人信息</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/manage" class="title-primary">
                关注管理
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <a href="javascript:;" class="title-primary" @click="signOut">
                退出
              </a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- 未登录时显示登录注册 -->
      <div class="nav-list auth" v-else>
        <router-link to="/signin" class="nav-item">
          登录
          <sup></sup>
        </router-link>
        <em
          style="color: rgb(193, 199, 208); margin: 0px 0.5rem; font-weight: 800;"
        >
          ·
        </em>
        <router-link to="/signup" class="nav-item ">注册</router-link>
      </div>
      <!-- 移动端菜单菜单 -->
      <el-dropdown trigger="click">
        <div class="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <!-- 登录后 -->
        <el-dropdown-menu slot="dropdown" v-if="$store.state.user">
          <el-dropdown-item>
            <router-link to="/favorites" class="title-primary">
              我的喜欢
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/history" class="title-primary">
              浏览记录
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/manage" class="title-primary">
              关注管理
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/my" class="title-primary">
              个人信息
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="javascript:;" @click="signOut" class="title-primary">
              退出
            </a>
          </el-dropdown-item>
        </el-dropdown-menu>
        <!--未登录  -->
        <el-dropdown-menu slot="dropdown" v-else>
          <el-dropdown-item>
            <a
              href="https://wj.qq.com/s2/7498860/5519/"
              target="_blank"
              class="title-primary"
            >
              公众号投稿
            </a>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/signin" class="title-primary">
              登陆
              <em style="color: #000000; font-weight: 800;">
                ·
              </em>
              注册
            </router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      keyword: '',
    }
  },
  created() {
    // console.log('user', this.$store.state.user)
  },

  methods: {
    signOut() {
      localStorage.removeItem('USER')
      this.$store.commit('setUser', '')
      this.$router.replace({ name: 'home', query: { t: Date.now() } })
    },
    handleEnter() {
      // console.log(this.keyword)
      this.$router.push({
        name: 'search',
        query: {
          keyword: this.keyword,
          t: Date.now(),
        },
      })
      this.keyword = ''
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  height: 64px;
  position: relative;
}
.app-nav {
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
.logo img {
  height: 30px;
  @media (max-width: 1279.95px) {
    height: 25px;
  }
}
.user-operation {
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: none;
  }
  .nav-item {
    color: #172b4d;
    font-size: 0.8rem;
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
  img {
    width: 28px;
    height: 28px;
    border-radius: 30px;
    margin-left: 1rem;
  }
}
.operate-list {
  ul {
    li {
      text-align: center;
      padding: 2px 0;
    }
  }
}
.nav-list {
  @media screen and (max-width: 960px) {
    display: none;
  }
  .nav-item {
    color: #172b4d;
    margin-left: 16px;
    font-size: 0.8rem;
  }
  &.auth .nav-item {
    margin: 0;
    sup {
      width: 8px;
      height: 8px;
      display: inline-block;
      position: relative;
      top: -10px;
      border-radius: 50%;
      background-color: #ff5630;
    }
  }
}
.search-wrap {
  flex: 1;
  margin-left: 24px;
  margin-right: 40px;
  border-radius: 5px;
  padding: 10px 8px 10px 40px;
  position: relative;
  background-color: rgba(223, 225, 229, 0.5);
  @media (max-width: 960px) {
    margin-right: 0;
  }
  i {
    position: absolute;
    left: 20px;
    transform: translateX(-50%);
  }
  input {
    border: none;
    outline: none;
    width: 100%;
    background: none;
  }
}
.mobile-menu-toggle {
  @media (min-width: 960px) {
    display: none;
  }
  padding: 12px;
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: background ease 0.5s;
  border-radius: 50%;
  // &:hover {
  //   background-color: #f5f5f5;
  // }
  span {
    width: 20px;
    height: 2px;
    background-color: #000000;
    display: block;
  }
}
</style>
