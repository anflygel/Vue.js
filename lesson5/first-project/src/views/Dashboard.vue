<template>
  <div class="container">
    <header>
      <div class="header">My personal costs</div>
      <h3>Total: {{ getFPV }}</h3>
    </header>

    <router-link to="/dashboard/add/payment/Sport?value=400"
      >Sport400</router-link
    >
    /
    <router-link to="/dashboard/add/payment/IT?value=500">IT500</router-link>
    /
    <router-link to="/dashboard/add/payment/Auto?value=600"
      >Auto600</router-link
    >

    <main>
      <div class="table-one">
        <button class="table-but" @click="check = !check">
          Add new cost +
        </button>
        <AddPaymentForm
          v-show="check"
          :linkrout="linkrout"
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
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay";
import AddPaymentForm from "../components/AddPaymentForm";
import { mapMutations, mapGetters } from "vuex";
import Pagination from "../components/Pagination.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      check: false,
      page: 1,
      count: 10,
      pageName: "",
    };
  },
  watch: {
    "$route.params": {
      handler: function (newValue, oldValue) {
        this.validateRouteParams();
        console.log("change route", newValue, oldValue);
      },
      deep: false,
      immediate: false,
    },
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
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
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
    addDataToPaymentList(item) {
      const date = new Date();
      const data = { ...item, ...{ id: date.getMilliseconds() } };
      this.addData(data);
      // this.$router.push({
      //   name: "About",
      // });
    },
    validateRouteParams() {
      const { action, category, value } = this.$route.params;
      if (category && category === "payment") {
        this.linkrout = {
          date: this.getCurrentDate,

          category: value,

          value: +this.$route.query?.value,
        };
        console.log(this.linkrout, value, action); //выбор категории
      }
    },
  },
  created() {
    this.validateRouteParams();
  },

  mounted() {
    const page = this.$route.params.page;
    if (page) {
      this.page = Number(page);
    }
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
