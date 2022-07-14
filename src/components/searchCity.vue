<template>
  <div>
    <van-search show-action label="北京" placeholder="请输入搜索关键词" @click="$router.push('/citylist')">
      <template #action>
       <van-icon name="apps-o" @click="$router.push('/map')"/>
      </template>
    </van-search>
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
.van-search{
  background: rgba(0,0,0,0);
  width: 360px;
  position: relative;
  top: 20px;
  left: 10px;
}
</style>
