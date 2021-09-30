<template lang="pug">
.signin-wrapper
  h2.title 會員登入
  .form-box
    .row
      label
        .field-title 帳號
        input(type="text" v-model="account")
    .row
      label
        .field-title 密碼
        input(type="password" v-model="password")
    .row
      router-link.signup-btn(:to="{name:'Signup'}") 會員註冊
      router-link.forget-btn(:to="{name:'ForgetPassword'}") 忘記密碼？
  .btn(@click="postSigninHandler") 登入
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Signin",
  components: {},
  props: {},
  mixins: [],
  data() {
    return {
      account: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["isLoading"])
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions(["postSignin"]),
    postSigninHandler() {
      this.postSignin({
        account: this.account,
        password: this.password
      })
        .then(res => {
          console.log(res);
          localStorage.setItem("account", res.data.account);
          localStorage.setItem("token", res.data.token);
          this.$router.push({ name: "Home" });
        })
        .catch(() => {
          alert("傳送失敗");
        });
    }
  },
  watch: {}
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.signin-wrapper
  .signup-btn
    text-decoration: underline
  .signup-btn,.forget-btn
    color: $dark-001
    transition: .3s
    +hover
      color: $dark-002
  .forget-btn
    float: right
</style>
