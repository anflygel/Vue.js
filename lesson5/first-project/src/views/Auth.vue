<template>
  <div @click="openAuth">Need Auth</div>
</template>

<script>
export default {
  name: "Auth",
  methods: {
    openAuth() {
      this.$modal.show("auth", {
        header: "Auth",
        content: "auth",
      });
    },
  },
};
</script>

<style>
</style>