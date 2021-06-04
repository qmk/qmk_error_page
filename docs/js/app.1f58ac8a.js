(function(e){function t(t){for(var o,a,i=t[0],d=t[1],l=t[2],u=0,f=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);c&&c(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,i=1;i<r.length;i++){var d=r[i];0!==n[d]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},n={app:0},s=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=d;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"1dd2":function(e,t,r){"use strict";r("718a")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("ErrorReport")],1)},s=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("QMK API Keyboard Status")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"keyboard-filter",attrs:{placeholder:"filter keyboards"},domProps:{value:e.filter},on:{input:[function(t){t.target.composing||(e.filter=t.target.value)},e.filterKeyboards]}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading"},[r("font-awesome-icon",{attrs:{icon:"atom",spin:"",size:"6x","fixed-width":""}}),r("h2",[e._v("Loading Data")])],1),e.loading?e._e():r("div",[r("h5",[e._v("Loaded in "+e._s(e.loadtime/1e3)+" seconds")]),r("h3",[e._v("Builds Failing ("+e._s(e.sortedKeyboards.badlist.length)+")")]),r("div",{staticClass:"build-status"},e._l(e.sortedKeyboards.badlist,(function(t){return r("div",{key:e.sortedKeyboards.bad[t].key,staticClass:"keyboard-status keyboard-failed",attrs:{title:e.sortedKeyboards.bad[t].title},on:{click:function(r){return e.showErrors(t)}}},[e._v(" "+e._s(e.sortedKeyboards.bad[t].vendor)+" "),r("br"),e._v(" "+e._s(e.sortedKeyboards.bad[t].keyboard)+" ")])})),0),r("h3",[e._v("Builds Passing ("+e._s(e.sortedKeyboards.goodlist.length)+")")]),r("div",{staticClass:"build-status"},e._l(e.sortedKeyboards.goodlist,(function(t){return r("div",{key:e.sortedKeyboards.good[t].key,staticClass:"keyboard-status keyboard-passed",attrs:{title:e.sortedKeyboards.good[t].title},on:{click:function(r){return e.showErrors(t)}}},[e._v(" "+e._s(e.sortedKeyboards.good[t].vendor)+" "),r("br"),e._v(" "+e._s(e.sortedKeyboards.good[t].keyboard)+" ")])})),0),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showErrorPane,expression:"showErrorPane"}],staticClass:"error-pane",on:{click:e.hideErrors}},[e._m(0),r("div",{staticClass:"error-text"},[r("pre",[e._v("       "+e._s(e.errorLog)+"\n      ")])])])])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"error-title"},[r("h4",[e._v("Detailed Error Log")])])}],d=(r("4de4"),r("caad"),r("c975"),r("fb6a"),r("2532"),r("bc3a")),l=r.n(d),c=r("c5a2"),u=r.n(c),f=r("ec69"),b=r.n(f),p={name:"ErrorReport",components:{},data:function(){return{loading:!0,keyboards:{},sortedKeyboards:{good:{},bad:{},goodlist:[],badlist:[]},buildLog:{},errorLog:"",showErrorPane:!1,filter:"",loadtime:0}},mounted:function(){var e=this,t=performance.now();l.a.get("https://api.qmk.fm/v1/keyboards/build_log").then((function(t){200===t.status&&(e.buildLog=t.data,e.sortKeyboards())})).then((function(){e.loading=!1,e.loadtime=performance.now()-t}))},methods:{showErrors:function(e){this.errorLog=this.buildLog[e].message,this.showErrorPane=!0},hideErrors:function(){this.showErrorPane=!1},filterKeyboards:function(){this.sortKeyboards()},sortKeyboards:function(){var e=this,t=u()(this.buildLog,(function(t,r,o){var n=o.indexOf("/");if(n<0&&(n=o.length),""!==e.filter&&!o.toLowerCase().includes(e.filter.toLowerCase()))return t;var s=new Date(1e3*r.last_tested);return o={name:name,key:o,vendor:o.slice(0,n),keyboard:o.slice(n+1,o.length),compiler_output:r.message},o.title="Last Tested: "+s.toISOString(),r.works?t.good[o.key]=o:t.bad[o.key]=o,t}),{good:{},bad:{},goodlist:[],badlist:[]});t.goodlist=b()(t.good).sort(),t.badlist=b()(t.bad).sort(),this.sortedKeyboards=t}}},v=p,h=(r("1dd2"),r("2877")),y=Object(h["a"])(v,a,i,!1,null,"1c1022be",null),g=y.exports,m={name:"App",components:{ErrorReport:g}},_=m,w=(r("034f"),Object(h["a"])(_,n,s,!1,null,null,null)),k=w.exports,K=r("ecee"),E=r("c074"),x=r("ad3d");K["c"].add(E["a"]),o["a"].component("font-awesome-icon",x["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(k)}}).$mount("#app")},"718a":function(e,t,r){},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.1f58ac8a.js.map