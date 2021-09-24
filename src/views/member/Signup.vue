<template lang="pug">
.signup-wrapper
  h2.title 會員註冊
  .form-box
    .row
      label
        .field-title 姓名
        input(type="text" v-model="name")
    .row
      label
        .field-title 電話
        input(type="phone" v-model="phone")
    .row
      label
        .field-title 公司
        input(type="text" v-model="company")
    .row
      label
        .field-title 職稱
        input(type="text" v-model="companyTitle")
    .row
      label
        .field-title 帳號
        input(type="text" placeholder="使用email註冊會員" v-model="account")
    .row
      label
        .field-title 密碼
        input(type="password" v-model="password")
    .row
      label
        .field-title 密碼確認
        input(type="password" v-model="confirmPassword")
  .btn(@click="postSignupHandler") 註冊
      
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Signup",
  components: {},
  props: {},
  mixins: [],
  data() {
    return {
      name: "",
      phone: "",
      account: "",
      company: "",
      companyTitle: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    ...mapState(["isLoading"])
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions(["postSignup"]),
    postSignupHandler() {
      this.postSignup({
        name: this.name,
        phone: this.phone,
        company: this.company,
        companyTitle: this.companyTitle,
        account: this.account,
        password: this.password,
        confirmPassword: this.confirmPassword
      })
        .then(() => {
          localStorage.setItem("account", this.account);
          this.$router.push({ name: "Validation" });
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

.signup-wrapper
</style>
