<template lang="pug">
.card-list-wrapper
  router-link.card-item(
    v-for="card in cardData" :key="card.id"
    :to="{name:routeName,params:{id:card.id}}"
  )
    .card-pic(:style="`background-image: url('${card.picture}')`")
    .card-title {{card.title}}
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
  justify-content: space-between
  flex-wrap: wrap
  .card-item
    width: calc(33.333333% - 60px)
    margin-bottom: 2rem
    display: block
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
      font-size: 1.2rem
      line-height: 1.5
      display: -webkit-box
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical
      white-space: normal
      overflow: hidden
  +rwd(768px)
    .card-item
      width: 100%
      .card-pic
      .card-title
      .card-description
</style>
