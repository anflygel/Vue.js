import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getCurrentDate() {
  const today = new Date();
  const d = today.getDate();
  const m = today.getMonth() + 1;
  const y = today.getFullYear();
  return `${d}.${m}.${y}`;
}

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: []
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymentsList = payload
    },
    addPaymentListData(state, payload) {
      state.paymentsList.push(payload)
    },
    setCategoryList(state, payload) {
      state.categoryList = payload
    },
    upgradeData(state, payload) {
      state.categoryList = payload
    }
  },
  actions: {
    fetchData({ dispatch }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const items = [];
          for (let i = 1; i < 101; i++) {
            items.push({
              id: i,
              date: getCurrentDate(),
              category: "Food",
              value: Math.floor(Math.random() * 99999)
            });
          }
          resolve(items)
        }, 1000);
      }).then(res => {
        dispatch('upgradeData', res)
      });
    },

    fetchCategoryList({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const items = ['Sport', 'Food', 'IT', 'Auto'];
          resolve(items)
        }, 500);
      }).then(res => {
        commit('setCategoryList', res);
      });
    },
    upgradeData({ commit, }, payload) {
      //updateData
      commit('setPaymentListData', payload)
    }
  },

  getters: {
    getPaymentsList: state => state.paymentsList,
    getCategoryList: state => state.categoryList,
    getFullPaymentValue: state => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
    }
  }
});
