<template>
	<div>
		<p>Status: {{status}}</p>
		<button @click="changeStatus()">Change Status</button>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				status: 'OK'
			}
		},
		methods: {
			changeStatus() {
				this.status === 'OK' ? this.status = 'FUBAR' : this.status = 'OK';
			}
		}
	}
</script>