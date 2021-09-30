<template lang="pug">
.card-list-wrapper
  router-link.card-item(
    v-for="card in cardData" :key="card.id"
    :to="{name:routeName,params:{id:card.id}}"
  )
    .card-pic(:style="`background-image: url('${card.img}')`")
    .card-title {{card.name}}
    .card-description {{card.description}}

</template>

<script>
import { mapState } from "vuex";
import { gsap, TweenMax } from "gsap";

export default {
  name: "CardList",
  components: {},
  props: {
    cardData: Array,
    routeName: String
  },
  data() {
    return {
      sceneArr: []
    };
  },
  watch: {
    isLoading(val) {
      console.log(val);
      if (!val) {
        setTimeout(() => {
          this.setInitial();
          this.setAnimate();
        }, 1);
      }
    }
  },
  mounted() {
    this.setInitial();
  },
  computed: {
    ...mapState(["isLoading"])
  },
  methods: {
    setInitial() {
      gsap.set(".card-item", {
        y: 100,
        opacity: 0
      });
    },
    setAnimate() {
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: ".card-list-wrapper",
          triggerHook: 1,
          reverse: false
        })
        // .setTween(tl)
        .on("enter", function() {
          gsap.timeline().add(
            TweenMax.staggerTo(
              ".card-item",
              1,
              {
                y: 0,
                opacity: 1,
                delay: -1
              },
              0.5
            )
          );
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

.card-list-wrapper
  display: flex
  justify-content: flex-start
  flex-wrap: wrap
  .card-item
    width: calc(33.333333% - 2rem)
    margin-bottom: 6rem
    display: block
    &:nth-child(3n+2)
      margin-right: 3rem
      margin-left: 3rem
    .card-pic
      width: 100%
      padding-bottom: 100%
      background-size: cover
      background-position: center center
      background-repeat: no-repeat
      position: relative
    .card-title
      margin: 0.5rem 0 0.2rem
      font-size: 1.2rem
      text-align: center
    .card-description
      font-size: .9rem
      color: rgba(128,128,128,1)
      line-height: 1.5
      display: -webkit-box
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical
      white-space: normal
      overflow: hidden
  +rwd(768px)
    .card-item
      width: 100%
      margin-bottom: 3rem
      &:nth-child(3n+2)
        margin-right: 0
        margin-left: 0
      .card-pic
      .card-title
      .card-description
</style>
