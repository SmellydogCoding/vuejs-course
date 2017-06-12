<template lang="pug">
	div.container
		div.row
			div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
				h1 Filters &amp; Mixins
				//- <!-- Exercise 1) -->
				//- <!-- Build a local Filter which reverses the Text it is applied on -->
				p {{text1 | reverseText}}
				//- <!-- Exercise 2 -->
				//- <!-- Build a global Filter which counts the length of a word and it appends it -->
				//- <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
				p {{text2 | countLetters}}
				//- <!-- Exercise 3 -->
				//- <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
				p {{reverseString}}
				p {{countingLetters}}
				//- <!-- Exercise 4 -->
				//- <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
				p {{reversedText}}
				p {{countedLetters}}
</template>

<script>
	import {textMixin} from './textMixin';
	export default {
		mixins: [textMixin],
		data() {
			return {
				text1: 'Some text to reverse',
				text2: 'globalFilterz'
			}
		},
		filters: {
			reverseText(string) {
				return string.split('').reverse().join('');
			}
		},
		computed: {
			reverseString() {
				return this.text1.split('').reverse().join('');
			},
			countingLetters() {
				let letters = this.text2.length
				return this.text2 + ' (' + letters + ')';
			}
		}
	}
</script>

<style>
</style>
