<template>
  <div class="mytip">
    <div class="header">
      <i class="mui-icon mui-icon-arrowleft" />
      <span>信息验证</span>
      <span class="close">关闭</span>
    </div>
    <img src="/static/img/right@2x.png" />
    <div class="tipcontent">
      <ul>
        <li>
          <span>身份证信息上传成功</span>
        </li>
      </ul>
    </div>
    <div class="message">根据国家反洗钱局监管要求，请完善您的个人信息</div>

    <div class="password mui-input-group">
      <div class="mui-input-row">
        <label>住址</label>
        <input type="text" class="mui-input-clear addre" placeholder="请输入住址" v-model="personinfo.addre"/>
      </div>
      <div class="mui-input-row">
        <label>街道</label>
        <input type="text" class="mui-input-clear road" placeholder="请输入街道" v-model="personinfo.road"/>
      </div>
      <div class="mui-input-row">
        <label>公司</label>
        <input type="text" class="mui-input-clear company" placeholder="请输入公司" v-model="personinfo.company"/>
      </div>
      <div class="mui-input-row">
        <label>职业</label>
        <input type="text" class="mui-input-clear occupation" placeholder="请输入职业" v-model="personinfo.occupation" @focus="popupVisible=true"/>
      </div>
    </div>
    <div class="complete">
      <MyButton content="确认" :btnStyle="btnStyle" @click.native="gotoSite" />
    </div>

    <div class="service">
      <Service />
    </div>
    <mt-popup v-model="popupVisible" position="bottom" :closeOnClickModal="false">
        <div class="btn"><span @click="popupVisible=false">取消</span><span @click="assignVal">确定</span></div>
        <mt-picker :slots="slots" @change="onValuesChange" value-key="occupation"></mt-picker>
    </mt-popup>
    
  </div>
</template>

<script>
import Service from "@/components/base/Service.vue";
import MyButton from "@/components/base/MyButton";
import MyHeader from "@/components/base/MyHeader";
export default {
  name: "UploadSucc",
  props: {},
  data() {
    this.middlevarible = null  
    return {
      value: "",
      personinfo:{
          addre:'',
          road:'',
          company:'',
          occupation:''
      },
      btnStyle: {
        width: "100%",
        height: "0.4rem",
        background: "#3965ff",
        borderRadius: "0.2rem",
        color: "white"
      },
      popupVisible:false,
      slots: [
        {
          flex: 1,
          values: [
            { id:1, occupation: "司法专业人员" },
            { id:2, occupation: "经济、金融专业人员" },
            { id:3, occupation: "教学专业人员" },
            { id:4, occupation: "警察、保安、消防专业人员" },
            { id:5, occupation: "运输、快递、邮政从业人员" }
          ],
          className: "slot1",
          textAlign: "center"
        }
      ]
    };
  },
  created() {},
  methods: {
    gotoSite() {},
    onValuesChange(picker, values) {
      this.middlevarible = values[0].occupation
    },
    assignVal(){
        this.personinfo.occupation = this.middlevarible
        this.popupVisible = false
    },
    showPopUp(){
        this.popupVisible = true
    }
  },
  computed: {},
  mounted() {},
  components: {
    MyButton,
    Service,
    MyButton,
    MyHeader
  },
  beforeDestroy() {}
};
</script>
<style scoped>
.btn{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0.14rem 0 0.14rem;
    font-size:0.16rem;
}
.btn span:nth-child(1){
    color:#999;
}
.btn span:nth-child(2){
    color:#3965ff;
}
.password {
  padding: 0 0.1rem;
  box-sizing: border-box;
  margin-top: 0.2rem;
}
.password .mui-input-row label {
  color: #181818;
  font-size: 0.17rem;
  text-align: left;
  width:30%;
}

.password .mui-input-row .addre, .password .mui-input-row .occupation{
    background:url(../../../assets/img/rightarow@2x.png) no-repeat right center;
    background-size:0.08rem 0.15rem;
}

.password .mui-input-row .road, .password .mui-input-row .company{
    background:url(../../../assets/img/edit@2x.png) no-repeat right center;
    background-size:0.12rem 0.12rem;
}

.password .mui-input-row input {
    width:70%;
    text-align: right;
    padding-right:0.24rem;
}

.password .mui-input-row input::placeholder {
  color: #d5d5d5;
  font-size: 0.15rem;
  text-align: left;
}

.message {
  color: #8c8c8c;
  font-size: 0.14rem;
  text-align: left;
  padding-left: 0.14rem;
  box-sizing: border-box;
}
.mytip {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
}
.mytip .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 0.16rem;
  box-sizing: border-box;
  font-size: 0.18rem;
  background: white;
}

.mytip .header .close {
  font-size: 0.14rem;
}
.mytip .header img {
  height: 0.12rem;
  width: 0.07rem;
  margin: 0;
}
.mytip img {
  width: 0.65rem;
  margin: 0.62rem 0 0.17rem;
}

.tipcontent {
  text-align: center;
}

.tipcontent ul li:nth-child(1) {
  font-size: 0.2rem;
  color: black;
  margin-bottom: 0.2rem;
}
.tipcontent ul li:nth-child(1) span {
  margin-left: 0.05rem;
}
.tipcontent ul li:nth-child(2) {
  font-size: 0.24rem;
  color: black;
}
.tipcontent ul li:nth-child(3) {
  font-size: 0.14rem;
  color: #a5a5a5;
  padding: 0.28rem 0 0.62rem;
}
.service {
  width: 100%;
  position: absolute;
  bottom: 0.2rem;
  left: 0;
}
.complete {
  padding: 0 0.1rem;
  box-sizing: border-box;
  margin-top: 0.28rem;
}
</style>