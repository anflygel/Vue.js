<template>
  <div>
    <select class="cat-form" :value="value" @change="onChange($event)">
      <option
        class="cat-form-in"
        v-for="(option, idx) in getCategoryList"
        :key="idx"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SelectCategory",
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    ...mapGetters(["getCategoryList"]),
  },
  methods: {
    ...mapActions(["fetchCategoryList"]),
    onChange(event) {
      this.$emit("input", event.target.value);
    },
  },
  mounted() {
    if (!this.getCategoryList?.length) {
      this.fetchCategoryList();
    }
  },
};
</script>

<style>
.cat-form {
  margin: 10px;
  padding: 5px 15px;
  font-size: 24px;
  background-color: rgb(14, 170, 170);
}

.cat-form-in {
  font-size: 24px;
  background-color: rgb(77, 207, 207);
}
</style>