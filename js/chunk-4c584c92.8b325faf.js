(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c584c92"],{"7b80":function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"forget-password-wrapper"},[a("h2",{staticClass:"title"},[t._v("忘記密碼")]),a("div",{staticClass:"form-box"},[a("div",{staticClass:"row"},[a("label",[a("div",{staticClass:"field-title"},[t._v("帳號")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text"},domProps:{value:t.account},on:{input:function(s){s.target.composing||(t.account=s.target.value)}}})])])]),a("div",{staticClass:"btn",on:{click:t.postPasswordTokenHandler}},[t._v("送出")])])},o=[],e=a("5530"),c=a("2f62"),i={name:"ForgetPassword",components:{},props:{},mixins:[],data:function(){return{account:""}},computed:Object(e["a"])({},Object(c["c"])(["isLoading"])),created:function(){},mounted:function(){},methods:Object(e["a"])(Object(e["a"])({},Object(c["b"])(["postPasswordToken"])),{},{postPasswordTokenHandler:function(){var t=this;this.postPasswordToken(this.account).then((function(){t.$router.push({name:"PasswordEdit"})})).catch((function(){alert("傳送失敗")}))}}),watch:{}},r=i,u=(a("f81c"),a("2877")),d=Object(u["a"])(r,n,o,!1,null,"20b63040",null);s["default"]=d.exports},ba5f:function(t,s,a){},f81c:function(t,s,a){"use strict";a("ba5f")}}]);
//# sourceMappingURL=chunk-4c584c92.8b325faf.js.map