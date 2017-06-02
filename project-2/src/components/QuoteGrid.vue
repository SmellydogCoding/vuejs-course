<template lang="pug">
	div.row
		appQuote(v-for="(quote,index) in quotes" @click.native="deleteQuote(index)") {{quote}}
</template>

<script>
	import Quote from './Quote.vue'
	export default {
		props: ['quotes'],
		methods: {
			deleteQuote(index) {
				this.$emit('deleteQuote',index);
			}
		},
		components: {
			appQuote: Quote
		}
	}
</script>

<style></style>