import Vue from 'vue';

import Page from './components/Page.vue';

new Vue({
    el: '#app',
    render(h) {
        return h(Page)
    }
})