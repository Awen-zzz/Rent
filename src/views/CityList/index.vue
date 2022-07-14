<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.back()" />
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      ...
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList } from '@/api/city'
export default {
  created () {
    this.getCityList()
  },
  data () {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      apiCityList: []
    }
  },
  methods: {
    async getCityList () {
      try {
        const res = await getCityList(1)
        console.log('city', res)
      } catch (error) {
        console.log(error)
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
</style>
