<template lang="pug">
.forget-password-wrapper
  h2.title 忘記密碼
  .form-box
    .row
      label
        .field-title 帳號
        input(type="text" v-model="account")
  .btn(@click="postPasswordTokenHandler") 送出
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ForgetPassword",
  components: {},
  props: {},
  mixins: [],
  data() {
    return { account: "" };
  },
  computed: {
    ...mapState(["isLoading"])
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions(["postPasswordToken"]),
    postPasswordTokenHandler() {
      this.postPasswordToken(this.account)
        .then(() => {
          this.$router.push({ name: "PasswordEdit" });
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

.forget-password-wrapper
</style>
