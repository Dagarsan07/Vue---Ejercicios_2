const vm = {
    data() {
        return {
            opciones: [
                {texto: 'Perros', valor: 'perrojfif.jfif', oracion: 'Guau'},
                {texto: 'Gatos', valor: 'wisp.jfif', oracion: 'Bombardeen Algeciras'},
            ],
            respuesta: '',
        }
    },
}
Vue.createApp(vm).mount('#app')