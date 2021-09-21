import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "DefaultLayout" },
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    meta: { layout: "DefaultLayout" },
    component: () => import("../views/About.vue")
  },
  {
    path: "/product",
    name: "Product",
    meta: { layout: "DefaultLayout" },
    component: () => import("../views/Product.vue")
  },
  {
    path: "/series",
    name: "Series",
    meta: { layout: "DefaultLayout" },
    component: () => import("../views/Series.vue")
  },
  {
    path: "/productInfo",
    name: "ProductInfo",
    meta: { layout: "DefaultLayout" },
    component: () => import("../views/ProductInfo.vue")
  },
  {
    path: "/search",
    name: "Search",
    meta: { layout: "DefaultLayout" },
    component: () => import("../views/Search.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { layout: "DefaultLayout" },
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/member",
    name: "MemberLayout",
    component: () => import("@/views/member/Member.vue"),
    redirect: "/member/info",
    children: [
      {
        path: "signup",
        name: "Signup",
        meta: { layout: "DefaultLayout" },
        component: () => import("@/views/member/Signup.vue")
      },
      {
        path: "validation",
        name: "Validation",
        meta: { layout: "DefaultLayout" },
        component: () => import("@/views/member/Validation.vue")
      },
      {
        path: "info",
        name: "Member",
        meta: { layout: "DefaultLayout" },
        component: () => import("@/views/member/MemberInfo.vue")
      },
      {
        path: "signin",
        name: "Signin",
        meta: { layout: "DefaultLayout" },
        component: () => import("@/views/member/Signin.vue")
      },
      {
        path: "forgetPassword",
        name: "ForgetPassword",
        meta: { layout: "DefaultLayout" },
        component: () => import("@/views/member/ForgetPassword.vue")
      },
      {
        path: "passwordEdit",
        name: "PasswordEdit",
        meta: { layout: "DefaultLayout" },
        component: () => import("@/views/member/PasswordEdit.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
