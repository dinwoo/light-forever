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
    product: {
      category: {},
      list: {},
      detail: {},
      search: {}
    },
    search: {}
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
    },
    SET_PRODUCT_LIST(state, data) {
      state.product.list = data;
    },
    SET_PRODUCT_DETAIL(state, data) {
      state.product.detail = data;
    },
    SET_SEARCH_LIST(state, data) {
      state.search = data;
    },
    SET_MEMBER_INFO(state, data) {
      state.member = data;
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
    getSearchList(context, data) {
      const { select, pageSize, currentPage } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/product/full/search", {
          select,
          pageSize,
          currentPage
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_SEARCH_LIST", data.data);
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
    getCategoryList(context, data) {
      const { select, pageSize, currentPage } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/product/category/list", {
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
    getProductList(context, data) {
      const { select, productCategoryId, pageSize, currentPage } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/product/list", {
          select,
          productCategoryId,
          pageSize,
          currentPage
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_PRODUCT_LIST", data.data);
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
    getProductDetail(context, data) {
      const { id } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/product/detail", {
          id
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_PRODUCT_DETAIL", data.data);
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
    },
    // member
    postSignup(context, data) {
      const {
        name,
        phone,
        company,
        companyTitle,
        account,
        password,
        confirmPassword
      } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/member/signup", {
          name,
          phone,
          company,
          companyTitle,
          account,
          password,
          confirmPassword
        })
          .then(({ data }) => {
            console.log(data);
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
    },
    postValidation(context, token) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/member/validation", {
          token
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
    },
    getMemberInfo(context, account) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/member/info", { account })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_MEMBER_INFO", data.data);
              resolve(data);
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
    putMemberInfo(context, data) {
      const { token, name, phone, company, companyTitle } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/member/edit", {
          token,
          name,
          phone,
          company,
          companyTitle
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
    },
    postSignin(context, data) {
      const { account, password } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/member/signin", {
          account,
          password
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              resolve(data);
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
    postPasswordToken(context, account) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/member/password/trigger", {
          account
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
    },
    putPasswordInfo(context, data) {
      const { token, password, confirmPassword } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("api/member/password/edit", {
          token,
          password,
          confirmPassword
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
