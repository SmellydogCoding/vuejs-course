<template lang="pug">
	div.col-sm-6.com-md-4.col-lg-3
		div.panel.panel-default
			div.panel-body.quote
				slot
</template>

<script>
	export default {
		props: ['quotes']
	}
</script>

<style>
	.panel-body {
		font-family: 'Arizonia', cursive;
		font-size: 1.5em;
		color: #6e6e6e
	}

	.quote {
		cursor: pointer;
	}

	.quote:hover {
		background-color: #ffe2e2
	}
</style>