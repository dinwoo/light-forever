<template lang="pug">
.member-info-wrapper(v-if="!isLoading")
  h2.title 會員資料
  .form-box
    .row
      label
        .field-title 姓名
        p.field-info(v-if="!isEdit") {{member.name}}
        input(v-else type="text" v-model="member.name")
    .row
      label
        .field-title 電話
        p.field-info(v-if="!isEdit") {{member.phone}}
        input(v-else type="phone" v-model="member.phone")
    .row
      label
        .field-title 公司
        p.field-info(v-if="!isEdit") {{member.company}}
        input(v-else type="text" v-model="member.company")
    .row
      label
        .field-title 職稱
        p.field-info(v-if="!isEdit") {{member.companyTitle}}
        input(v-else type="text" v-model="member.companyTitle")
    .row
      label
        .field-title 帳號
        p.field-info {{member.account}}
  .btn(v-if="!isEdit" @click="isEdit=!isEdit") 修改資料
  .btn(v-else @click="putMemberInfoApi") 確認修改
  router-link.btn(v-if="!isEdit" :to="{name:'ForgetPassword'}") 修改密碼
  .btn(v-if="!isEdit" @click="logoutHandler") 登出
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
    ...mapState(["isLoading", "member"])
  },
  created() {
    const account = localStorage.getItem("account");
    if (!account) {
      this.$router.push({ name: "Signin" });
    } else {
      this.getMemberInfo(account)
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          this.isEdit = false;
        })
        .catch(() => {
          console.log("fail");
        });
    }
  },
  mounted() {},
  methods: {
    ...mapActions(["getMemberInfo", "putMemberInfo"]),
    putMemberInfoApi() {
      this.putMemberInfo({
        token: localStorage.getItem("token"),
        name: this.member.name,
        phone: this.member.phone,
        company: this.member.company,
        companyTitle: this.member.companyTitle
      })
        .then(() => {
          console.log("success");
          this.isEdit = false;
        })
        .catch(() => {
          console.log("fail");
        });
    },
    logoutHandler() {
      localStorage.removeItem("account");
      localStorage.removeItem("token");
      this.$router.push({ name: "Signin" });
    }
  },
  watch: {}
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.member-info-wrapper
</style>
