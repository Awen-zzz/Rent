<template>
  <div>
    <!--搜索框-->
    <van-search
      show-action
      label="北京"
      placeholder="请输入搜索关键词"
      @click="$router.push('/citylist')"
    >
      <template #left>
        <van-icon name="arrow-left" @click="$router.push('/home')" />
      </template>
      <template #action>
        <van-icon name="apps-o" @click="$router.push('/map')" />
      </template>
    </van-search>
    <!--弹出层-->
    <van-dropdown-menu>
      <!--区域-->
      <van-dropdown-item title="区域">
        <van-picker :columns="columns"
      /></van-dropdown-item>
      <!--方式-->
      <van-dropdown-item title="方式">
        <van-picker :columns2="columns2"
      /></van-dropdown-item>
      <!--租金-->
      <van-dropdown-item title="租金">
        <van-picker :columns="columns"
      /></van-dropdown-item>
      <!--筛选-->
      <van-dropdown-item title="筛选">
        <van-picker :columns="columns"
      /></van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
import { getRentType } from '@/api/myhouse'
export default {
  created () {
    this.getRentType()
  },
  data () {
    return {
      value1: 0,
      columns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ],
      columns2: []
    }
  },
  methods: {
    async getRentType () {
      try {
        const res = await getRentType(this.columns2)
        console.log(res)
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
/deep/ .van-search {
  background: rgb(28, 182, 118);
  width: 100%;
  position: relative;
  top: 0px;
  left: 0px;
  .van-search__action {
    font-size: 25px;
    color: #fff;
  }
  .van-icon {
    color: #fff;
    width: 30px;
    font-size: 18px;
  }
}
.btnfixed {
  width: 100%;
  display: flex;
  .van-button {
    flex: 1;
    border: 0;
  }
}
</style>
