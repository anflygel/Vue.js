<template>
  <div class="pagination-wrapper">
    <div @click="onClick(cur - 1)" class="page">-</div>
    <div
      class="page"
      :class="{ active: cur === i }"
      v-for="i in amount"
      :key="i"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div @click="onClick(cur + 1)" class="page">+</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",

  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  data() {
    return {};
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amount) {
        return;
      }

      this.$emit("paginate", p);
    },
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
};
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  justify-content: center;
}
.page {
  padding: 0 10px;
  margin: 10px 25px 100px 25px;
}
.active {
  background: #ccc;
}
</style>