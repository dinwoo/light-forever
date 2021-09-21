<template lang="pug">
article.about
  section.banner
    BannerSwiper(:pictureLink="banner")
  section.main
    .wrapper
      InfoList(:listData="listData")
</template>

<script>
import { mapState, mapActions } from "vuex";
import BannerSwiper from "@/components/BannerSwiper.vue";
import InfoList from "@/components/InfoList.vue";

export default {
  name: "About",
  components: { BannerSwiper, InfoList },
  props: {},
  mixins: [],
  data() {
    return {
      banner: {
        pc: ["http://fakeimg.pl/1440x800/eee/000000/?text=AboutBanner"],
        mobile: ["http://fakeimg.pl/711x1151/eee/000000/?text=AboutBanner"]
      },
      listData: [
        {
          title: "公司簡介標題",
          description:
            "文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容",
          picture: "http://fakeimg.pl/350x350/eee/000000/?text=PIC"
        },
        {
          title: "公司簡介標題",
          description:
            "文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容",
          picture: "http://fakeimg.pl/350x350/eee/000000/?text=PIC"
        },
        {
          title: "公司簡介標題",
          description:
            "文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容文案內容",
          picture: "http://fakeimg.pl/350x350/eee/000000/?text=PIC"
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

article.about
  section.banner
  section.main
    +rwd(768px)
      padding: 2.5rem 0
</style>
