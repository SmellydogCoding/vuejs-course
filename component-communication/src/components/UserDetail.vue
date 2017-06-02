<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <P>User Name: {{name}}</P>
        <p>User Age: {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    import {eventBus} from '../main'
    export default {
        // properties passed in from outside of this component
        props: ['name','userAge'],
        // property validation
        // props: {
        //     propname: {
        //         type: [string,array,etc],
        //         required: true,
        //         default: 'some value'
        //     }
        // }
        methods: {
            someFunction: function() {
                // you can access props using this.propname
            },
            resetName() {
                this.name = 'Dan';
                // emit an event (eventName, data) to pass it to the parent component
                this.$emit('nameWasReset', this.name);
            }
        },
        // when the Vue instance that controls this component is created, start listening for the editingAge event on the eventBus
        // execute a callback function using the data that was received
        created() {
            eventBus.$on('editingAge', (data) => {
                this.userAge = data;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
