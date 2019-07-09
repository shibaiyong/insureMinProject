<template>
  <mt-header :title="title">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>

  </router-link>
  <mt-button icon="more" slot="right">{{close}}</mt-button>
</mt-header>

</template>

<script>

export default {
  props: {
    title: {
      default: '标题',
      type: String
    },
    close:{
      default: '',
      type: String
    }
  },
  data() {
    return {
      
    };
  },
  created() {
    
  },
  methods: {},
  computed: {
    
  },
  mounted() {
    
  },
  beforeDestroy(){
      
  }
};
</script>
<style scoped>

</style>