<template lang="pug">
.password-edit-wrapper
  h2.title 修改密碼
  .form-box
    .row
      label
        .field-title 驗證碼
        input(type="text")
    .row
      label
        .field-title 密碼
        input(type="password")
    .row
      label
        .field-title 密碼確認
        input(type="password")
  .btn 確認修改
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PasswordEdit",
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

.password-edit-wrapper
</style>
