const Domain = "service-pl4f5xfs-1303021228.gz.apigw.tencentcs.com/";//网站域名
const WebsiteName = "代发"; //网站名称
const Wechat = "quyueid";//帖子页 联系方式
const Notice = "/pages/thread/thread?id=48991";//我的页面 官方公告 比如https://discuz.chat/thread/48991的id就是48994
const About = "/pages/user/user?id=27652";//我的页面 关于我们
const Update = "/pages/list/list?id=6&name=官方动态";//我的页面 更新日志id

const Chaad = "adunit-bb0c7ed29c490a71";// 插屏广告id 不用写
const PageCount = '10'; //每页文章数目


 

const _home_data = {  
	banner() {
		return [

			{
				image: 'https://pic1.imgdb.cn/item/6344014b16f2c2beb1486169.jpg',//轮播图图片网址
				// plugin-private://wx34345ae5855f892d/pages/productDetail/productDetail?productId=1145653
				path: '/pages/thread/thread?id=50494',//轮播图跳转的帖子
			}, {
				image: 'https://pic1.imgdb.cn/item/634400f716f2c2beb147c4ec.jpg',//轮播图图片网址
				path: '/pages/thread/thread?id=54569',//轮播图跳转的帖子
			}, {
				image: 'https://pic1.imgdb.cn/item/6344013b16f2c2beb148453e.jpg',//轮播图图片网址
				path: '/pages/thread/thread?id=48991',//轮播图跳转的帖子
			}
		];
	},
	nav1() {
		return [{
			id: 1,
			name: '推广',
			bgcolor: 'orange',
			path: '/pages/media/image',
			img: '/static/photo.png',
		}, {
			id: 2,
			name: '圈钱',
			color: 'orange',
			path: '/pages/media/video',
			img: '/static/video.png',
		}, {
			id: 3,
			name: '避雷',
			color: '',
			path: '/pages/media/audio',
			img: '/static/music.png',
		}, {
			id: 4,
			name: '友加',
			color: '',
		path: '/pages/media/file',
			img: '/static/files.png',
		} ,  ];
	},
 
 	nav2() {
 		return [  {
 			id: 1,
 			name: '冻结期id',
 			color: '',
 			path: '/pages/media/file',
 			img: '/static/music.png',
 		}, {
 			id: 2,
 			name: '取悦代改',
 			color: '',
 		path: '/pages/media/file',
 			img: '/static/files.png',
 		} ];
 	},
 
 
 };

 
export default {
	_home_data,
	Domain,
	WebsiteName,
	Wechat,
	PageCount,
	Chaad,
	Notice,
	About,
	Update
};
