<template lang="pug">
article.series
  section.banner
    BannerSwiper(:pictureLink="banner" :isSmall="true")
  section.main
    .wrapper
      .breadcrumb
        .breadcrumb-item 產品系列
        .breadcrumb-item 產品系列名稱
      h2.title 產品系列名稱
      p.info 產品系列文案介紹產品系列文案介紹產品系列文案介紹產品系列文案介紹產品系列文案介紹產品系列文案介紹產品系列文案介紹產品系列文案介紹產品系列文案介紹產品系列文案介紹產品系列文案介紹產品系列文案介紹產品系列文案介紹產品系列文案介紹
      .search-box
        SearchBox
      CardList(:cardData="cardData" routeName="Series")
</template>

<script>
import { mapState, mapActions } from "vuex";
import BannerSwiper from "@/components/BannerSwiper.vue";
import CardList from "@/components/CardList.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "Product",
  components: { BannerSwiper, CardList, SearchBox },
  props: {},
  mixins: [],
  data() {
    return {
      banner: {
        pc: ["http://fakeimg.pl/1440x447/eee/000000/?text=SeriesBanner"],
        mobile: ["http://fakeimg.pl/186x163/eee/000000/?text=SeriesBanner"]
      },
      cardData: [
        {
          id: 1,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
        },
        {
          id: 2,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
        },
        {
          id: 3,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
        },
        {
          id: 4,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
        },
        {
          id: 5,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
        },
        {
          id: 6,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
        },
        {
          id: 7,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/eee/000000/?text=PRODUCT"
        }
      ]
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

article.series
  section.banner
  section.main
    .wrapper
      h2.title
        margin: 1rem 0
      p.info
        margin-bottom: 2rem
      .search-box
        width: 360px
        margin-left: auto
        margin-bottom: 3rem
  +rwd(768px)
    section.main
      .wrapper
        h2.title
          text-align: center
          // margin: 1rem 0
        p.info
          // margin-bottom: 2rem
        .search-box
          width: 80%
          // width: 360px
          margin: 0 auto 3rem
</style>
