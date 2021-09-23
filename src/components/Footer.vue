<template lang="pug">
footer
  .footer-container
    router-link.logo(:to="{name:'Home'}")
      img(src="http://fakeimg.pl/186x163/eee/000000/?text=LOGO")
    .info-box
      .title 提供服務
      p.txt 提供服務文案提供服務文案提供服務文案提供服務文案提供服務文案提供服務文案
    .info-box
      .title 公司地址
      p.txt 新竹市東區林森路203號11-2
      .title 聯絡資訊
      p.txt xxxxx@gmail.com
    .info-box
      a.svg-icon(href="" target="_blank")
        font-awesome-icon(:icon="['fab','instagram-square']")
      a.svg-icon(href="" target="_blank")
        font-awesome-icon(:icon="['fab','line']")
      a.svg-icon(href="" target="_blank")
        font-awesome-icon(:icon="['fab','facebook-square']")
      a.svg-icon(href="" target="_blank")
        font-awesome-icon(:icon="['fab','youtube-square']")
      
  .copyright
    p Copyright © 2021 Light forever
</template>

<script>
export default {
  name: "Footer",
  methods: {}
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

footer
  width: 100%
  padding: 3rem 2.5rem 2rem
  background-color: $brown-003
  box-sizing: border-box
  .footer-container
    .logo
      width: 25%
      padding-right: 8rem
      box-sizing: border-box
      display: inline-block
      vertical-align: top
    .info-box
      width: 25%
      padding-right: 2rem
      box-sizing: border-box
      display: inline-block
      vertical-align: top
      .title
        margin-bottom: 0.6rem
        font-size: 1.5rem
        font-weight: 400
      p.txt
        font-size: 1rem
        & + .title
          margin-top: 2rem
      .svg-icon
        width: 25%
        padding: 5px
        box-sizing: border-box
        cursor: pointer
        +dib
        svg
          width: 100%
          height: 100%
          vertical-align: middle
          path
            color: $black-001
            transition: .3s
        +hover
          svg
            path
              color: $brown-002

  .copyright
    margin-top: 1.5rem
    p
      font-size: 1rem
  +rwd(768px)
    padding: 2rem 2.5rem
    .footer-container
      .logo
        width: 50%
        margin-bottom: 1rem
        padding-right: 2rem
      .info-box
        width: 50%
        margin-bottom: 1rem
        padding-right: 1rem
        .title
          margin-bottom: 0.6rem
          font-size: 1.2rem
        p.txt
          font-size: .8rem
          & + .title
            margin-top: 1rem
        .svg-icon
          width: 50%
    .copyright
      margin-top: 1rem
      p
        font-size: .75rem
</style>
