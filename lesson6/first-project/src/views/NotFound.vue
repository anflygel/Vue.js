<template>
  <div>
    <h2 class="auth"><auth /></h2>

    <div class="notfound">
      <h1>404</h1>
      <h2>Дружище, извини, но мы не смогли найти эту страницу…</h2>
    </div>
  </div>
</template>

<script>
import Auth from "./Auth.vue";
export default {
  components: { Auth },
  name: "NotFound",
};
</script>

<style scoped>
.auth {
  border: 4px double black;
  width: 140px;
  position: relative;
  top: 100px;
  left: 100px;
  padding: 5px;
}

.notfound {
  display: flex;

  flex-direction: column;

  margin: 250px;
}
</style>