import Vue from 'vue'
import App from './App.vue'

// create a new instace that will serve as a central event listener hub
// you can use the event bus to centralize functions used by multiple components
export const eventBus = new Vue({
  methods: {
    somemethod(data) {
      this.$emit('eventname', data);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});