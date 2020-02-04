import Vue from 'vue';

import Page from './components/PAge.vue';

new Vue({
    el: '#app',
    render(h) {
        return h(Page)
    }
})