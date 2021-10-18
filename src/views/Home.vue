<template lang="pug">
article.home(v-if="!isLoading")
  section.banner(v-if="!isLoading")
    BannerSwiper(:pictureLink="home.banner" :isSmall="false")
  section.main
    .wrapper
      h2 有燈就會有光
      p 
        | 一燈一飾照亮您秉持專業、品質、信譽、服務
        br
        | 為您提供最合適的燈飾。
  section.product
    .wrapper
      .series-box
        .series-item(v-for="product in product.category.productCategories" :key="product.id")
          p.series-name {{product.name}}
          .series-pic(
            :style="`background-image:url('${(product.img)}')`"
          )
      router-link.btn(:to="{name:'Product'}") 更多產品
</template>

<script>
import { mapState, mapActions } from "vuex";
import BannerSwiper from "@/components/BannerSwiper.vue";
import { gsap } from "gsap";

export default {
  name: "Home",
  components: { BannerSwiper },
  props: {},
  mixins: [],
  data() {
    return {
      sceneArr: []
    };
  },
  computed: {
    ...mapState(["isLoading", "home", "product"])
  },
  created() {
    this.getApi();
  },
  mounted() {},
  methods: {
    ...mapActions(["getBanner", "getCategoryList"]),
    getApi() {
      Promise.all([
        this.getBanner(),
        this.getCategoryList({
          select: "",
          pageSize: 3,
          currentPage: 1
        })
      ])
        .then(() => {
          console.log("success");
          this.setInitial();
          this.setAnimate();
        })
        .catch(() => {
          console.log("fail");
        });
    },
    setInitial() {
      gsap.set("section.main", {
        y: 100,
        opacity: 0
      });
      gsap.set("section.product", {
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
            .to("section.main", 1, {
              y: 0,
              opacity: 1
            })
            .to("section.product", 1, {
              y: 0,
              opacity: 1
            });
        });
      // .addIndicators({ name: "banner" });

      this.sceneArr.forEach(scene => {
        this.$scrollmagic.addScene(scene);
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
        max-width: 400px
        margin: auto
        text-align: center
        line-height: 1.5
  section.product
    padding: 2rem 0
    text-align: center
    .wrapper
      .series-box
        display: flex
        justify-content: space-between
        .series-item
          width: calc(33.3333% - 20px)
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
        margin: 6rem 0 3rem 0
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
