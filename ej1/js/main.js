const vm = {
    data() {
        return {
            titulo: {
                texto: 'Botón pulsado',
                visible: false,
            }
        }
    },
    methods: {
        mostrar() {
            this.titulo.visible = !this.titulo.visible;
        }
    }
}
Vue.createApp(vm).mount('#app')