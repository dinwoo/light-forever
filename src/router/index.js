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
  }
];

const router = new VueRouter({
  routes
});

export default router;
