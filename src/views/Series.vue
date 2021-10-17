<template lang="pug">
article.series
  section.banner
    BannerSwiper(:pictureLink="banner" :isSmall="screenWidth < 768")
  section.main
    .wrapper
      .breadcrumb
        router-link.breadcrumb-item(:to="{name:'Product'}")
          p 產品展示
        .breadcrumb-item
          p {{product.list.categoryName}}
      h2.title {{product.list.categoryName}}
      p.info {{product.list.categoryDescription}}
      .search-box
        SearchBox(
          :searchTxt="searchTxt"
          placeholderTxt="輸入產品關鍵字"
          @searchHandler="searchHandler"
        )
      CardList(:cardData="product.list.products" routeName="ProductInfo")
      paginate(
        :page-count="product.list.allPages||0"
        :click-handler="pageHandler"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'paginate-box'"
        :hide-prev-next="true"
      )
</template>

<script>
import { mapState, mapActions } from "vuex";
import BannerSwiper from "@/components/BannerSwiper.vue";
import CardList from "@/components/CardList.vue";
import SearchBox from "@/components/SearchBox.vue";
import Paginate from "vuejs-paginate";
import { gsap } from "gsap";

export default {
  name: "Product",
  components: { BannerSwiper, CardList, SearchBox, Paginate },
  props: {},
  mixins: [],
  data() {
    return {
      banner: {
        pc: [this.compileFilePath("product-bn.jpg")],
        mobile: [this.compileFilePath("product-bn.jpg")]
      },
      searchTxt: "",
      pageSize: 9,
      sceneArr: []
    };
  },
  computed: {
    ...mapState(["isLoading", "product", "screenWidth"])
  },
  created() {
    this.getProductApi("", 1);
  },
  mounted() {
    this.setInitial();
    this.setAnimate();
  },
  methods: {
    ...mapActions(["getProductList"]),
    getProductApi(select, currentPage) {
      this.getProductList({
        select,
        productCategoryId: parseInt(this.$route.params.id),
        pageSize: this.pageSize,
        currentPage
      })
        .then(() => {
          console.log("success");
        })
        .catch(() => {
          console.log("fail");
        });
    },
    searchHandler(txt) {
      this.searchTxt = txt;
      this.getProductApi(txt, 1);
      this.searchTxt = "";
    },
    pageHandler(pageNum) {
      this.getProductApi(this.searchTxt, pageNum);
    },
    setInitial() {
      gsap.set(".breadcrumb,.title,.info,section.main .search-box", {
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
            .to(".title", 1, {
              y: 0,
              opacity: 1,
              delay: -0.7
            })
            .to(".info", 1, {
              y: 0,
              opacity: 1,
              delay: -0.7
            })
            .to(".search-box", 1, {
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
  watch: {}
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.series
  section.banner
  section.main
    .wrapper
      h2.title
        margin: 2rem 0
        text-align: left
      p.info
        margin-bottom: 6rem
      .search-box
        width: 360px
        margin-left: auto
        margin-bottom: 6rem
  +rwd(768px)
    section.main
      .wrapper
        h2.title
          margin: 1rem 0
        p.info
          margin-bottom: 3rem
        .search-box
          width: 80%
          // width: 360px
          margin: 0 auto 3rem
</style>
