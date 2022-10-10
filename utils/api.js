/*
 * 
 * 微慕小程序开源版
 * author: jianbo
 * organization: 微慕  www.minapper.com
 * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 技术支持微信号：iamxjb
 * 开源协议：MIT
 * Copyright (c) 2017  微慕 https://www.minapper.com All rights reserved.
 */
import config from "./config.js";
var domain = config.Domain;
var pageCount = config.PageCount;
var categoriesID = config.CategoriesID;
var HOST_URI = 'https://' + domain + '/apiv3/';
var HOST_FILTER = '&filter[types][0]=100&101&102&103&104&105&106&107&108';

module.exports = {
	// 获取文章列表数据
	getPosts: function(obj) {
		var url = HOST_URI + 'thread.list?perPage=' + pageCount + '&orderby=date&order=desc&page=' + obj.page;

		if (obj.categories != 0) {
			url += '&filter[categoryids][0]=' + obj.categories;
		} else if (obj.search != '') {
			url += '&filter[search]=' + encodeURIComponent(obj.search);
		}
		return url;
	},
//获取分类  
	getcategoriesList: function() {
		var url = HOST_URI + 'categories?perPage=20&page=1';
		return url;
	},
	//获取话题
	gettopicsList: function(num, size) {
		var url = HOST_URI + 'topics.list?filter[hot]=1&perPage=' + size + '&page=' + num;
		return url;
	},

	//获取某个分类信息
	getCategoryByID: function(id, num, size) {

		return HOST_URI + 'thread.list?&filter[categoryids][0]=' + id + '&perPage=' + size + '&page=' + num;
	},

	//获取某个话题信息
	gettopicByID: function(id, num, size) {

		return HOST_URI + 'topics.list?filter[topicId]=' + id + '&perPage=' + size + '&page=' + num;
	},

	//获取帖子详情页信息
	getthreadByID: function(id) {

		return HOST_URI + 'thread.detail?threadId=' + id;
	},
 
	//获取首页数据
	getIndexlist: function(num, size) {
		var url = HOST_URI + 'thread.list?perPage=' + size + '&page=' + num;
		return url;
	},
	//获取首页置顶数据
	getstickList: function() {
		var url = HOST_URI + 'thread.stick';
		return url;
	},

	//获取推荐数据
	getsequencelist: function( ) {
		var url = HOST_URI + 'thread.list?perPage=' + 10 + '&scope=1&page=' + 1;
		return url;
	},

	//获取精华数据
	getessencelist: function( ) {
		var url = HOST_URI + 'thread.list?perPage=' + 10 + '&filter[essence]=1&page=' + 1;
		return url;
	},
	//获取回复数据
	getnewreplylist: function() {
		var url = HOST_URI + 'thread.list?perPage=' + 10 + '&filter[sort]=2&page=' + 1;
		return url;
	},
	//获取热门数据
	gethotlist: function() {
		var url = HOST_URI + 'thread.list?perPage=' + 10 + '&filter[sort]=3&page=' + 1;
		return url;
	},
	
	//获取活跃用户数据
	gethotuserList: function() {
		var url = HOST_URI + 'users.list?filter[hot]=1&perPage=10&page=1';
		return url;
	},
	
	//获取站点信息 
	getforumList: function() {
		var url = HOST_URI + 'forum' ;
		return url;
	},
	

	//获取官方动态分类
	getggList: function(num) {
		var url = HOST_URI + 'thread.list?perPage=10&filter[categoryids][0]=6&page=' + num;
		return url;
	},
	//获取文件分类
	getfileList: function(num) {
		var url = HOST_URI + 'thread.list?perPage=10&filter[types][0]=108&page=' + num;
		return url;
	},
	//获取图片分类
	getimageList: function(num) {
		var url = HOST_URI + 'thread.list?perPage=10&filter[types][0]=101&page=' + num;
		return url;
	},
	//获取音频分类
	getaudioList: function(num) {
		var url = HOST_URI + 'thread.list?perPage=10&filter[types][0]=102&page=' + num;
		return url;
	},
	//获取视频分类
	getvideoList: function(num) {
		var url = HOST_URI + 'thread.list?perPage=10&filter[types][0]=103&page=' + num;
		return url;
	},
	//获取个人主页信息
	getuserdetail: function(id) {
		var url = HOST_URI + 'user?userId=' + id;
		return url;
	},
	//获取个人主页帖子 thread.list?perPage=10&page=2&filter[toUserId]=5400&filter[complex]=5&scope=0
	getuserthread: function(id, num, size) {
		var url = HOST_URI + 'thread.list?filter[toUserId]=' + id + '&filter[complex]=5&perPage=' + size +
			'&page=' + num;
		return url;
	},
	//评论列表
	getpostslist: function(id, num, size) {
		var url = HOST_URI + 'posts.list?filter[thread]=' + id + '&sort=createdAt&page=' + num + '&perPage=' +
			size
		return url;
	},
	//评论详情
	getpostsdetail: function(id) {
		var url = HOST_URI + 'posts.detail?postId=' + id
		return url;
	},


	//单条评论的最新回复评论

	getpostsreply: function(id, num, size) {
		var url = HOST_URI + 'posts.reply?postId=' + id + '&perPage=' + size + '&page=' + num;
		return url;
	},

};
