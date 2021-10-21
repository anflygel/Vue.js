<template>
  <!-- <div :class="[$style.wrapper]"> -->
  <div :class="item - obj">
    {{ items }}
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      // default: [],
    },
  },
};
</script>

<style lang="scss" module>