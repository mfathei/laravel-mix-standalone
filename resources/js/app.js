// alert('hello');


window.$ = window.jQuery = require('jquery');

window.Vue = require('vue');

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});


$('body').append('<p>Appended from jQuery</p>');

