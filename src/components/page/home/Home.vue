<template>
  <div class="home">
    <MyHeader title="如意宝"></MyHeader>
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import MyHeader from "@/components/base/MyHeader";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {},
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  },
  created() {},
  methods: {
      callback(){

      }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
  components: {
    MyHeader,
    swiper,
    swiperSlide
  },
  beforeDestroy() {}
};
</script>
<style scoped>
    .banner{
        height:40px;
    }
</style>