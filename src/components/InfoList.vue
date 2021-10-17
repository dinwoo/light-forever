<template lang="pug">
.info-list-wrapper
  .info-item(v-for="(item,index) in listData" :key="index")
    .pic-box
      .pic(
        :style="`background-image:url('${(item.picture)}')`"
      )
    .info-box
      h2.title {{item.title}}
      p.description(v-html="item.description")

</template>

<script>
import { mapState } from "vuex";
import { gsap } from "gsap";

export default {
  name: "InfoList",
  components: {},
  props: ["listData"],
  data() {
    return {
      sceneArr: []
    };
  },
  watch: {
    screenWidth(val) {
      this.isMobile = val < 768;
      // if (!this.timer) {
      //   this.screenWidth = val;
      //   this.timer = true;
      //   let that = this;
      //   setTimeout(function() {
      //     // console.log(val);
      //     that.timer = false;
      //   }, 400);
      // }
    }
  },
  mounted() {
    this.setInitial();
    this.setAnimate();
  },
  computed: {
    ...mapState(["screenWidth"]),
    linkIndex() {
      return this.isMobile ? "mobile" : "pc";
    }
  },
  methods: {
    setInitial() {
      gsap.set(
        ".info-item:nth-child(odd) .pic-box,.info-item:nth-child(even) .info-box",
        {
          x: 100,
          opacity: 0
        }
      );
      gsap.set(
        ".info-item:nth-child(even) .pic-box,.info-item:nth-child(odd) .info-box",
        {
          x: -100,
          opacity: 0
        }
      );
    },
    setAnimate() {
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: ".info-item:nth-child(1)",
          triggerHook: 1,
          reverse: false
        })
        // .setTween(tl)
        .on("enter", function() {
          gsap
            .timeline()
            .to(".info-item:nth-child(1) .pic-box", 1, {
              x: 0,
              opacity: 1
            })
            .to(".info-item:nth-child(1) .info-box", 1, {
              x: 0,
              opacity: 1,
              delay: -1
            });
        });
      // .addIndicators({ name: "banner" });

      this.sceneArr[1] = this.$scrollmagic
        .scene({
          triggerElement: ".info-item:nth-child(2)",
          triggerHook: 1,
          reverse: false
        })
        // .setTween(tl)
        .on("enter", function() {
          gsap
            .timeline()
            .to(".info-item:nth-child(2) .pic-box", 1, {
              x: 0,
              opacity: 1
            })
            .to(".info-item:nth-child(2) .info-box", 1, {
              x: 0,
              opacity: 1,
              delay: -1
            });
        });
      // .addIndicators({ name: "banner" });

      this.sceneArr.forEach(scene => {
        this.$scrollmagic.addScene(scene);
      });
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.info-list-wrapper
  .info-item
    display: flex
    justify-content: space-between
    align-items: center
    & + .info-item
      margin-top: 4rem
    &:nth-child(odd)
      .pic-box
        order: 2
      .info-box
        order: 1
    .pic-box
      width: 100%
      max-width: 350px
      .pic
        width: 100%
        padding-bottom: 100%
        background-size: cover
        background-position: center center
        background-repeat: no-repeat
    .info-box
      max-width: 640px
      h2.title
        margin-bottom: 2rem
      p.description
  +rwd(768px)
    .info-item
      display: block
      & + .info-item
        margin-top: 3rem
      .pic-box
        width: 70%
        margin: 0 auto 1rem
        .pic
      .info-box
        h2.title
          margin-bottom: 1rem
          text-align: center
        p.description
</style>
