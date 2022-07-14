<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/house" icon="search">找房 </van-tabbar-item>
      <van-tabbar-item replace to="/news"
        >资讯
        <template #icon>
          <van-icon name="comment-o" /> </template
      ></van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="search"
        >我的
        <template #icon>
          <van-icon name="friends-o" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
