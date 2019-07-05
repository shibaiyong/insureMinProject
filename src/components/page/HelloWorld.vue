<template>
  <div class="hello">
    <mt-button type="danger" @click="showIndicator">指示符</mt-button>
    <mt-button type="danger" @click="showMessageBox">消息框</mt-button>
    <mt-picker :slots="slots" @change="onValuesChange" value-key="date"></mt-picker>
    <mt-button type="danger" @click="openTimePicker">打开日历</mt-button>
    <mt-button type="danger" @click="linkTo">跳转到helloearth</mt-button>
    <mt-checklist title="复选框列表" v-model="value" :options="['选项A', '选项B', '选项C', '选项D']"></mt-checklist>
    <mt-datetime-picker
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      v-model="pickerTimeValue"
      @confirm="handleConfirm"
    ></mt-datetime-picker>
    <mt-button type="danger" @click="getData">获取数据</mt-button>
    <mt-field label="数据A" placeholder="请输入dataA" v-model="dataaA" @change="changeDataA"></mt-field>
    <mt-field label="数据B" placeholder="请输入dataB" v-model="dataaB"></mt-field>
    <mt-button type="danger" @click="changeDataC">拼接字符串C</mt-button>
    <mt-button type="danger" @click="add">+10</mt-button>
    <p>{{dataC}}</p>
    <p>{{value}}</p>
    <p>{{num}}</p>

    <!-- <VerticalSwiper/> -->
  </div>
</template>

<script>
import { Indicator, MessageBox } from "mint-ui"
import { planCheckName } from "@/requestDataInterface"
import { mapState, mapActions } from "vuex"
import VerticalSwiper from "@/components/base/VerticalSwiper"
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      pickerTimeValue: "",
      dataaA: "",
      dataaB: "",
      dataaC: "",
      value:[],
      num:0,
      slots: [
        {
          flex: 1,
          values: [
            { date: "2015-01" },
            { date: "2015-02" },
            { date: "2015-03" },
            { date: "2015-04" },
            { date: "2015-05" },
            { date: "2015-06" }
          ],
          className: "slot1",
          textAlign: "center"
        }
      ],
      options: [
        {
          label: "被禁用",
          value: "值F",
          disabled: true
        },
        {
          label: "选中禁用",
          value: "选中禁用的值",
          disabled: true
        },
        {
          label: "选项A",
          value: "值A"
        },
        {
          label: "选项B",
          value: "值B"
        }
      ],
      timer:null
    };
  },
  methods: {
    add(){
      this.num += 10;
    },
    showIndicator() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
    },
    showMessageBox() {
      MessageBox({
        title: "提示",
        message: "确定执行此操作?",
        showCancelButton: true
      });
    },
    showMessageBox() {
      MessageBox.confirm("确定执行此操作?", "确认的标题")
        .then(action => {
          //点击确认按钮执行的操作
          //console.log(action)
        })
        .catch(err => {
          //点击取消按钮执行的操作
          //console.log(err);
        });
    },
    onValuesChange(picker, values) {
      //获取选择器的值。
      //console.log(values[0]);
    },
    openTimePicker() {
      this.$refs.picker.open();
    },
    handleConfirm(val) {
      // console.log(val);
      // console.log(this.pickerTimeValue);
    },
    linkTo() {
      this.$router.push({ name: "HelloEarth", params: { userid: "123" } });
    },
    getData() {
      planCheckName().then(res => {});
    },
    changeDataA() {
      this.$store.dispatch("changeDataA", "a");
      this.changeDataC("c");
    },
    ...mapActions(["changeDataC"])
  },
  computed: {
    dataA() {
      return this.$store.state.dataA;
    },
    ...mapState(["dataC"])
  },
  components:{
    // VerticalSwiper
  },
  mounted(){
    //this.timer = setInterval(function(){console.log(1)},2000)
  },
  beforeDestroy(){
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
