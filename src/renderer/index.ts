import Vue from 'vue'
import LoginPage from './components/LoginPage.vue'

new Vue({
    el: '#app',
    render(h) {
        return h(LoginPage)
    }
})