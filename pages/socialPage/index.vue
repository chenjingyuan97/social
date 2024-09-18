<template>
	<view class="social-page">
		<view class="top-warpper">
			<v-tabs v-model="current" :tabs="tabs" @change="changeTab"></v-tabs>
			<view :style="{marginRight: '30rpx'}">
				<uni-icons type="bars" size="20"></uni-icons>
			</view>
		</view>
		<view class="content-warpper">
			<view class="content-item">
				<view>
					<view class="line-1">
						<view>悠闲骑行的来！！</view>
						<view>
							<uni-icons type="location-filled" size="20"></uni-icons>
						</view>
					</view>
					<view class="line-2">刷卡就看见看就看加开卷考试金阿奎数据库金卡阿卡卡即可几十块钱阿尽快洒水</view>
				</view>

				<view class="line-3">
					<view class="line-3-r">成员 3/9
						<view class="avatar-warpper">
							<view class="avatar-item">
								<image style="width: 40rpx; height: 40rpx;"
									src="https://cdn.uviewui.com/uview/album/1.jpg"></image>
							</view>
							<view class="avatar-item">
								<image style="width: 40rpx; height: 40rpx;"
									src="https://cdn.uviewui.com/uview/album/1.jpg"></image>
							</view>
							<view class="avatar-item">
								<image style="width: 40rpx; height: 40rpx;"
									src="https://cdn.uviewui.com/uview/album/1.jpg"></image>
							</view>
						</view>
					</view>
					<view>09-12 12点</view>
				</view>
			</view>
		</view>
		<view class="bottom-warpper">
			<view class="bottom">
				<view>首页</view>
				<view>关注</view>
				<view @click="pushActive">
					<uni-icons type="plusempty" size="20"></uni-icons>
				</view>
				<view>破圈</view>
				<view>我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				tabs: ['骑行', '羽毛球', '摩托车', '乒乓球']
			}
		},
		methods: {
			changeTab(e) {
				console.log(e)
				this.current = e;
			},
			pushActive(){
				console.log(11)
				uni.navigateTo({
					url: '/pages/publishActive/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.social-page {
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-between;
		height: 100vh;

		.top-warpper {
			position: fixed;
			display: flex;
			justify-content: space-between;
			top: 0;
			width: 100%;
			background-color: #fff;
			z-index: 99;
			align-items: center;

			.top-head {
				display: flex;
				align-items: center;
				padding: 30rpx;

				.top-item {
					margin-right: 30rpx;
				}
			}
		}

		.content-warpper {
			padding-top: 74rpx;
			padding-bottom: 100rpx;

			.content-item {
				height: 200rpx;
				margin: 30rpx;
				border: 1px solid #eaecef;
				border-radius: 8rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 20rpx;

				.line-1 {
					font-size: 36rpx;
					font-weight: bold;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.line-2 {
					margin: 14rpx 0;
					font-size: 26rpx;
					letter-spacing: 1px;
				}

				.line-3 {
					display: flex;
					justify-content: space-between;
					font-size: 26rpx;

					.line-3-r {
						display: flex;
						align-items: center;

						.avatar-warpper {
							display: flex;

							.avatar-item {
								width: 20px;
								height: 20px;
								border-radius: 4rpx;
								margin-left: 20rpx;
							}

						}
					}

				}
			}
		}

		.bottom-warpper {
			position: fixed;
			bottom: 0;
			background-color: #fff;
			z-index: 99;
			width: 100%;

			.bottom {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 30rpx;
			}
		}

	}
</style>