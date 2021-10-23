<template>
  <!-- <div :class="[$style.wrapper]"> -->
  <div class="app">
    <div class="container">
      <header>
        <!-- <div :class="[$style.title]">My personal costs</div> -->
        <div class="header">My personal costs</div>
      </header>
      <main>
        <div class="table-one">
          <button class="table-but" @click="check = !check">
            Add new cost +
          </button>
          <AddPaymentForm v-show="check" @addNewPayment="addNewPayment" />
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
          <PaymentsDisplay :items="paymentsList" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPaymentForm from "./components/AddPaymentForm";

export default {
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      check: false,
      paymentsList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
    addNewPayment(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
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
  display: flex;
}

.table-but {
  margin: 15px;
  padding: 10px 15px;
  background: rgb(142, 240, 142);
  border-color: rgb(105, 255, 173);
}

.text-table {
  margin: 20px 100px 20px;
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