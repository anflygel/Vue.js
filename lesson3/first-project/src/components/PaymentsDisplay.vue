<template>
  <!-- <div :class="[$style.wrapper]"> -->
  <!-- <div class="itemobj">
    {{ items }}
  </div> -->
  <div class="itemobj">
    <div v-for="(item, idx) in items" :key="idx">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.itemobj {
  margin-left: 60px;
  font-family: sans-serif;
  font-size: 20px;
}
</style>