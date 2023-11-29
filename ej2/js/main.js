const vm = {
    data() {
        return {
            posX: '',
            posY: ''
        }
    },
    methods: {
        track(event) {
            const target = event.target;
            const area = target.getBoundingClientRect();
            this.posX = event.clientX - area.x;
            this.posY = event.clientY - area.y;
        }
    }
}
Vue.createApp(vm).mount('#app')