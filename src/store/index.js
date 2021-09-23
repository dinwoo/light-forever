import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/common/api.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    lang: null, // 存放使用者選用的語系
    screenWidth: document.body.clientWidth,
    home: { banner: {} },
    product: { category: {} }
  },
  mutations: {
    // 切換語系設定
    SET_LANG(state, value) {
      state.lang = value;
    },
    SET_LOADING(state, value) {
      state.isLoading = value;
    },
    SET_SCREEN_WIDTH(state, value) {
      state.screenWidth = value;
    },
    SET_BANNER(state, data) {
      state.home.banner = data;
    },
    SET_CATEGORY(state, data) {
      state.product.category = data;
    }
  },
  actions: {
    postUrl(context, data) {
      const { url, title, productId } = data;
      // context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/browse/visit", {
          url,
          title,
          productId
        })
          .then(({ data }) => {
            // context.commit("SET_LOADING", false);
            if (data.code == 200) {
              resolve();
            } else {
              alert(data.msg);
            }
          })
          .catch(({ response }) => {
            // context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getCategoryList(context, data) {
      const { select, pageSize, currentPage } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.get("api/product/category/list", "", {
          select,
          pageSize,
          currentPage
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_CATEGORY", data.data);
              resolve();
            } else {
              alert(data.msg);
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getBanner(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.get("api/index/banners", "", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_BANNER", data.data);
              resolve();
            } else {
              alert(data.msg);
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    postEmail(context, data) {
      const { name, phone, email, content } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/contact/send", {
          name,
          phone,
          email,
          content
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              resolve();
            } else {
              alert(data.msg);
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    }
  },
  modules: {}
});
