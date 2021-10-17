<template lang="pug">
article.about
  section.banner
    BannerSwiper(:pictureLink="banner" :isSmall="screenWidth < 768")
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
        pc: [this.compileFilePath("about-bn.jpg")],
        mobile: [this.compileFilePath("about-bn.jpg")]
      },
      listData: [
        {
          title: "公司簡介",
          description:
            "我們公司在大陸的中山工廠（宜典照明）成立於2012年，主要生產的燈飾有：吊燈、吸頂燈、臺燈、壁燈、立燈以及鏡燈，有近30年的燈飾相關經驗，長期以來主要以外銷爲主。以前我們每年都會有專業人員赴國外參加燈展，還有國內大型的燈展活動都會積極參與跟推廣，學習與研究。我們公司一直秉持著專業與服務、品質與信譽的經營理念，客製化的滿足每位顧客的需求，是我們長期以來堅持的目標跟榮幸！<br><br>ㄧ燈ㄧ飾照亮您國家貿易有限公司在臺灣成立於2021年，目的是為了多元化的經營。幫助更多國家在燈飾上可以有更多的選擇~",
          picture: this.compileFilePath("about-pic01.jpg")
        },
        {
          title: "公司願景",
          description:
            "有燈就會有光，在我們每個家庭無處不在，它照耀了我們的人生，談到燈光就會讓我想起小時候的生活，30年前的我們生長在中國某個偏遠的山村，那個年代我們不知道什麼是燈，更不要說大城市是什麼樣的生活。記得有一次寒冷的冬天，外面下著大雪，家裡的門窗有很多的細縫，寒風從縫細吹進家裡，把油燈給吹滅了，家裡頓時變得ㄧ片漆黑，還有很多次夜晚的時候，我們正在為考試做複習準備，不知不覺桌上的油燈熄滅了，油燒完了，哇！又要面臨著伸手不見五指的夜晚，那個時候我們就會常常想，什麼時候能不再用這種煤油燈？什麼時候才能有永遠的燈光？長大後我跟妹妹就從事了燈飾這個行業，沒想到一做就快30年了，一直堅信著要把這個光傳送到每個家庭，照耀著每個人，因為有光的地方就會充滿著溫暖！",
          picture: this.compileFilePath("about-pic02.jpg")
        }
      ]
    };
  },
  computed: {
    ...mapState(["isLoading", "screenWidth"])
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
    overflow: hidden
    +rwd(768px)
      padding: 2.5rem 0
</style>
