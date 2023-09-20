import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import  VueSelect  from "vue-select";

import "bootstrap/dist/css/bootstrap.css";
import "vue-select/dist/vue-select.css";

const app = createApp(App);

app.component("v-select", VueSelect);
app.use(router);
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js"