(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/niceui/nui-tabbar/nui-tabbar"],{"22a3":function(t,a,n){"use strict";var e=n("78ae"),u=n.n(e);u.a},"26ba":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"nui-tabbar",data:function(){return{TabID:0,MsgDot:!1}},props:{tabID:{type:[String,Number],default:0},msgDot:{type:Boolean,default:!1}},created:function(){this.TabID=this.tabID,this.MsgDot=this.msgDot},watch:{tabID:function(){this.TabID=this.tabID},msgDot:function(){this.MsgDot=this.msgDot}},methods:{tabTap:function(t){t!=this.TabID&&this.$emit("tabTap",t)}}};a.default=e},"4f1c":function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return u})),n.d(a,"c",(function(){return i})),n.d(a,"a",(function(){return e}));var u=function(){var t=this,a=t.$createElement;t._self._c},i=[]},"78ae":function(t,a,n){},"7e3a":function(t,a,n){"use strict";n.r(a);var e=n("26ba"),u=n.n(e);for(var i in e)"default"!==i&&function(t){n.d(a,t,(function(){return e[t]}))}(i);a["default"]=u.a},deb8:function(t,a,n){"use strict";n.r(a);var e=n("4f1c"),u=n("7e3a");for(var i in u)"default"!==i&&function(t){n.d(a,t,(function(){return u[t]}))}(i);n("22a3");var o,r=n("f0c5"),c=Object(r["a"])(u["default"],e["b"],e["c"],!1,null,"05e73a68",null,!1,e["a"],o);a["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/niceui/nui-tabbar/nui-tabbar-create-component',
    {
        'components/niceui/nui-tabbar/nui-tabbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("deb8"))
        })
    },
    [['components/niceui/nui-tabbar/nui-tabbar-create-component']]
]);
