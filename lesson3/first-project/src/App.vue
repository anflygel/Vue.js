<template>
  <div :class="[$style.wrapper]">
    <header>
      <div :class="[$style.title]">My personal costs</div>
    </header>
    <main>
      <PaymentsDisplay />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
export default {
  components: {
    PaymentsDisplay,
  },
};
</script>

<style lang="scss" module>
</style>