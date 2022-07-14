<template>
  <div>
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()" />
    <van-form @submit="onSubmit">
      <div class="null"></div>
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '请输入正确内容' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      >
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" class="login-btn">登录</van-button>
      </div>
    </van-form>
    <p class="message">还没有账号，去注册~</p>
  </div>
</template>

<script>
import { getLogin } from '@/api/login'
export default {
  created () {
    // this.getLoginFn()
  },
  data () {
    return {
      username: 'heima',
      password: '123456'
    }
  },
  methods: {
    // onSubmit (values) {
    //   console.log('submit', values)
    // },
    async onSubmit (values) {
      console.log('submit', values)
      try {
        const { data } = await getLogin(values)
        console.log(data)
        if (data.status === 400) {
          this.$toast.fail('登录失败')
        } else {
          this.$toast.success('登陆成功')
          this.$store.commit('savetoken', data.body)
          this.$router.push('/my')
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.login-btn {
  background-color: rgb(28, 182, 118);
  border: 0;
}
.message {
  font-size: 14px;
  color: gray;
  text-align: center;
}
.null {
  height: 10px;
  width: 100%;
}
.van-field {
  width: 90%;
  height: 60px;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom: 1px solid rgb(231, 247, 238);
}
.yzm {
  background-color: rgb(233, 244, 241);
  color: rgb(20, 173, 109);
}
</style>
