<template>
  <div class="home">
    <HelloWorld msg="Калькулятор" />

    <!-- Два поля ввода -->
    <input v-model.number="operand1" type="number" id="opera1" />
    <input v-model.number="operand2" type="number" id="opera2" />
    = {{ result }}
    <br />

    <!-- КНОПКИ ОПЕРАНДОВ -->
    <button
      v-for="operand in operands"
      v-bind:key="operand"
      v-bind:title="operand"
      @click="calculate(operand)"
    >
      {{ operand }}
    </button>
    <div v-if="error">Ошибка! {{ error }}</div>

    <!-- ЧЕКБОКС КЛАВИАТУРЫ -->
    <div class="check-but">
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">Отобразить экранную клавиатуру</label>
    </div>

    <!-- КНОПКИ КЛАВИАТУРЫ -->
    <div class="block-numbers">
      <button
        @click="writenum(numbuts[idx])"
        v-show="checked"
        v-for="(number, idx) in numbuts"
        :key="idx"
      >
        {{ number }}
      </button>
      <button @click="backnum()" v-show="checked">{{ backarrow }}</button>
    </div>

    <!-- КНОПКИ ВЫБОРА -->
    <div v-show="checked" class="but-radio">
      <input
        value="1"
        type="radio"
        id="oper1"
        @click="autofoc('opera1')"
        v-model="picked"
      />
      <label for="oper1">Поле №1</label>
      <input
        value="2"
        type="radio"
        id="oper2"
        @click="autofoc('opera2')"
        v-model="picked"
      />
      <label for="oper2">Поле №2</label>
    </div>

    <!-- ЛОГИ -->
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
      chek: "",
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
      let oneinp = document.getElementById(id);
      oneinp.focus();
    },

    writenum(num) {
      if (this.picked === "1") {
        this.operand1 += num;
        this.operand1 = Number(this.operand1);
      }
      if (this.picked === "2") {
        this.operand2 += num;
        this.operand2 = Number(this.operand2);
      }
    },

    backnum() {
      let op1 = String(this.operand1);
      let op2 = String(this.operand2);
      let res1 = op1.slice(0, -1);
      let res2 = op2.slice(0, -1);
      if (this.picked === "1") {
        this.operand1 = Number(res1);
      }
      if (this.picked === "2") {
        this.operand2 = Number(res2);
      }
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

.logs {
  margin: 20px;
}
</style>