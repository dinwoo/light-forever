<template lang="pug">
article.contact
  section.banner
    BannerSwiper(:pictureLink="banner" :isSmall="true")
  section.main
    .wrapper
      h2.title 聯絡我們
      p.description 聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案聯絡我們文案
      .form-box
        .row
          label
            .field-title 姓名
            input(type="text")
        .row
          label
            .field-title 電話
            input(type="text")
        .row
          label
            .field-title Email
            input(type="text")
        .row
          label
            .field-title 內容
            textarea
      .btn 送出
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
        pc: ["http://fakeimg.pl/1440x447/818181/000000/?text=ContactBanner"],
        mobile: ["http://fakeimg.pl/186x163/818181/000000/?text=ContactBanner"]
      }
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

article.contact
  section.banner
  section.main
    .wrapper
      h2.title
        margin-bottom: 2.5rem
        text-align: center
      p.description
        margin-bottom: 5rem
      .form-box
        width: 100%
        padding: 50px 150px
        border: 1px solid $gray-002
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
        .form-box
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
