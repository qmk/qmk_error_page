(function(){"use strict";var e={8609:function(e,r,o){o(6992),o(8674),o(9601),o(7727);var t=o(144),n=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{attrs:{id:"app"}},[o("ErrorReport")],1)},s=[],i=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",[o("h1",[e._v("QMK API Keyboard Status")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"keyboard-filter",attrs:{placeholder:"filter keyboards"},domProps:{value:e.filter},on:{input:[function(r){r.target.composing||(e.filter=r.target.value)},e.filterKeyboards]}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading"},[o("font-awesome-icon",{attrs:{icon:"atom",spin:"",size:"6x","fixed-width":""}}),o("h2",[e._v("Loading Data")])],1),e.loading?e._e():o("div",[o("h5",[e._v("Loaded in "+e._s(e.loadtime/1e3)+" seconds")]),o("h3",[e._v("Builds Failing ("+e._s(e.sortedKeyboards.badlist.length)+")")]),o("div",{staticClass:"build-status"},e._l(e.sortedKeyboards.badlist,(function(r){return o("div",{key:e.sortedKeyboards.bad[r].key,staticClass:"keyboard-status keyboard-failed",attrs:{title:e.sortedKeyboards.bad[r].title},on:{click:function(o){return e.showErrors(r)}}},[e._v(" "+e._s(e.sortedKeyboards.bad[r].vendor)+" "),o("br"),e._v(" "+e._s(e.sortedKeyboards.bad[r].keyboard)+" ")])})),0),o("h3",[e._v("Builds Passing ("+e._s(e.sortedKeyboards.goodlist.length)+")")]),o("div",{staticClass:"build-status"},e._l(e.sortedKeyboards.goodlist,(function(r){return o("div",{key:e.sortedKeyboards.good[r].key,staticClass:"keyboard-status keyboard-passed",attrs:{title:e.sortedKeyboards.good[r].title},on:{click:function(o){return e.showErrors(r)}}},[e._v(" "+e._s(e.sortedKeyboards.good[r].vendor)+" "),o("br"),e._v(" "+e._s(e.sortedKeyboards.good[r].keyboard)+" ")])})),0),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showErrorPane,expression:"showErrorPane"}],staticClass:"backdrop",on:{click:e.hideErrors}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showErrorPane,expression:"showErrorPane"}],staticClass:"error-pane"},[e._m(0),o("div",{staticClass:"error-text"},[o("pre",{domProps:{innerHTML:e._s(e.errorLog)}})])])])])},a=[function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"error-title"},[o("h4",[e._v("Detailed Error Log")])])}],d=(o(7327),o(1539),o(6699),o(2023),o(7042),o(2222),o(2707),o(9669)),l=o.n(d),u=o(4061),c=o.n(u),f=o(3674),v=o.n(f),b=o(2165),h=o(7174),p=o.n(h),g={name:"ErrorReport",components:{},data:function(){return{loading:!0,keyboards:{},sortedKeyboards:{good:{},bad:{},goodlist:[],badlist:[]},buildLog:{},errorLog:"",showErrorPane:!1,filter:"",loadtime:0,ansiConverter:new(p())({escapeXML:!0})}},mounted:function(){var e=this,r=performance.now();l().get("https://api.qmk.fm/v1/keyboards/build_log").then((function(r){200===r.status&&(e.buildLog=r.data,e.sortKeyboards())})).then((function(){e.loading=!1,e.loadtime=performance.now()-r}))},methods:{showErrors:function(e){this.errorLog=this.ansiConverter.toHtml(this.buildLog[e].message),this.showErrorPane=!0},hideErrors:function(){this.showErrorPane=!1},filterKeyboards:function(){this.sortKeyboards()},sortKeyboards:function(){var e=this,r=c()(this.buildLog,(function(r,o,t){var n=t.indexOf("/");if(n<0&&(n=t.length),""!==e.filter&&!t.toLowerCase().includes(e.filter.toLowerCase()))return r;var s=new Date(1e3*o.last_tested);return t={name:name,key:t,vendor:t.slice(0,n),keyboard:t.slice(n+1,t.length),compiler_output:o.message},t.title="Last tested ".concat((0,b.WU)(s)," (").concat(s.toLocaleString(),")\n").concat(s.toISOString()),o.works?r.good[t.key]=t:r.bad[t.key]=t,r}),{good:{},bad:{},goodlist:[],badlist:[]});r.goodlist=v()(r.good).sort(),r.badlist=v()(r.bad).sort(),this.sortedKeyboards=r}}},m=g,y=o(1001),w=(0,y.Z)(m,i,a,!1,null,"0b64650b",null),_=w.exports,k={name:"App",components:{ErrorReport:_}},K=k,E=(0,y.Z)(K,n,s,!1,null,null,null),C=E.exports,L=o(8947),x=o(1436),O=o(7810);L.vI.add(x._zQ),t.Z.component("font-awesome-icon",O.GN),t.Z.config.productionTip=!1,new t.Z({render:function(e){return e(C)}}).$mount("#app")}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var s=r[t]={id:t,loaded:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=e,function(){var e=[];o.O=function(r,t,n,s){if(!t){var i=1/0;for(u=0;u<e.length;u++){t=e[u][0],n=e[u][1],s=e[u][2];for(var a=!0,d=0;d<t.length;d++)(!1&s||i>=s)&&Object.keys(o.O).every((function(e){return o.O[e](t[d])}))?t.splice(d--,1):(a=!1,s<i&&(i=s));if(a){e.splice(u--,1);var l=n();void 0!==l&&(r=l)}}return r}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[t,n,s]}}(),function(){o.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(r,{a:r}),r}}(),function(){o.d=function(e,r){for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};o.O.j=function(r){return 0===e[r]};var r=function(r,t){var n,s,i=t[0],a=t[1],d=t[2],l=0;if(i.some((function(r){return 0!==e[r]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(d)var u=d(o)}for(r&&r(t);l<i.length;l++)s=i[l],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},t=self["webpackChunkqmk_error_page"]=self["webpackChunkqmk_error_page"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(8609)}));t=o.O(t)})();
//# sourceMappingURL=app-legacy.1d874e4c.js.map