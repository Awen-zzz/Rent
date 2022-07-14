<template>
  <div>
    <van-nav-bar title="房屋管理" left-arrow @click-left="$router.back()" />
    <van-card
      class="van-ellipsis"
      v-for="(item, index) in apiMyHouse"
      :key="index"
      :price="item.price + '元/月'"
      :desc="item.desc"
      :title="item.title"
      :thumb="'http://liufusong.top:8080' + item.houseImg"
    >
      <template #price>
        <van-tag class="price">{{ item.price }} <span> 元/月</span></van-tag>
      </template>
      <template #tags>
        <van-tag
          plain
          type="danger"
          v-for="(item1, index1) in item.tags"
          :key="index1"
          style="color=index1===0?pink:index1===1?blue:red"
          >{{ item1 }}</van-tag
        >
      </template>
    </van-card>
  </div>
</template>

<script>
import { getMyHouse } from '@/api/myhouse'
export default {
  created () {
    this.myhouseFn()
  },
  data () {
    return {
      apiMyHouse: []
    }
  },
  methods: {
    async myhouseFn () {
      try {
        const res = await getMyHouse()
        console.log('myhouse', res)
        this.apiMyHouse = res.data.body
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
.van-card {
  background-color: #fff;
  padding: 15px;
  .van-card__title {
    font-size: 16px;
    font-weight: 700;
    margin-left: 18px;
  }
  .van-card__desc{
    color:rgb(180, 180, 180);
    margin-left: 18px;

  }
  .van-card__price-integer{
    color:rgb(220, 48, 0);
    font-weight:700;
  }
  .van-tag{
      margin-left: 15px;
  }
  .price{
    font-size: 17px;
    background-color: #fff;
    color:rgb(242, 61, 0);
    font-weight: 700;
    margin-left: 12px;
    span{
      font-weight: normal;
      font-size: 13px;
    }
  }
}
/deep/.van-image__img{
    width: 106px;
    height: 80px;
    border-radius: 0;
  }
</style>
