const vm = {
  data() {
    return {
      lista: ["Manzana", "Leche", "Pescado", "Huevos", "Detergente"],
    };
  },
  methods: {
    agregar(event) {
      this.lista.push(event.target.value);
    },
  },
};
Vue.createApp(vm).mount("#app");
