import Vue from 'vue'
import TestComp from './components/test.vue'

new Vue({
    el: '#app',
    render(h) {
        return h(TestComp)
    }
})