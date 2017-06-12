import Vue from 'vue'
import App from './App.vue'

Vue.filter('countLetters', (value) => {
	let letters = value.length
	return value + ' (' + letters + ')';
});

Vue.mixin({
	created() {
		console.log('Global Mixin - Created Hook');
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
