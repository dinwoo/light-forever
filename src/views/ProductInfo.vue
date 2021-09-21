<template lang="pug">
article.product-info-wrapper
  //- section.banner
  //-   BannerSwiper(:pictureLink="banner" :isSmall="true")
  section.main
    .wrapper
      .breadcrumb
        .breadcrumb-item 產品系列
        .breadcrumb-item 產品系列名稱
      .product-info
        img.product-pic(src="http://fakeimg.pl/360x360/eee/000000/?text=product")
        .info-box
          h2.title 產品名稱
          p.description 產品說明產品說明產品說明產品說明產品說明產品說明
      .produvt-introduce
        h2.introduce-title 產品介紹
        p.introduce-description 產品說明產品說明產品說明產品說明產品說明產品說明
        img.introduce-pic(src="http://fakeimg.pl/680x680/eee/000000/?text=product")
      .produvt-introduce
        h2.introduce-title 產品介紹
        p.introduce-description 產品說明產品說明產品說明產品說明產品說明產品說明
        img.introduce-pic(src="http://fakeimg.pl/680x680/eee/000000/?text=product")
</template>

<script>
import { mapState, mapActions } from "vuex";
import BannerSwiper from "@/components/BannerSwiper.vue";

export default {
  name: "ProductInfo",
  components: { BannerSwiper },
  props: {},
  mixins: [],
  data() {
    return {
      banner: {
        pc: ["http://fakeimg.pl/1440x447/eee/000000/?text=ProductBanner"],
        mobile: ["http://fakeimg.pl/186x163/eee/000000/?text=ProductBanner"]
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

article.product-info-wrapper
  section.banner
  section.main
    .wrapper
      position: relative
      .product-info
        padding: 2rem 0
        border-bottom: 1px solid $gray-002
        .product-pic
          width: 360px
          display: inline-block
          vertical-align: top
        .info-box
          width: calc( 100% - 360px )
          padding-left: 2rem
          box-sizing: border-box
          display: inline-block
          vertical-align: top
          h2.title
            margin-bottom: 1rem
          p.description
      .produvt-introduce
        padding: 2rem 0
        h2.introduce-title
          text-align: center
          margin-bottom: 1rem
        p.introduce-description
          text-align: center
          margin-bottom: 2rem
        img.introduce-pic
          width: 90%
          max-width: 680px
          margin: auto
          display: block
  +rwd(768px)
    section.banner
    section.main
      .wrapper
        .product-info
          .product-pic
            width: 100%
            padding: 0 1rem
            box-sizing: border-box
          .info-box
            width: 100%
            padding-left: 1rem
            h2.title
              margin: 1rem 0
            p.description
        .produvt-introduce
          // padding: 2rem 0
          h2.introduce-title
          p.introduce-description
          img.introduce-pic
</style>
