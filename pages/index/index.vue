<template>
	<view class="content">
		<view>一个登录页面动画</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.loadSuccess()
		},
		methods: {
			loadSuccess() {
				setTimeout(() => {
					uni.navigateTo({
						url: '/pages/socialPage/index'
					})
				}, 1000)
			}
		}
	}
</script>

<style>

</style>
