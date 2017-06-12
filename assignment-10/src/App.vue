<template lang="pug">
    div.container
        div.row
            div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
                h1(v-my-custom:click="showH2") Directives Exercise
                //- <!-- Exercise -->
                //- <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                h2(v-if="clicked") My custom directive works!
</template>

<script>
    export default {
        data() {
            return {
                clicked: false
            }
        },
        methods: {
            showH2() {
                this.clicked = true;
            }
        },
        directives: {
            myCustom: {
              inserted: function(el,binding,vnode) {
                  let vm = vnode.context;
                  let functionName = binding.expression;
                  if (binding.arg === "click") {
                      el.style.cursor = 'pointer';
                      el.addEventListener('click', () => {
                          vm[functionName]();
                      });
                  }
              }  
            }
        }
    }
</script>

<style>
</style>
