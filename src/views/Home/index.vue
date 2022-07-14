<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in apilunbo" :key="index"
        ><img :src="'http://liufusong.top:8080' + item.imgSrc" alt=""
      /></van-swipe-item>
    </van-swipe>
    <div class="searchCity">
      <searchCity></searchCity>
    </div>
    <van-grid>
      <van-grid-item text="整租" to="/house">
        <van-image src="/file/home.png" />
        <p>整租</p>
      </van-grid-item>
      <van-grid-item text="合租" to="/house">
        <van-image src="/file/my.png" />
        <p>合租</p>
      </van-grid-item>
      <van-grid-item text="地图找房" to="/house">
        <van-image src="/file/map.png" />
        <p>地图找房</p>
      </van-grid-item>
      <van-grid-item text="去出租" to="/publish">
        <van-image src="/file/house.png" />
        <p>去出租</p>
      </van-grid-item>
    </van-grid>
    <div class="team">
      <h3>租房小组</h3>
      <p>更多</p>
    </div>
    <van-grid direction="horizontal" :column-num="2">
      <van-grid-item
        icon="photo-o"
        text="标题"
        v-for="item in apiTeam"
        :key="item.id"
      >
        <img :src="'http://liufusong.top:8080' + item.imgSrc" alt="" />
        <p>{{ item.title }}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'
import { getlunbo, getTeam } from '@/api/home'
import searchCity from '@/components/searchCity.vue'
Vue.use(Lazyload)
export default {
  created () {
    this.getlunbo()
    this.getTeamFn()
  },
  data () {
    return {
      apilunbo: [],
      apiTeam: []
    }
  },
  methods: {
    async getlunbo () {
      try {
        const res = await getlunbo()
        console.log(res)
        this.apilunbo = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    async getTeamFn () {
      try {
        const res = await getTeam()
        console.log(res, 111)
        this.apiTeam = res.data.body
      } catch (err) { console.log(err) }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { searchCity }
}
</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
/deep/.van-swipe-item {
  height: 200px !important;
  img {
    width: 100%;
  }
}
.van-image {
  width: 80%;
}
p {
  font-size: 14px;
  color: rgb(104, 104, 104);
}
.team {
  height: 50px;
  line-height: 50px;
  position: relative;
  background-color: rgb(242, 242, 242);
  h3 {
    position: absolute;
    left: 10px;
    top: -15px;
    font-size: 16px;
  }
  p {
    position: absolute;
    right: 10px;
    top: -15px;
  }
}
.van-grid-item {
  img {
    width: 35%;
    margin-right: 10px;
  }
}
.searchCity {
  position: absolute;
  top: 0;
  width: 100%;
}
/deep/.van-search__action {
  font-size: 25px;
  color: #fff;
}
</style>
