<template>
	<div>
		<h2>{{ msg }}</h2>
		<p>newsId-----{{ $route.params.newsId }}</p>
		<p>newsTitle-----{{ $route.params.newsTitle }}</p>

	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				msg: 'params pages'
			}
		}
	}
</script>