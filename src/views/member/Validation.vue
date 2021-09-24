<template lang="pug">
.validation-wrapper
  h2.title 會員驗證
  .form-box
    .row
      label
        .field-title 驗證碼
        input(type="text" v-model="token")
  .btn(@click="postValidationHandler") 送出
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Validation",
  components: {},
  props: {},
  mixins: [],
  data() {
    return { token: "" };
  },
  computed: {
    ...mapState(["isLoading"])
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      if (this.$route.query.t) {
        this.token = this.getUrlToken();
        this.postValidationHandler();
      }
    });
  },
  methods: {
    ...mapActions(["postValidation"]),
    postValidationHandler() {
      this.postValidation(this.token)
        .then(() => {
          this.$router.push({ name: "Member" });
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

.validation-wrapper
</style>
