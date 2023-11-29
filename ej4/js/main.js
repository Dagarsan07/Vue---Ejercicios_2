const vm = {
    data() {
        return {
            lista: [
                'Manzana',
                'Leche',
                'Pescado',
                'Huevos',
                'Detergente',
            ]
        }
    }, 
}
Vue.createApp(vm).mount('#app')