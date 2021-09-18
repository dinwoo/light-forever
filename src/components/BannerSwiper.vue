<template lang="pug">
#banner-swiper
  VueSlickCarousel(
    v-bind="settings"
    ref="carousel"
  )
    .banner-pic(
      v-for="(pic,index) in pictureLink[linkIndex]" :key="index"
      :class="{'small':isSmall}"
    )
      .pic(
        :style="`background-image:url('${(pic)}')`"
      )
</template>

<script>
import { mapState } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "BannerSwiper",
  components: {
    VueSlickCarousel
  },
  props: ["pictureLink", "isSmall"],
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class banner-dots",
        edgeFriction: 0.35,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      },
      slidesToShow: 0,
      showOption: false,
      isMobile: document.body.clientWidth < 768
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
  mounted() {},
  computed: {
    ...mapState(["screenWidth"]),
    linkIndex() {
      return this.isMobile ? "mobile" : "pc";
    }
  },
  methods: {
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    }
  }
};
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"

.banner-dots
  bottom: 20px
  li
    width: 20px
    height: 20px
    margin: 0 5px
    button
      &:before
        font-size: 20px
        color: $gray-002
        opacity: 1
    &.slick-active
      button
        &:before
          color: $gray-001
  +rwd(768px)
</style>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

*
  // outline: 1px solid #f00
  &:focus
    outline: none
#banner-swiper
  width: 100%
  // padding-bottom: 40px
  position: relative
  overflow: hidden
  .banner-pic
    width: 100%
    padding-bottom: 55.555556%
    position: relative
    &.small
      padding-bottom: 31.041667%
    @include rwd(768px)
      // padding-bottom: 152%
    .pic
      width: 100%
      height: 100%
      background-size: cover
      background-position: center center
      background-repeat: no-repeat
      +pstc0
  +rwd(768px)
    .banner-pic
      padding-bottom: 161.884669%
      &.small
        padding-bottom: 31.041667%
</style>
