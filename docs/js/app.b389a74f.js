(function(){"use strict";var e={3582:function(e,r,t){var o=t(144),s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("ErrorReport")],1)},n=[],i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",[e._v("QMK API Keyboard Status")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"keyboard-filter",attrs:{placeholder:"filter keyboards"},domProps:{value:e.filter},on:{input:[function(r){r.target.composing||(e.filter=r.target.value)},e.filterKeyboards]}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading"},[t("font-awesome-icon",{attrs:{icon:"atom",spin:"",size:"6x","fixed-width":""}}),t("h2",[e._v("Loading Data")])],1),e.loading?e._e():t("div",[t("h5",[e._v("Loaded in "+e._s(e.loadtime/1e3)+" seconds")]),t("h3",[e._v("Builds Failing ("+e._s(e.sortedKeyboards.badlist.length)+")")]),t("div",{staticClass:"build-status"},e._l(e.sortedKeyboards.badlist,(function(r){return t("div",{key:e.sortedKeyboards.bad[r].key,staticClass:"keyboard-status keyboard-failed",attrs:{title:e.sortedKeyboards.bad[r].title},on:{click:function(t){return e.showErrors(r)}}},[e._v(" "+e._s(e.sortedKeyboards.bad[r].vendor)+" "),t("br"),e._v(" "+e._s(e.sortedKeyboards.bad[r].keyboard)+" ")])})),0),t("h3",[e._v("Builds Passing ("+e._s(e.sortedKeyboards.goodlist.length)+")")]),t("div",{staticClass:"build-status"},e._l(e.sortedKeyboards.goodlist,(function(r){return t("div",{key:e.sortedKeyboards.good[r].key,staticClass:"keyboard-status keyboard-passed",attrs:{title:e.sortedKeyboards.good[r].title},on:{click:function(t){return e.showErrors(r)}}},[e._v(" "+e._s(e.sortedKeyboards.good[r].vendor)+" "),t("br"),e._v(" "+e._s(e.sortedKeyboards.good[r].keyboard)+" ")])})),0),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showErrorPane,expression:"showErrorPane"}],staticClass:"backdrop",on:{click:e.hideErrors}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showErrorPane,expression:"showErrorPane"}],staticClass:"error-pane"},[e._m(0),t("div",{staticClass:"error-text"},[t("pre",[e._v("       "+e._s(e.errorLog)+"\n      ")])])])])])},a=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"error-title"},[t("h4",[e._v("Detailed Error Log")])])}],d=t(9669),l=t.n(d),u=t(4061),c=t.n(u),f=t(3674),h=t.n(f),b=t(2165),v={name:"ErrorReport",components:{},data:()=>({loading:!0,keyboards:{},sortedKeyboards:{good:{},bad:{},goodlist:[],badlist:[]},buildLog:{},errorLog:"",showErrorPane:!1,filter:"",loadtime:0}),mounted(){const e=performance.now();l().get("https://api.qmk.fm/v1/keyboards/build_log").then((e=>{200===e.status&&(this.buildLog=e.data,this.sortKeyboards())})).then((()=>{this.loading=!1,this.loadtime=performance.now()-e}))},methods:{showErrors(e){this.errorLog=this.buildLog[e].message,this.showErrorPane=!0},hideErrors(){this.showErrorPane=!1},filterKeyboards(){this.sortKeyboards()},sortKeyboards(){let e=c()(this.buildLog,((e,r,t)=>{let o=t.indexOf("/");if(o<0&&(o=t.length),""!==this.filter&&!t.toLowerCase().includes(this.filter.toLowerCase()))return e;let s=new Date(1e3*r.last_tested);return t={name:name,key:t,vendor:t.slice(0,o),keyboard:t.slice(o+1,t.length),compiler_output:r.message},t.title=`Last tested ${(0,b.WU)(s)} (${s.toLocaleString()})\n${s.toISOString()}`,r.works?e.good[t.key]=t:e.bad[t.key]=t,e}),{good:{},bad:{},goodlist:[],badlist:[]});e.goodlist=h()(e.good).sort(),e.badlist=h()(e.bad).sort(),this.sortedKeyboards=e}}},p=v,g=t(1001),m=(0,g.Z)(p,i,a,!1,null,"26dce018",null),y=m.exports,_={name:"App",components:{ErrorReport:y}},w=_,k=(0,g.Z)(w,s,n,!1,null,null,null),K=k.exports,E=t(8947),x=t(1436),C=t(7810);E.vI.add(x._zQ),o.Z.component("font-awesome-icon",C.GN),o.Z.config.productionTip=!1,new o.Z({render:e=>e(K)}).$mount("#app")}},r={};function t(o){var s=r[o];if(void 0!==s)return s.exports;var n=r[o]={id:o,loaded:!1,exports:{}};return e[o](n,n.exports,t),n.loaded=!0,n.exports}t.m=e,function(){var e=[];t.O=function(r,o,s,n){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],n=e[u][2];for(var a=!0,d=0;d<o.length;d++)(!1&n||i>=n)&&Object.keys(t.O).every((function(e){return t.O[e](o[d])}))?o.splice(d--,1):(a=!1,n<i&&(i=n));if(a){e.splice(u--,1);var l=s();void 0!==l&&(r=l)}}return r}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,s,n]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,o){var s,n,i=o[0],a=o[1],d=o[2],l=0;if(i.some((function(r){return 0!==e[r]}))){for(s in a)t.o(a,s)&&(t.m[s]=a[s]);if(d)var u=d(t)}for(r&&r(o);l<i.length;l++)n=i[l],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(u)},o=self["webpackChunkqmk_error_page"]=self["webpackChunkqmk_error_page"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3582)}));o=t.O(o)})();
//# sourceMappingURL=app.b389a74f.js.map