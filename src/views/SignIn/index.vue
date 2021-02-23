<template>
  <div class="sign-index">
    <div class="form-wrap">
      <el-form :model="form">
        <el-form-item label="手机号或邮箱:">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="handleClick">登录</el-button>
        </el-form-item>
      </el-form>
      <p>
        <router-link to="/signup" class="title-primary">注册新用户</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { signIn } from '../../api/user'
import { mapMutations } from 'vuex'
import { Message } from 'element-ui'
export default {
  name: 'SignIndex',
  data() {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    async handleClick() {
      // console.log(this.form)
      const { data } = await signIn(this.form)
      console.log(data)
      if (data.message === 'SUCCESS') {
        const user = { ...data.data }
        // console.log(user)
        // localStorage.setItem('USER_TOKEN', JSON.stringify(user.token))
        localStorage.setItem('USER', JSON.stringify(user))
        this.setUser(user)

        if (this.$route.query.from && this.$route.query.from !== '') {
          this.$router.push(this.$route.query.from) //跳转回原来页面
        } else {
          this.$router.push('/')
        }
      } else if (data.message === 'FAIL') {
        // 用户名或密码错误
        Message.error({
          message: '手机号、邮箱或密码错误。'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrap {
  width: 70%;
  margin: 80px auto;
  background-color: #fafbfc;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  min-height: 100px;
  padding: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
}
</style>
