<template>
  <div class="hello">
    <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      :auto-fill="autofill"
      ref="loadmore"
    >
      <ul v-for="item in list" :key="item.id">
        <li>{{ item.date }}</li>
        <li>{{ item.title }}</li>
        <li>{{ item.pic }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
import { planCheckName } from "@/requestDataInterface"
export default {
  name: "UpDownUpdate",
  data() {
    return {
      allLoaded: false,
      list: [
        {
          id: 0,
          date: "2015/06/03",
          title: "还好吧",
          pic: "http://www.baidu.com"
        }
      ],
      page: 1,
      autofill: false
    }
  },
  mounted() {
    planCheckName({ page: this.page, size: 5 })
      .then(res => {
        this.list = res
        this.$refs.loadmore.onTopLoaded()
      })
      .catch(err => {})
  },
  methods: {
    loadTop() {
      this.page = 1
      planCheckName({ page: this.page, size: 5 })
        .then(res => {
          this.list = res
          this.$refs.loadmore.onTopLoaded()
          //重置上拉加载参数
          if(this.allLoaded){
            this.allLoaded = false
          }
        })
        .catch(err => {})
    },
    loadBottom() {
      this.page += 1
      planCheckName({ page: this.page, size: 5 })
        .then(res => {
          this.list.push(...res)
          //加载数据之后，要重新计算位置
          this.$refs.loadmore.onBottomLoaded()
          if (res.length == 0) {
            //数据全部加载完成后禁用上拉加载
            this.allLoaded = true
          }
        })
        .catch(err => {})
    }
  },
  computed: {}
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
