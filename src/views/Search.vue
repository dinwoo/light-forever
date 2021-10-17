<template lang="pug">
article.product
  section.banner
    BannerSwiper(:pictureLink="banner" :isSmall="screenWidth < 768")
  section.main
    .wrapper
      h2.title 產品搜尋結果 ： {{$route.query.t}}
      //- .search-box
        SearchBox
      CardList(:cardData="product.search.products" routeName="ProductInfo")
      paginate(
        :page-count="product.search.allPages||0"
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

export default {
  name: "Search",
  components: { BannerSwiper, CardList, SearchBox, Paginate },
  props: {},
  mixins: [],
  data() {
    return {
      banner: {
        pc: [this.compileFilePath("product-bn.jpg")],
        mobile: [this.compileFilePath("product-bn.jpg")]
      },
      pageSize: 9
    };
  },
  computed: {
    ...mapState(["isLoading", "product", "screenWidth"]),
    select() {
      return this.$route.query.t;
    }
  },
  created() {
    this.getSearchApi(1);
  },
  mounted() {},
  methods: {
    ...mapActions(["getSearchList"]),
    getSearchApi(currentPage) {
      this.getSearchList({
        select: this.select,
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
    pageHandler(pageNum) {
      this.getSearchApi(pageNum);
    }
  },
  watch: {
    select() {
      this.getSearchApi(1);
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.product
  section.banner
  section.main
    .wrapper
      position: relative
      h2.title
        margin-bottom: 5rem
      .search-box
        position: absolute
        top: 0
        right: 15px
  +rwd(768px)
    section.main
      .wrapper
        h2.title
          margin-bottom: 1.5rem
          text-align: center
        .search-box
          width: 80%
          margin: 0 auto 3rem
          position: relative
</style>
