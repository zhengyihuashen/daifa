(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/niceui/nui-tag/nui-tag"],{2795:function(t,e,n){"use strict";var i=n("e152"),a=n.n(i);a.a},"7db3":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.getClassName(t.shape,t.plain)),i=t.getTypeClass(t.type,t.plain);t.$mp.data=Object.assign({},{$root:{m0:n,m1:i}})},u=[]},"82c9":function(t,e,n){"use strict";n.r(e);var i=n("9bac"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},"97d7":function(t,e,n){"use strict";n.r(e);var i=n("7db3"),a=n("82c9");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("2795");var l,r=n("f0c5"),f=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"f0f6955e",null,!1,i["a"],l);e["default"]=f.exports},"9bac":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"nui-tag",props:{type:{type:String,default:"primary"},padding:{type:String,default:"16rpx 26rpx"},margin:{type:String,default:"0"},size:{type:String,default:"28rpx"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},scaleMultiple:{type:Number,default:1},originLeft:{type:Boolean,default:!1},originRight:{type:Boolean,default:!1},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})},getTypeClass:function(t,e){return e?"nui-"+t+"-outline":"nui-"+t},getClassName:function(t,e){var n=e?"nui-tag-outline ":"";return"square"!=t&&("circle"==t?n+=e?"nui-tag-outline-fillet":"nui-tag-fillet":"circleLeft"==t?n+="nui-tag-fillet-left":"circleRight"==t&&(n+="nui-tag-fillet-right")),n}}};e.default=i},e152:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/niceui/nui-tag/nui-tag-create-component',
    {
        'components/niceui/nui-tag/nui-tag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("97d7"))
        })
    },
    [['components/niceui/nui-tag/nui-tag-create-component']]
]);
