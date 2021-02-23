<template>
  <div class="signup-index">
    <div class="form-wrap">
      <el-form :model="form" :rules="rules">
        <el-form-item label="用户名:" prop="nickname">
          <el-input v-model="form.nickname"></el-input>
        </el-form-item>
        <el-form-item label="手机号或邮箱:" prop="account">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="info">立即注册</el-button>
        </el-form-item>
      </el-form>
      <div style="font-size: 1rem ;padding:10px 0">
        未做注册功能 请前往官网
        <a href="https://jikeyuedu.cn/" target="_blank">
          https://jikeyuedu.cn/
        </a>
        注册
      </div>
      <p>
        <router-link to="/signin" class="title-primary">
          已有账号,去登录
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpIndex',
  data() {
    return {
      form: {
        nickame: '',
        account: '',
        password: '',
      },
      rules: {
        nickname: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 2,
            max: 15,
            message: '长度在 2 到 15 个字之间',
            trigger: 'blur',
          },
        ],
        account: [
          { required: true, message: '请输入手机号或邮箱', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 4, message: '密码长度至少4位数', trigger: 'blur' },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.form-wrap {
  width: 60%;
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
