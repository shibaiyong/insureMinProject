<template>
  <div class="buy">
    <MyHeader title="提现" />
    <div class="inputcontainer">
      <MyInput v-model="moneyvalue" />
    </div>
    <div class="all">全部取出</div>
    <h3></h3>
    <div class="bank">
      <span>取出至：</span>
      <img src="@/assets/img/chinabank.png" />
      <span>中信银行（9151）</span>
    </div>
    <div class="way">
      <div class="mui-input-row mui-radio mui-left">
        <label>快速到账</label>
        <input name="radio" type="radio" value='1' v-model="type"/>
        <span>实时到账，单日限额1万元，今日剩余10，000</span>
      </div>

      <div class="mui-input-row mui-radio mui-left">
        <label>普通到账</label>
        <input name="radio" type="radio" value='2' v-model="type"/>
        <span>预计6月10日12:00前到账，不限额度，6月8日-6月9日仍有收益</span>
      </div>
    </div>
    <div class="btncontainer">
      <MyButton content="提交" :btnStyle="btnStyle" @click.native="confirmBuy"></MyButton>
    </div>
    <div class="service">
      <Service />
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/base/MyHeader.vue";
import MyInput from "@/components/base/MyInput.vue";
import Service from "@/components/base/Service.vue";
import MyButton from "@/components/base/MyButton";
import MyTip from "@/components/base/MyTip";
import { Toast } from "mint-ui";
export default {
  name: "WithdrawCash",
  props: {},

  data() {
    return {
      moneyvalue: "",
      btnStyle: {
        height: "0.48rem",
        background: "#ddd",
        // background: "#3965ff",//输入状态根据短息验证码是否获取到
        borderRadius: "0.24rem",
        color: "white",
        width: "92%"
      },
      toastinstance: {
        toast: null
      },
      type:'1'
    };
  },
  updated() {
      console.log(this.type)
  },
  created() {},
  methods: {
    confirmBuy() {
      let val = this.moneyvalue;
      let reg = /^([0-9]{1,}[.]*[0-9]*)$/;
      if (!reg.test(val)) {
        this.toastinstance.toast = Toast({
          message: "购买金额需大于等于0.01元",
          position: "center",
          duration: 2000
        });
        return false;
      }
    },
    showStatusTip() {
      let that = this;
      this.tipvisible = true;
      this.configMessage = {
        imgsrc: "/static/img/right@2x.png",
        header: "购买完成",
        title: "购买成功",
        subtitle: "10,000.00",
        des: "预计5月10日开始计息，5月11日首笔收益到账",
        btnText: "查看账单",
        callback: function() {
          that.tipvisible = false;
        }
      };
    }
  },
  computed: {},
  mounted() {
    this.showStatusTip();
  },
  components: {
    MyHeader,
    Service,
    MyInput,
    MyButton,
    MyTip
  },
  beforeDestroy() {}
};
</script>
<style scoped>
.buy {
  height: 100vh;
  background: white;
  position: relative;
}
.inputcontainer {
  padding: 0.58rem 0.18rem 0rem;
  background: white;
  box-sizing: border-box;
}
.bank {
  background: white;
  padding: 0 0.18rem 0.3rem;
}
.bank img {
  width: 0.22rem;
  vertical-align: middle;
}
.bank span {
  display: inline-block;
  font-size: 0.2rem;
  color: #4a4a4a;
  vertical-align: middle;
}
.buy h3 {
  font-size: 0.16rem;
  color: #48484a;
  padding: 0.3rem 0.18rem 0.3rem;
  background: white;
  box-sizing: border-box;
}
.btncontainer {
  text-align: center;
  padding-top: 0.68rem;
}
.service {
  position: absolute;
  bottom: 0.46rem;
  left: 0;
  width: 100%;
}
.all {
  text-align: right;
  font-size: 0.15rem;
  color: #3965ff;
  padding: 0 0.18rem;
  box-sizing: border-box;
  margin-top: 0.1rem;
}
.mui-radio span{
    font-size:0.12rem;
    color:#a5a5a5;
    display:inline-block;
    padding-left:0.6rem;
    box-sizing:border-box;
    padding-right:0.18rem;
}

.service{
    position:absolute;
    width:100%;
    left:0;
    bottom:0.1rem;
}
</style>