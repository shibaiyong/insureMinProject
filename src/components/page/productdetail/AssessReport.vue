<template>
  <div class="assessreport">
    <MyHeader title="评估报告" />

    <dl v-for="(item, index) in QuestionList" :key="item.issGuid">
      <dt>{{ 1+index + '、' + item.issTitle }}</dt>
      <dd>
        <div class="mui-input-row mui-radio mui-left" v-for="subitem in item.answerList" :key="subitem.ansGuid">
          <label>{{subitem.ansContent}}</label>
          <input :name="item.issGuid" type="radio" :value="subitem.ansGuid" @change="getValue(item.issGuid,subitem.ansGuid)"/>
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
      },
      cacheArr : [],
      QueGuid:'',
      QuestionList:[],
      anwserList:[],
      PerInfoAnswer:''
    }
  },
  created() {},
  methods: {
    gotoSite(){
      //将数组按指定分隔符转成字符串
      let anwserStr = this.QueGuid + ':' + this.anwserList.join(',')
      //设置交易密码页面获取答案
      this.$store.dispatch('storeAnswer',anwserStr)
      localStorage.setItem('PerInfoAnswer',anwserStr)
      this.$router.push('/setpassword')
    },
    RiskQuestionQuery(){
      RiskQuestionQuery().then(res => {

        console.log(res)
        if(res.code == 2000 && res.result.List){
          this.QuestionList = res.result.List
          this.QueGuid = res.result.QueGuid
        }
      }).catch(err => {console.log( err )})
    },
    getValue( issGuid, ansGuid ){
      let index = this.cacheArr.indexOf(issGuid)
      if(index > -1){
        this.anwserList.splice(index,1,issGuid + '|' + ansGuid)
        return false
      }
      this.cacheArr.push(issGuid)
      this.anwserList.push(issGuid + '|' + ansGuid)
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