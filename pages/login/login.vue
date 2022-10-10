<!-- 蓝色简洁登录页面 -->
<template>
	<view class="login-bg">
 
	</view>
</template>
<script>
export default {
 
	data() {
		return {
			phone: '', //手机号码
			pwd: '' //密码
		};
	},
	onLoad() {},
	methods: {
		//当前登录按钮操作
		login() {
			var that = this;
			if (!that.phone) {
				uni.showToast({ title: '请输入手机号', icon: 'none' });
				return;
			}
			if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.phone)) {
				uni.showToast({ title: '请输入正确手机号', icon: 'none' });
				return;
			}
			if (!that.pwd) {
				uni.showToast({ title: '请输入密码', icon: 'none' });
				return;
			}
			uni.showToast({ title: '登录成功！', icon: 'none' });
		},
		//忘记密码
		forgotPwd() {
			uni.showToast({ title: '忘记密码', icon: 'none' });
		},
		//立刻注册
		reg() {
			uni.showToast({ title: '立刻注册', icon: 'none' });
		}
	}
};
</script>
<style>
.img-a {
	width: 100%;
}
.img-b {
	width: 100%;
	height: 45px;
	bottom: 0;
	position: absolute;
}
.login-bg {
	height: 100vh;
	background: linear-gradient(to bottom, #ff6a9a, #fe7d76);
}

.t-login {
	width: 580rpx;
	padding: 55rpx;
	margin: 0 auto;
	font-size: 28rpx;
	background-color: #ffffff;
	border-radius: 20rpx;
	position: relative;
	margin-top: -200rpx;
	box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.15);
	z-index: 9;
}
.t-login button {
	font-size: 28rpx;
	background: linear-gradient(to right, #ff8f77, #fe519f);
	color: #fff;
	height: 90rpx;
	line-height: 90rpx;
	border-radius: 50rpx;
}

.t-login input {
	padding: 0 20rpx 0 120rpx;
	height: 90rpx;
	line-height: 90rpx;
	margin-bottom: 50rpx;
	background: #f6f6f6;
	border: 1px solid #f6f6f6;
	font-size: 28rpx;
	border-radius: 50rpx;
}

.t-login .t-a {
	position: relative;
}

.t-login .t-a image {
	width: 40rpx;
	height: 40rpx;
	position: absolute;
	left: 40rpx;
	top: 28rpx;
	padding-right: 20rpx;
}

.t-login .t-b {
	text-align: left;
	font-size: 46rpx;
	color: #ff939b;
	font-weight: bold;
	margin: 0 0 50rpx 20rpx;
}

.t-login .t-d {
	text-align: center;
	color: #999;
	margin: 80rpx 0;
}

.t-login .t-c {
	text-align: right;
	color: #c0c0c0;
	margin: -20rpx 30rpx 40rpx 0;
}

.t-login .t-f {
	text-align: center;
	margin: 200rpx 0 0 0;
	color: #666;
}

.t-login .t-f text {
	margin-left: 20rpx;
	color: #aaaaaa;
	font-size: 27rpx;
}

.t-login .uni-input-placeholder {
	color: #aeaeae;
}

.cl {
	zoom: 1;
}

.cl:after {
	clear: both;
	display: block;
	visibility: hidden;
	height: 0;
	content: '\20';
}
.cardBox {
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	padding: 5px;
	background: #ffffff;
	opacity: 0.9;
	-webkit-border-radius: 20rpx;
	border-radius: 0 0 20rpx 20rpx;
	height: 70rpx;
	width: 600rpx;
	margin: 0 auto;
	position: relative;
	text-align: center;
	line-height: 70rpx;
	color: #aaa;
	font-size: 28rpx;
}
.cardBox .txt {
	color: #fe519f;
}
</style>
