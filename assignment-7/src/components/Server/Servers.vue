<template lang="pug">
    div.col-xs-12.col-sm-6
        ul.list-group
            li.list-group-item(v-for="server in servers" @click="exportStatus(server.id)") Server \#{{ server.id }}
</template>

<script>
    import {eventBus} from '../../main'
    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Normal'},
                    {id: 4, status: 'Unknown'},
                    {id: 5, status: 'Down'},
                ]
            }
        },
        methods: {
            exportStatus(id) {
                this.status = this.servers[id -1];
                eventBus.$emit('statusUpdate', this.status);
            }
        },
        created() {
            eventBus.$on('serverReset', (data) => {
                this.servers[data.id - 1].status = data.status;
            });
        }
    }
</script>

<style scoped>
    .list-group-item {
        color: #333;
    }
    .list-group-item:hover {
        color: #fff;
        background-color: #777;
        cursor: pointer;
    }
</style>
