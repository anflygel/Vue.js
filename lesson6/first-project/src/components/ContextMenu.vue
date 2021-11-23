<template>
  <div class="context" v-if="shown">
    <div class="content__item" v-for="item in items" :key="item.text">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      items: [],
      shown: false,
    };
  },
  methods: {
    onShown({ items }) {
      this.items = items;
      this.shown = true;
    },
    onClose() {
      this.items = [];
      this.shown = false;
    },
  },
  mounted() {
    this.$context.EventBus.$on("shown", this.onShown);
    this.$context.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    this.$context.EventBus.$off("shown", this.onShown);
    this.$context.EventBus.$off("close", this.onClose);
  },
};
</script>

<style lang="scss" scoped>
.context {
  top: 200px;
  right: 200px;
  position: absolute;
  background: #eee;
  cursor: pointer;
}
</style>