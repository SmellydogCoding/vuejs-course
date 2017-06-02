<template lang="pug">
	div.row
		form
			div.col-sm-8.col-sm-offset-2.col-xs-12.col-md-6.col-md-offset-3.form-group
				label Quote
				textarea.form-control(rows="3" v-model="quote")
			div.col-sm-8.col-sm-offset-2.col-xs-12.col-md-6.col-md-offset-3.form-group
				button.btn.btn-primary(@click.prevent="createNew") Add Quote
</template>

<script>
	
	export default {
		data: function() {
			return {
				quote: ''
			}
		},
		methods: {
			createNew() {
				this.$emit('addQuote', this.quote);
				this.quote = '';
			}
		}
	}
</script>

<style></style>