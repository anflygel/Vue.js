
let page1 = [
    { "id": 1, "date": "20.03.2020", "category": "Sport", "value": 169 },
    { "id": 2, "date": "21.03.2020", "category": "Sport", "value": 50 },
    { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
]
let page2 = [
    { "id": 4, "date": "23.03.2020", "category": "Food", "value": 969 },
    { "id": 5, "date": "24.03.2020", "category": "Food", "value": 1500 },
    { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
]
let page3 = [
    { "id": 7, "date": "20.03.2020", "category": "IT", "value": 322 },
    { "id": 8, "date": "21.03.2020", "category": "IT", "value": 228 },
    { "id": 9, "date": "22.03.2020", "category": "IT", "value": 777 }
]
let page4 = [
    { "id": 10, "date": "23.03.2020", "category": "Auto", "value": 888 },
    { "id": 11, "date": "24.03.2020", "category": "Auto", "value": 555 },
    { "id": 12, "date": "25.03.2020", "category": "Auto", "value": 333 }
]
let page5 = [
    { "id": 4, "date": "23.03.2020", "category": "IT", "value": 969 },
    { "id": 5, "date": "24.03.2020", "category": "Auto", "value": 1500 },
    { "id": 6, "date": "25.03.2020", "category": "Sport", "value": 200 }
]


const products = [page1, page2, page3, page4, page5]

export default products

// export const localDB = {
//     page1 =[
//       { "id": 1, "date": "20.03.2020", "category": "Sport", "value": 169 },
//       { "id": 2, "date": "21.03.2020", "category": "Sport", "value": 50 },
//       { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
//     ],
//     page2 =[
//       { "id": 4, "date": "23.03.2020", "category": "Food", "value": 969 },
//       { "id": 5, "date": "24.03.2020", "category": "Food", "value": 1500 },
//       { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
//     ],
//     page3 =[
//       { "id": 7, "date": "20.03.2020", "category": "IT", "value": 322 },
//       { "id": 8, "date": "21.03.2020", "category": "IT", "value": 228 },
//       { "id": 9, "date": "22.03.2020", "category": "IT", "value": 777 }
//     ],
//     page4 =[
//       { "id": 10, "date": "23.03.2020", "category": "Auto", "value": 888 },
//       { "id": 11, "date": "24.03.2020", "category": "Auto", "value": 555 },
//       { "id": 12, "date": "25.03.2020", "category": "Auto", "value": 333 }
//     ],
//     page5 =[
//       { "id": 4, "date": "23.03.2020", "category": "IT", "value": 969 },
//       { "id": 5, "date": "24.03.2020", "category": "Auto", "value": 1500 },
//       { "id": 6, "date": "25.03.2020", "category": "Sport", "value": 200 }
//     ]

//   }

// fetchData({ commit }, page) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         const items = localDB[`page${page}`]
//         resolve(items)
//       }, 1000);
//     }).then(res => {
//       commit('addPaymentListData', res)
//     });
//   },