<template lang="pug">
footer
  .footer-container
    router-link.logo(:to="{name:'Home'}")
      img(src="@/assets/images/logo.png")
    .info-box
      .title 提供服務
      p.txt 主要生產的燈飾有：吊燈、吸頂燈、臺燈、壁燈、立燈以及鏡燈，有近30年的燈飾相關經驗，長期以來主要以外銷爲主。以前我們每年都會有專業人員赴國外參加燈展，還有國內大型的燈展活動都會積極參與跟推廣，學習與研究。我們公司一直秉持著專業與服務、品質與信譽的經營理念，客製化的滿足每位顧客的需求，是我們長期以來堅持的目標跟榮幸！
    .info-box
      .title 公司地址
      a.txt(href="https://goo.gl/maps/9n5HBQBzC9zqPemu8" target="_blank")  新竹市東區林森路203號11-2
      .title 聯絡資訊
      a.txt(href="mailto:Light.Forever168@gmail.com") Light.Forever168@gmail.com
      .title 聯絡電話
      a.txt(href="tel:0930560600") 0930-560600
    .info-box
      a.svg-icon(href="mailto:Light.Forever168@gmail.com" target="_blank")
        font-awesome-icon(:icon="['fas','envelope-square']")
        //- font-awesome-icon(:icon="['fab','instagram-square']")
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
  background-color: $dark-001
  box-sizing: border-box
  .footer-container
    .logo
      width: 25%
      box-sizing: border-box
      display: inline-block
      vertical-align: top
      img
        width: 60%
        max-width: 100px
    .info-box
      width: 25%
      padding-right: 2rem
      box-sizing: border-box
      display: inline-block
      vertical-align: top
      .title
        margin-bottom: 0.6rem
        font-size: 1rem
        font-weight: 400
        color: $color-001
      .txt
        font-size: .8rem
        color: $color-001
        & + .title
          margin-top: 1rem
      a
        text-decoration: underline
      .svg-icon
        width: 25%
        max-width: 60px
        padding: 5px
        box-sizing: border-box
        cursor: pointer
        +dib
        svg
          width: 100%
          height: 100%
          vertical-align: middle
          path
            color: $color-001
            transition: .3s
        +hover
          svg
            path
              color: $color-003

  .copyright
    margin-top: 1.5rem
    p
      font-size: .8rem
      color: $color-001
  +rwd(768px)
    padding: 1.5rem 1rem
    .footer-container
      .logo
        width: 50%
        margin-bottom: 0rem
        padding-right: 0rem
        vertical-align: middle
        text-align: center
        img
          width: 80%
      .info-box
        width: 50%
        margin-bottom: 1rem
        padding-right: .5rem
        &:nth-child(2)
          vertical-align: middle
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
      margin-top: .5rem
      p
        font-size: .75rem
</style>
