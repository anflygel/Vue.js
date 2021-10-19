<template>
  <div class="home">
    <HelloWorld msg="Калькулятор" />
    <input v-model.number="operand1" type="number" />
    <input v-model.number="operand2" type="number" @input="notDivide($event)" />
    = {{ result }}
    <br />

    <button
      v-for="operand in operands"
      v-bind:key="operand"
      v-bind:title="operand"
      v-bind:disabled="operand1 === '' || operand2 === ''"
      @click="calculate(operand)"
    >
      {{ operand }}
    </button>
    <div v-if="error">Ошибка! {{ error }}</div>
    <div class="logs">
      <div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      operands: ["+", "-", "*", "/"],
      operand1: 0,
      operand2: 0,
      result: 0,
      isButtonDisabled: true,
      error: "",
      logs: {}, //здесь будем хранить наши логи
    };
  },
  methods: {
    add() {
      this.result = this.operand1 + this.operand2;
    },
    minus() {
      this.result = this.operand1 - this.operand2;
    },
    multiplication() {
      this.result = this.operand1 * this.operand2;
    },
    divide() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "Делить на 0 нельзя";
      } else {
        this.result = operand1 / operand2;
      }

      // this.result = this.operand1 / this.operand2;
    },

    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.minus();
          break;
        case "*":
          this.multiplication();
          break;
        case "/":
          this.divide();
          break;
      }
      const key = Date.now();
      const value = `${this.operand1}${operation}${this.operand2}=${this.result}`;
      Vue.set(this.logs, key, value);
      // this.logs[
      //   Date.now()
      // ] = `${this.operand1}${operation}${this.operand2}=${this.result}`;
    },
  },
};
</script>

<style scoped>
</style>