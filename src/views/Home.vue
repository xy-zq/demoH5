<template>
	<div class="home">
		<h1>Home</h1>
	</div>
</template>

<script>
	import { post, get } from '../utils/http.js'
	
	export default {
		name: 'Home',
		data() {
			return {

			}
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				
			},
		}

	}
</script>

<style lang="scss" scoped>
	.home {

	}
</style>

<style lang="scss">

</style>
