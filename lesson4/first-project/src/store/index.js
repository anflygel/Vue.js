import Vue from 'vue'
import Vuex from 'vuex'
// import products from "./products"

Vue.use(Vuex)

export const localDB = {
  page1: [
    { id: 1, date: "20.03.2020", category: "IT", value: 169 },
    { id: 2, date: "21.03.2020", category: "Sport", value: 50 },
    { id: 3, date: "22.03.2020", category: "Sport", value: 450 }
  ],
  page2: [
    { id: 4, date: "20.03.2020", category: "Sport", value: 169 },
    { id: 5, date: "21.03.2020", category: "Sport", value: 50 },
    { id: 6, date: "22.03.2020", category: "Sport", value: 450 }
  ],
  page3: [
    { id: 7, date: "20.03.2020", category: "Sport", value: 169 },
    { id: 8, date: "21.03.2020", category: "Sport", value: 50 },
    { id: 9, date: "22.03.2020", category: "Sport", value: 450 }
  ],
  page4: [
    { id: 10, date: "20.03.2020", category: "Sport", value: 169 },
    { id: 11, date: "21.03.2020", category: "Sport", value: 50 },
    { id: 12, date: "22.03.2020", category: "Sport", value: 450 }
  ],
}

// function getCurrentDate() {
//   const today = new Date();
//   const d = today.getDate();
//   const m = today.getMonth() + 1;
//   const y = today.getFullYear();
//   return `${d}.${m}.${y}`;
// }

export default new Vuex.Store({
  state: {
    paymentsList: [],
    paymentsListIDS: [],
    categoryList: []
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymentsList = payload
    },
    addPaymentListData(state, payload) {
      const newUniqObj = payload.filter(obj => {
        return state.paymentsListIDS.indexOf(obj.id) < 0
      })
      const uniqIDS = newUniqObj.map(obj => obj.id)
      state.paymentsListIDS.push(...uniqIDS)
      state.paymentsList.push(...newUniqObj)
    },
    setCategoryList(state, payload) {
      state.categoryList = payload
    },
    // upgradeData(state, payload) {
    //   state.categoryList = payload
    // }
  },
  actions: {
    // fetchData({ dispatch }) {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       const items = [];
    //       for (let i = 1; i < 101; i++) {
    //         items.push({
    //           id: i,
    //           date: getCurrentDate(),
    //           category: "Food",
    //           value: Math.floor(Math.random() * 99999)
    //         });
    //       }
    //       resolve(items)
    //     }, 1000);
    //   }).then(res => {
    //     dispatch('upgradeData', res)
    //   });
    // },
    fetchData({ commit }, page) {
      return new Promise(resolve => {
        setTimeout(() => {

          const items = localDB[`page${page}`]

          resolve(items)
        }, 1000);
      }).then(res => {
        commit('addPaymentListData', res)
      });
    },

    //   fetchCategoryList({ commit }) {
    //     return new Promise(resolve => {
    //       setTimeout(() => {
    //         const items = ['Sport', 'Food', 'Education', 'Internet'];
    //         resolve(items)
    //       }, 500);
    //     }).then(res => {
    //       commit("setCategoryList", res);
    //     });
    //   },
    //   upgradeData({ commit, dispatch }, payload) {
    //     // updateData
    //     dispatch('fetchCategoryList')
    //     commit('setPaymentListData', payload)
    //   }
    // },

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
      // dispatch('fetchCategoryList')
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
