(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/media/video","components/mp-html/mp-html"],{"018d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){n.e("components/mp-html/node/node").then(function(){return resolve(n("2234"))}.bind(null,n)).catch(n.oe)},i=[n("0d3a"),n("3fad"),n("a41a"),n("2699")],r=n("2070"),a={name:"mp-html",data:function(){return{nodes:[]}},props:{ImgCache:Boolean,markdown:Boolean,containerStyle:{type:String,default:""},content:String,copyLink:{type:[Boolean,String],default:!0},domain:String,errorImg:{type:String,default:""},lazyLoad:{type:[Boolean,String],default:!1},loadingImg:{type:String,default:""},pauseVideo:{type:[Boolean,String],default:!0},previewImg:{type:[Boolean,String],default:!0},scrollTable:[Boolean,String],selectable:[Boolean,String],setTitle:{type:[Boolean,String],default:!0},showImgMenu:{type:[Boolean,String],default:!0},tagStyle:Object,useAnchor:[Boolean,Number]},components:{node:o},watch:{content:function(e){this.setContent(e)}},created:function(){this.plugins=[];for(var e=i.length;e--;)this.plugins.push(new i[e](this))},mounted:function(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeDestroy:function(){this._hook("onDetached"),clearInterval(this._timer)},methods:{in:function(e,t,n){e&&t&&n&&(this._in={page:e,selector:t,scrollTop:n})},navigateTo:function(t,n){var o=this;return t=this._ids[decodeURI(t)]||t,new Promise((function(i,r){if(o.useAnchor){n=n||parseInt(o.useAnchor)||0;var a=" ";a=">>>";var c=e.createSelectorQuery().in(o._in?o._in.page:o).select((o._in?o._in.selector:"._root")+(t?"".concat(a,"#").concat(t):"")).boundingClientRect();o._in?c.select(o._in.selector).scrollOffset().select(o._in.selector).boundingClientRect():c.selectViewport().scrollOffset(),c.exec((function(t){if(t[0]){var a=t[1].scrollTop+t[0].top-(t[2]?t[2].top:0)+n;o._in?o._in.page[o._in.scrollTop]=a:e.pageScrollTo({scrollTop:a,duration:300}),i()}else r(Error("Label not found"))}))}else r(Error("Anchor is disabled"))}))},getText:function(e){var t="";return function e(n){for(var o=0;o<n.length;o++){var i=n[o];if("text"===i.type)t+=i.text.replace(/&amp;/g,"&");else if("br"===i.name)t+="\n";else{var r="p"===i.name||"div"===i.name||"tr"===i.name||"li"===i.name||"h"===i.name[0]&&i.name[1]>"0"&&i.name[1]<"7";r&&t&&"\n"!==t[t.length-1]&&(t+="\n"),i.children&&e(i.children),r&&"\n"!==t[t.length-1]?t+="\n":"td"!==i.name&&"th"!==i.name||(t+="\t")}}}(e||this.nodes),t},getRect:function(){var t=this;return new Promise((function(n,o){e.createSelectorQuery().in(t).select("#_root").boundingClientRect().exec((function(e){return e[0]?n(e[0]):o(Error("Root label not found"))}))}))},setContent:function(e,t){var n=this;t&&this.imgList||(this.imgList=[]);var o,i=new r(this).parse(e);this.$set(this,"nodes",t?(this.nodes||[]).concat(i):i),this._videos=[],this.$nextTick((function(){n._hook("onLoad"),n.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){n.getRect().then((function(e){e.height===o&&(n.$emit("ready",e),clearInterval(n._timer)),o=e.height})).catch((function(){}))}),350)},_hook:function(e){for(var t=i.length;t--;)this.plugins[t][e]&&this.plugins[t][e]()}}};t.default=a}).call(this,n("543d")["default"])},"3fef":function(e,t,n){"use strict";var o=n("dc53"),i=n.n(o);i.a},"4c2c":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(n("df34"));var o=r(n("f036")),i=r(n("cea2"));function r(e){return e&&e.__esModule?e:{default:e}}var a=n("531c"),c=(n("29a3"),n("5920"),n("bc00"),n("12f9")),u={mixins:[i.default],data:function(){return{videoList:{},upOption:{page:{num:0,size:8}},toTop:{src:null,offset:1e3,duration:300,zIndex:9990,right:20,bottom:180,safearea:!1,width:72,radius:"50%",left:null}}},onShareAppMessage:function(){return this.webSiteName=o.default.WebsiteName,{title:this.webSiteName+"——视频"}},onShareTimeline:function(){return this.webSiteName=o.default.WebsiteName,{title:this.webSiteName+"——视频"}},onLoad:function(e){this.getvideoList(e)},methods:{getvideoList:function(e){var t=this,n=e.num,o=c.getRequest(a.getvideoList(n));o.then((function(n){t.mescroll.endSuccess(n.data.Data.pageData.length),1==e.num&&(t.videoList=[]),t.videoList=t.videoList.concat(n.data.Data.pageData)})).catch((function(){t.mescroll.endErr()}))}}};t.default=u},"66ef":function(e,t,n){"use strict";n.r(t);var o=n("beda"),i=n("af5d");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var a,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=u.exports},af5d:function(e,t,n){"use strict";n.r(t);var o=n("4c2c"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},b147:function(e,t,n){"use strict";n.r(t);var o=n("018d"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},beda:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var o={mescrollBody:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/mescroll-uni/components/mescroll-body/mescroll-body")]).then(n.bind(null,"2d79"))},nuiListVideo:function(){return n.e("components/niceui/nui-list-video/nui-list-video").then(n.bind(null,"2569"))}},i=function(){var e=this,t=e.$createElement;e._self._c},r=[]},dc53:function(e,t,n){},df34:function(e,t,n){"use strict";n.r(t);var o=n("e6ea"),i=n("b147");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("3fef");var a,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=u.exports},e6ea:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement;e._self._c},r=[]},ea7e:function(e,t,n){"use strict";(function(e){n("641d");o(n("66fd"));var t=o(n("66ef"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["ea7e","common/runtime","common/vendor"]]]);