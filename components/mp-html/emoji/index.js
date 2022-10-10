/**
 * @fileoverview emoji 插件
 */
const reg = /\:(\S+?)\:/g
const data = {
	kelian: '<img src="https://discuz.chat/emoji/qq/kelian.gif" class="emoji" />',
	haqian: '<img src="https://discuz.chat/emoji/qq/haqian.gif" class="emoji" />',
	woshou: '<img src="https://discuz.chat/emoji/qq/woshou.gif" class="emoji" />',
	aixin: '<img src="https://discuz.chat/emoji/qq/aixin.gif" class="emoji" />',
	zuohengheng: '<img src="https://discuz.chat/emoji/qq/zuohengheng.gif" class="emoji" />',
	weixiao: '<img src="https://discuz.chat/emoji/qq/weixiao.gif" class="emoji" />',
	jingkong: '<img src="https://discuz.chat/emoji/qq/jingkong.gif" class="emoji" />',
	tiaopi: '<img src="https://discuz.chat/emoji/qq/tiaopi.gif" class="emoji" />',
	touxiao: '<img src="https://discuz.chat/emoji/qq/touxiao.gif" class="emoji" />',
	youling: '<img src="https://discuz.chat/emoji/qq/youling.gif" class="emoji" />',
	caidao: '<img src="https://discuz.chat/emoji/qq/caidao.gif" class="emoji" />',
	cahan: '<img src="https://discuz.chat/emoji/qq/cahan.gif" class="emoji" />',
	hecai: '<img src="https://discuz.chat/emoji/qq/hecai.gif" class="emoji" />',
	keai: '<img src="https://discuz.chat/emoji/qq/keai.gif" class="emoji" />',
	ciya: '<img src="https://discuz.chat/emoji/qq/ciya.gif" class="emoji" />',
	saorao: '<img src="https://discuz.chat/emoji/qq/saorao.gif" class="emoji" />',
	jingxi: '<img src="https://discuz.chat/emoji/qq/jingxi.gif" class="emoji" />',
	ku: '<img src="https://discuz.chat/emoji/qq/ku.gif" class="emoji" />',
	piezui: '<img src="https://discuz.chat/emoji/qq/piezui.gif" class="emoji" />',
	se: '<img src="https://discuz.chat/emoji/qq/se.gif" class="emoji" />',
	xia: '<img src="https://discuz.chat/emoji/qq/xia.gif" class="emoji" />',
	yinxian: '<img src="https://discuz.chat/emoji/qq/yinxian.gif" class="emoji" />',
	zhouma: '<img src="https://discuz.chat/emoji/qq/zhouma.gif" class="emoji" />',
	kulou: '<img src="https://discuz.chat/emoji/qq/kulou.gif" class="emoji" />',
	xu: '<img src="https://discuz.chat/emoji/qq/xu.gif" class="emoji" />',
	jingya: '<img src="https://discuz.chat/emoji/qq/jingya.gif" class="emoji" />',
	doge: '<img src="https://discuz.chat/emoji/qq/doge.gif" class="emoji" />',
	bizui: '<img src="https://discuz.chat/emoji/qq/bizui.gif" class="emoji" />',
	yangtuo: '<img src="https://discuz.chat/emoji/qq/yangtuo.gif" class="emoji" />',
	shouqiang: '<img src="https://discuz.chat/emoji/qq/shouqiang.gif" class="emoji" />',
	baoquan: '<img src="https://discuz.chat/emoji/qq/baoquan.gif" class="emoji" />',
	yun: '<img src="https://discuz.chat/emoji/qq/yun.gif" class="emoji" />',
	lanqiu: '<img src="https://discuz.chat/emoji/qq/lanqiu.gif" class="emoji" />',
	zhemo: '<img src="https://discuz.chat/emoji/qq/zhemo.gif" class="emoji" />',
	guzhang: '<img src="https://discuz.chat/emoji/qq/guzhang.gif" class="emoji" />',
	shengli: '<img src="https://discuz.chat/emoji/qq/shengli.gif" class="emoji" />',
	zaijian: '<img src="https://discuz.chat/emoji/qq/zaijian.gif" class="emoji" />',
	dabing: '<img src="https://discuz.chat/emoji/qq/dabing.gif" class="emoji" />',
	deyi: '<img src="https://discuz.chat/emoji/qq/deyi.gif" class="emoji" />',
	hanxiao: '<img src="https://discuz.chat/emoji/qq/hanxiao.gif" class="emoji" />',
	kun: '<img src="https://discuz.chat/emoji/qq/kun.gif" class="emoji" />',
	hexie: '<img src="https://discuz.chat/emoji/qq/hexie.gif" class="emoji" />',
	daku: '<img src="https://discuz.chat/emoji/qq/daku.gif" class="emoji" />',
	wozuimei: '<img src="https://discuz.chat/emoji/qq/wozuimei.gif" class="emoji" />',
	xiaoku: '<img src="https://discuz.chat/emoji/qq/xiaoku.gif" class="emoji" />',
	xigua: '<img src="https://discuz.chat/emoji/qq/xigua.gif" class="emoji" />',
	huaixiao: '<img src="https://discuz.chat/emoji/qq/huaixiao.gif" class="emoji" />',
	liulei: '<img src="https://discuz.chat/emoji/qq/liulei.gif" class="emoji" />',
	lenghan: '<img src="https://discuz.chat/emoji/qq/lenghan.gif" class="emoji" />',
	qiudale: '<img src="https://discuz.chat/emoji/qq/qiudale.gif" class="emoji" />',
	zhayanjian: '<img src="https://discuz.chat/emoji/qq/zhayanjian.gif" class="emoji" />',
	qiaoda: '<img src="https://discuz.chat/emoji/qq/qiaoda.gif" class="emoji" />',
	baojin: '<img src="https://discuz.chat/emoji/qq/baojin.gif" class="emoji" />',
	OK: '<img src="https://discuz.chat/emoji/qq/OK.gif" class="emoji" />',
	xiaojiujie: '<img src="https://discuz.chat/emoji/qq/xiaojiujie.gif" class="emoji" />',
	gouyin: '<img src="https://discuz.chat/emoji/qq/gouyin.gif" class="emoji" />',
	youhengheng: '<img src="https://discuz.chat/emoji/qq/youhengheng.gif" class="emoji" />',
	tuosai: '<img src="https://discuz.chat/emoji/qq/tuosai.gif" class="emoji" />',
	nanguo: '<img src="https://discuz.chat/emoji/qq/nanguo.gif" class="emoji" />',
	quantou: '<img src="https://discuz.chat/emoji/qq/quantou.gif" class="emoji" />',
	haixiu: '<img src="https://discuz.chat/emoji/qq/haixiu.gif" class="emoji" />',
	koubi: '<img src="https://discuz.chat/emoji/qq/koubi.gif" class="emoji" />',
	qiang: '<img src="https://discuz.chat/emoji/qq/qiang.gif" class="emoji" />',
	pijiu: '<img src="https://discuz.chat/emoji/qq/pijiu.gif" class="emoji" />',
	bishi: '<img src="https://discuz.chat/emoji/qq/bishi.gif" class="emoji" />',
	yiwen: '<img src="https://discuz.chat/emoji/qq/yiwen.gif" class="emoji" />',
	liuhan: '<img src="https://discuz.chat/emoji/qq/liuhan.gif" class="emoji" />',
	wunai: '<img src="https://discuz.chat/emoji/qq/wunai.gif" class="emoji" />',
	aini: '<img src="https://discuz.chat/emoji/qq/aini.gif" class="emoji" />',
	bangbangtang: '<img src="https://discuz.chat/emoji/qq/bangbangtang.gif" class="emoji" />',
	penxue: '<img src="https://discuz.chat/emoji/qq/penxue.gif" class="emoji" />',
	haobang: '<img src="https://discuz.chat/emoji/qq/haobang.gif" class="emoji" />',
	qinqin: '<img src="https://discuz.chat/emoji/qq/qinqin.gif" class="emoji" />',
	xiaoyanger: '<img src="https://discuz.chat/emoji/qq/xiaoyanger.gif" class="emoji" />',
	fendou: '<img src="https://discuz.chat/emoji/qq/fendou.gif" class="emoji" />',
	ganga: '<img src="https://discuz.chat/emoji/qq/ganga.gif" class="emoji" />',
	shuai: '<img src="https://discuz.chat/emoji/qq/shuai.gif" class="emoji" />',
	juhua: '<img src="https://discuz.chat/emoji/qq/juhua.gif" class="emoji" />',
	baiyan: '<img src="https://discuz.chat/emoji/qq/baiyan.gif" class="emoji" />',
	fanu: '<img src="https://discuz.chat/emoji/qq/fanu.gif" class="emoji" />',
	jie: '<img src="https://discuz.chat/emoji/qq/jie.gif" class="emoji" />',
	chi: '<img src="https://discuz.chat/emoji/qq/chi.gif" class="emoji" />',
	kuaikule: '<img src="https://discuz.chat/emoji/qq/kuaikule.gif" class="emoji" />',
	zhuakuang: '<img src="https://discuz.chat/emoji/qq/zhuakuang.gif" class="emoji" />',
	shui: '<img src="https://discuz.chat/emoji/qq/shui.gif" class="emoji" />',
	dan: '<img src="https://discuz.chat/emoji/qq/dan.gif" class="emoji" />',
	aoman: '<img src="https://discuz.chat/emoji/qq/aoman.gif" class="emoji" />',
	fadai: '<img src="https://discuz.chat/emoji/qq/fadai.gif" class="emoji" />',
	leiben: '<img src="https://discuz.chat/emoji/qq/leiben.gif" class="emoji" />',
	tu: '<img src="https://discuz.chat/emoji/qq/tu.gif" class="emoji" />',
	weiqu: '<img src="https://discuz.chat/emoji/qq/weiqu.gif" class="emoji" />',
	xieyanxiao: '<img src="https://discuz.chat/emoji/qq/xieyanxiao.gif" class="emoji" />',
	weiqu: '<img src="https://discuz.chat/emoji/qq/weiqu.gif" class="emoji" />',
	xieyanxiao: '<img src="https://discuz.chat/emoji/qq/xieyanxiao.gif" class="emoji" />'
}

function Emoji() {

}

Emoji.prototype.onUpdate = function(content) {
	return content.replace(reg, ($, $1) => {
		if (data[$1]) return data[$1]
		return $
	})
}

Emoji.prototype.onGetContent = function(content) {
	for (const item in data) {
		content = content.replace(new RegExp(data[item], 'g'), '[' + item + ']')
	}
	return content
}

module.exports = Emoji
