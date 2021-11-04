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
      <router-view @openModalWindow="openModal" />
      <form-modal-window :settings="modalSettings" @close="closeModal" />
      <!-- <form-modal-window :settings="modalSettings" @close="closeModal" />
      <form-modal-window @close="addPaymentFormShow = !addPaymentFormShow" />
      <button @click="addPaymentFormShow = true">666</button> -->
    </main>
  </div>
</template>

<script>
import FormModalWindow from "./components/FormModalWindow.vue";
export default {
  name: "App",
  components: { FormModalWindow },
  data() {
    return {
      page: 1,
      count: 10,
      modalSettings: {},
    };
  },
  methods: {
    openModal(settings) {
      this.modalSettings = settings;
    },
    closeModal() {
      this.modalSettings = {};
    },
  },
  created() {
    this.$store.dispatch("fetchData");
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