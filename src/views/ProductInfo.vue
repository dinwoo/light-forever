<template lang="pug">
article.product-info-wrapper
  //- section.banner
  //-   BannerSwiper(:pictureLink="banner" :isSmall="true")
  section.main
    .wrapper
      .breadcrumb
        router-link.breadcrumb-item(:to="{name:'Product'}")
          p 產品展示
        router-link.breadcrumb-item(:to="{name:'Series', params:{id:product.detail.categoryId}}")
          p {{product.detail.categoryName}}
        router-link.breadcrumb-item(:to="{name:'ProductInfo', params:{id:product.detail.id}}")
          p {{product.detail.name}}
      .product-info
        img.product-pic(:src="product.detail.img")
        .info-box
          h2.title {{product.detail.name}}
          p.description {{product.detail.description}}
      .produvt-introduce.editor(v-html="product.detail.infos")
      router-link.btn(:to="{name:'Series', params:{id:product.detail.categoryId}}") 查看更多
</template>

<script>
import { mapState, mapActions } from "vuex";
import BannerSwiper from "@/components/BannerSwiper.vue";
import { gsap } from "gsap";

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
      },
      sceneArr: []
    };
  },
  computed: {
    ...mapState(["isLoading", "product"])
  },
  created() {
    this.getProductApi();
  },
  mounted() {
    this.setInitial();
  },
  methods: {
    ...mapActions(["getProductDetail"]),
    getProductApi() {
      this.getProductDetail({
        id: parseInt(this.$route.params.id)
      })
        .then(() => {
          console.log("success");
        })
        .catch(() => {
          console.log("fail");
        });
    },
    setInitial() {
      gsap.set(".breadcrumb,.product-info,.produvt-introduce,.btn", {
        y: 100,
        opacity: 0
      });
    },
    setAnimate() {
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: "section.main",
          triggerHook: 1,
          reverse: false
        })
        // .setTween(tl)
        .on("enter", function() {
          gsap
            .timeline()
            .to(".breadcrumb", 1, {
              y: 0,
              opacity: 1
            })
            .to(".product-info", 1, {
              y: 0,
              opacity: 1,
              delay: -0.7
            })
            .to(".produvt-introduce", 1, {
              y: 0,
              opacity: 1,
              delay: -0.7
            })
            .to(".btn", 1, {
              y: 0,
              opacity: 1,
              delay: -0.7
            });
        });
      // .addIndicators({ name: "banner" });

      this.sceneArr.forEach(scene => {
        this.$scrollmagic.addScene(scene);
      });
    }
  },
  watch: {
    isLoading(val) {
      if (!val) {
        this.setAnimate();
      }
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.product-info-wrapper
  section.banner
  section.main
    .wrapper
      position: relative
      text-align: center
      .breadcrumb
        text-align: left
      .product-info
        padding: 2rem 0
        border-bottom: 1px solid $gray-002
        text-align: left
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
        text-align: left
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
      .btn
        margin: 6rem 0 3rem
        +btnStyle
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
        .btn
          margin: 1rem
</style>
