<template>
  <!-- <div :class="[$style.wrapper]"> -->
  <div class="app">
    <div class="container">
      <nav>
        <a href="#dashboard">Dashboard</a> / <a href="#about">About</a> /
        <a href="#notfound">404</a> /
      </nav>

      <dashboard v-if="pageName === 'dashboard'" />
      <about v-if="pageName === 'about'" />
      <not-found v-if="pageName === 'notfound'" />

      <header>
        <div class="header">My personal costs</div>
        <h3>Total: {{ getFPV }}</h3>
      </header>
      <main>
        <div class="table-one">
          <button class="table-but" @click="check = !check">
            Add new cost +
          </button>
          <AddPaymentForm
            v-show="check"
            @addNewPayment="addDataToPaymentList"
          />
        </div>
        <hr />
        <div class="table">
          <p class="text-table">#</p>
          <p class="text-table">Date</p>
          <p class="text-table">Category</p>
          <p class="text-table">Value</p>
        </div>
        <hr />
        <div class="table-form">
          <PaymentsDisplay :items="currentElements" />
        </div>
        <pagination
          @paginate="changePage"
          :length="paymentsList.length"
          :cur="page"
          :n="count"
        />
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPaymentForm from "./components/AddPaymentForm";
import { mapMutations, mapGetters } from "vuex";
import Pagination from "./components/Pagination.vue";
import Dashboard from "./views/Dashboard.vue";
import NotFound from "./views/NotFound.vue";
import About from "./views/About.vue";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
    NotFound,
    Dashboard,
    About,
  },
  data() {
    return {
      check: false,
      page: 1,
      count: 10,
      pageName: "",
    };
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentsList",
      category: "getCategoryList",
    }),
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    currentElements() {
      const { count, page } = this;
      return this.paymentsList.slice(
        count * (page - 1),
        count * (page - 1) + count
      );
    },
  },
  methods: {
    ...mapMutations({
      myMutationName: "setPaymentListData",
      addData: "addPaymentListData",
    }),
    changePage(p) {
      this.page = p;
    },
    // fetchData() {
    //   const items = [];
    //   for (let i = 1; i < 100; i++) {
    //     items.push({
    //       id: i,
    //       date: this.getCurrentDate(),
    //       category: "Food",
    //       value: i,
    //     });
    //   }
    //   return items;
    // },

    // addNewPayment(data) {
    //   this.paymentsList = [...this.paymentsList, data];
    // },

    addDataToPaymentList(item) {
      const date = new Date();
      const data = { ...item, ...{ id: date.getMilliseconds() } };
      this.addData(data);
    },
  },
  created() {
    //  this.paymentsList = this.fetchData();
    //  this.$store.commit("setPaymentListData", this.fetchData());
    // this.myMutationName(this.fetchData());
    this.$store.dispatch("fetchData");
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 1080px;
  margin: 0 auto;
}

.table {
  margin: 0 auto;
  display: flex;

  width: 1040px;
}

.table-but {
  margin: 15px;
  padding: 10px 15px;
  background: rgb(142, 240, 142);
  border-color: rgb(105, 255, 173);
}

// .text-table-id {
//   width: 100%;
//   margin: 25px 25px 25px 150px;
// }

.text-table {
  text-align: center;
  width: 258.75px;
  margin: 25px;
}

.header {
  margin: 25px;
  text-align: center;
  color: red;
  font-family: sans-serif;
  font-size: 24px;
}

.table-form {
  margin: 20px;
}
</style>