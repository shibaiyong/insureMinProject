<template>
  <div class="withdrawfail">
    <MyHeader title="筛选" />
    <div class="amountmoney">
        <ul>
            <li>取出失败</li>
            <li><span>￥</span><span>1,000.00</span></li>
        </ul>
    </div>
    <div class="process">

    </div>
    <div class="gooddetails">
        <ul>
            <li><span>取出产品</span><span>如意宝</span></li>
            <li><span>取出方式</span><span>中信银行（9151）</span></li>
            <li><span>交易单号</span><span>3444556677899999</span></li>
        </ul>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/base/MyHeader.vue";
import MyFooter from "@/components/base/MyFooter.vue";
import Service from "@/components/base/Service.vue"
export default {
  name: "WidthdrawFail",
  props: {},
  data() {
    return {
        visible:true,
        isshow:''
    };
  },
  created() {},
  methods: {
      changeStatus(){
        this.visible = !this.visible
      }
  },
  computed: {},
  mounted() {},
  components: {
    MyHeader,
    MyFooter,
    Service
  },
  beforeDestroy() {}
};
</script>
<style scoped>
    .amountmoney{
        font-size:0.15rem;
        text-align: center;
        padding:0.23rem 0 0.17rem;
        background:white;
        margin-top:0.1rem;
    }
    .amountmoney ul li{
        font-size:0.15rem;
        color:#333;
    }
    .amountmoney ul li:nth-child(1){
        margin-bottom: 0.17rem;
    }
    .amountmoney ul li:nth-child(2) span:nth-child(1){
        font-size:0.21rem;
        color:#333;
    }
    .amountmoney ul li:nth-child(2) span:nth-child(2){
        font-size:0.35rem;
        color:#333;
    }
    .gooddetails{
        font-size:0.16rem;
        padding:0 0.26rem;
        box-sizing: border-box;
        background:white;
        padding-bottom: 0.18rem;
    }
    .gooddetails ul li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size:0.14rem;
        padding-bottom: 0.18rem;
    }
    .gooddetails ul li span:nth-child(1){
        color:#999;
    }
</style>