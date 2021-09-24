<template lang="pug">
article.product
  section.banner
    BannerSwiper(:pictureLink="banner" :isSmall="true")
  section.main
    .wrapper
      h2.title 產品系列
      .search-box
        SearchBox(
          :searchTxt="searchTxt"
          @searchHandler="searchHandler"
        )
      CardList(:cardData="product.category.productCategories" routeName="Series")
      paginate(
        :page-count="product.category.allPages||0"
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
  name: "Product",
  components: { BannerSwiper, CardList, SearchBox, Paginate },
  props: {},
  mixins: [],
  data() {
    return {
      banner: {
        pc: ["http://fakeimg.pl/1440x447/eee/000000/?text=ProductBanner"],
        mobile: ["http://fakeimg.pl/186x163/eee/000000/?text=ProductBanner"]
      },
      // cardData: [
      //   {
      //     id: 1,
      //     title: "title",
      //     description:
      //       "description description description description description",
      //     picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
      //   },
      //   {
      //     id: 2,
      //     title: "title",
      //     description:
      //       "description description description description description",
      //     picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
      //   },
      //   {
      //     id: 3,
      //     title: "title",
      //     description:
      //       "description description description description description",
      //     picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
      //   },
      //   {
      //     id: 4,
      //     title: "title",
      //     description:
      //       "description description description description description",
      //     picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
      //   },
      //   {
      //     id: 5,
      //     title: "title",
      //     description:
      //       "description description description description description",
      //     picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
      //   },
      //   {
      //     id: 6,
      //     title: "title",
      //     description:
      //       "description description description description description",
      //     picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
      //   },
      //   {
      //     id: 7,
      //     title: "title",
      //     description:
      //       "description description description description description",
      //     picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
      //   }
      // ],
      searchTxt: "",
      pageSize: 10
    };
  },
  computed: {
    ...mapState(["isLoading", "product"])
  },
  created() {
    this.getCategoryApi("", 1);
  },
  mounted() {},
  methods: {
    ...mapActions(["getCategoryList"]),
    getCategoryApi(select, currentPage) {
      this.getCategoryList({
        select,
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
      this.getCategoryApi(txt, 1);
    },
    pageHandler(pageNum) {
      this.getCategoryApi(this.searchTxt, pageNum);
    }
  },
  watch: {}
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
        right: 0
  +rwd(768px)
    section.main
      .wrapper
        position: relative
        h2.title
          margin-bottom: 1.5rem
          text-align: center
        .search-box
          width: 80%
          margin: 0 auto 3rem
          position: relative
</style>
