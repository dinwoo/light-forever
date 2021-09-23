<template lang="pug">
article.home
  section.banner
    BannerSwiper(:pictureLink="home.banner")
  section.main
    .wrapper
      h2 公司、產品、企業精神文案標題（或是slogan）
      p 公司、產品、企業精神文案公司、產品、企業精神文案公司、產品、企業精神文案公司、產品、企業精神文案公司、產品、企業精神文案公司、產品、企業精神文案公司、產品、企業精神文案公司、產品、企業精神文案公司、產品、企業精神文案公司、產品、企業精神文案公司、產品、企業精神文案公司、產品、企業精神文案公司、產品、企業精神文案公司、產品、企業精神文案公司、產品、企業精神文案
  section.product
    .wrapper
      .series-box
        .series-item
          p.series-name 熱銷產品系列
          .series-pic(
            :style="`background-image:url('${(product.pic)}')`"
          )
        .series-item
          p.series-name 熱銷產品系列
          .series-pic(
            :style="`background-image:url('${(product.pic)}')`"
          )
        .series-item
          p.series-name 熱銷產品系列
          .series-pic(
            :style="`background-image:url('${(product.pic)}')`"
          )
      router-link.btn(:to="{name:'Product'}") 更多產品
</template>

<script>
import { mapState, mapActions } from "vuex";
import BannerSwiper from "@/components/BannerSwiper.vue";

export default {
  name: "Home",
  components: { BannerSwiper },
  props: {},
  mixins: [],
  data() {
    return {
      banner: {
        pc: [
          "http://fakeimg.pl/1440x800/eee/000000/?text=HomeBanner1",
          "http://fakeimg.pl/1440x800/eee/000000/?text=HomeBanner2"
        ],
        mobile: [
          "http://fakeimg.pl/711x1151/eee/000000/?text=HomeBanner1",
          "http://fakeimg.pl/711x1151/eee/000000/?text=HomeBanner2"
        ]
      },
      product: {
        pic: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
      }
    };
  },
  computed: {
    ...mapState(["isLoading", "home"])
  },
  created() {
    this.getBannerApi();
  },
  mounted() {},
  methods: {
    ...mapActions(["getBanner"]),
    getBannerApi() {
      this.getBanner({})
        .then(() => {
          console.log("success");
        })
        .catch(() => {
          console.log("fail");
        });
    }
  },
  watch: {}
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.home
  section.banner
  section.main
    .wrapper
      h2
        margin-bottom: 3rem
        text-align: center
      p
  section.product
    padding: 2rem 0
    text-align: center
    .wrapper
      .series-box
        display: flex
        justify-content: space-between
        .series-item
          width: calc(33.3333% - 50px)
          p.series-name
            margin-bottom: 0.8rem
            text-align: center
          .series-pic
            width: 100%
            padding-bottom: 100%
            background-size: cover
            background-position: center center
            background-repeat: no-repeat
      .btn
        margin: 2rem
        +btnStyle
  +rwd(768px)
    section.banner
    section.main
      .wrapper
        h2
          margin-bottom: 1.5rem
        p
    section.product
      padding: 1rem 0
      .wrapper
        .series-box
          display: block
          .series-item
            width: 70%
            margin: 0 auto 2rem
            p.series-name
            .series-pic
        .btn
          margin: 1rem
</style>
