# DiscuzQ多端小程序和APP
![DiscuzQ多端小程序和APP](https://img-cdn-aliyun.dcloud.net.cn/stream/plugin_screens/b1308b70-eac9-11ec-889d-5375acec07b3_0.png?image_process=quality,q_70/format,webp&v=1655095167)

#### 介绍
Discuz!Q生成多端小程序和APP。
基于DiscuzQ!3.0版本API，使用UNIAPP框架重构，暂时没有做登录互动和支付相关功能。

本来计划找人合作完善后发布，但是找了几十个都是拿了源码就没有后续了。
希望开源出来后能有人参与完善。

#### 软件架构
DiscuzQ!3.0 + Uniapp

#### 安装教程

1.  必须先安装好DiscuzQ!3.0，并且有一定的内容
2.  将源码导入hbuilderx，并安装[sass插件](https://ext.dcloud.net.cn/plugin?name=compile-node-sass)
3.  修改/utils/config.js下的内容，并保存

```
const Domain = "discuz.chat";//网站域名
const WebsiteName = "Discuz!Q站长圈"; //网站名称
const Wechat = "微信：自己的微信号 ";//帖子页 联系方式
const Notice = "/pages/thread/thread?id=48991";//官方公告 （案例使用的是帖子id为48991的帖子详情）
const About = "/pages/user/user?id=27652";//关于我们 （案例使用的是用户id为27652的用户主页）
const Update = "/pages/list/list?id=6&name=官方动态";//更新日志 （案例使用的是分类id为6的分类列表页）

const Chaad = "adunit-bb0c7ed29c490a71";// 插屏广告id （不用写，弃用了）
const PageCount = '10'; //每页文章数目


 

const _home_data = {  
	banner() {
		return [

			{
				image: 'https://discuz.chat/static/1.png',//轮播图图片网址 
				path: '/pages/thread/thread?id=50494',//轮播图跳转的帖子
			}, {
				image: 'https://discuz.chat/static/2.png',//轮播图图片网址
				path: '/pages/thread/thread?id=54569',//轮播图跳转的帖子
			}, {
				image: 'https://discuz.chat/static/3.png',//轮播图图片网址
				path: '/pages/thread/thread?id=48991',//轮播图跳转的帖子
			}
		];
	},
 },
 

```
4.  发行到各端即可