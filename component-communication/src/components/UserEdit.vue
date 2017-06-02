<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{userAge}}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import {eventBus} from '../main'
    export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge = 30;
                // this.$emit('editingAge', this.userAge);
                // pass an event to the eventBus (event name, data)
                eventBus.$emit('editingAge', this.userAge);
                // eventBus.somemethod(this.somedatavalue) access a stored method in the event bus
				// eventBus.someData  access a stored property in the event bus
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
