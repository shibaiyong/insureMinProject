<template>
  <div class="uploadphotos">
    <MyHeader title="信息验证" />
    <div class="photos">
      <h3>{{'请上传'+ username +'本人身份证正反面照片'}}</h3>

      <div class="frontphotos">
        <img :src="imgsrc" @click="showActionSheet" />
      </div>
      <p class="fronttext">上传身份证正面照片</p>

      <div class="reversephotos">
        <img src="@/assets/img/takephotos/reverseidcard@2x.png" />
      </div>
      <p class="reversetext">上传身份证反面照片</p>
      <div class="line"></div>
    </div>
    <div class="errorimg">
      <dl>
        <dt>
          <img src="@/assets/img/takephotos/standard@2x.png" />
        </dt>
        <dd>标准</dd>
      </dl>
      <dl>
        <dt>
          <img src="@/assets/img/takephotos/damage@2x.png" />
        </dt>
        <dd>证件缺失</dd>
      </dl>
      <dl>
        <dt>
          <img src="@/assets/img/takephotos/obscure@2x.png" />
        </dt>
        <dd>照片模糊</dd>
      </dl>
      <dl>
        <dt>
          <img src="@/assets/img/takephotos/reflectlight@2x.png" />
        </dt>
        <dd>闪光强烈</dd>
      </dl>
    </div>
    <div class="complete">
      <MyButton content="上传" :btnStyle="btnStyle" @click.native="uploadfile" />
    </div>
    <div class="service">
      <Service />
    </div>
    <input type="file" id="file" @change="changeImage($event)" accept="image/gif,image/jpeg,image/jpg,image/png"/>

    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>

<script>
import Service from "@/components/base/Service.vue";
import MyButton from "@/components/base/MyButton";
import MyHeader from "@/components/base/MyHeader";
export default {
  name: "UploadIdPhotos",
  props: {},
  data() {
    let that = this;
    return {
      username: "张某某",
      btnStyle: {
        width: "100%",
        height: "0.4rem",
        background: "#3965ff",
        borderRadius: "0.2rem",
        color: "white"
      },
      actions: [{ name: "从相册中选择", method: that.getLibrary }],
      sheetVisible: false,
      imgsrc: require("../../../assets/img/takephotos/frontidcard@2x.png")
    };
  },
  created() {},
  methods: {
    showActionSheet() {
      this.sheetVisible = true;
    },
    getLibrary() {},
    uploadfile() {
      let file = document.getElementById("file")
      let FormDataObject = new FormData()
      FormDataObject.append('front',file.files[0])
    },
    changeImage(e) {
      var file = e.target.files[0]
      var reader = new FileReader()
      var that = this
      reader.readAsDataURL(file)
      reader.onload = function(e) {
        that.imgsrc = this.result
      };
    }
  },
  computed: {},
  mounted() {
    this.getLibrary();
  },
  components: {
    MyButton,
    Service,
    MyHeader
  },
  beforeDestroy() {}
};
</script>
<style scoped>
#file {
  /* display:none; */
}
.photos h3 {
  font-size: 0.2rem;
  text-align: center;
  margin: 0.3rem 0;
}
.photos p {
  font-size: 0.15rem;
  text-align: center;
  margin: 0.15rem 0 0.3rem;
  color: #8c8c8c;
}
.photos .line {
  width: 3.5rem;
  margin: 0 auto;
  background: #c7d9fd;
  height: 1px;
}
.errorimg {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.errorimg dl {
  width: 0.82rem;
  font-size: 0.12rem;
  text-align: center;
}

.errorimg dl dt img {
  width: 100%;
}
.errorimg dl dt {
  margin-bottom: 0.1rem;
}

.frontphotos,
.reversephotos {
  width: 1.96rem;
  margin: 0 auto;
}

.frontphotos img,
.reversephotos img {
  width: 100%;
}

.service {
  margin-top: 0.2rem;
}

.complete {
  padding: 0 0.14rem;
  box-sizing: border-box;
  margin-top: 0.28rem;
}
</style>