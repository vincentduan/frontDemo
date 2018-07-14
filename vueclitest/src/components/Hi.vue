<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<router-link to="/Hi/Hi1">Hi1</router-link>
    	<router-link to="/Hi/Hi2">Hi2</router-link>
		<router-view class="aaa"></router-view>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'hi',
		data () {
			return {
				msg: 'Hi I am Vincent ,Hi'
			}
		}
	}
</script>

<style scoped>
	
</style>