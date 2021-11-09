<template>
  <!-- <div :class="[$style.wrapper]"> -->
  <div class="addPay">
    <div class="input-flex">
      <input class="table-input" placeholder="Date" v-model="linkrout.date" />
      <!-- <input class="table-input" placeholder="Category" v-model="category" /> -->
      <input class="table-input" placeholder="Value" v-model="linkrout.value" />
      <select-category v-model="linkrout.category" />
    </div>
    <div class="button-flex">
      <button class="table-input-button" @click="onSaveClick">Add +</button>
    </div>
  </div>
</template>
<script>
import SelectCategory from "./SelectCategory.vue";

export default {
  name: "AddPaymentForm",
  components: { SelectCategory },
  data() {
    return {
      date: "",
      category: "",
      value: "",
    };
  },
  props: {
    linkrout: {
      date: "",
      category: "",
      value: "",
    },
  },
  watch: {
    "$route.params": {
      handler: function (newValue, oldValue) {
        this.validateRouteParams();
        console.log("change route", newValue, oldValue);
      },
      deep: true,
      immediate: false,
    },
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSaveClick() {
      const data = {
        date: this.date || this.getCurrentDate,

        category: this.category,

        value: +this.value,
      };
      this.$emit("addNewPayment", this.linkrout, data);
    },
    validateRouteParams() {
      const { action, category, value } = this.$route.params;
      if (category && category === "payment") {
        this.linkrout = {
          date: this.getCurrentDate,

          category: value,

          value: +this.$route.query?.value,
        };
        console.log(this.linkrout, value, action); //выбор категории
      }
    },
  },
  created() {
    this.validateRouteParams();
    // this.date = this.linkrout.date;
    // this.category = this.linkrout.category;
    // this.value = this.linkrout.value;
  },
};
</script>
<style lang="scss" scoped>
.addPay {
  width: 500px;
  margin: 0 25px 25px 25px;
}

.table-input {
  margin: 5px;
  padding: 5px;
}

.input-flex {
  display: flex;
  flex-direction: column;
}

.button-flex {
  display: flex;
  justify-content: flex-end;
}

.table-input-button {
  margin: 10px;
  width: 150px;
  padding: 10px 15px;
  background: rgb(44, 235, 44);
  border-color: rgb(105, 255, 173);
}
</style>