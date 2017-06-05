<template lang="pug">
	div
		div#on(@click="saveData(true)" :class="{active: value}") Save
		div#off(@click="saveData(false)" :class="{active: !value}") Don't Save
</template>

<script>
	export default {
		props: ['value'],
		methods: {
			saveData(state) {
				this.$emit('input',state);
			}
		}
	}
</script>

<style scoped>
	#on,#off {
		width: 75px;
		height: 20px;
		background-color: lightgray;
		padding: 2px;
		display: inline-block;
		margin: 10px -2px;
		box-sizing: content-box;
		cursor: pointer;
		text-align: center;
	}

	#on:hover, #on.active {
		background-color: #286090;
		color: white;
	}

	#off:hover, #off.active {
		background-color: #cc0000;
		color: white;
	}
</style>