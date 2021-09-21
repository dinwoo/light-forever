<template lang="pug">
article.member-wrapper
  .member-container
    router-view
          


</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Member",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["screenWidth"])
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {},
  watch: {}
};
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"

h2.title
  margin-bottom: 2rem
  text-align: center
.form-box
  width: calc( 100% - 30px )
  max-width: 400px
  padding: 3rem 2rem
  margin: auto
  box-sizing: border-box
  border: 1px solid #888
  .row
    width: 100%
    & + .row
      margin-top: 2rem
    .field-title
      width: 5rem
      +dib
    input,.field-info
      width: calc( 100% - 5rem )
      padding: 0 0.5rem
      line-height: 1.5
      box-sizing: border-box
      +dib
      &:focus
        outline: none
.btn
  +btnStyle
  width: 280px
  display: block
  margin: 2rem auto
  box-sizing: border-box
  text-align: center
</style>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

article.member-wrapper
  .member-container
    padding: 4rem 0 5rem
</style>
