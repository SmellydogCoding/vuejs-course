<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="switchTemplates('Blue')">Load Blue Template</button>
                <button class="btn btn-success" @click="switchTemplates('Green')">Load Green Template</button>
                <button class="btn btn-danger" @click="switchTemplates('Red')">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">{{color}} is Active</component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedComponent: '',
                color: ''
            }
        },
        methods: {
            switchTemplates(color) {
                this.selectedComponent = 'app' + color;
                this.color = color;
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
