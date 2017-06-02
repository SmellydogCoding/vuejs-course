<template lang="pug">
    div
        div#on(@click="flipTheSwitch(true)" :class="{active: value}") On
        div#off(@click="flipTheSwitch(false)" :class="{active: !value}") Off
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            flipTheSwitch(state) {
                this.$emit('input',state);
            }
        }
    }
</script>

<style scoped>
    #on,#off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }
</style>