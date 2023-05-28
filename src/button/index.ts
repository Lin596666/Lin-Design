import { App } from 'vue'
import Button from './src/button.vue'
export default {
    install(app: App) {
        app.component('LButton', Button)
    }
}