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
export default {
  name: "CardList",
  components: {},
  props: {
    cardData: Array,
    routeName: String
  },
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  computed: {},
  methods: {}
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
      margin: 0.2rem 0
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
      &:nth-child(3n+2)
        margin-right: 0
        margin-left: 0
      .card-pic
      .card-title
      .card-description
</style>
