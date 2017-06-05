<template lang="pug">
	div.inline {{first}} {{last}}
</template>

<script>
	export default {
		props: ['first','last']
	}
</script>

<style scoped>
	.inline {
		display: inline-block;
	}
</style>