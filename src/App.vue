<template lang="pug">
#app
  component(:is="$route.meta.layout")
  .loading-mask(v-if="isLoading")
    figure.loding-icon
      img(src="@/assets/images/loading-icon.svg")
    
</template>

<script>
import { mapState } from "vuex";
import HomeLayout from "@/layouts/HomeLayout";
import DefaultLayout from "@/layouts/DefaultLayout";
export default {
  components: {
    HomeLayout,
    DefaultLayout
  },
  data() {
    return {};
  },
  metaInfo() {
    return {
      title: this.$t(`Meta.title`),
      // title: this.$route.meta.title,
      meta: [
        {
          name: "title",
          content: this.$t(`Meta.title`)
        },
        {
          name: "description",
          content: this.$t(`Meta.description`)
        },
        {
          name: "keyword",
          content: this.$t(`Meta.keyword`)
        },
        {
          name: "og:title",
          content: this.$t(`Meta.title`)
        },
        {
          name: "og:description",
          content: this.$t(`Meta.description`)
        }
      ]
    };
  },
  computed: {
    ...mapState(["isLoading", "lang", "screenWidth"])
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        this.$store.commit("SET_SCREEN_WIDTH", window.screenWidth);
        // that.screenWidth = window.screenWidth;
      })();
    };
  }
};
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;700&display=swap');

*
  padding: 0
  margin: 0
  color: $dark-001
  font-family: 'Noto Sans JP','Noto Sans TC', serif

img
	width: 100%
	vertical-align: middle

a
	color: #000
	text-decoration: none

html
  font-size: 20px
  +rwd(768px)
    font-size: 16px

section.main
  margin: 5rem 0
  +rwd(768px)
    margin: 2rem 0

.wrapper
  max-width: 1180px
  margin: auto
  padding: 0 15px
  box-sizing: border-box

h2
  font-size: 1.5rem
  font-weight: 400

p
  font-size: 1rem
  font-weight: 400
  line-height: 1.2

.breadcrumb
  .breadcrumb-item
    cursor: pointer
    +dib
    & + .breadcrumb-item
      &:before
        content: '>'
        padding: 0 0.5rem
        +dib

ul.paginate-box
  width: 100%
  margin: 2rem 0
  list-style: none
  display: flex
  justify-content: center
  li
    margin: 0 .5rem
    a
      color: $dark-002
      transition: .3s
    &.active,&:hover
      a
        color: $dark-001

.editor
  text-align: left
  box-sizing: border-box
  margin: 0 auto
  line-height: 1.5
  position: relative
  z-index: 1
  strong
    font-weight: bold
  h1
    display: block
    font-size: 2em
    margin-top: 0.67em
    margin-bottom: 0.67em
    margin-left: 0
    margin-right: 0
    font-weight: bold
  h2
    display: block
    font-size: 1.5em
    margin-top: 0.83em
    margin-bottom: 0.83em
    margin-left: 0
    margin-right: 0
    font-weight: bold
  h3
    display: block
    font-size: 1.17em
    margin-top: 1em
    margin-bottom: 1em
    margin-left: 0
    margin-right: 0
    font-weight: bold
  h4
    display: block
    font-size: 1em
    margin-top: 1.33em
    margin-bottom: 1.33em
    margin-left: 0
    margin-right: 0
    font-weight: bold
  h5
    display: block
    font-size: .83em
    margin-top: 1.67em
    margin-bottom: 1.67em
    margin-left: 0
    margin-right: 0
    font-weight: bold
  h6
    display: block
    font-size: .67em
    margin-top: 2.33em
    margin-bottom: 2.33em
    margin-left: 0
    margin-right: 0
    font-weight: bold
  a
    text-decoration: underline
    color: #000
  b
    font-weight: bold
  i
    font-style: italic
  p
    display: block
    margin-top: 1em
    margin-bottom: 1em
    margin-left: 0
    margin-right: 0
  small
    font-size: smaller
  img
    display: inline-block
    max-width: 100%
  iframe
    width: 100%
  ul
    display: block
    list-style-type: disc
    margin-top: 1em
    margin-bottom: 1em
    margin-left: 0
    margin-right: 0
    padding-left: 40px
    li
      display: list-item
      list-style-type: disc
  ol
    display: block
    list-style-type: decimal
    margin-top: 1em
    margin-bottom: 1em
    margin-left: 0
    margin-right: 0
    padding-left: 40px
    li
      display: list-item
      list-style-type: decimal
</style>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

#app
  background-color: #fff

.loading-mask
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  background-color: rgba(#000,.7)
  z-index: 101
  figure.loding-icon
    width: 50px
    +pstc5
</style>
