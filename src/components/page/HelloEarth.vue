<template>
  <div class="hello">
    <mt-button type="danger" @click="showIndicator">指示符</mt-button>
    <mt-button type="danger" @click="showMessageBox">消息框</mt-button>
    <mt-picker :slots="slots" @change="onValuesChange" value-key="date"></mt-picker>
    <mt-button type="danger" @click="openTimePicker">打开日历</mt-button>
    <mt-datetime-picker
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      v-model="pickerTimeValue"
      @confirm="handleConfirm"
    ></mt-datetime-picker>
  </div>
</template>

<script>

import { Indicator, MessageBox } from "mint-ui"

export default {
  name: "HelloEarth",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      pickerTimeValue: "",
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
      ]
    };
  },
  mounted(){
    //路由传参之接收参数。
    //console.log(this.$route.params)
  },
  methods: {
    showIndicator() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      })
    },
    showMessageBox() {
      MessageBox({
        title: "提示",
        message: "确定执行此操作?",
        showCancelButton: true
      })
    },
    showMessageBox() {
      MessageBox.confirm("确定执行此操作?", "确认的标题")
        .then(action => {
          //点击确认按钮执行的操作
          console.log(action)
        })
        .catch(err => {
          //点击取消按钮执行的操作
          console.log(err)
        });
    },
    onValuesChange(picker, values) {
      //获取选择器的值。
      //console.log(values[0]);
    },
    openTimePicker() {
      this.$refs.picker.open()
    },
    handleConfirm(val) {
      //console.log(val)
      //console.log(this.pickerTimeValue)
    }
  }
}
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
