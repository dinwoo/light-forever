<template lang="pug">
.signin-wrapper
  h2.title 會員登入
  .form-box
    .row
      label
        .field-title 帳號
        input(type="text")
    .row
      label
        .field-title 密碼
        input(type="password")
    .row
      .forget-btn 忘記密碼？
  .btn 登入
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Signin",
  components: {},
  props: {},
  mixins: [],
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading"])
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions([""])
  },
  watch: {}
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.signin-wrapper
  .forget-btn
    text-align: right
    cursor: pointer
</style>
