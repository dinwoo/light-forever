<template lang="pug">
article.contact
  section.banner
    BannerSwiper(:pictureLink="banner" :isSmall="true")
  section.main
    .wrapper
      h2.title 聯絡我們
      p.description 聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案
      .contact-form-box
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
            .field-title Email
            input(type="text" v-model="email")
        .row
          label
            .field-title 內容
            textarea(v-model="content")
      .btn(@click="postEmailHandler") 送出
</template>

<script>
import { mapState, mapActions } from "vuex";
import BannerSwiper from "@/components/BannerSwiper.vue";

export default {
  name: "Contact",
  components: { BannerSwiper },
  props: {},
  mixins: [],
  data() {
    return {
      banner: {
        pc: ["http://fakeimg.pl/1440x447/eee/000000/?text=ContactBanner"],
        mobile: ["http://fakeimg.pl/186x163/eee/000000/?text=ContactBanner"]
      },
      name: "",
      phone: "",
      email: "",
      content: ""
    };
  },
  computed: {
    ...mapState(["isLoading"])
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions(["postEmail"]),
    postEmailHandler() {
      this.postEmail({
        name: this.name,
        phone: this.phone,
        email: this.email,
        content: this.content
      })
        .then(() => {
          alert("傳送成功");
          this.name = "";
          this.phone = "";
          this.email = "";
          this.content = "";
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

article.contact
  section.banner
  section.main
    .wrapper
      h2.title
        margin-bottom: 2.5rem
        text-align: center
      p.description
        margin-bottom: 5rem
      .contact-form-box
        width: 100%
        padding: 50px 150px
        border: 1px solid $gray-002
        box-shadow: 12px 12px 7px rgba(0,0,0,.4)
        box-sizing: border-box
        .row
          width: 100%
          & + .row
            margin-top: 0.8rem
          label
            .field-title
            input,textarea
              width: 100%
              padding: 0 .5rem
              font-size: 1rem
              line-height: 1.5
              box-sizing: border-box
              &:focus
                outline: none
            input
            textarea
              height: 330px
              resize: none
      .btn
        +btnStyle
        width: 280px
        display: block
        margin: 2rem auto
        box-sizing: border-box
        text-align: center
  +rwd(768px)
    section.main
      .wrapper
        h2.title
          margin-bottom: 1.5rem
        p.description
          margin-bottom: 2rem
        .contact-form-box
          padding: 25px 30px
          .row
            & + .row
              // margin-top: 0.8rem
            label
              .field-title
              input,textarea
              input
              textarea
                height: 160px
        .btn
          width: 180px
          // margin: 2rem auto
</style>
