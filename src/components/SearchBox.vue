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
    width: calc(100% - 30px)
    padding: 0 0.5rem
    font-size: 0.8rem
    background-color: #fff
    border: 1px solid $dark-001
    border-right: none
    line-height: 28px
    box-sizing: border-box
    +dib
    &:focus
      outline: none
  .search-icon
    width: 30px
    height: 30px
    padding: 5px
    border: 1px solid $dark-001
    border-left: none
    background-color: #fff
    box-sizing: border-box
    cursor: pointer
    +dib
    svg
      width: 100%
      height: 100%
      line-height: 1
      vertical-align: top
      path
        color: $dark-001
        transition: .3s
    +hover
      svg
        path
          color: $dark-002
</style>
