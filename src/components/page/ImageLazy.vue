<template>
  <div class="hello">
    <ul>
      <li v-for="item in imglist" :key="item.id">
          <img v-lazy="item.src"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { planCheckName } from "@/requestDataInterface"
export default {
  name: "HelloWorld",
  data() {
    return {
      imglist:[
        {id:1,src:'/static/img/baijincard@2x.png'},
        {id:2,src:'/static/img/biaozhuncard@2x.png'},
        {id:3,src:'/static/img/fangaocard@2x.png'},
        {id:4,src:'/static/img/jingyingcard@2x.png'},
        {id:5,src:'/static/img/jinkacard@2x.png'},
        {id:6,src:'/static/img/jinlicard@2x.png'},
        {id:7,src:'/static/img/starcard@2x.png'},
        {id:8,src:'/static/img/yankacard@2x.png'}
      ]
    }
  },
  methods: {
    
  },
  computed: {
    
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
img{
  width:300px
}
</style>
