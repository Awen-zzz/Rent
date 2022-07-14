<template>
  <div class="cart">
    <!--登录-->
    <div v-if="$store.state.user && $store.state.user.token">
      <van-image
        src="http://liufusong.top:8080/img/avatar.png"
        class="fillbg"
      />
      <div class="login">
        <div class="img-border">
          <van-image
            round
            class="img"
            src="http://liufusong.top:8080/img/profile/avatar.png"
          />
        </div>
        <p>{{ apiuser.nickname }}</p>
        <van-button type="primary" @click="logout">退出</van-button>
        <p>编辑个人资料 ▶</p>
      </div>
      <van-row class="myicon">
        <van-col span="8" @click="$router.push('/collect')"
          ><!--收藏-->
          <van-icon name="star-o" />
          <p>我的收藏</p>
        </van-col>
        <van-col span="8">
          <van-icon name="wap-home-o" @click="$router.push('/myhouse')"/><!--我出租房子-->
          <p>我的出租</p>
        </van-col>
        <van-col span="8">
          <van-icon name="underway-o" />
          <p>看房记录</p>
        </van-col>
        <van-col span="8">
          <van-icon name="shop-collect-o" />
          <p>成为房主</p>
        </van-col>
        <van-col span="8">
          <van-icon name="user-circle-o" />
          <p>个人资料</p>
        </van-col>
        <van-col span="8">
          <van-icon name="service-o" />
          <p>联系我们</p>
        </van-col>
      </van-row>
    </div>
    <!--未登录-->
    <div v-else>
      <van-image src="/file/bg.png" class="nologinbg" />
      <div class="nologin">
        <div class="img-border">
          <van-image
            round
            class="img"
            src="http://liufusong.top:8080/img/profile/avatar.png"
          />
        </div>
        <p>游客</p>
        <van-button type="primary" @click="$router.push('/login')"
          >去登录</van-button
        >
      </div>
      <van-row class="myicon">
        <van-col span="8">
          <van-icon name="star-o" />
          <p>我的收藏</p>
        </van-col>
        <van-col span="8">
          <van-icon name="wap-home-o" />
          <p>我的出租</p>
        </van-col>
        <van-col span="8">
          <van-icon name="underway-o" />
          <p>看房记录</p>
        </van-col>
        <van-col span="8">
          <van-icon name="shop-collect-o" />
          <p>成为房主</p>
        </van-col>
        <van-col span="8">
          <van-icon name="user-circle-o" />
          <p>个人资料</p>
        </van-col>
        <van-col span="8">
          <van-icon name="service-o" />
          <p>联系我们</p>
        </van-col>
      </van-row>
    </div>

    <van-image src="/file/join.png" />
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import { getUser } from '@/api/my'
export default {
  async created () {
    try {
      const res = await getUser()
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },
  data () {
    return {
      apiuser: []
    }
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({
          message: ' 确认退出登录吗？'
        })
        this.$store.commit('savetoken', {})
      } catch (err) {
        console.log(err)
      }
    }
    // collectFn () {
    //   this.$router.push('/collect')
    // }
  },
  computed: {
    // ...mapState(['user'])// 辅助函数，简化
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/ .nologinbg {
  margin-bottom: 120px;
}
.fillbg {
  width: 100%;
}
.myicon {
  // margin-top: 100px;
  text-align: center;
  line-height: 100%;
  .van-icon {
    margin-top: 20px;
    font-size: 20px;
  }
  p {
    font-size: 14px;
    color: rgb(80, 79, 79);
    margin-top: 7px;
  }
}
.cart {
  text-align: center;
  .nologin {
    padding-top: 30px;
    width: 82%;
    height: 150px;
    background-color: #fff;
    position: absolute;
    left: 35px;
    top: 110px;
    z-index: 1;
    box-shadow: 0px 0px 10px 5px rgb(228, 228, 228);
    .img-border {
      border: 5px solid rgb(231, 229, 229);
      border-radius: 50%;
      box-shadow: 0px 2px 3px 1px rgb(192, 192, 192);
      width: 60px;
      height: 60px;
      position: absolute;
      top: -30px;
      left: 124px;
      .img {
        width: 60px;
        height: 60px;
      }
    }
  }
  .login {
    padding-top: 30px;
    width: 82%;
    height: 180px;
    background-color: #fff;
    position: absolute;
    left: 35px;
    top: 170px;
    z-index: 1;
    box-shadow: 0px 0px 10px 5px rgb(228, 228, 228);
    color: rgb(184, 180, 180);
    .img-border {
      border: 5px solid rgb(231, 229, 229);
      border-radius: 50%;
      box-shadow: 0px 2px 3px 1px rgb(192, 192, 192);
      width: 60px;
      height: 60px;
      position: absolute;
      top: -30px;
      left: 124px;
      .van-image {
        width: 60px;
        height: 60px;
      }
    }
  }

  p {
    font-size: 14px;
  }
  .van-button {
    background-color: rgb(28, 182, 118);
    border-radius: 5px;
    height: 35px;
  }
}
</style>
