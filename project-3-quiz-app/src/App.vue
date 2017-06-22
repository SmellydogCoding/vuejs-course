<template lang="pug">
	div.container
		div.row
			div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
				h1.text-center The Super Quiz
		hr
		div.row
			div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
				component(:is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'")
</template>

<script>
	import Question from './components/Question.vue';
	import Answer from './components/Answer.vue';

	export default {
		data() {
			return {
				mode: 'app-question'
			}
		},
		methods: {
			answered(isCorrect) {
				console.log(isCorrect);
				if (isCorrect) {
					this.mode = 'app-answer';
				} else {
					this.mode = 'app-question';
					alert('Nope, try again');
				}
			}
		},
		components: {
			appQuestion: Question,
			appAnswer: Answer
		}
	}
</script>

