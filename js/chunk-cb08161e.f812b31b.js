(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb08161e"],{"40cb":function(t,i,e){"use strict";e("6975")},"5c0e":function(t,i,e){},"5fa4":function(t,i,e){"use strict";e("5c0e")},6975:function(t,i,e){},f820:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("article",{staticClass:"about"},[e("section",{staticClass:"banner"},[e("BannerSwiper",{attrs:{pictureLink:t.banner,isSmall:t.screenWidth<768}})],1),e("section",{staticClass:"main"},[e("div",{staticClass:"wrapper"},[e("InfoList",{attrs:{listData:t.listData}})],1)])])},c=[],s=e("5530"),o=e("2f62"),a=e("37c1"),r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"info-list-wrapper"},t._l(t.listData,(function(i,n){return e("div",{key:n,staticClass:"info-item"},[e("div",{staticClass:"pic-box"},[e("div",{staticClass:"pic",style:"background-image:url('"+i.picture+"')"})]),e("div",{staticClass:"info-box"},[e("h2",{staticClass:"title"},[t._v(t._s(i.title))]),e("p",{staticClass:"description",domProps:{innerHTML:t._s(i.description)}})])])})),0)},l=[],p=(e("159b"),e("cffa")),h={name:"InfoList",components:{},props:["listData"],data:function(){return{sceneArr:[]}},watch:{screenWidth:function(t){this.isMobile=t<768}},mounted:function(){this.setInitial(),this.setAnimate()},computed:Object(s["a"])(Object(s["a"])({},Object(o["c"])(["screenWidth"])),{},{linkIndex:function(){return this.isMobile?"mobile":"pc"}}),methods:{setInitial:function(){p["b"].set(".info-item:nth-child(odd) .pic-box,.info-item:nth-child(even) .info-box",{x:100,opacity:0}),p["b"].set(".info-item:nth-child(even) .pic-box,.info-item:nth-child(odd) .info-box",{x:-100,opacity:0})},setAnimate:function(){var t=this;this.sceneArr[0]=this.$scrollmagic.scene({triggerElement:".info-item:nth-child(1)",triggerHook:1,reverse:!1}).on("enter",(function(){p["b"].timeline().to(".info-item:nth-child(1) .pic-box",1,{x:0,opacity:1}).to(".info-item:nth-child(1) .info-box",1,{x:0,opacity:1,delay:-1})})),this.sceneArr[1]=this.$scrollmagic.scene({triggerElement:".info-item:nth-child(2)",triggerHook:1,reverse:!1}).on("enter",(function(){p["b"].timeline().to(".info-item:nth-child(2) .pic-box",1,{x:0,opacity:1}).to(".info-item:nth-child(2) .info-box",1,{x:0,opacity:1,delay:-1})})),this.sceneArr.forEach((function(i){t.$scrollmagic.addScene(i)}))}}},u=h,f=(e("40cb"),e("2877")),d=Object(f["a"])(u,r,l,!1,null,"1227d092",null),b=d.exports,m={name:"About",components:{BannerSwiper:a["a"],InfoList:b},props:{},mixins:[],data:function(){return{banner:{pc:[this.compileFilePath("about-bn.jpg")],mobile:[this.compileFilePath("about-bn.jpg")]},listData:[{title:"公司簡介",description:"我們公司在大陸的中山工廠（宜典照明）成立於2012年，主要生產的燈飾有：吊燈、吸頂燈、臺燈、壁燈、立燈以及鏡燈，有近30年的燈飾相關經驗，長期以來主要以外銷爲主。以前我們每年都會有專業人員赴國外參加燈展，還有國內大型的燈展活動都會積極參與跟推廣，學習與研究。我們公司一直秉持著專業與服務、品質與信譽的經營理念，客製化的滿足每位顧客的需求，是我們長期以來堅持的目標跟榮幸！<br><br>ㄧ燈ㄧ飾照亮您國家貿易有限公司在臺灣成立於2021年，目的是為了多元化的經營。幫助更多國家在燈飾上可以有更多的選擇~",picture:this.compileFilePath("about-pic01.jpg")},{title:"公司願景",description:"有燈就會有光，在我們每個家庭無處不在，它照耀了我們的人生，談到燈光就會讓我想起小時候的生活，30年前的我們生長在中國某個偏遠的山村，那個年代我們不知道什麼是燈，更不要說大城市是什麼樣的生活。記得有一次寒冷的冬天，外面下著大雪，家裡的門窗有很多的細縫，寒風從縫細吹進家裡，把油燈給吹滅了，家裡頓時變得ㄧ片漆黑，還有很多次夜晚的時候，我們正在為考試做複習準備，不知不覺桌上的油燈熄滅了，油燒完了，哇！又要面臨著伸手不見五指的夜晚，那個時候我們就會常常想，什麼時候能不再用這種煤油燈？什麼時候才能有永遠的燈光？長大後我跟妹妹就從事了燈飾這個行業，沒想到一做就快30年了，一直堅信著要把這個光傳送到每個家庭，照耀著每個人，因為有光的地方就會充滿著溫暖！",picture:this.compileFilePath("about-pic02.jpg")}]}},computed:Object(s["a"])({},Object(o["c"])(["isLoading","screenWidth"])),created:function(){},mounted:function(){},methods:Object(s["a"])({},Object(o["b"])([""])),watch:{}},x=m,g=(e("5fa4"),Object(f["a"])(x,n,c,!1,null,"4413ac68",null));i["default"]=g.exports}}]);
//# sourceMappingURL=chunk-cb08161e.f812b31b.js.map