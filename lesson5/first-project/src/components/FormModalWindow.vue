<template>
  <div class="wrapper" v-if="settings.content">
    <div class="header-mod">
      <h1>{{ settings.header }}</h1>
    </div>
    <div class="content">
      <add-payment-form v-if="settings.content === 'addpaymentform'" />
      <auth-form v-if="settings.content === 'auth'" />
    </div>
    <div class="content">
      <button class="but-close-mod" @click="onClose">Close</button>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue";
import AuthForm from "./AuthForm.vue";
export default {
  components: { AddPaymentForm, AuthForm },
  name: "FormModalWindow",
  props: {
    settings: Object,
  },
  methods: {
    onClose() {
      // this.$emit("close");
      this.$modal.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid red;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  background: #ffffffd9;

  height: 100%;
  & .overlay {
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  & .content {
    position: relative;
    z-index: 100;
  }
}

.but-close-mod {
  position: absolute;
  top: 10px;
  left: 50px;
  padding: 10px 55px;
  background: rgb(220, 20, 20);
}

.header-mod {
  margin: 25px;

  color: red;
  font-family: sans-serif;
}
</style>