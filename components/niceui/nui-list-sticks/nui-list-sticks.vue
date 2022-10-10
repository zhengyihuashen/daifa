<template>

	<view class="nui-spike-box">
	  <view class="nui-spike-title list-item">置顶帖子</view> 
		<!--商品列表-->
		<swiper :indicator-dots="false" :autoplay="true" :interval="5000" :duration="400" :circular="true"
			:display-multiple-items="2" :vertical="true" class="nui-spike-swiper">
			<swiper-item v-for="(item, index) in sticklist" :key="index" @click="itemClick(item)">
				<view class="nui-pro-item list-item" hover-class="hover" :hover-start-time="150"  >

					<view class="nui-pro-content">
						<view class="nui-pro-tit"> <text class="nui-pro-zhiding">置 顶</text> {{ item.title }}</view>

					</view>
				</view>
			</swiper-item>
		</swiper>
		<!--商品列表-->
	</view>

</template>

<script>
	export default {
		name: 'nui-list-sticks',
		data() {
			return {};
		},
		props: {
			sticklist: {
				type: [Object, Array],

			},
		},
		methods: {
			itemClick(data) {
				// 跳转到内部窗口并且传递链接
			 var url = `/pages/thread/thread?id=` + data.threadId;
				uni.navigateTo({
					url: url
				});
			}
		}
	};
</script>

<style scoped lang="scss">
	/*spike*/
	
	.nui-spike-box {
		background: #fff;
		margin: 13px;
		    padding: 13px;
			border-radius: 12px;
	}
	
	.nui-spike-title {
		padding:0;
		box-sizing: border-box;
	    font-size: 16px;
	    
		color: var(--black);
		font-weight: bold;
		    margin-left: 10rpx;
	 
	}
	
	.nui-spike-title::after {
		left: 0;
	}
	
	.nui-spike-swiper {
		height: 54px;
	}
	
	.nui-pro-item {
		display: flex;
		width: 100%;
		background: #fff;
		box-sizing: border-box;
		border-radius: 12rpx;
		position: relative;
	}
	
	.nui-pro-item::after {
		left: 240rpx;
	}
	
	.nui-pro-zhiding {
	display: inline-block;
	    vertical-align: middle;
	    height: 16px;
	    margin-right: 8px;
	    padding-right: 3px;
	    padding-left: 3px;
	    border-radius: 4px;
	    background-color: var(--base);
	    color: #fff;
	    font-size: 10px;
	    line-height: 16px;
	    letter-spacing: 0;
	    text-align: center;
	}
	
	.nui-pro-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 5px 0;
	}
	
	.nui-pro-tit {
		color: #2e2e2e;
	 
		font-size: 16px;
		line-height: 24px;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
 
 
	
</style>
