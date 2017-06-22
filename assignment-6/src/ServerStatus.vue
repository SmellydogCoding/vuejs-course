<template>
	<div class="container">
		<ServerStatusHeader></ServerStatusHeader>
		<hr>
		<ServerStatusBody></ServerStatusBody>
		<hr>
		<ServerStatusFooter></ServerStatusFooter>
	</div>
</template>

<script>
	import ServerStatusHeader from './ServerStatusHeader.vue';
	import ServerStatusBody from './ServerStatusBody.vue';
	import ServerStatusFooter from './ServerStatusFooter.vue';
	export default {
		components: {
			'ServerStatusHeader': ServerStatusHeader,
			'ServerStatusBody': ServerStatusBody,
			'ServerStatusFooter': ServerStatusFooter
		}
	}
</script>