<template>
  <div class="pagination-wrapper">
    <div>-</div>
    <div
      class="page"
      :class="{ active: cur === i }"
      v-for="i in amount"
      :key="i"
    >
      {{ i }}
    </div>
    <div>+</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",

  props: {
    lenght: Number,
    n: Number,
    cur: Number,
  },
  data() {
    return {
      lenghta: 100,
    };
  },
  methods: {
    onClick(p) {
      this.$emit("paginate", p);
    },
  },
  computed: {
    amount() {
      return Math.ceil(this.lenght / this.n);
    },
  },
};
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
}
.page {
  padding: 10px;
}
.active {
  background: rgb(160, 12, 12);
}
</style>