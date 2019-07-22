<template>
  <div class="setpassword">
    <MyHeader title="设置交易密码" />
    <h3>请您设置交易密码</h3>
    <div class="password mui-input-group">
      <div class="mui-input-row">
        <label>交易密码</label>
        <input
          type="text"
          id="SIPBox1"
          class="mui-input-password"
          @focus="showKeyBoard('SIPBox1')"
          @blur="hideKeyBoard('SIPBox1')"
          placeholder="请输入交易密码"
          readonly
        />
      </div>
      <div class="mui-input-row">
        <label>再次确认</label>
        <input
          type="text"
          id="SIPBox2"
          class="mui-input-password"
          @focus="showKeyBoard('SIPBox2')"
          @blur="hideKeyBoard('SIPBox2')"
          placeholder="请再次输入交易密码"
          readonly
        />
      </div>
    </div>
    <div class="tip">
      <span>注意:</span>
      <span>密码不能为连续、倒连续或重复数字，如123456、654321、00000等。</span>
    </div>

    <div class="complete">
      <MyButton content="完成" :btnStyle="btnStyle" @click.native="submitData" />
    </div>
    <div id="NumberKeyboard1"></div>
    <div id="NumberKeyboard2"></div>
  </div>
</template>

<script>
import MyHeader from "@/components/base/MyHeader.vue";
import MyButton from "@/components/base/MyButton";
import Service from "@/components/base/Service.vue";
import { Toast } from "mint-ui";
export default {
  name: "SetPassword",
  props: {},
  data() {
    this.RSA_PUBLIC_KEY =
      "30818702818100B9800F6965ECCDD3621E2DF1974FEDF8B8BFCD5ECF58155DCB279CAA8F8838480B6DFC973752CC678C2A291A799927C08CCD7CB31218DB8B3A5A675C4E83B997F7D0479C3692DD53D52B52C61ECEE4708B1C0F2199001DD298A52BBF5750EDED9F03CA05B19E295D84CFB1798E084458E972A506F6629C4B22509713B9C72F5F020103";
    this.RSA_PUBLIC_KEY_SIG =
      "0821AFBC831EA062B9BEC0F0D10EAC5CB53FF6D608DFF1783C24BB6A6A1E650EA6F98ED29DEAC94D436A122AB40514A6985E4130C2115562A9DE0896F612E85ACB9DA5CB49A30BF2653E9CA542BE4B287B5EB37CBD97B045ECD1621E90E542FBA8F394CDA8E752F7AE0F2C83F589F46B3F2121F4D010090FB898514DCB8A5F90";
    this.Random = "0123456789012345";
    this.keyboard = {
      SIPBox1: null,
      SIPBox2: null
    };
    this.toastinstance = null;
    return {
      btnStyle: {
        width: "100%",
        height: "0.4rem",
        //background: "#ddd",
        background: "#3965ff", //输入状态根据短息验证码是否获取到
        borderRadius: "0.2rem",
        color: "white"
      },
      rule: {
        t: {
          //总长度
          min: 6,
          max: 6
        },
        d: {
          // 数字
          min: 6,
          max: 6
        }
      }
    };
  },
  created() {},
  methods: {
    submitData() {
      if (!this.checkPwd("SIPBox1")) {
        return;
      }
      console.log("提交数据");
    },
    showKeyBoard(inputname) {
      this.keyboard[inputname].showKeyboard();
    },
    hideKeyBoard(inputname) {
      this.keyboard[inputname].hideKeyboard();
    },
    addKeyBoard(inputname) {
      this.keyboard[inputname].bindInputBox(inputname);
      if (
        CFCA_OK !=
        this.keyboard[inputname].setServerRandom(this.Random, inputname)
      ) {
        alert("SetServerRandom error");
      }
      if (
        CFCA_OK !=
        this.keyboard[inputname].setPublicKey(
          this.RSA_PUBLIC_KEY,
          this.RSA_PUBLIC_KEY_SIG,
          inputname
        )
      ) {
        alert("SetPublicKey error");
      }
    },
    initKeyBoard() {
      this.keyboard.SIPBox1 = new CFCAKeyboard("NumberKeyboard1", 1);
      this.keyboard.SIPBox2 = new CFCAKeyboard("NumberKeyboard2", 1);
      this.keyboard.SIPBox1.hideKeyboard();
      this.keyboard.SIPBox2.hideKeyboard();
    },
    checkPwd(inputname) {
      let t = new CFCAKeyboard.Range(this.rule.t.min, this.rule.t.max);
      let d = new CFCAKeyboard.Range(this.rule.d.min, this.rule.d.max);
      let res = this.keyboard[inputname].checkPasswordStrength(inputname, t, d);
      if (res) {
        let encryptedInputValue = this.keyboard[
          inputname
        ].getEncryptedInputValue(inputname);
        let errorCode = this.keyboard[inputname]
          .getErrorCode(inputname)
          .toString(16);
        if (errorCode != CFCA_OK) {
          this.toastinstance = Toast({
            message: errorCode,
            position: "center",
            duration: 2000
          });
          return false;
        } else {
          this.toastinstance = Toast({
            message: encryptedInputValue,
            position: "center",
            duration: 2000
          });
          return true;
        }
      } else {
        this.toastinstance = Toast({
          message: "密码不符合规范",
          position: "center",
          duration: 2000
        });
        return false;
      }
    }
  },
  computed: {},
  mounted() {
    this.initKeyBoard();
    this.addKeyBoard("SIPBox1");
    this.addKeyBoard("SIPBox2");
  },
  components: {
    MyHeader,
    MyButton
  },
  beforeDestroy() {}
};
</script>
<style scoped>
h3 {
  margin: 0.36rem 0 0.21rem;
  font-size: 0.16rem;
  color: #6c7382;
  text-align: center;
  font-weight: normal;
}
.password .mui-input-row label {
  color: #181818;
  font-size: 0.17rem;
}

.password .mui-input-row input::placeholder {
  color: #d5d5d5;
  font-size: 0.15rem;
}
.tip {
  padding: 0 0.16rem;
  margin-top: 0.16rem;
}
.tip span:nth-child(1) {
  color: #ff6000;
  font-size: 0.12rem;
}
.tip span:nth-child(2) {
  color: #7e838f;
  font-size: 0.12rem;
}
.complete {
  padding: 0 0.16rem;
  margin-top: 0.3rem;
}
</style>