<template>
  <div class="assessreport">
    <MyHeader title="评估报告" />

    <dl>
      <dt>1、是否有不良诚信记录</dt>
      <dd>
        <div class="mui-input-row mui-radio mui-left">
          <label>是</label>
          <input name="radio1" type="radio" />
        </div>
        <div class="mui-input-row mui-radio mui-left">
          <label>否</label>
          <input name="radio1" type="radio" />
        </div>
        
      </dd>
    </dl>

    <dl>
      <dt>2、您的收入来源是</dt>
      <dd>
        <div class="mui-input-row mui-radio mui-left">
          <label>工资、劳务报酬</label>
          <input name="radio1" type="radio" />
        </div>
        <div class="mui-input-row mui-radio mui-left">
          <label>生产经营所得</label>
          <input name="radio1" type="radio" />
        </div>
        <div class="mui-input-row mui-radio mui-left">
          <label>利息、股息、转让等金融性资产收入</label>
          <input name="radio1" type="radio" />
        </div>
        <div class="mui-input-row mui-radio mui-left">
          <label>出租、出售、房地产等非金融性资产收入</label>
          <input name="radio1" type="radio" />
        </div>
        <div class="mui-input-row mui-radio mui-left">
          <label>无固定收入</label>
          <input name="radio1" type="radio" />
        </div>
      </dd>
    </dl>
    <dl>
      <dt>3、是否优大额债务</dt>
      <dd>
        <div class="mui-input-row mui-radio mui-left">
          <label>无</label>
          <input name="radio1" type="radio" />
        </div>
        <div class="mui-input-row mui-radio mui-left">
          <label>有，住房抵押贷款等长期定额债务</label>
          <input name="radio1" type="radio" />
        </div>
        
      </dd>
    </dl>

    <dl>
      <dt>4、是否资源购买理财？</dt>
      <dd>
        <div class="mui-input-row mui-radio mui-left">
          <label>是</label>
          <input name="radio1" type="radio" />
        </div>
        <div class="mui-input-row mui-radio mui-left">
          <label>否</label>
          <input name="radio1" type="radio" />
        </div>
       
      </dd>
    </dl>

    <dl>
      <dt>5、基金代销机构仅接受为本人利益进行投资理财，不可代替他人进行理财</dt>
      <dd>
        <div class="mui-input-row mui-radio mui-left">
          <label>本人</label>
          <input name="radio1" type="radio" />
        </div>
        <div class="mui-input-row mui-radio mui-left">
          <label>他人</label>
          <input name="radio1" type="radio" />
        </div>
       
      </dd>
    </dl>

    <div class="btncontainer">
      <MyButton :btnStyle="btnStyle" @click.native="gotoSite" content="提交"/>
    </div>

    <div class="service">
      <Service />
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/base/MyHeader.vue"
import Service from "@/components/base/Service.vue"
import MyButton from "@/components/base/MyButton"
import { RiskQuestionQuery } from "@/requestDataInterface"

export default {
  name: "AssessReport",
  props: {},
  data() {
    return {
      btnStyle: {
        width: "100%",
        height: "0.48rem",
        background: "#3a65ff",
        borderRadius: "0.24rem",
        color: "white"
      }
    };
  },
  created() {},
  methods: {
    gotoSite(){
      
    },
    RiskQuestionQuery(){
      RiskQuestionQuery().then(res => {
        console.log(res)
      }).catch(err => {console.log( err )})
    }
  },
  mounted() {
    this.RiskQuestionQuery()
  },
  components: {
    MyHeader,
    Service,
    MyButton
  },
  watch: {
    selected(val) {
      console.log(val);
    }
  },
  beforeDestroy() {}
};
</script>
<style scoped>
.assessreport{
    background:white;
}
.assessreport dl{
    padding:0 0.14rem;
    box-sizing: border-box;
}
.assessreport dl dt{
    font-size: 0.17rem;
    color:#3e3e3e;
    margin: 0.2rem 0;
    font-weight: bold;
}
.assessreport .mui-radio label{
    color:#242424;
}
.service {
    margin-top:0.3rem;
}
.btncontainer {
  padding: 0 0.16rem;
  box-sizing: border-box;
  margin-top: 0.33rem;
}
</style>