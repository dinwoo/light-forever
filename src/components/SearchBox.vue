<template lang="pug">
.search-box-wrapper
  input
  .search-icon
    font-awesome-icon(:icon="['fas','fa-search']")
</template>

<script>
export default {
  name: "SearchBox",
  methods: {}
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.search-box-wrapper
  width: 100%
  input
    width: calc(100% - 22px)
    font-size: 0.8rem
    border: 1px solid $gray-002
    line-height: 28px
    box-sizing: border-box
    +dib
    &:focus
      outline: none
  .search-icon
    width: 22px
    height: 22px
    background-color: $gray-002
    cursor: pointer
    +dib
</style>
