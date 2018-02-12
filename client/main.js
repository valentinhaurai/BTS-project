import Vue from 'vue';
import App from './Components/App.vue';
import Hello from './Components/Hello.vue';
import Buildings from './Components/Buildings.vue';
import Router from 'vue-router';

Vue.use(Router);

var routes = [
	{ path: '/', name: 'Hello', component: Hello },
	{ path: '/buildings', name: 'Buildings', component: Buildings },
	{ path: '/buildings/:numFlat', name: 'Flat\'s details', component: Buildings }
];

var router = new Router({
	mode: 'hash',
  	routes: routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});