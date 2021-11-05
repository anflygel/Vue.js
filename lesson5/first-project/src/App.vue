<template>
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
      <form-modal-window :settings="modalSettings" v-if="modalName" />
      <!-- <form-modal-window :settings="modalSettings" /> -->
      <!-- <router-view @openModalWindow="openModal" /> -->
      <!-- <form-modal-window :settings="modalSettings" @close="closeModal" /> -->
      <!-- <form-modal-window :settings="modalSettings" @close="closeModal" />
      <form-modal-window @close="addPaymentFormShow = !addPaymentFormShow" />
      <button @click="addPaymentFormShow = true">666</button> -->
    </main>
  </div>
</template>

<script>
// import FormModalWindow from "./components/FormModalWindow.vue";
export default {
  name: "App",
  components: {
    FormModalWindow: () => import("./components/FormModalWindow.vue"),
  },
  data() {
    return {
      page: 1,
      count: 10,
      modalSettings: {},
      modalName: "",
    };
  },
  methods: {
    onShow(settings) {
      this.modalName = settings.name; //add
      this.modalSettings = settings.settings;
    },
    onHide() {
      this.modalSettings = {};
      this.modalName = {}; //add
    },
    // openModal(settings) {
    //   this.modalSettings = settings;
    // },
    // closeModal() {
    //   this.modalSettings = {};
    // },
  },
  created() {
    this.$store.dispatch("fetchData");
    // this.$modal.show();
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
};
</script>

<style lang="scss" module>
nav {
  margin: 25px;
  display: flex;
  justify-content: space-around;
}
</style>