(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bowenxinxi/add-or-update"],{"0dda":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"d193"))}},i=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"38db":function(e,n,t){"use strict";t.r(n);var r=t("0dda"),i=t("3d40");for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);t("b0f7");var a,o=t("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"01bcb446",null,!1,r["a"],a);n["default"]=c.exports},"3d40":function(e,n,t){"use strict";t.r(n);var r=t("f231"),i=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=i.a},b0f7:function(e,n,t){"use strict";var r=t("bccf"),i=t.n(r);i.a},b655:function(e,n,t){"use strict";(function(e){t("fd01");r(t("66fd"));var n=r(t("38db"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},bccf:function(e,n,t){},f231:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,i,u,a){try{var o=e[u](a),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(r,i)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){u(a,r,i,o,c,"next",e)}function c(e){u(a,r,i,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("d193"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{bowenbiaoti:"",biaoqian:"",bowenleixing:"",tupian:"",neirong:"",faburiqi:"",yonghuming:"",youxiang:"",thumbsupnum:"",crazilynum:"",clicktime:"",clicknum:""},bowenleixingOptions:[],bowenleixingIndex:0,user:{},ro:{bowenbiaoti:!1,biaoqian:!1,bowenleixing:!1,tupian:!1,neirong:!1,faburiqi:!1,yonghuming:!1,youxiang:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return a(r.default.mark((function i(){var u,a,o,c;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return u=e.getStorageSync("nowTable"),i.next=3,t.$api.session(u);case 3:return a=i.sent,t.user=a.data,t.ruleForm.yonghuming=t.user.yonghuming,t.ruleForm.youxiang=t.user.youxiang,i.next=9,t.$api.option("bowenleixing","bowenleixing",{});case 9:if(a=i.sent,t.bowenleixingOptions=a.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=19;break}return t.ruleForm.id=n.id,i.next=17,t.$api.info("bowenxinxi",t.ruleForm.id);case 17:a=i.sent,t.ruleForm=a.data;case 19:if(!n.cross){i.next=74;break}o=e.getStorageSync("crossObj"),i.t0=r.default.keys(o);case 22:if((i.t1=i.t0()).done){i.next=74;break}if(c=i.t1.value,"bowenbiaoti"!=c){i.next=28;break}return t.ruleForm.bowenbiaoti=o[c],t.ro.bowenbiaoti=!0,i.abrupt("continue",22);case 28:if("biaoqian"!=c){i.next=32;break}return t.ruleForm.biaoqian=o[c],t.ro.biaoqian=!0,i.abrupt("continue",22);case 32:if("bowenleixing"!=c){i.next=36;break}return t.ruleForm.bowenleixing=o[c],t.ro.bowenleixing=!0,i.abrupt("continue",22);case 36:if("tupian"!=c){i.next=40;break}return t.ruleForm.tupian=o[c],t.ro.tupian=!0,i.abrupt("continue",22);case 40:if("neirong"!=c){i.next=44;break}return t.ruleForm.neirong=o[c],t.ro.neirong=!0,i.abrupt("continue",22);case 44:if("faburiqi"!=c){i.next=48;break}return t.ruleForm.faburiqi=o[c],t.ro.faburiqi=!0,i.abrupt("continue",22);case 48:if("yonghuming"!=c){i.next=52;break}return t.ruleForm.yonghuming=o[c],t.ro.yonghuming=!0,i.abrupt("continue",22);case 52:if("youxiang"!=c){i.next=56;break}return t.ruleForm.youxiang=o[c],t.ro.youxiang=!0,i.abrupt("continue",22);case 56:if("thumbsupnum"!=c){i.next=60;break}return t.ruleForm.thumbsupnum=o[c],t.ro.thumbsupnum=!0,i.abrupt("continue",22);case 60:if("crazilynum"!=c){i.next=64;break}return t.ruleForm.crazilynum=o[c],t.ro.crazilynum=!0,i.abrupt("continue",22);case 64:if("clicktime"!=c){i.next=68;break}return t.ruleForm.clicktime=o[c],t.ro.clicktime=!0,i.abrupt("continue",22);case 68:if("clicknum"!=c){i.next=72;break}return t.ruleForm.clicknum=o[c],t.ro.clicknum=!0,i.abrupt("continue",22);case 72:i.next=22;break;case 74:t.styleChange();case 75:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(e){this.ruleForm.faburiqi=e.target.value,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},bowenleixingChange:function(e){this.bowenleixingIndex=e.target.value,this.ruleForm.bowenleixing=this.bowenleixingOptions[this.bowenleixingIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return a(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.bowenbiaoti){n.next=3;break}return e.$utils.msg("博文标题不能为空"),n.abrupt("return");case 3:if(!e.ruleForm.thumbsupnum||e.$validate.isIntNumer(e.ruleForm.thumbsupnum)){n.next=6;break}return e.$utils.msg("赞应输入整数"),n.abrupt("return");case 6:if(!e.ruleForm.crazilynum||e.$validate.isIntNumer(e.ruleForm.crazilynum)){n.next=9;break}return e.$utils.msg("踩应输入整数"),n.abrupt("return");case 9:if(!e.ruleForm.clicknum||e.$validate.isIntNumer(e.ruleForm.clicknum)){n.next=12;break}return e.$utils.msg("点击次数应输入整数"),n.abrupt("return");case 12:if(!e.ruleForm.id){n.next=17;break}return n.next=15,e.$api.update("bowenxinxi",e.ruleForm);case 15:n.next=19;break;case 17:return n.next=19,e.$api.add("bowenxinxi",e.ruleForm);case 19:e.$utils.msgBack("提交成功");case 20:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])}},[["b655","common/runtime","common/vendor"]]]);