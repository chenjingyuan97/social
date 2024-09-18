<template>
	<view class="plus-page">
		<view class="content">
			<uni-forms :modelValue="formData" label-position="top">
				<uni-forms-item label="标题" name="title">
					<input type="text" v-model="formData.title" placeholder="请输入标题" />
				</uni-forms-item>
				<uni-forms-item label="地点" name="title">
					<view class="uni-input-wrapper">
						<input type="text" v-model="formData.title" placeholder="请输入地点" />
						<uni-icons type="location-filled" size="20"></uni-icons>
					</view>
				</uni-forms-item>
				<uni-forms-item label="时间" name="title">
					<input type="text" v-model="formData.title" placeholder="请输入时间" />
				</uni-forms-item>
				<uni-forms-item label="详情" name="title">
					<view class="uni-input-wrapper">
						<textarea placeholder="请输入详情或者要求 " />
					</view>
				</uni-forms-item>
			</uni-forms>
		</view>
		<view class="btn-bottom">
			<view class="btn-warpper">
				<view class="btn-left">
					<button plain="true">取消</button>
				</view>
				<view class="btn-right">
					<button type="primary">保存</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					title: ''
				},
				rules: {

				}
			}
		},
		onReady() {
			// 需要在onReady中设置规则
			this.$refs.form.setRules(this.rules)
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.plus-page {
		.content {
			padding: 30rpx;
		}

		.uni-input-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.btn-bottom {
			position: fixed;
			width: 100%;
			bottom: 0;

			.btn-warpper {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 30rpx;

				.btn-left {
					flex: 1;
					margin-right: 20rpx;
				}

				.btn-right {
					flex: 1;
					margin-left: 20rpx;
				}
			}
		}

	}
</style>