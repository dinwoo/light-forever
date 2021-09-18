<template lang="pug">
header
  router-link.logo(:to="{name:'Home'}")
    img(src="http://fakeimg.pl/186x46/c4c4c4/000000/?text=LOGO")
  .menu-box
    .page-box
      router-link.page-link(:to="{name:'About'}") 關於我們
      router-link.page-link(:to="{name:'Product'}") 產品展示
      router-link.page-link(:to="{name:'Contact'}") 聯絡我們
    .search-box
      SearchBox
    router-link.member-link(:to="{name:'Member'}")
      .svg-box
        include ../assets/pug/member.pug
    .ham
    
  
</template>

<script>
import { mapState } from "vuex";
import { gsap } from "gsap";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "Header",
  components: { SearchBox },
  data() {
    return {
      isMobile: false,
      showMenu: false,
      sceneArr: []
    };
  },
  computed: {
    ...mapState(["lang", "screenWidth"])
  },
  beforeDestroy() {
    this.sceneArr.map(scene => {
      this.$scrollmagic.removeScene(scene);
    });
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    // 儲存切換的語系
    setLang(value) {
      this.$store.commit("SET_LANG", value);
      this.$i18n.locale = value;
      localStorage.setItem("footmark-lang", value);
      this.$router.go(0);
    },
    setAnimate() {
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: "body",
          triggerHook: 0,
          offset: 120,
          reverse: true
        })
        .on("enter", function() {
          gsap.to("header", {
            opacity: 0
          });
        })
        .on("leave", function() {
          gsap.to("header", {
            opacity: 1
          });
        });
      // .addIndicators({ name: "header" });

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

header
  width: 100%
  padding: 18px
  background-color: $gray-001
  box-sizing: border-box
  display: flex
  justify-content: space-between
  align-items: center
  position: fixed
  top: 0
  left: 0
  z-index: 100
  .logo
    display: block
    width: 186px
  .menu-box
    .page-box
      +dib
      .page-link
        font-size: 0.8rem
        font-weight: 400
        margin: 0 0.8rem
    .search-box
      margin: 0 0.4rem
      +dib
    .member-link
      display: block
      width: 30px
      margin: 0 0.4rem
      +dib
      .svg-box
        line-height: 1
  +rwd(768px)
    // padding: 18px
    .logo
      width: 120px
    .menu-box
      .page-box
        width: 100px
        background-color: #fff
        border: 1px solid $gray-002
        position: absolute
        right: 0
        bottom: 0
        transform: translateY(100%)
        .page-link
          text-align: center
          // font-size: 0.8rem
          margin: 0
          padding: .5rem 0
          display: block
          & + .page-link
            border-top: 1px solid $gray-002
      .search-box
        // width: 80px
        // margin: 0 0.4rem
        display: none
      .member-link
        width: 30px
        margin: 0
        .svg-box
      .ham
        width: 30px
        height: 20px
        margin-left: 1rem
        background-image: linear-gradient(#000 0%,#000 calc(0% + 4px),transparent calc(0% + 4px),transparent calc(50% - 2px),#000 calc(50% - 2px),#000 calc(50% + 2px),transparent calc(50% + 2px),transparent calc(100% - 4px),#000 calc(100% - 4px),#000 100%)
        opacity: .6
        cursor: pointer
        transition: .3s
        +dib
        +hover
          background-image: linear-gradient(#ccc 0%,#ccc calc(0% + 4px),transparent calc(0% + 4px),transparent calc(50% - 2px),#ccc calc(50% - 2px),#ccc calc(50% + 2px),transparent calc(50% + 2px),transparent calc(100% - 4px),#ccc calc(100% - 4px),#ccc 100%)
</style>
