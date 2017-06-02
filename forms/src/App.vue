<template lang="pug">
    div.container
        form
            div.row
                div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
                    h1 File a Complaint
                    hr
                    div.form-group
                        label(for="email") Mail
                        input#email.form-control(type="text" v-model="userdata.email")
                    div.form-group
                        label(for="password") Password
                        input#password.form-control(type="password" v-model.lazy="userdata.password")
                    div.form-group
                        label(for="age") Age
                        input#age.form-control(type="number" v-model.number="userdata.age")
            div.row
                div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3.form-group
                    label(for="message") Message
                    br
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    textarea#message.form-control(rows="5" v-model="message")
            div.row
                div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
                    div.form-group
                        label(for="sendmail")
                            input#sendmail(type="checkbox" value="SendMail" v-model="sendMail")
                            | Send Mail &nbsp;
                        label(for="sendInfomail")
                            input#sendInfomail(type="checkbox" value="SendInfoMail" v-model="sendMail")
                            | Send Infomail
            div.row
                div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3.form-group
                    label(for="male")
                        input#male(type="radio" value="Male" v-model="gender")
                        | Male &nbsp;
                    label(for="female")
                        input#female(type="radio" value="Female" v-model="gender")
                        | Female
            div.row
                div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3.from-group
                    label(for="priority") Priority
                    select#priority.form-control(v-model="selectedPriority")
                        option(v-for="priority in priorities") {{priority}}
            hr
            div.row
                div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
                    app-Switch(v-model="dataSwitch")
            hr
            div.row
                div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
                    button.btn.btn-primary(@click.prevent="submit") Submit!
            hr
        div.row(v-if="isSubmitted")
            div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
                div.panel.panel-default
                    div.panel-heading
                        h4 Your Data
                    div.panel-body
                        p Mail: {{userdata.email}}
                        p Password: {{userdata.password}}
                        p Age: {{userdata.age}}
                        p(style="white-space: pre") Message: {{message}}
                        p
                            strong Send Mail?
                        ul
                            li(v-for="item in sendMail") {{item}}
                        p Gender: {{gender}}
                        p Priority: {{selectedPriority}}
                        p Switched: {{dataSwitch}}
</template>

<script>
    import Switch from './Switch.vue'
    export default {
        data() {
            return {
                userdata: {
                    email: '',
                    password: '',
                    age: 42
                },
                message: 'type something',
                sendMail: [],
                gender: 'Male',
                priorities: ['Low','Medium','High'],
                selectedPriority: 'Low',
                dataSwitch: true,
                isSubmitted: false
            }
        },
        methods: {
            submit() {
                this.isSubmitted = true;
            }
        },
        components: {
            appSwitch: Switch
        }
    }
</script>

<style>

</style>
