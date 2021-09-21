<template lang="pug">
.validation-wrapper
  h2.title 會員驗證
  .form-box
    .row
      label
        .field-title 驗證碼
        input(type="text")
  .btn 送出
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Validation",
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

.validation-wrapper
</style>
