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
        autoplay: {
          delay: 6000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        direction : 'vertical',
        speed:300
      }
    };
  },
  created() {},
  methods: {
    callback() {}
  },
  computed: {
    swiper() {
      console.log("hahah");
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {},
  components: {
    MyHeader,
    swiper,
    swiperSlide
  },
  beforeDestroy() {}
};
</script>
<style scoped>
.banner {
  height: 40px;
  overflow:hidden;
}
</style>