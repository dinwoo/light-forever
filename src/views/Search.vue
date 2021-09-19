<template lang="pug">
article.product
  section.banner
    BannerSwiper(:pictureLink="banner" :isSmall="true")
  section.main
    .wrapper
      h2.title 產品搜尋結果 ： {搜尋的關鍵字}
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
        pc: ["http://fakeimg.pl/1440x447/818181/000000/?text=SearchBanner"],
        mobile: ["http://fakeimg.pl/186x163/818181/000000/?text=SearchBanner"]
      },
      cardData: [
        {
          id: 1,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/818181/000000/?text=PRODUCT"
        },
        {
          id: 2,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/818181/000000/?text=PRODUCT"
        },
        {
          id: 3,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/818181/000000/?text=PRODUCT"
        },
        {
          id: 4,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/818181/000000/?text=PRODUCT"
        },
        {
          id: 5,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/818181/000000/?text=PRODUCT"
        },
        {
          id: 6,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/818181/000000/?text=PRODUCT"
        },
        {
          id: 7,
          title: "title",
          description:
            "description description description description description",
          picture: "http://fakeimg.pl/350x350/818181/000000/?text=PRODUCT"
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
        h2.title
          margin-bottom: 1.5rem
          text-align: center
        .search-box
          margin: 0 auto 3rem
          position: relative
</style>
