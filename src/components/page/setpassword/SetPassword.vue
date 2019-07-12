<template>
  <div class="setpassword">
    <MyHeader title="设置交易密码" />
    <h3>请您设置交易密码</h3>
    <div class="password mui-input-group">
      <div class="mui-input-row">
        <label>交易密码</label>
        <input type="password" class="mui-input-password" placeholder="请输入交易密码" />
      </div>
      <div class="mui-input-row">
        <label>再次确认</label>
        <input type="password" class="mui-input-password" placeholder="请再次输入交易密码" />
      </div>
    </div>
    <div class="tip">
      <span>注意:</span>
      <span>密码不能为连续、倒连续或重复数字，如123456、654321、00000等。</span>
    </div>

    <div class="complete">
      <MyButton content="完成" :btnStyle="btnStyle" @click.native="submitData" />
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/base/MyHeader.vue";
import MyButton from "@/components/base/MyButton";
import Service from "@/components/base/Service.vue";
export default {
  name: "SetPassword",
  props: {},
  data() {
    return {
      btnStyle: {
        width: "100%",
        height: "0.4rem",
        background: "#ddd",
        // background: "#3965ff",//输入状态根据短息验证码是否获取到
        borderRadius: "0.2rem",
        color: "white"
      }
    };
  },
  created() {},
  methods: {
    submitData() {}
  },
  computed: {},
  mounted() {},
  components: {
    MyHeader,
    MyButton
  },
  beforeDestroy() {}
};
</script>
<style scoped>
h3 {
  margin: 0.36rem 0 0.21rem;
  font-size: 0.16rem;
  color: #6c7382;
  text-align: center;
}
.password .mui-input-row label {
  color: #181818;
  font-size: 0.17rem;
}

.password .mui-input-row input::placeholder {
  color: #d5d5d5;
  font-size: 0.15rem;
}
.tip {
  padding: 0 0.16rem;
  margin-top: 0.16rem;
}
.tip span:nth-child(1) {
  color: #ff6000;
  font-size: 0.12rem;
}
.tip span:nth-child(2) {
  color: #7e838f;
  font-size: 0.12rem;
}
.complete {
  padding: 0 0.16rem;
  margin-top: 0.3rem;
}
</style>