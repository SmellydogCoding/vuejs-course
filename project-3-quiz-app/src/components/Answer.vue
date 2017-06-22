<template lang="pug">
  div.alert.alert-success.text-center
    h1 That's Correct!'
    hr
    button.btn.btn-primary(@click="onNextQuestion") Next Question
</template>

<script>
  export default {
    methods: {
      onNextQuestion() {
        this.$emit('confirmed');
      }
    }
  }
</script>