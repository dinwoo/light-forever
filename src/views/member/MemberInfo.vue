<template lang="pug">
.member-info-wrapper
  h2.title 會員資料
  .form-box
    .row
      label
        .field-title 姓名
        p.field-info(v-if="!isEdit") 姓名
        input(type="text" v-else)
    .row
      label
        .field-title 電話
        p.field-info(v-if="!isEdit") 0987654321
        input(type="phone" v-else)
    .row
      label
        .field-title 帳號
        p.field-info test@gmail.com
    .row
      label
        .field-title 密碼
        p.field-info(v-if="!isEdit") **********
        input(type="password" v-else)
    .row(v-if="isEdit")
      label
        .field-title 確認密碼
        input(type="password")
  .btn(v-if="!isEdit" @click="isEdit=!isEdit") 修改資料
  .btn(v-else) 確認資料
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "MemberInfo",
  components: {},
  props: {},
  mixins: [],
  data() {
    return {
      isEdit: false
    };
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

.member-info-wrapper
</style>
