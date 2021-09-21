<template lang="pug">
.signup-wrapper
  h2.title 會員註冊
  .form-box
    .row
      label
        .field-title 姓名
        input(type="text")
    .row
      label
        .field-title 電話
        input(type="phone")
    .row
      label
        .field-title 帳號
        input(type="text" placeholder="使用email註冊會員")
    .row
      label
        .field-title 密碼
        input(type="password")
    .row
      label
        .field-title 密碼確認
        input(type="password")
  .btn 註冊
      
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Signup",
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

.signup-wrapper
</style>
