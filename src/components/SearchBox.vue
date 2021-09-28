<template lang="pug">
.search-box-wrapper
  input(type="text" v-model="txt")
  .search-icon(@click="$emit('searchHandler',txt)")
    font-awesome-icon(:icon="['fas','search']")
</template>

<script>
export default {
  name: "SearchBox",
  props: {
    searchTxt: String
  },
  data() {
    return { txt: "" };
  },
  watch: {
    searchTxt(val) {
      this.txt = val;
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.search-box-wrapper
  width: 100%
  input
    width: calc(100% - 24px)
    padding: 0 0.5rem
    font-size: 0.8rem
    border: 1px solid $gray-002
    line-height: 28px
    box-sizing: border-box
    +dib
    &:focus
      outline: none
  .search-icon
    width: 24px
    height: 24px
    padding: 3px
    background-color: $gray-002
    box-sizing: border-box
    cursor: pointer
    +dib
    svg
      width: 100%
      height: 100%
      line-height: 1
      vertical-align: top
      path
        color: $brown-001
        transition: .3s
    +hover
      svg
        path
          color: $brown-002
</style>
