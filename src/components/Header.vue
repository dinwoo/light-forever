<template lang="pug">
header
  router-link.logo(:to="{name:'Home'}")
    img(src="http://fakeimg.pl/200x80/282828/EAE0D0/")
  
</template>

<script>
import { mapState } from "vuex";
import { gsap } from "gsap";

export default {
  name: "Header",
  data() {
    return {
      isMobile: false,
      showMenu: false,
      sceneArr: [],
    };
  },
  computed: {
    ...mapState(["lang", "screenWidth"]),
  },
  beforeDestroy() {
    this.sceneArr.map((scene) => {
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
          reverse: true,
        })
        .on("enter", function() {
          gsap.to("header", {
            opacity: 0,
          });
        })
        .on("leave", function() {
          gsap.to("header", {
            opacity: 1,
          });
        });
      // .addIndicators({ name: "header" });

      this.sceneArr.forEach((scene) => {
        this.$scrollmagic.addScene(scene);
      });
    },
  },
  watch: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

header
</style>
