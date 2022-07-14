<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow @click-left="$router.back()" />

    <!--房源信息-->
    <van-cell-group>
      <van-cell title="房源信息" class="title" />
    </van-cell-group>
    <!--小区名称-->
    <van-collapse v-model="activeNames">
      <van-cell
        title="小区名称"
        value="请输入小区名称"
        is-link
        to="/inputhouse"
      />
    </van-collapse>
    <!--租金-->
    <van-cell-group>
      <van-field v-model="value" label="租金" placeholder="请输入租金/月">
        <template #extra>
          <span class="spancolor">￥/月</span>
        </template>
      </van-field>
    </van-cell-group>

    <!--建筑面积-->
    <van-cell-group>
      <van-field v-model="value" label="建筑面积" placeholder="0">
        <template #extra>
          <span class="spancolor">㎡</span>
        </template>
      </van-field>
    </van-cell-group>
    <!--户型-->
    <van-cell-group>
      <van-field
        readonly
        clickable
        label="户型"
        :value="value1"
        placeholder="请选择"
        input-align="right"
        right-icon="arrow"
        @click="showPicker1 = true"
      />
      <van-popup v-model="showPicker1" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker1 = false"
          @confirm="onConfirm1"
        />
      </van-popup>
    </van-cell-group>

    <!--所在楼层-->
    <van-cell-group>
      <van-field
        readonly
        clickable
        label="所在楼层"
        :value="value2"
        placeholder="请选择"
        input-align="right"
        right-icon="arrow"
        @click="showPicker2 = true"
      />
      <van-popup v-model="showPicker2" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns1"
          @cancel="showPicker2 = false"
          @confirm="onConfirm2"
        />
      </van-popup>
    </van-cell-group>

    <!--朝向-->
    <van-cell-group>
      <van-field
        readonly
        clickable
        label="朝向"
        :value="value3"
        placeholder="请选择"
        input-align="right"
        right-icon="arrow"
        @click="showPicker3 = true"
      />
      <van-popup v-model="showPicker3" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns2"
          @cancel="showPicker3 = false"
          @confirm="onConfirm3"
        />
      </van-popup>
    </van-cell-group>

    <!--房屋标题-->
    <van-cell-group>
      <van-cell title="房屋标题" class="housetitle" />
    </van-cell-group>
    <van-cell-group class="noborder">
      <van-field
        v-model="value"
        placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
      />
    </van-cell-group>
    <!--房屋图像-->
    <van-cell-group>
      <van-cell title="房屋图像" class="housetitle" />
    </van-cell-group>
    <div class="imgml">
      <van-uploader
        v-model="fileList"
        accept="image/*"
        :after-read="afterRead"
        multiple
      />
    </div>
    <!--房屋配置-->
    <van-cell-group>
      <van-cell title="房屋配置" class="housetitle" />
    </van-cell-group>
    <van-row type="flex" justify="space-around" class="houseconfig">
      <van-col span="4">
        <div>
          <i class="iconfont icon-yigui-hui"></i>
          <p>衣柜</p>
        </div>
      </van-col>
      <van-col span="4">
        <div>
          <i class="iconfont icon-xiyiji"></i>
          <p>洗衣机</p>
        </div>
      </van-col>
      <van-col span="4">
        <div>
          <i class="iconfont icon-kongtiao"></i>
          <p>空调</p>
        </div>
      </van-col>
      <van-col span="4">
        <div>
          <i class="iconfont icon-meiqitianranqi"></i>
          <p>天然气</p>
        </div>
      </van-col>
      <van-col span="4">
        <div>
          <i class="iconfont icon-bingxiang"></i>
          <p>冰箱</p>
        </div>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around" class="houseconfig">
      <van-col span="4">
        <div>
          <i class="iconfont icon-shuinuanqigongcheng"></i>
          <p>暖气</p>
        </div>
      </van-col>
      <van-col span="4">
        <div>
          <i class="iconfont icon-dianshiji"></i>
          <p>电视</p>
        </div>
      </van-col>
      <van-col span="4">
        <div>
          <i class="iconfont icon-haofangtuo400iconfont2reshuiqi"></i>
          <p>热水器</p>
        </div>
      </van-col>
      <van-col span="4">
        <div>
          <i class="iconfont icon-wifi"></i>
          <p>宽带</p>
        </div>
      </van-col>
      <van-col span="4">
        <div>
          <i class="iconfont icon-shafa"></i>
          <p>沙发</p>
        </div>
      </van-col>
    </van-row>
    <div class="bgc"></div>
    <!--房屋描述-->
    <van-cell-group>
      <van-cell title="房屋描述" class="housemiaoshu" />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="value"
        type="textarea"
        rows="6"
        placeholder="请输入房屋描述信息"
      />
    </van-cell-group>
    <div class="bgc"></div>
    <!--底部按钮-->
    <div class="btnfixed">
      <van-button plain type="primary" @click="$router.back()">取消</van-button>
      <van-button type="primary">提交</van-button>
    </div>
  </div>
</template>

<script>
import { uploadFile } from '@/api/HouseImg'
export default {
  created () { },
  data () {
    return {
      activeNames: '',
      value: '',
      value1: '',
      value2: '',
      value3: '',
      showPicker1: false,
      showPicker2: false,
      showPicker3: false,
      columns: ['一室', '二室', '三室', '四室', '四室+'],
      columns1: ['高楼层', '中楼层', '低楼层'],
      columns2: ['东', '南', '西', '北', '东南', '东北', '西南', '西北'],
      fileList: [],
      uploadImage: []
    }
  },
  methods: {
    // 对应的弹出层
    onConfirm1 (value) {
      this.value1 = value
      this.showPicker1 = false
    },
    onConfirm2 (value) {
      this.value2 = value
      this.showPicker2 = false
    },
    onConfirm3 (value) {
      this.value3 = value
      this.showPicker3 = false
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}

</script>

<style scoped lang='less'>
.spancolor {
  color: rgb(152, 149, 149);
}
.title {
  color: rgb(28, 182, 118);
}
.preview-cover {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
}
.imgml {
  margin-left: 15px;
  padding-top: 10px;
  border: 0px;
}
/deep/ .van-field__control {
  border: 0px;
}
.houseconfig {
  color: rgb(78, 78, 78);
  text-align: center;
  margin-bottom: 20px;
  i {
    font-size: 26px;
  }
  p {
    font-size: 14px;
    margin: 0;
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
.bgc {
  width: 100%;
  height: 25px;
  background-color: rgb(241, 243, 244);
}
</style>
