<template>
  <!-- <div :class="[$style.wrapper]"> -->
  <div :class="app">
    <header>
      <!-- <div :class="[$style.title]">My personal costs</div> -->
      <div :class="header">My personal costs</div>
    </header>
    <main>
      <PaymentsDisplay :items="paymentsList" />
      <!-- <PaymentsDisplay :items="'any list data'" /> -->
      <AddPaymentForm @addNewPayment="addNewPayment" />
    </main>
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

<style lang="scss" module>
</style>