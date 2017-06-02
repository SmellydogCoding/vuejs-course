<template lang="pug">
	div.row
		div.col-sm-12
			h3 Quotes Added
				div.progress
					div.progress
						div.progress-bar(role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width: (quoteCount / maxQuotes) * 100 + '%'}") {{quoteCount}} / {{maxQuotes}}
</template>

<script>
	export default {
		props: ['quoteCount','maxQuotes']
	}
</script>