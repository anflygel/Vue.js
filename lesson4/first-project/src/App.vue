<template>
  <!-- <div :class="[$style.wrapper]"> -->
  <div id="app">
    <div class="container">
      <nav>
        <router-link to="/dashboard"><h1>Dashboard</h1></router-link>
        <router-link to="/about"><h1>About</h1></router-link>
        <router-link to="/notfound"><h1>NotFound</h1></router-link>
      </nav>
    </div>

    <main>
      <router-view />
    </main>
    <!-- <nav> -->
    <!-- <a href="dashboard">Dashboard</a> / 
        <a href="about">About</a> /
        <a href="notfound">404</a> / -->
    <!-- </nav> -->

    <!-- <dashboard v-if="pageName === 'dashboard'" />
      <about v-if="pageName === 'about'" />
      <not-found v-if="pageName === 'notfound'" /> -->
  </div>
</template>

<script>
// import Dashboard from "./views/Dashboard.vue";
// import NotFound from "./views/NotFound.vue";
// import About from "./views/About.vue";
export default {
  name: "App",
  components: {
    // NotFound,
    // Dashboard,
    // About,
  },
  data() {
    return {
      // check: false,
      page: 1,
      count: 10,
      // pageName: "",
    };
  },
  // computed: {},
  // methods: {
  // setPage() {
  //   this.pageName = location.pathname.slice(1);
  // },
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
  // },
  created() {
    //  this.paymentsList = this.fetchData();
    //  this.$store.commit("setPaymentListData", this.fetchData());
    // this.myMutationName(this.fetchData());
    this.$store.dispatch("fetchData");
  },
  // mounted() {
  // const links = document.querySelectorAll("a");
  // if (links?.length) {
  //   links.forEach((link) => {
  //     link.addEventListener("click", (event) => {
  //       event.preventDefault();
  //       console.log(link);
  //       history.pushState({}, "", link.href);
  //       this.setPage();
  //     });
  //   });
  // }
  // this.setPage();
  // window.addEventListener("popstate", this.setPage);
  // },
};
</script>

<style lang="scss" module>
nav {
  margin: 25px;
  display: flex;
  justify-content: space-around;
}
</style>