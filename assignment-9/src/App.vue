<template lang="pug">
	div.container
		form(v-if="isSubmitted == false")
			div.row
				div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
					//- Exercise 1
					//- Create a Signup Form where you retrieve the following Information
					//- Full Name (First Name + Last Name)
					//- Mail
					//- Password
					//- Store Data? Yes/No
					div.form-group
							label(for="firstName") First Name
							input#firstName.form-control(type="text" v-model="userdata.firstName")
					div.form-group
							label(for="lastName") Last Name
							input#lastName.form-control(type="text" v-model="userdata.lastName")
					div.form-group
							label(for="email") Email
							input#email.form-control(type="email" v-model="userdata.email")
					div.form-group
							label(for="password") Password
							input#password.form-control(type="password" v-model.lazy="userdata.password")
			div.row
					div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
							app-SaveData(v-model="saveFormData")
			div.row
					div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
							button.btn.btn-primary(@click.prevent="submit") Submit!
					//- <!-- Exercise 2 -->
					//- <!-- Only display the Form if it has NOT been submitted -->
					//- <!-- Display the Data Summary ONCE the Form HAS been submitted -->

					//- <!-- Exercise 3 -->
					//- <!-- Edit the Example from above and create a custom "Full Name" Control -->
					//- <!-- which still holds the First Name and Last Name Input Field -->
		hr
		div.row
			div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
				div.panel.panel-default
					div.panel-heading
						h4 Your Data
					div.panel-body(v-if="isSubmitted == true")
						p Full Name: #[app-CombineNames(:first="userdata.firstName" :last="userdata.lastName")]
						p Mail: {{userdata.email}}
						p Password: {{userdata.password}}
						p Store in Database?: {{saveMessage}}
</template>

<script>
	import SaveData from './SaveData.vue'
	import CombineNames from './CombineNames.vue'
	export default {
		data() {
			return {
				userdata: {
					firstName: '',
					lastName: '',
					email: '',
					password: ''
				},
				saveFormData: false,
				isSubmitted: false
			}
		},
		methods: {
				submit() {
					this.isSubmitted = true;
				}
		},
		computed: {
			saveMessage() {
				if (this.saveFormData === true) {
					return 'Yes'
				} else if (this.saveFormData === false) {
					return 'No'
				}
			}
		},
		components: {
			appSaveData: SaveData,
			appCombineNames: CombineNames
		}
	}
</script>

<style>
</style>
