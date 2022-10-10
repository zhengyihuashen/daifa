(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/niceui/nui-users-card/nui-users-card"],{"2aeb":function(e,n,t){},"49b0":function(e,n,t){"use strict";t.r(n);var r=t("4c2e"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},"4a17":function(e,n,t){"use strict";t.r(n);var r=t("5327"),u=t("49b0");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("d18d");var i,c=t("f0c5"),s=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"676a7db2",null,!1,r["a"],i);n["default"]=s.exports},"4c2e":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;r(t("f89d"));function r(e){return e&&e.__esModule?e:{default:e}}var u={name:"nui-users-card",data:function(){return{indexs:0}},props:{swiperlist:{type:[Object,Array]},userlist:{type:[Object,Array]}},methods:{userClick:function(n){var t="/pages/user/user?id="+n.userId;e.navigateTo({url:t})},earnSwiper:function(e){this.indexs=e.detail.current}}};n.default=u}).call(this,t("543d")["default"])},5327:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},d18d:function(e,n,t){"use strict";var r=t("2aeb"),u=t.n(r);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/niceui/nui-users-card/nui-users-card-create-component',
    {
        'components/niceui/nui-users-card/nui-users-card-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4a17"))
        })
    },
    [['components/niceui/nui-users-card/nui-users-card-create-component']]
]);
