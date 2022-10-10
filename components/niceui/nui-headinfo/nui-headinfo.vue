<template>
	<view class="container">
		<view class="user">
			<view class="user__left">
				<view class="user__avatar"><image :src="setSite.siteFavicon"></image></view>
			</view>
			<view class="user__body">
				<text class="user__title">
					<text>{{ setSite.siteName || setSite.siteTitle }}</text>
				</text>
				<view class="user__subtitle">
					简介：<text> {{setSite.siteIntroduction }}</text>
					 
				</view>
			</view>
		</view>
		<view class="nav">
			<view class="grid grid-3 p-20 text-white text-bold"  >
				 
					<view  >
						<nui-icon name="message-2" color="#fff" size="16" margin="0 3px 0 0"></nui-icon>

						<text >{{ Sitenum.countPosts }}</text>
					</view>
					<view >
						<nui-icon name="friends" color="#fff" size="16" margin="0 3px 0 0"></nui-icon>

						<text>{{ Sitenum.countUsers }}</text>
					</view>
					<view >
						<nui-icon name="float-left" color="#fff" size="16" margin="0 3px 0 0"></nui-icon>

						<text>{{ Sitenum.countThreads }}</text>
					</view>
				
				 
			</view>
		</view>

		<!-- <view class="user__join-btn">
			<nui-icon name="search" color="#ffffff" :bold="true" size="16"></nui-icon>
			<text style="margin-left: 5px;">搜索一下你感兴趣的内容</text>
		</view> -->
	</view>
</template>

<script>
export default {
	name: 'nui-headinfo',
	data() {
		return {};
	},
	props: {
		setSite: {
			type: [Object, Array],
		
		},
		Sitenum: {
			type: [Object, Array],
		}
	}
};
</script>

<style lang="scss">
.container {
	position: absolute;
	bottom: 0;
	top: 100px;

	right: 0;
	z-index: 10;
	width: 698rpx;
	height: 160px;
	background-color: var(--base);
	opacity: 1;
	margin: 0 13px;

	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px -1px;
	border-radius: 12px;
}
.user {
	padding: 20px 13px  ;
	overflow: hidden;
}
.user__left {
	padding-right: 13px;
}
.user__avatar {
	overflow: hidden;
	width: 56px;
	height: 56px;
	border: 1px solid #fff;
	background-color: var(--white);
	border-radius: 20px;

	image {
		padding: 8px;
		width: 40px;
		height: 40px;
	}
}

.user__body {
	overflow: hidden;
	padding-top: 8px;
	margin-left: 10px;
 
}

.user__body,
.user__left,
.user__right {
	display: table-cell;
	vertical-align: top;
}
.user__title {
	color: #fff;
	font-weight: 400;
	font-size: 20px;
	line-height: 20px;
}

.user__subtitle {
	margin-top: 4px;
	color: #fff;
	font-size: 14px;
	line-height: 20px;
}
.user__right {
	padding-top: 12px;
}
.nav {
	margin:  3px;
}

.user__join-btn {
	display: inline-block;

	margin: 0 13px;
	width: 646rpx;
	border-radius: 6px;
	color: #e9e6ec;
	background-color: #3069e4;
	justify-content: center;
	text-align: center;
}
.user__join-btn text {
	display: inline-block;
	vertical-align: middle;

	font-size: 14px;
	line-height: 30px;
}
</style>
