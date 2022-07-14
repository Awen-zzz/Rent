<template>
  <div>
    <van-search
      v-model="value"
      show-action
      input-align="center"
      placeholder="请输入小区或地址"
      @search="onSearch"
    >
      <template #action>
        <div @click="$router.back()">取消</div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch (val) { }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
</style>
