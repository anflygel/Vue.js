<template>
  <div class="home">
    <HelloWorld msg="Калькулятор" />
    <input v-model.number="operand1" type="number" />
    <input v-model.number="operand2" type="number" @input="notDivide($event)" />
    = {{ result }}
    <br />
    <button @click="result = operand1 + operand2">+</button>
    <button @click="minus(operand1, operand2)">-</button>
    <button @click="multiplication">*</button>
    <button v-bind:disabled="isButtonDisabled" @click="divide">/</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

//Первая попытка убрать деление на ноль

// let notnull = false;
// let twonumber = document.getElementById("second");
// if (twonumber.target.value == 0) {  //ошибок нет, сайт не открывается почему-то
//   notnull = true;
// }
// console.log(twonumber);

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      isButtonDisabled: true,
    };
  },
  methods: {
    minus(op1, op2) {
      this.result = op1 - op2;
    },
    multiplication() {
      this.result = this.operand1 * this.operand2;
    },
    divide() {
      this.result = this.operand1 / this.operand2;
    },
    //метод отмены деления на ноль
    notDivide(event) {
      if (event.target.value == 0) {
        this.isButtonDisabled = true;
      } else this.isButtonDisabled = false;
    },
  },
};
</script>

<style scoped>
</style>