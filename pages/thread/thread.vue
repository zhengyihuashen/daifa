<template>
	

	<view class="container">
		
			 
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="getcomments">
			<!-- 站点信息 -->
			<nui-navigation-bar backgroundColor="var(--base)" :isFixed="true" :isOpacity="false">
				<view class="content-box">



					<view class="notice-box">
						<!-- #ifndef MP-BAIDU -->
						<nui-icon name="chevron-left" :color="opacity > 0.85 ? '#333' : '#fff'" @click="back"
							:size="30">
						</nui-icon>
						<!-- #endif -->
						<!-- #ifdef MP-BAIDU -->
						<view style="width: 30px;">

						</view>
						<!-- #endif -->
					</view>
					<view class="avatar-box" @click="userClick(user)">
						<image :src="user.avatar" class="avatar"></image>
					</view>
					<view class="search-box">
						<view class="search-text" @click="userClick(user)">{{ user.nickname }}</view>
					</view>
				</view>
			</nui-navigation-bar>

			<view>
				<view class="head">
					<nui-headbg></nui-headbg>
				</view>
				<view class="body">
					<view class="news-title text-xl">{{ title }}</view>
					<view class="sub-info">
						<view class="sub-left">
							<text>{{ diffTime }}</text>
							<text class="author" @click="cateClick()">{{ categoryName }}</text>
						</view>
						<view class="sub-right">{{ thread.viewCount }}人看过</view>
					</view>
					<view class="news-content">
						<view class="article text-l">
							<mp-html lazy-load show-with-animation :tag-style="tagStyle" :content="threaddetail.text" />
						</view>
					</view>

					<block v-for="(item, index) in threadimgs" :key="index" v-if="item.thumbUrl">
						<image lazy-load style="width:100%;border-radius: 12px;" :src="item.thumbUrl" mode="widthFix"
							@click="previewImage(index)"></image>
					</block>
				


					<block v-if="threadproduct.imagePath">
						<nui-card-product :product="threadproduct"></nui-card-product>
						 
					</block> 
				
					<block v-if="threadvideos.mediaUrl">
						<video unit-id="adunit-44589d978a8b959a" style="width:100%;border-radius: 12px;"
							:poster="threadvideos.coverUrl" :src="threadvideos.mediaUrl" mode="widthFix"></video>
					</block>

					<block v-if="threadaudios.mediaUrl">
						<nui-audio :src="threadaudios.mediaUrl" :poster="threadaudios.coverUrl" :name="title"
							:author="user.nickname"></nui-audio>



					</block>
					<view v-for="(item, index) in threadfiles" :key="index" v-if="threadfiles">


						<video unit-id="adunit-44589d978a8b959a" :src="item.url" controls
							v-if="item.extension === 'mp4'"></video>

						<nui-audio :src="item.url" :poster="item.thumbUrl" :name="item.fileName"
							:author="item.extension" v-else-if="item.extension === 'mp3'"></nui-audio>
						<nui-file :extension="item.extension" :name="item.fileName" :size="item.extension"
							:link="item.url">
						</nui-file>
					</view>

					<view class="post-note">
						<text style="font-weight: 800;">代发：</text>
						免费代发请联系微信{{wechat}}或公众号取悦数码。
					</view>
				</view>

				<!-- #ifdef MP-WEIXIN -->



				<view class="nui_card">


					<ad-custom class="  nui_card_ad" style="position:relative;" unit-id="adunit-6dd269ecbc4ccdba">
					</ad-custom>
				</view>

				<!-- #endif -->


				<view class="bottom" v-if="commentsnum > 0">
					<view class="cmt-title">精彩评论（{{ commentsnum }}）</view>
					<view class="cmtbox">

						<view class="cmt-cell" v-for="(item, index) in comments" :key="index">
							<image :src="item.user.avatar" class="avatar" @click="userClick(item)"></image>
							<view class="cmt-detail">
								<view class="header-box" @click="userClick(item)">
									<view class="cmt-nickname">{{ item.user.nickname }}
										<text class="cmt-comauth" v-if="item.userId == threaduserid">作者</text>
										<text class="cmt-comfirst bg-warning" v-else-if="index == 0">沙发</text>
										<text class="cmt-comfirst bg-info" v-else-if="index == 1">板凳</text>
										<text class="cmt-comauths" v-else-if="item.user.groups.name">{{ item.user.groups.name}}</text>
									</view>
									<view class="fabulousprimary" :id="index"></view>
								</view>
								<view class="cmt-content text-l">
									<mp-html :content="item.content" />
									<image v-if="item.images.length>0" class="cmt-content-image"
										:src="item.images[0].url" mode="aspectFill"></image>
								</view>
								<view class="reply-box" v-if="item.replyCount > 0">
									<nui-list-cell backgroundColor="#f2f2f2" :size="28"
										v-for="(items, index2) in item.lastThreeComments" :key="index2"
										:unlined="item.replyCount < 2">
										<view class="flex-1 reply-nickname text-base">
											<text @click="userClick(items)"> {{ items.user.nickname }}</text>

											<text class="cmt-comauth" v-if="items.user.id == threaduserid">作者</text>
											<text v-if="items.commentUser" style="margin:0 5px;opacity: 0.6;">回复</text>
											<text v-if="items.commentUser">{{ items.commentUser.nickname }}</text>
										</view>
										<view class="flex-1 ">
											<mp-html :content="items.content" />


										</view>
									</nui-list-cell>
									<nui-list-cell padding="20rpx 30rpx" backgroundColor="#f2f2f2" :size="28"
										:unlined="true" v-if="item.replyCount > 3" @tap="replyClick(item)">
										<view class="flex-1  cell-last">

											<text>查看全部{{ item.replyCount }}条回复</text>
											<icon name="arrowright" :size="22" color="var(--base)"></icon>
										</view>
									</nui-list-cell>
								</view>
								<view class="footer">
									{{ item.createdAt }}
									<!--	<view class="primary ml" hover-class="opcity" :hover-start-time="150">回复</view>-->
								</view>
							</view>
						</view>


					</view>

					<!--加载loadding-->

					<!--加载loadding-->
					<view class="safearea-bottom"></view>
				</view>

				<nui-nomore backgroundColor="#fff" text="没有更多评论"></nui-nomore>
			</view>
		</mescroll-body>
	</view>
</template>

<script>
	import mpHtml from 'components/mp-html/mp-html';
	var Api = require("../../utils/api.js");
	var util = require("../../utils/util.js");

	var wxApi = require("../../utils/wxApi.js");
	const Adapter = require("../../utils/adapter.js");
	var wxRequest = require("../../utils/wxRequest.js");
	import config from '../../utils/config.js';


	import MescrollMixin from '@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js';

	let interstitialAd = null
	export default {
		mixins: [MescrollMixin],
		components: {
			mpHtml
		},
		data() {
			return {
				thread: {},
				threaddetail: {},
				threadimgs: {},
				threadproduct: {},
				threadvideos: {},
				threadfiles: {},
				threadaudios: {},
				title: '',
				wechat: '', //微信号
				domain: '', //域名
				identifyData: [],
				threaduserid: '',
				categoryName: '',
				categoryid: '',
				diffTime: '',
				user: {},
				threadindexes: {},
				comments: {},
				dataList: {},
				commentsnum: 0,
				top: 0, //标题图标距离顶部距离
				opacity: 0,
				scrollTop: 0,
				threadid: '',
				tagStyle: {
					table: 'box-sizing: border-box; border-top: 1px solid #dfe2e5; border-left: 1px solid #dfe2e5;',
					th: 'border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;',
					td: 'border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;',
					li: 'margin: 5px 0;'
				},
				CHAAD: ''
			};
		},
		onShareAppMessage() {
			//console.log(this.data)
			this.webSiteName = config.WebsiteName;
			return {
				title: this.title + '——来自' + this.webSiteName + '的' + this.categoryName + '分类',

			}

		},
		//分享到朋友圈
		onShareTimeline(options) {
			//console.log(this.threadid)
			this.webSiteName = config.WebsiteName;

			return {
				title: this.title + '——' + this.categoryName + '分类',
				query: 'id=' + this.threadid,

			}

		},
		onLoad(options) {
			this.wechat = config.Wechat;
			
				this.domain = config.Domain;
			// #ifndef MP-WEIXIN
			this.threadid = options.id;
			// #endif
			// #ifdef MP-WEIXIN

			var obj = wx.getLaunchOptionsSync()
			if (options) {
				this.threadid = options.id;
			} else {
				this.threadid = obj.query.id;
			}
			// #endif

			//console.log(this.categoryid)
			this.getthreaddetail(this.threadid);
			//this.getcomments(this.threadid);


		},



		onShow() {

		},
		methods: {
			getchaAd: function() {


				//#ifdef MP-WEIXIN	
				if (wx.createInterstitialAd) {
					interstitialAd = wx.createInterstitialAd({
						adUnitId: 'adunit-bb0c7ed29c490a71'
					})
					interstitialAd.onLoad(() => {})
					interstitialAd.onError((err) => {})
					interstitialAd.onClose(() => {})
				}
				if (interstitialAd) {
					interstitialAd.show().catch((err) => {
						//	console.error(err)
					})
				}
				//#endif	

			},
			cateClick() {

				// 跳转到内部窗口并且传递链接

				var url = `/pages/list/list?id=` + this.categoryid;
				uni.navigateTo({
					url: url
				});
			},
			replyClick(data) {
				// 跳转到内部窗口并且传递链接
				console.log(data)
				var url = `/pages/thread/reply?id=` + data.id;
				uni.navigateTo({
					url: url
				});
			},
			userClick(data) {
				// 跳转到内部窗口并且传递链接

				var url = `/pages/user/user?id=` + data.userId;
				uni.navigateTo({
					url: url
				});
			},
			previewImage(index) {
				let photoList = this.threadimgs.map(item => {
					return item.thumbUrl;
				});
				uni.previewImage({
					current: index, // 当前显示图片的链接/索引值
					urls: photoList, // 需要预览的图片链接列表，photoList要求必须是数组
					loop: true // 是否可循环预览
				});
			},
			initNavigation(e) {
				this.opacity = e.opacity;
				this.top = e.top;
			},
			opacityChange(e) {
				this.opacity = e.opacity;
			},
			back() {
				uni.navigateBack();
			},
			getthreaddetail(data) {
				//console.log(data)
				//联网加载数据 
				var getthreadRequest = wxRequest.getRequest(Api.getthreadByID(this.threadid));

				getthreadRequest.then(res => {
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					this.thread = res.data.Data;
					this.threaddetail = res.data.Data.content;
					this.title = res.data.Data.title;
					this.categoryName = res.data.Data.categoryName;
					this.categoryid = this.thread.categoryId;
					this.diffTime = res.data.Data.diffTime;
					this.user = res.data.Data.user;

					this.threaduserid = res.data.Data.userId;
					this.threadindexes = res.data.Data.content.indexes
					//	 console.log(this.threadindexes['101']);
					if (this.threadindexes['101']) {
						this.threadimgs = this.threadindexes['101'].body;

					}
					if (this.threadindexes['102']) {
						this.threadaudios = this.threadindexes['102'].body;

					}
					if (this.threadindexes['103']) {
						this.threadvideos = this.threadindexes['103'].body;

					}
					if (this.threadindexes['104']) {
						this.threadproduct = this.threadindexes['104'].body;

					}

					if (this.threadindexes['108']) {
						this.threadfiles = this.threadindexes['108'].body;

					}

				}).catch(() => {

				})
			},

			getcomments(page) {
				//联网加载数据
				var num = page.num;
				var size = page.size;
				var getpostslistRequest = wxRequest.getRequest(Api.getpostslist(this.threadid, num,
					size));


				getpostslistRequest.then(res => {
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					this.mescroll.endSuccess(res.data.Data.pageData.length);
					//console.log(res.data.Data.pageData)
					//如果是第一页需手动制空列表
					if (page.num == 1) this.comments = [];
					//追加新数据
					this.comments = this.comments.concat(res.data.Data.pageData);
					this.commentsnum = res.data.Data.totalCount;
				}).catch(() => {
					//联网失败, 结束加载
					this.mescroll.endErr();
				})
			},

		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	};
</script>

<style lang="scss">
	.container {
		padding-bottom: 120rpx;
		box-sizing: border-box;
	}

	/deep/ .md-p {
		margin: 5px 0;
	}

	.header {
		padding: 80rpx 90rpx 60rpx 90rpx;
		box-sizing: border-box;
	}

	.file-body {
		margin: 0 !important;
	}

	.title {
		color: #333;
		font-weight: 500;
	}

	.sub-title {
		font-size: 24rpx;
		color: #7a7a7a;
		padding-top: 18rpx;
	}

	.title {
		width: 100%;
		padding: 50rpx 30rpx 30rpx;
		box-sizing: border-box;
		font-weight: bold;
	}

	.header-bg {
		width: 100%;
		margin: 0;
	}

	.header-img {
		width: 100%;
		height: 440rpx;
		display: block;
	}

	.header-icon {
		width: 100%;
		position: fixed;
		top: 0;
		padding: 0 12rpx;
		display: flex;
		align-items: center;
		height: 32px;
		transform: translateZ(0);
		z-index: 99999;
		box-sizing: border-box;
	}

	.content-box {
		width: 100%;
		height: 44px;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.avatar-box {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		display: flex;
		margin-left: 10px;
		align-items: center;
		justify-content: center;
		border: 1px solid #eaeef1;
		flex-shrink: 0;

		.avatar {
			width: 20px;
			height: 20px;
			border-radius: 50%;
		}
	}

	.search-box {
		width: 100%;
		height: 32px;
		margin: 0 10rpx;
		border-radius: 18px;
		font-size: 14px;

		box-sizing: border-box;
		color: #fff;
		display: flex;
		align-items: center;
	}

	.bg-white {
		background-color: #ffffff !important;
	}

	.search-text {
		padding-left: 10rpx;
	}

	.notice-box {
		position: relative;
		flex-shrink: 0;
		color: #fff;
	}

	.body {
		background-color: #ffffff;
		padding: 13px;
		margin: -60px 13px 13px 13px;
		border-radius: 12px;
		position: relative;
	}

	.bottom {
		background-color: #ffffff;
		padding: 13px;
		margin: 0 13px 60px 13px;
		border-radius: 12px;
	}

	.post-note {
		position: relative;
		padding: 10px;
		margin-top: 10px;
		border: 1px solid transparent;
		border-radius: 12px;
		background-color: rgb(248, 249, 250);
		color: #555;
		border-color: #f8f9fa;
		font-weight: 400;
		font-size: 12px;
		line-height: 20px;
	}

	.news-title {
		font-weight: 500;
	}

	.sub-info {
		padding-top: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		color: #333;
		opacity: 0.6;
	}

	.author {
		color: var(--base);
		border-radius: 30px;
		padding-left: 20rpx;
	}

	.news-content {
		padding-top: 40rpx;
	}

	.article {
		/* text-indent: 2em; */

		padding-bottom: 13px;

		word-break: break-all;
		word-wrap: break-word;
	}

	.article-pic {
		width: 100%;
		display: block;
		margin-bottom: 40rpx;
	}

	.news-source {
		font-size: 24rpx;
		color: #999;
	}

	.operate-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 60rpx 40rpx;
		box-sizing: border-box;
	}

	.black {
		color: #333;
		padding-left: 12rpx;
	}

	.cmt-title {
		font-size: 16px;
		font-weight: bold;
		position: relative;
		padding-left: 13px;
	}

	.cmt-title::after {
		content: '';
		position: absolute;
		left: 0rpx;
		top: 18%;
		width: 6rpx;
		height: 64%;
		background: var(--base);
	}

	.cmtbox {
		padding-bottom: 20rpx;
	}

	.cmt-cell {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding-top: 44rpx;
	}

	.avatar {
		width: 64rpx;
		height: 64rpx;
		border-radius: 32rpx;
		display: block;
		flex-shrink: 0;
	}

	.cmt-detail {
		width: 100%;
		padding-left: 16rpx;
		box-sizing: border-box;
	}

	.header-box {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;

	}

	.cmt-nickname {
		color: var(--base);
	}

	.cmt-comauth {
		background: var(--base);
		opacity: 0.9;

	}

	.cmt-comauths {
		background: var(--base);
		opacity: 0.6;

	}

	.cmt-comfirst {

		opacity: 0.8;
	}

	.cmt-comauth,
	.cmt-comauths,
	.cmt-comfirst {


		display: inline-block;

		-webkit-text-size-adjust: none;
		-webkit-transform: scale(0.83, 0.83);
		margin-top: 1px;
		margin-left: 4px;
		font-size: 12px;
		height: 18px;
		line-height: 18px;

		border-radius: 4px;
		padding: 1px 4px;
		text-align: left;
		color: #fff;
	}

	.fabulous {
		color: #9a9a9a;
	}

	.fabulous text {
		padding-right: 4rpx;
		font-size: 24rpx;
	}

	.cmt-content {
		color: #333;

		padding-top: 8rpx;
		word-break: break-all;
		word-wrap: break-word;
	}

	.cmt-content-image {
		width: 150px;
		height: 150px;
	}

	.reply-box {
		border-radius: 12px;
		overflow: hidden;
		margin-top: 16rpx;
		padding: 0 10px;
		background-color: #f2f2f2;
	}

	.cell-last {
		display: flex;
		align-items: center;
		word-wrap: break-word;
		color: var(--base);
	}

	.flex-1 {
		flex: 1;

		display: inline;
	}

	.reply-nickname {
		color: #7a7a7a;
		font-weight: 600;
		padding-bottom: 8rpx;
	}

	.footer {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		margin-top: 16rpx;
		color: #9a9a9a;
	}

	.primary {
		color: var(--base);
	}

	.ml {
		margin-left: 16rpx;
	}

	.operation {
		width: 100%;
		height: 100rpx;
		overflow: hidden;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99999;
		padding-bottom: env(safe-area-inset-bottom);
	}



	.operation::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.operation-left {
		display: flex;
		align-items: center;
	}

	.operation-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
	}

	.operation-right {
		height: 100rpx;
		box-sizing: border-box;
		padding-top: 0;
	}

	.right-flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.btn-comment {
		height: 64rpx;
		width: 84%;
		background: #ededed;
		color: #999;
		border-radius: 8rpx;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		padding-left: 20rpx;
		box-sizing: border-box;
		padding-top: 0;
		margin-left: 30rpx;
	}

	.col-7 {
		width: 58.33333333%;
	}

	.col-5 {
		width: 41.66666667%;
	}

	.share-btn {
		display: block;
		background: none;
		margin: 0;
		padding: 0;
	}

	.nui-btn-box {
		padding: 10rpx 40rpx;
		box-sizing: border-box;
	}

	.nui-bottom-text {
		padding-top: 600px;
		text-align: center;
		font-size: 24rpx;
		color: #7a7a7a;
	}
</style>
