<template lang="pug">
    div.col-xs-12.col-sm-6
        p(v-if="status.id") Server \#{{status.id}} is {{status.status}}
        p(v-else) {{status}}
        button(@click="resetServer(status.id)") Reset Server
</template>

<script>
    import {eventBus} from '../../main'
    export default {
        data: function() {
            return {
                status: 'Server Details are currently not updated'
            }
        },
        methods: {
            resetServer(id) {
                this.status.status = 'Normal';
                eventBus.$emit('serverReset', this.status);
            }
        },
        created() {
            eventBus.$on('statusUpdate', (data) => {
                this.status = data;
            });
        }
    }
</script>

<style>

</style>
