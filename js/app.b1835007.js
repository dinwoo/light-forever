(function(t){function e(e){for(var o,a,i=e[0],s=e[1],u=e[2],l=0,m=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&m.push(c[a][0]),c[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);f&&f(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},c={app:0},r=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-026c5b9d":"3ac462ff","chunk-4a13d750":"09d66936","chunk-00b9899c":"4ab44d11","chunk-0c7f0a6c":"b75fa060","chunk-42e86c1d":"ed2f6046","chunk-601f885c":"35389acb","chunk-6faca1a9":"62ba1b18","chunk-bada9e5c":"103adc7a","chunk-cb08161e":"f812b31b","chunk-4b23a9df":"3d47b885","chunk-4c584c92":"8b325faf","chunk-6c9a9abf":"b8b78912","chunk-7752e5c6":"64566208","chunk-aa341b24":"7360ac5a","chunk-d3e18852":"b13f3fa3"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-026c5b9d":1,"chunk-4a13d750":1,"chunk-00b9899c":1,"chunk-0c7f0a6c":1,"chunk-42e86c1d":1,"chunk-601f885c":1,"chunk-6faca1a9":1,"chunk-bada9e5c":1,"chunk-cb08161e":1,"chunk-4b23a9df":1,"chunk-4c584c92":1,"chunk-6c9a9abf":1,"chunk-7752e5c6":1,"chunk-aa341b24":1,"chunk-d3e18852":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-026c5b9d":"4741a076","chunk-4a13d750":"0656928d","chunk-00b9899c":"25db6044","chunk-0c7f0a6c":"5624f728","chunk-42e86c1d":"7e8435d6","chunk-601f885c":"ad8dd0c0","chunk-6faca1a9":"0fe08efd","chunk-bada9e5c":"fba2a3c1","chunk-cb08161e":"e3106994","chunk-4b23a9df":"3f1089b9","chunk-4c584c92":"0e433876","chunk-6c9a9abf":"0e433876","chunk-7752e5c6":"0e433876","chunk-aa341b24":"0e433876","chunk-d3e18852":"0e433876"}[t]+".css",c=s.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var u=r[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===c))return e()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){u=m[i],l=u.getAttribute("data-href");if(l===o||l===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[t],f.parentNode.removeChild(f),n(r)},f.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var m=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",m.name="ChunkLoadError",m.type=o,m.request=a,n[1](m)}c[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/light-forever/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var m=0;m<u.length;m++)e(u[m]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0605":function(t,e,n){t.exports=n.p+"img/about-pic01.9e39d9ee.jpg"},"06d1":function(t,e,n){},"0a67":function(t,e,n){"use strict";n("b166")},1917:function(t,e,n){},"1f29":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.txt,expression:"txt"}],attrs:{type:"text",placeholder:t.placeholderTxt},domProps:{value:t.txt},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.emitHandler.apply(null,arguments)},input:function(e){e.target.composing||(t.txt=e.target.value)}}}),n("div",{staticClass:"search-icon",on:{click:t.emitHandler}},[n("font-awesome-icon",{attrs:{icon:["fas","search"]}})],1)])},a=[],c={name:"SearchBox",props:{searchTxt:String,placeholderTxt:String},data:function(){return{txt:""}},methods:{emitHandler:function(){this.$emit("searchHandler",this.txt),this.txt=""}},watch:{searchTxt:function(t){this.txt=t}}},r=c,i=(n("0a67"),n("2877")),s=Object(i["a"])(r,o,a,!1,null,"3baf40d4",null);e["a"]=s.exports},2408:function(t,e,n){},"2d49":function(t,e,n){},"3b49":function(t,e,n){},"3ff5":function(t,e,n){"use strict";n("3b49")},"503f":function(t){t.exports=JSON.parse('{"Meta":{"title":"Light Forever","description":"","keyword":""},"Menu":{"home":"首頁","list":"列表頁"}}')},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n(t.$route.meta.layout,{tag:"component"}),t.isLoading?n("div",{staticClass:"loading-mask"},[t._m(0)]):t._e()],1)},c=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("figure",{staticClass:"loding-icon"},[o("img",{attrs:{src:n("bdc3")}})])}],r=n("5530"),i=n("2f62"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-layout"},[n("Header"),n("router-view")],1)},u=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("router-link",{staticClass:"logo",attrs:{to:{name:"Home"}}},[o("img",{attrs:{src:n("9d64")}})]),o("div",{staticClass:"menu-box"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile||t.isMobile&&t.showMenu,expression:"!isMobile||(isMobile&&showMenu)"}],staticClass:"page-box"},[o("router-link",{staticClass:"page-link",attrs:{to:{name:"About"}}},[t._v("關於我們")]),o("router-link",{staticClass:"page-link",attrs:{to:{name:"Product"}}},[t._v("產品展示")]),o("router-link",{staticClass:"page-link",attrs:{to:{name:"Contact"}}},[t._v("聯絡我們")])],1),o("div",{staticClass:"search-box"},[o("SearchBox",{attrs:{searchTxt:t.searchTxt,placeholderTxt:"輸入產品關鍵字"},on:{searchHandler:t.searchHandler}})],1),o("router-link",{staticClass:"member-link",attrs:{to:{name:"Member"}}},[o("div",{staticClass:"svg-box"},[o("svg",{attrs:{id:"圖層_1","data-name":"圖層 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[o("path",{staticClass:"cls-1",attrs:{d:"M16,.47A15.79,15.79,0,1,0,31.74,16.25,15.78,15.78,0,0,0,16,.47Zm0,6.41a3.77,3.77,0,1,1-3.76,3.76A3.76,3.76,0,0,1,16,6.88ZM7.9,24A8.06,8.06,0,1,1,24,24Z"}})])])]),o("div",{staticClass:"ham",on:{click:function(e){t.showMenu=!t.showMenu}}})],1)],1)},m=[],f=(n("d81d"),n("159b"),n("cffa")),d=n("1f29"),h={name:"Header",components:{SearchBox:d["a"]},data:function(){return{isMobile:!1,showMenu:!1,sceneArr:[],searchTxt:""}},computed:Object(r["a"])({},Object(i["c"])(["lang","screenWidth"])),beforeDestroy:function(){var t=this;this.sceneArr.map((function(e){t.$scrollmagic.removeScene(e)}))},mounted:function(){var t=this;this.$nextTick((function(){t.isMobile=t.screenWidth<768}))},methods:{setLang:function(t){this.$store.commit("SET_LANG",t),this.$i18n.locale=t,localStorage.setItem("footmark-lang",t),this.$router.go(0)},setAnimate:function(){var t=this;this.sceneArr[0]=this.$scrollmagic.scene({triggerElement:"body",triggerHook:0,offset:120,reverse:!0}).on("enter",(function(){f["b"].to("header",{opacity:0})})).on("leave",(function(){f["b"].to("header",{opacity:1})})),this.sceneArr.forEach((function(e){t.$scrollmagic.addScene(e)}))},searchHandler:function(t){this.searchTxt="",this.$router.push({name:"Search",query:{t:t}})}},watch:{screenWidth:function(t){var e=this;this.timer||(this.isMobile=t<768,this.timer=!0,setTimeout((function(){e.timer=!1}),400))},"$route.name":function(t){this.showMenu=!1,console.log(t)}}},p=h,g=(n("9219"),n("2877")),b=Object(g["a"])(p,l,m,!1,null,"d55af314",null),v=b.exports,_={name:"HomeLayout",components:{Header:v},data:function(){return{}},mounted:function(){},methods:{}},k=_,w=(n("90ef"),Object(g["a"])(k,s,u,!1,null,null,null)),y=w.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"default-wrapper"},[n("Header"),n("div",{staticClass:"default-container"},[n("router-view")],1),n("Footer")],1)},E=[],T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("div",{staticClass:"footer-container"},[o("router-link",{staticClass:"logo",attrs:{to:{name:"Home"}}},[o("img",{attrs:{src:n("9d64")}})]),t._m(0),t._m(1),o("div",{staticClass:"info-box"},[o("a",{staticClass:"svg-icon",attrs:{href:"",target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","instagram-square"]}})],1),o("a",{staticClass:"svg-icon",attrs:{href:"",target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","line"]}})],1),o("a",{staticClass:"svg-icon",attrs:{href:"",target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","facebook-square"]}})],1),o("a",{staticClass:"svg-icon",attrs:{href:"",target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","youtube-square"]}})],1)])],1),t._m(2)])},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-box"},[n("div",{staticClass:"title"},[t._v("提供服務")]),n("p",{staticClass:"txt"},[t._v("主要生產的燈飾有：吊燈、吸頂燈、臺燈、壁燈、立燈以及鏡燈，有近30年的燈飾相關經驗，長期以來主要以外銷爲主。以前我們每年都會有專業人員赴國外參加燈展，還有國內大型的燈展活動都會積極參與跟推廣，學習與研究。我們公司一直秉持著專業與服務、品質與信譽的經營理念，客製化的滿足每位顧客的需求，是我們長期以來堅持的目標跟榮幸！")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-box"},[n("div",{staticClass:"title"},[t._v("公司地址")]),n("a",{staticClass:"txt",attrs:{href:"https://goo.gl/maps/9n5HBQBzC9zqPemu8",target:"_blank"}},[t._v(" 新竹市東區林森路203號11-2")]),n("div",{staticClass:"title"},[t._v("聯絡資訊")]),n("a",{staticClass:"txt",attrs:{href:"mailto:Light.Forever168@gmail.com"}},[t._v("Light.Forever168@gmail.com")]),n("div",{staticClass:"title"},[t._v("聯絡電話")]),n("a",{staticClass:"txt",attrs:{href:"tel:0930560600"}},[t._v("0930-560600")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright"},[n("p",[t._v("Copyright © 2021 Light forever")])])}],O={name:"Footer",methods:{}},x=O,A=(n("3ff5"),Object(g["a"])(x,T,L,!1,null,"da1c039c",null)),D=A.exports,I={name:"Default",components:{Header:v,Footer:D},data:function(){return{}},mounted:function(){},methods:{}},P=I,N=(n("a8b0"),Object(g["a"])(P,S,E,!1,null,"17d7dbfd",null)),C=N.exports,G={components:{HomeLayout:y,DefaultLayout:C},data:function(){return{}},metaInfo:function(){return{title:this.$t("Meta.title"),meta:[{name:"title",content:this.$t("Meta.title")},{name:"description",content:this.$t("Meta.description")},{name:"keyword",content:this.$t("Meta.keyword")},{name:"og:title",content:this.$t("Meta.title")},{name:"og:description",content:this.$t("Meta.description")}]}},computed:Object(r["a"])({},Object(i["c"])(["isLoading","lang","screenWidth"])),mounted:function(){var t=this;window.onresize=function(){return function(){window.screenWidth=document.body.clientWidth,t.$store.commit("SET_SCREEN_WIDTH",window.screenWidth)}()}}},M=G,j=(n("cf25"),n("a4b1"),Object(g["a"])(M,a,c,!1,null,"71d376f1",null)),$=j.exports,H=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),R=(n("99af"),"id_token"),B=function(){return window.localStorage.getItem(R)},z=function(t){window.localStorage.setItem(R,t)},F=function(){window.localStorage.removeItem(R)},W={getToken:B,saveToken:z,destroyToken:F},U={setAuth:function(){o["a"].axios.defaults.headers.common["Authorization"]=W.getToken()},removeAuth:function(){delete o["a"].axios.defaults.headers.common["Authorization"]},query:function(t,e){return o["a"].axios.get(t,{params:e})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,a=e?"".concat(t,"/").concat(e):"".concat(t);return o["a"].axios.get(a,{params:n})},post:function(t,e){return o["a"].axios.post("".concat(t),e)},update:function(t,e,n){var a=e?"".concat(t,"/").concat(e):"".concat(t);return o["a"].axios.put(a,n)},put:function(t,e){return o["a"].axios.put("".concat(t),e)},delete:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,a=e?"".concat(t,"/").concat(e):"".concat(t);return o["a"].axios.delete(a,{params:n})}},q=U;o["a"].use(H["a"]);var J=[{path:"/",name:"Home",meta:{title:"首頁",layout:"DefaultLayout"},component:function(){return Promise.all([n.e("chunk-4a13d750"),n.e("chunk-0c7f0a6c")]).then(n.bind(null,"bb51"))}},{path:"/about",name:"About",meta:{title:"關於我們",layout:"DefaultLayout"},component:function(){return Promise.all([n.e("chunk-4a13d750"),n.e("chunk-cb08161e")]).then(n.bind(null,"f820"))}},{path:"/product",name:"Product",meta:{title:"產品種類列表",layout:"DefaultLayout"},component:function(){return Promise.all([n.e("chunk-4a13d750"),n.e("chunk-42e86c1d")]).then(n.bind(null,"d2f1"))}},{path:"/category/:id",name:"Series",meta:{title:"產品列表",layout:"DefaultLayout"},component:function(){return Promise.all([n.e("chunk-4a13d750"),n.e("chunk-00b9899c")]).then(n.bind(null,"f431"))}},{path:"/productInfo/:id",name:"ProductInfo",meta:{title:"產品列表",layout:"DefaultLayout"},component:function(){return Promise.all([n.e("chunk-4a13d750"),n.e("chunk-bada9e5c")]).then(n.bind(null,"2e27"))}},{path:"/search",name:"Search",meta:{title:"搜尋頁面",layout:"DefaultLayout"},component:function(){return Promise.all([n.e("chunk-4a13d750"),n.e("chunk-601f885c")]).then(n.bind(null,"2d3b"))}},{path:"/contact",name:"Contact",meta:{title:"聯絡我們",layout:"DefaultLayout"},component:function(){return Promise.all([n.e("chunk-4a13d750"),n.e("chunk-6faca1a9")]).then(n.bind(null,"b8fa"))}},{path:"/member",name:"MemberLayout",component:function(){return n.e("chunk-026c5b9d").then(n.bind(null,"7319"))},redirect:"/member/info",children:[{path:"signup",name:"Signup",meta:{title:"會員註冊",layout:"DefaultLayout"},component:function(){return n.e("chunk-d3e18852").then(n.bind(null,"8267"))}},{path:"validation",name:"Validation",meta:{title:"會員驗證",layout:"DefaultLayout"},component:function(){return n.e("chunk-7752e5c6").then(n.bind(null,"9476"))}},{path:"info",name:"Member",meta:{title:"會員資料",layout:"DefaultLayout"},component:function(){return n.e("chunk-aa341b24").then(n.bind(null,"fead"))}},{path:"signin",name:"Signin",meta:{title:"會員登入",layout:"DefaultLayout"},component:function(){return n.e("chunk-4b23a9df").then(n.bind(null,"b040"))}},{path:"forgetPassword",name:"ForgetPassword",meta:{title:"忘記密碼",layout:"DefaultLayout"},component:function(){return n.e("chunk-4c584c92").then(n.bind(null,"7b80"))}},{path:"passwordEdit",name:"PasswordEdit",meta:{title:"編輯密碼",layout:"DefaultLayout"},component:function(){return n.e("chunk-6c9a9abf").then(n.bind(null,"ca20"))}}]}],Z=new H["a"]({routes:J});Z.beforeEach((function(t,e,n){q.post("api/browse/visit",{url:"https://light-forever.com".concat(t.path),title:t.meta.title,productId:null}).then((function(){n()})).catch((function(){alert("網路不穩，請再試一次")}))}));var V=Z;n("ac1f"),n("841c"),n("b0c0");o["a"].use(i["a"]);var Y=new i["a"].Store({state:{isLoading:!1,lang:null,screenWidth:document.body.clientWidth,home:{banner:{}},product:{category:{},list:{},detail:{},search:{}},search:{}},mutations:{SET_LANG:function(t,e){t.lang=e},SET_LOADING:function(t,e){t.isLoading=e},SET_SCREEN_WIDTH:function(t,e){t.screenWidth=e},SET_BANNER:function(t,e){t.home.banner=e},SET_CATEGORY:function(t,e){t.product.category=e},SET_PRODUCT_LIST:function(t,e){t.product.list=e},SET_PRODUCT_DETAIL:function(t,e){t.product.detail=e},SET_SEARCH_LIST:function(t,e){t.product.search=e},SET_MEMBER_INFO:function(t,e){t.member=e}},actions:{postUrl:function(t,e){var n=e.url,o=e.title,a=e.productId;return new Promise((function(t,e){q.post("api/browse/visit",{url:n,title:o,productId:a}).then((function(e){var n=e.data;200==n.code?t():alert(n.msg)})).catch((function(t){var n=t.response;console.log(n),e()}))}))},getSearchList:function(t,e){var n=e.select,o=e.pageSize,a=e.currentPage;return t.commit("SET_LOADING",!0),new Promise((function(e,c){q.post("api/product/full/search",{select:n,pageSize:o,currentPage:a}).then((function(n){var o=n.data;t.commit("SET_LOADING",!1),200==o.code?(t.commit("SET_SEARCH_LIST",o.data),e()):alert(o.msg)})).catch((function(e){var n=e.response;t.commit("SET_LOADING",!1),console.log(n),c()}))}))},getCategoryList:function(t,e){var n=e.select,o=e.pageSize,a=e.currentPage;return t.commit("SET_LOADING",!0),new Promise((function(e,c){q.post("api/product/category/list",{select:n,pageSize:o,currentPage:a}).then((function(n){var o=n.data;t.commit("SET_LOADING",!1),200==o.code?(t.commit("SET_CATEGORY",o.data),e()):alert(o.msg)})).catch((function(e){var n=e.response;t.commit("SET_LOADING",!1),console.log(n),c()}))}))},getProductList:function(t,e){var n=e.select,o=e.productCategoryId,a=e.pageSize,c=e.currentPage;return t.commit("SET_LOADING",!0),new Promise((function(e,r){q.post("api/product/list",{select:n,productCategoryId:o,pageSize:a,currentPage:c}).then((function(n){var o=n.data;t.commit("SET_LOADING",!1),200==o.code?(t.commit("SET_PRODUCT_LIST",o.data),e()):alert(o.msg)})).catch((function(e){var n=e.response;t.commit("SET_LOADING",!1),console.log(n),r()}))}))},getProductDetail:function(t,e){var n=e.id;return t.commit("SET_LOADING",!0),new Promise((function(e,o){q.post("api/product/detail",{id:n}).then((function(n){var o=n.data;t.commit("SET_LOADING",!1),200==o.code?(t.commit("SET_PRODUCT_DETAIL",o.data),e()):alert(o.msg)})).catch((function(e){var n=e.response;t.commit("SET_LOADING",!1),console.log(n),o()}))}))},getBanner:function(t){return t.commit("SET_LOADING",!0),new Promise((function(e,n){q.get("api/index/banners","",{}).then((function(n){var o=n.data;t.commit("SET_LOADING",!1),200==o.code?(t.commit("SET_BANNER",o.data),e()):alert(o.msg)})).catch((function(e){var o=e.response;t.commit("SET_LOADING",!1),console.log(o),n()}))}))},postEmail:function(t,e){var n=e.name,o=e.phone,a=e.company,c=e.email,r=e.content;return t.commit("SET_LOADING",!0),new Promise((function(e,i){q.post("api/contact/send",{name:n,phone:o,company:a,email:c,content:r}).then((function(n){var o=n.data;t.commit("SET_LOADING",!1),200==o.code?e():alert(o.msg)})).catch((function(e){var n=e.response;t.commit("SET_LOADING",!1),console.log(n),i()}))}))},postSignup:function(t,e){var n=e.name,o=e.phone,a=e.company,c=e.companyTitle,r=e.account,i=e.password,s=e.confirmPassword;return t.commit("SET_LOADING",!0),new Promise((function(e,u){q.post("api/member/signup",{name:n,phone:o,company:a,companyTitle:c,account:r,password:i,confirmPassword:s}).then((function(n){var o=n.data;console.log(o),t.commit("SET_LOADING",!1),200==o.code?e():alert(o.msg)})).catch((function(e){var n=e.response;t.commit("SET_LOADING",!1),console.log(n),u()}))}))},postValidation:function(t,e){return t.commit("SET_LOADING",!0),new Promise((function(n,o){q.post("api/member/validation",{token:e}).then((function(e){var o=e.data;t.commit("SET_LOADING",!1),200==o.code?n():alert(o.msg)})).catch((function(e){var n=e.response;t.commit("SET_LOADING",!1),console.log(n),o()}))}))},getMemberInfo:function(t,e){return t.commit("SET_LOADING",!0),new Promise((function(n,o){q.post("api/member/info",{account:e}).then((function(e){var o=e.data;t.commit("SET_LOADING",!1),200==o.code?(t.commit("SET_MEMBER_INFO",o.data),n(o)):alert(o.msg)})).catch((function(e){var n=e.response;t.commit("SET_LOADING",!1),console.log(n),o()}))}))},putMemberInfo:function(t,e){var n=e.token,o=e.name,a=e.phone,c=e.company,r=e.companyTitle;return t.commit("SET_LOADING",!0),new Promise((function(e,i){q.post("api/member/edit",{token:n,name:o,phone:a,company:c,companyTitle:r}).then((function(n){var o=n.data;t.commit("SET_LOADING",!1),200==o.code?e():alert(o.msg)})).catch((function(e){var n=e.response;t.commit("SET_LOADING",!1),console.log(n),i()}))}))},postSignin:function(t,e){var n=e.account,o=e.password;return t.commit("SET_LOADING",!0),new Promise((function(e,a){q.post("api/member/signin",{account:n,password:o}).then((function(n){var o=n.data;t.commit("SET_LOADING",!1),200==o.code?e(o):alert(o.msg)})).catch((function(e){var n=e.response;t.commit("SET_LOADING",!1),console.log(n),a()}))}))},postPasswordToken:function(t,e){return t.commit("SET_LOADING",!0),new Promise((function(n,o){q.post("api/member/password/trigger",{account:e}).then((function(e){var o=e.data;t.commit("SET_LOADING",!1),200==o.code?n():alert(o.msg)})).catch((function(e){var n=e.response;t.commit("SET_LOADING",!1),console.log(n),o()}))}))},putPasswordInfo:function(t,e){var n=e.token,o=e.password,a=e.confirmPassword;return t.commit("SET_LOADING",!0),new Promise((function(e,c){q.post("api/member/password/edit",{token:n,password:o,confirmPassword:a}).then((function(n){var o=n.data;t.commit("SET_LOADING",!1),200==o.code?e():alert(o.msg)})).catch((function(e){var n=e.response;t.commit("SET_LOADING",!1),console.log(n),c()}))}))}},modules:{}}),K=n("a925"),Q=n("503f"),X=n("e312"),tt=n("c79e"),et=n.n(tt),nt=(n("1276"),n("5319"),{computed:Object(r["a"])({},Object(i["c"])(["lang"])),methods:{compileFilePath:function(t){return n("7584")("./".concat(t))},verifyPhone:function(t){var e=/^09\d{8}$/;return e.test(t)},verifyEmail:function(t){var e=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;return e.test(t)},getUrlToken:function(){var t=location.href,e="";if(-1!=t.indexOf("?"))for(var n=t.split("?")[1].split("&"),o=0;o<=n.length-1;o++)"t"==n[o].split("=")[0]&&(e=n[o].split("=")[1]);return e},articleHandler:function(t){return t.replace(/\n/g,"<br>").replace(/\t/g," ")}}}),ot=n("58ca"),at=n("bc3a"),ct=n.n(at),rt={baseURL:"https://api.light-forever.com/",timeout:6e4},it=ct.a.create(rt);it.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),it.interceptors.response.use((function(t){return t.headers&&t.headers.authorization&&console.lof(t.headers.authorization),t}),(function(t){return t.response&&401===t.response.status&&console.log(t),Promise.reject(t)})),Plugin.install=function(t){t.axios=it,window.axios=it,Object.defineProperties(t.prototype,{axios:{get:function(){return it}},$axios:{get:function(){return it}}})},o["a"].use(Plugin);Plugin;var st=n("94db"),ut=new st(o["a"].axios),lt=ut;lt.onAny().passThrough();var mt=n("ecee"),ft=n("c074"),dt=n("f2d1"),ht=n("ad3d");mt["c"].add(ft["a"],dt["a"]),o["a"].component("font-awesome-icon",ht["a"]),o["a"].use(ot["a"]),o["a"].use(K["a"]),o["a"].mixin(nt),V.afterEach((function(){window.scrollTo(0,0)}));var pt="en";localStorage.getItem("footmark-lang")?(pt=localStorage.getItem("footmark-lang"),Y.commit("SET_LANG",pt)):Y.commit("SET_LANG",pt);var gt=new K["a"]({locale:pt,messages:{ch:Q,en:X}});o["a"].use(et.a,{verical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}),o["a"].config.productionTip=!1,new o["a"]({router:V,store:Y,i18n:gt,render:function(t){return t($)}}).$mount("#app")},"689f":function(t,e,n){t.exports=n.p+"img/product-bn.8432997a.jpg"},7584:function(t,e,n){var o={"./about-bn.jpg":"addb","./about-pic01.jpg":"0605","./about-pic02.jpg":"cef3","./contact-us.jpg":"a3db","./loading-icon.svg":"bdc3","./logo.png":"9d64","./product-bn.jpg":"689f"};function a(t){var e=c(t);return n(e)}function c(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}a.keys=function(){return Object.keys(o)},a.resolve=c,t.exports=a,a.id="7584"},"90ef":function(t,e,n){"use strict";n("2408")},9219:function(t,e,n){"use strict";n("1917")},"9d64":function(t,e,n){t.exports=n.p+"img/logo.27c1b7a5.png"},a3db:function(t,e,n){t.exports=n.p+"img/contact-us.7f8790df.jpg"},a4b1:function(t,e,n){"use strict";n("06d1")},a8b0:function(t,e,n){"use strict";n("2d49")},addb:function(t,e,n){t.exports=n.p+"img/about-bn.95194f46.jpg"},b166:function(t,e,n){},bdc3:function(t,e,n){t.exports=n.p+"img/loading-icon.105426ff.svg"},cef3:function(t,e,n){t.exports=n.p+"img/about-pic02.08a17c3c.jpg"},cf25:function(t,e,n){"use strict";n("fea6")},e312:function(t){t.exports=JSON.parse('{"Meta":{"title":"Light Forever","description":"","keyword":""},"Menu":{"home":"Home","list":"List"}}')},fea6:function(t,e,n){}});
//# sourceMappingURL=app.b1835007.js.map