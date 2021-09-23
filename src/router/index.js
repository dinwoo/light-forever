import Vue from "vue";
import VueRouter from "vue-router";
import ApiService from "@/common/api.service";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "首頁", layout: "DefaultLayout" },
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    meta: { title: "關於我們", layout: "DefaultLayout" },
    component: () => import("../views/About.vue")
  },
  {
    path: "/product",
    name: "Product",
    meta: { title: "產品展示", layout: "DefaultLayout" },
    component: () => import("../views/Product.vue")
  },
  {
    path: "/series",
    name: "Series",
    meta: { title: "產品系列", layout: "DefaultLayout" },
    component: () => import("../views/Series.vue")
  },
  {
    path: "/productInfo",
    name: "ProductInfo",
    meta: { title: "產品介紹", layout: "DefaultLayout" },
    component: () => import("../views/ProductInfo.vue")
  },
  {
    path: "/search",
    name: "Search",
    meta: { title: "搜尋頁面", layout: "DefaultLayout" },
    component: () => import("../views/Search.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { title: "聯絡我們", layout: "DefaultLayout" },
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
        meta: { title: "會員註冊", layout: "DefaultLayout" },
        component: () => import("@/views/member/Signup.vue")
      },
      {
        path: "validation",
        name: "Validation",
        meta: { title: "會員驗證", layout: "DefaultLayout" },
        component: () => import("@/views/member/Validation.vue")
      },
      {
        path: "info",
        name: "Member",
        meta: { title: "會員資料", layout: "DefaultLayout" },
        component: () => import("@/views/member/MemberInfo.vue")
      },
      {
        path: "signin",
        name: "Signin",
        meta: { title: "會員登入", layout: "DefaultLayout" },
        component: () => import("@/views/member/Signin.vue")
      },
      {
        path: "forgetPassword",
        name: "ForgetPassword",
        meta: { title: "忘記密碼", layout: "DefaultLayout" },
        component: () => import("@/views/member/ForgetPassword.vue")
      },
      {
        path: "passwordEdit",
        name: "PasswordEdit",
        meta: { title: "編輯密碼", layout: "DefaultLayout" },
        component: () => import("@/views/member/PasswordEdit.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  ApiService.post("api/browse/visit", {
    url: `https://light-forever.com${to.path}`,
    title: to.meta.title,
    productId: null
  })
    .then(() => {
      next();
    })
    .catch(() => {
      alert("網路不穩，請再試一次");
    });
});

export default router;
