<template>
  <div class="home">
    <HelloWorld msg="Калькулятор" />
    <input v-model.number="operand1" type="number" id="opera1" />
    <input v-model.number="operand2" type="number" id="opera2" />
    = {{ result }}
    <br />
    <!-- v-bind:disabled="operand === '/' && operand2 === 0" -->
    <button
      v-for="operand in operands"
      v-bind:key="operand"
      v-bind:title="operand"
      @click="calculate(operand)"
    >
      {{ operand }}
    </button>
    <div v-if="error">Ошибка! {{ error }}</div>

    <div class="check-but">
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">Отобразить экранную клавиатуру</label>
    </div>

    <div class="block-numbers">
      <button v-show="checked" v-for="(number, idx) in numbuts" :key="idx">
        {{ number }}
      </button>
      <button v-show="checked">{{ backarrow }}</button>
    </div>

    <div class="but-radio"></div>
    <input
      value="Один"
      type="radio"
      id="oper1"
      @click="autofoc('opera1')"
      v-model="picked"
    />
    <label for="oper1">Поле №1</label>
    <input
      value="Два"
      type="radio"
      id="oper2"
      @click="autofoc('opera2')"
      v-model="picked"
    />
    <label for="oper2">Поле №2</label>
    <br />

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
      picked: "",
      backarrow: "<=",
      checked: false,
      numbuts: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      operands: ["+", "-", "*", "/"],
      operand1: "",
      operand2: "",
      result: "",
      isButtonDisabled: true,
      error: "",
      logs: {}, //здесь будем хранить наши логи
    };
  },
  methods: {
    autofoc(id) {
      const oneinp = document.getElementById(id);
      oneinp.focus();
    },
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
      const { operand2 } = this;
      if (operand2 === 0) {
        this.error = "Делить на 0 нельзя";
        return;
      }
      // else {
      //   this.result = operand1 / operand2;
      // }

      this.result = this.operand1 / this.operand2;
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
.block-numbers {
  margin: 0px;
  padding: 0px;
}

.check-but {
  margin: 40px 0px 15px;
}

.but-radio {
  margin: 20px;
}
</style>