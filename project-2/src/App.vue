<template lang="pug">
	div.container
		app-header(:quoteCount="quotes.length" :maxQuotes="maxQuotes")
		app-add-quote(@addQuote="newQuote")
		app-quote-grid(:quotes="quotes" @deleteQuote="deleteQuote")
		div.row
			div.col-sm-12.text-center
				div.alert.alert-info Info: Click on a Quote to delete it!
</template>

<script>
	import QuoteGrid from './components/QuoteGrid.vue';
	import NewQuote from './components/NewQuote.vue';
	import Header from './components/Header.vue';

	export default {
		data: function() {
			return {
				quotes: ['Do or do not, there is no try.'],
				maxQuotes: 10
			}
		},
		methods: {
			newQuote(quote) {
				if (this.quotes.length >= this.maxQuotes) {
					alert('You must delete some quotes before adding another quote');
				} else {
					this.quotes.push(quote);
				}
			},
			deleteQuote(index) {
				this.quotes.splice(index,1);
			}
		},
		components: {
			appQuoteGrid: QuoteGrid,
			appAddQuote: NewQuote,
			appHeader: Header
		}
	}
</script>

<style>
</style>