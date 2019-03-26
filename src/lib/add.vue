<template>
	<div>
		<button @click="sums">add</button>
	</div>
</template>

<script>
	export default {
		name: 'add',

		data () {
			return {
				sum: 0
			}
		},

		props: {
			a: {
				type: Number,
				default: 0
			},
			b: {
				type: Number,
				default: 0
			}
		},

		methods: {
			sums () {
				this.sum = this.a + this.b;
				this.$emit('add', this.sum);
			}
		}
	}
</script>

<style type="css" scoped="">
	
</style>