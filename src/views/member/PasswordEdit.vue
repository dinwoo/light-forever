<template lang="pug">
.password-edit-wrapper
  h2.title 修改密碼
  .form-box
    .row
      label
        .field-title 驗證碼
        input(type="text" v-model="token")
    .row
      label
        .field-title 密碼
        input(type="password" v-model="password")
    .row
      label
        .field-title 密碼確認
        input(type="password" v-model="confirmPassword")
  .btn(@click="putPasswordInfoHandler") 確認修改
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PasswordEdit",
  components: {},
  props: {},
  mixins: [],
  data() {
    return {
      token: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    ...mapState(["isLoading"])
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      if (this.$route.query.t) {
        this.token = this.getUrlToken();
      }
    });
  },
  methods: {
    ...mapActions(["putPasswordInfo"]),
    putPasswordInfoHandler() {
      this.putPasswordInfo({
        token: this.token,
        password: this.password,
        confirmPassword: this.confirmPassword
      })
        .then(() => {
          alert("修改成功");
          localStorage.removeItem("account");
          localStorage.removeItem("token");
          this.$router.push({ name: "Signin" });
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

.password-edit-wrapper
</style>
