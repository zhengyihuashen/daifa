<template>

	<view class="container">
		<nui-navigation-bar backgroundColor="var(--base)" :isFixed="true" :isOpacity="false" title="话题">

		</nui-navigation-bar>
		<view style="width:100%;margin-top: 44px;" :style="{ height: statusBarHeight + 'px' }">

		</view>




		<view class="forum_cate" v-for="(item,index) in topicslist" :key="index">

			<view class="topic_info">
				<view class="topic_item" @click="itemClick(item)">


					<view class="topic_name">
						<text class="topic_icon">#</text>
						{{item.content}}
					</view>
					<view class="topic_num">帖数: {{item.threadCount}} 浏览: {{item.viewCount}} </view>


					<!-- <view class="" v-for="(item, index1) in item.threads" :key="index1" v-if="index1 < 1">
							{{item.title}}  
					</view> -->
				</view>
			</view>


		</view>


		<view class="safearea-bottom"></view>

	</view>
</template>

<script>
	import mpHtml from 'components/mp-html/mp-html';
	export default {

		components: {
			mpHtml
		},
		data() {
			return {
				statusBarHeight: 0
			};
		},
		props: {
			topicslist: {
				type: [Object, Array],

			}

		},

		created() {

			uni.getSystemInfo({
				success: res => {
					this.statusBarHeight = res.statusBarHeight;


				}
			});
		},
		methods: {

			itemClick(data) {
				// 跳转到内部窗口并且传递链接
				//var url = `/pages/webview/webview?url=` + API_URL + 'thread/' + data.threadId;
				var url = `/pages/list/lists?id=` + data.topicId + '&name=' + data.content;
				uni.navigateTo({
					url: url
				});
			},
			initNavigation(e) {
				this.opacity = e.opacity;
				this.top = e.top;
			},
			opacityChange(e) {
				this.opacity = e.opacity;
			}




		},

		onPageScroll(e) {

			this.scrollTop = e.scrollTop;

		},

	};
</script>

<style lang="scss">
	page {
		background: #f7f7fa;
	}

	.container {
		margin: 13px;
		margin-bottom: 100px;

	}


	.forum_cate {
		margin-top: 13px;
		padding: 13px;
		/* border-bottom: 1px solid #efefef !important; */
		overflow: hidden;
		background-color: #fff;
		border-radius: 12px;
	}

	.topic_info {

		width: 100%;

	}

	.topic_item {



		line-height: 25px;
		font-size: 16px;

		overflow: hidden;


		.topic_icon {
			font-size: 16px;
			color: var(--base);
			font-weight: 500;
			margin-right: 5px;
		}

		.topic_name {
			display: block;
			font-size: 16px;
			height: 22px;
			font-weight: 600;
			line-height: 22px;
			padding-top: 4px;
			overflow: hidden;
			color: #333333;
		}

		.topic_num {

			display: block;
			height: 18px;
			line-height: 18px;
			font-size: 12px;
			padding-top: 2px;
			overflow: hidden;
			color: #bbbbbb !important;
		}
	}
</style>
