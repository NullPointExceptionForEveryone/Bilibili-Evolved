!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download"]=t():e["video/download"]=t()}(self,(function(){return function(){var e={431:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".download-video-panel {\n  top: 100px;\n  left: 50%;\n  transform: translateX(-50%) scale(0.95);\n  transition: 0.2s ease-out;\n  z-index: 1000;\n  width: 320px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 12px;\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(136,136,136,0.13333);\n  box-sizing: border-box;\n}\nbody.dark .download-video-panel {\n  background-color: #282828;\n  color: #eee;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\n.download-video-panel.open {\n  transform: translateX(-50%);\n}\n.download-video-panel > :not(:first-child) {\n  margin-top: 12px;\n}\n.download-video-panel .be-textbox,\n.download-video-panel .be-textarea {\n  flex-grow: 1;\n}\n.download-video-panel-header {\n  display: flex;\n  align-items: center;\n  align-self: stretch;\n}\n.download-video-panel-header .title {\n  font-size: 16px;\n  font-weight: bold;\n  flex-grow: 1;\n  margin: 0 8px;\n}\n.download-video-panel-header .be-button {\n  padding: 4px;\n}\n.download-video-panel .download-video-config-item {\n  display: flex;\n  align-items: center;\n}\n.download-video-panel .download-video-config-item .download-video-config-title {\n  margin-right: 8px;\n}\n.download-video-panel .download-video-config-item.error {\n  color: #E57373;\n}\n.download-video-panel .download-video-config-section {\n  align-self: stretch;\n}\n.download-video-panel .download-video-config-description {\n  opacity: 0.5;\n  margin-top: 4px;\n}\n.download-video-panel-footer {\n  align-self: stretch;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n}\n.download-video-panel .run-download {\n  font-size: 13px;\n  padding: 6px 12px;\n}",""]),e.exports=i},623:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".episodes-picker-header {\n  display: flex;\n  align-items: center;\n}\n.episodes-picker-checked-ratio {\n  flex-grow: 1;\n  margin-left: 4px;\n}\n.episodes-picker-actions {\n  display: flex;\n  align-items: center;\n}\n.episodes-picker-actions .be-button {\n  padding: 4px;\n}\n.episodes-picker-actions .be-button.invert-selection .be-icon {\n  font-size: 14px;\n}\n.episodes-picker-actions .be-button.select-all .be-icon, .episodes-picker-actions .be-button.deselect-all .be-icon {\n  transform: translateY(1px);\n}\n.episodes-picker-items {\n  max-height: 400px;\n  overflow: auto;\n}\n.episodes-picker-items:not(:empty) {\n  margin-top: 4px;\n  border: 1px solid rgba(136,136,136,0.26667);\n  border-radius: 6px;\n}\n.episodes-picker-items .be-check-box {\n  padding: 2px 6px;\n}\n.episodes-picker-items .episode-duration {\n  margin-right: 4px;\n  text-align: right;\n  flex: 1 1 0;\n  opacity: 0.5;\n}",""]),e.exports=i},233:function(e,t,n){var i=n(645)((function(e){return e[1]}));i.push([e.id,".single-video-info.download-video-config-section {\n  height: 125px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.single-video-info.download-video-config-section img {\n  height: 125px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 8px;\n}\n.single-video-info.download-video-config-section img.shadow {\n  position: absolute;\n  filter: blur(8px) brightness(0.8);\n  transform: scaleY(0.95) translateY(4px);\n  z-index: -1;\n  opacity: 0.3;\n}",""]),e.exports=i},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var s=this[a][0];null!=s&&(o[s]=!0)}for(var r=0;r<e.length;r++){var d=[].concat(e[r]);i&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function r(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},i=[],o=0;o<e.length;o++){var a=e[o],d=t.base?a[0]+t.base:a[0],l=n[d]||0,c="".concat(d," ").concat(l);n[d]=l+1;var u=r(c),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(s[u].references++,s[u].updater(p)):s.push({identifier:c,updater:h(p,t),references:1}),i.push(c)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function f(e,t,n){var i=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,v=0;function h(e,t){var n,i,o;if(t.singleton){var a=v++;n=m||(m=l(t)),i=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=l(t),i=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=r(n[i]);s[o].references--}for(var a=d(e,t),l=0;l<n.length;l++){var c=r(n[l]);0===s[c].references&&(s[c].updater(),s.splice(c,1))}n=a}}}},896:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VPopup",{staticClass:"download-video-panel",attrs:{"trigger-element":e.triggerElement},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[n("div",{staticClass:"download-video-panel-header"},[n("VIcon",{attrs:{icon:"mdi-download"}}),e._v(" "),n("div",{staticClass:"title"},[e._v("\n      下载视频\n    ")]),e._v(" "),n("VButton",{attrs:{type:"transparent",title:"关闭"},on:{click:function(t){e.open=!1}}},[n("VIcon",{attrs:{icon:"mdi-close",size:20}})],1)],1),e._v(" "),e.selectedInput?n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("\n      输入源:\n    ")]),e._v(" "),n("VDropdown",{attrs:{items:e.inputs},model:{value:e.selectedInput,callback:function(t){e.selectedInput=t},expression:"selectedInput"}})],1):e._e(),e._v(" "),0===e.inputs.length?n("div",{staticClass:"download-video-config-item error"},[e._v("\n    没有匹配的输入源, 请确保安装了适合此页面的插件.\n  ")]):e._e(),e._v(" "),e.selectedInput&&e.selectedInput.component?n(e.selectedInput.component,{ref:"inputOptions",tag:"component"}):e._e(),e._v(" "),e.selectedApi?n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("\n      格式:\n    ")]),e._v(" "),n("VDropdown",{attrs:{items:e.apis},model:{value:e.selectedApi,callback:function(t){e.selectedApi=t},expression:"selectedApi"}})],1):e._e(),e._v(" "),e.selectedApi&&e.selectedApi.description?n("div",{staticClass:"download-video-config-description",domProps:{innerHTML:e._s(e.selectedApi.description)}}):e._e(),e._v(" "),e.selectedQuality?n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("\n      清晰度:\n    ")]),e._v(" "),n("VDropdown",{attrs:{items:e.filteredQualities},on:{change:function(t){return e.saveSelectedQuality()}},model:{value:e.selectedQuality,callback:function(t){e.selectedQuality=t},expression:"selectedQuality"}})],1):e._e(),e._v(" "),!e.testData.multiple&&e.selectedQuality?[e.testData.videoInfo?n("div",{staticClass:"download-video-config-description"},[e._v("\n      预计大小: "+e._s(e.formatFileSize(e.testData.videoInfo.totalSize))+"\n    ")]):e._e(),e._v(" "),null===e.testData.videoInfo?n("div",{staticClass:"download-video-config-description"},[e._v("\n      正在计算大小\n    ")]):e._e()]:e._e(),e._v(" "),e._l(e.assetsWithOptions,(function(e){return n(e.component,{key:e.name,ref:"assetsOptions",refInFor:!0,tag:"component",attrs:{name:e.name}})})),e._v(" "),e.selectedOutput?n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[e._v("\n      输出方式:\n    ")]),e._v(" "),n("VDropdown",{attrs:{items:e.outputs},model:{value:e.selectedOutput,callback:function(t){e.selectedOutput=t},expression:"selectedOutput"}})],1):e._e(),e._v(" "),e.selectedOutput&&e.selectedOutput.component?n(e.selectedOutput.component,{ref:"outputOptions",tag:"component"}):e._e(),e._v(" "),n("div",{staticClass:"download-video-panel-footer"},[n("VButton",{staticClass:"run-download",attrs:{type:"primary",disabled:!e.canStartDownload},on:{click:function(t){return e.startDownload(e.$refs.outputOptions,e.selectedOutput)}}},[e._v("\n      开始\n    ")])],1)],2)};i._withStripped=!0;var o=coreApis.settings,a=coreApis.toast,s=coreApis.utils,r=n(729),d=coreApis.utils.formatters,l=coreApis.ui,c=coreApis.pluginApis.data,u=coreApis.utils.sort;const p=[{name:"720P",displayName:"高清 720P",value:64},{name:"1080P",displayName:"高清 1080P",value:80}],f=[{name:"HDR",displayName:"真彩 HDR",value:125},{name:"4K",displayName:"超清 4K",value:120},{name:"1080P60",displayName:"高清 1080P60",value:116},{name:"1080P+",displayName:"高清 1080P+",value:112},{name:"720P60",displayName:"高清 720P60",value:74}],m=[...f,...p,{name:"480P",displayName:"清晰 480P",value:32},{name:"320P",displayName:"流畅 320P",value:16}].sort((0,u.descendingSort)((e=>e.value)));var v=n(663),h=coreApis.utils.title,g=coreApis.utils.urls,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"episodes-picker download-video-config-section"},[n("div",{staticClass:"episodes-picker-header"},[n("div",{staticClass:"episodes-picker-title"},[e._v("\n      选集:\n    ")]),e._v(" "),n("div",{staticClass:"episodes-picker-checked-ratio"},[e._v("\n      "+e._s(e.checkedRatio)+"\n    ")]),e._v(" "),n("div",{staticClass:"episodes-picker-actions"},[n("VButton",{staticClass:"select-all",attrs:{title:"全选",type:"transparent"},on:{click:function(t){e.forEachItem((function(e){return e.isChecked=!0}))}}},[n("VIcon",{attrs:{size:16,icon:"mdi-checkbox-multiple-marked-circle"}})],1),e._v(" "),n("VButton",{staticClass:"deselect-all",attrs:{title:"全不选",type:"transparent"},on:{click:function(t){e.forEachItem((function(e){return e.isChecked=!1}))}}},[n("VIcon",{attrs:{size:16,icon:"mdi-checkbox-multiple-blank-circle-outline"}})],1),e._v(" "),n("VButton",{staticClass:"invert-selection",attrs:{title:"反选",type:"transparent"},on:{click:function(t){e.forEachItem((function(e){return e.isChecked=!e.isChecked}))}}},[n("VIcon",{attrs:{size:16,icon:"mdi-circle-slice-4"}})],1)],1)]),e._v(" "),n("div",{staticClass:"episodes-picker-items"},e._l(e.episodeItems,(function(t){return n("div",{key:t.key,staticClass:"episodes-picker-item"},[n("CheckBox",{attrs:{"icon-position":"left"},model:{value:t.isChecked,callback:function(n){e.$set(t,"isChecked",n)},expression:"item.isChecked"}},[n("span",{staticClass:"episode-title"},[e._v("\n          "+e._s(t.title)+"\n        ")]),e._v(" "),t.durationText?n("span",{staticClass:"episode-duration"},[e._v("\n          "+e._s(t.durationText)+"\n        ")]):e._e()])],1)})),0)])};w._withStripped=!0;var b=Vue.extend({components:{VButton:l.VButton,VIcon:l.VIcon,CheckBox:l.CheckBox},props:{api:{type:Function,required:!0}},data:()=>({episodeItems:[],maxCheckedItems:32}),computed:{checkedRatio(){return`(${this.episodeItems.filter((e=>e.isChecked)).length}/${this.episodeItems.length})`},inputItems(){return this.episodeItems.map((e=>e.inputItem))},checkedInputItems(){return this.episodeItems.filter((e=>e.isChecked)).map((e=>e.inputItem))}},created(){this.getEpisodeItems()},methods:{forEachItem(e){this.episodeItems.forEach(e)},async getEpisodeItems(){this.episodeItems.length>0||(this.episodeItems=await this.api(this))}}}),y=n(379),x=n.n(y),_=n(623),I=n.n(_),k={insert:"head",singleton:!1},C=(x()(I(),k),I().locals,n(900)),V=(0,C.Z)(b,w,[],!1,null,null,null);V.options.__file="registry/lib/components/video/download/inputs/EpisodesPicker.vue";var A=V.exports;const D=e=>Vue.extend({computed:{checkedInputItems(){return this.$refs.picker.checkedInputItems}},render:t=>t(A,{props:{api:e},ref:"picker"})}),E={name:"bangumi.batch",displayName:"当前番剧 (多P)",match:g.bangumiUrls,getInputs:async e=>{var t;return null!==(t=null==e?void 0:e.checkedInputItems)&&void 0!==t?t:[]},component:async()=>D((async e=>{var t,n;const i=document.querySelector("meta[property='og:url']");if(null===i)return(0,r.logError)("获取番剧数据失败: 无法找到 Season ID"),[];const a=null===(t=i.getAttribute("content"))||void 0===t||null===(n=t.match(/play\/ss(\d+)/))||void 0===n?void 0:n[1];if(void 0===a)return(0,r.logError)("获取番剧数据失败: 无法解析 Season ID"),[];const s=await(0,v.getJson)(`https://api.bilibili.com/pgc/web/season/section?season_id=${a}`);if(0!==s.code)return(0,r.logError)(`获取番剧数据失败: 无法获取番剧集数列表, message=${s.message}`),[];const l=s.result.main_section.episodes;return l.map(((t,n)=>{var i;const a=t.long_title?t.title:(n+1).toString(),s=t.long_title?t.long_title:t.title;return{key:t.cid,title:`${a} - ${s}`,isChecked:n<e.maxCheckedItems,inputItem:{aid:t.aid,cid:t.cid,title:(0,h.formatTitle)((0,o.getGeneralSettings)().batchFilenameFormat,!1,{ep:s,cid:t.cid,aid:t.aid,n:null!==(i=(0,d.formatNumber)(parseFloat(a),l.length))&&void 0!==i?i:s}),allowQualityDrop:!0}}}))}))},$={name:"video.batch",displayName:"当前视频 (多P)",match:g.videoUrls,getInputs:async e=>{var t;return null!==(t=null==e?void 0:e.checkedInputItems)&&void 0!==t?t:[]},component:async()=>D((async e=>{const{aid:t}=unsafeWindow,n=`https://api.bilibili.com/x/web-interface/view?aid=${t}`,i=await(0,v.getJson)(n);if(0!==i.code)return(0,r.logError)(`获取视频选集列表失败, message = ${i.message}`),[];const{pages:a}=i.data;return void 0===a?((0,r.logError)("获取视频选集列表失败, 没有找到选集信息."),[]):a.map(((n,i)=>({key:n.cid,title:`P${n.page} ${n.part}`,isChecked:i<e.maxCheckedItems,durationText:(0,d.formatDuration)(n.duration),inputItem:{allowQualityDrop:!0,title:(0,h.formatTitle)((0,o.getGeneralSettings)().batchFilenameFormat,!1,{cid:n.cid,n:(0,d.formatNumber)(n.page,a.length),ep:n.part}),cid:n.cid,aid:t}})))}))},S={name:"video",displayName:"当前视频 / 番剧",match:g.videoAndBangumiUrls,getInputs:async()=>[{aid:unsafeWindow.aid,cid:unsafeWindow.cid,title:(0,h.getFriendlyTitle)(!0)}],component:()=>Promise.resolve().then(n.bind(n,731)).then((e=>e.default))},P=(e,t)=>{e.quality&&t.currentQuality.value!==e.quality.value&&(e.allowQualityDrop?console.warn(`'${e.title}' 不支持选择的清晰度${e.quality.displayName}, 已降级为${t.currentQuality.displayName}`):(e=>{if(f.find((t=>t.value===e)))throw new Error("您选择的清晰度需要大会员, 请更改清晰度后重试.");if(p.find((t=>t.value===e)))throw new Error("您选择的清晰度需要先登录.");throw new Error("获取下载链接失败, 请尝试更换清晰度或更换格式.")})(e.quality.value))};var N=coreApis.download;function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class q{constructor(e){O(this,"input",void 0),O(this,"fragments",void 0),O(this,"qualities",void 0),O(this,"currentQuality",void 0),O(this,"jsonData",void 0),Object.assign(this,e)}get totalSize(){return lodash.sumBy(this.fragments,(e=>e.size))}get totalLength(){return lodash.sumBy(this.fragments,(e=>e.length))}get titledFragments(){return this.fragments.map(((e,t)=>{const n=this.fragments.filter((t=>t.extension===e.extension)).length>1?` - ${(0,d.formatNumber)(t+1,this.fragments.length)}`:"";return{...e,title:`${this.input.title}${n}${e.extension}`}}))}}class j{constructor(e){this.infos=e,O(this,"inputs",[]),O(this,"extraAssets",[]),this.inputs=e.map((e=>e.input))}get isSingleVideo(){return this.inputs.length<2}async downloadExtraAssets(){console.log("[downloadExtraAssets]",this.extraAssets);const e=`${(0,h.getFriendlyTitle)(!1)}.zip`;await new N.DownloadPackage(this.extraAssets).emit(e)}}
/* spell-checker: disable */
const U=[".mp4",".m4a"],T=e=>({url:e.downloadUrl,backupUrls:e.backupUrls,length:e.duration,size:Math.trunc(e.bandWidth*e.duration/8)}),Q=async(e,t)=>{var n;const{aid:i,cid:o,quality:a}=e,r={avid:i,cid:o,qn:null!==(n=null==a?void 0:a.value)&&void 0!==n?n:"",otype:"json",fourk:1,fnver:0,fnval:80},d=`https://api.bilibili.com/x/player/playurl?${(0,s.formData)(r)}`,l=await(0,v.bilibiliApi)((0,v.getJsonWithCredentials)(d),"获取视频链接失败");if(!l.dash)throw new Error("此视频没有 dash 格式, 请改用其他格式.");const c=m.find((e=>e.value===l.quality)),{duration:p,video:f,audio:h}=l.dash,g=f.filter((e=>e.id===c.value)).map((e=>{const t=(()=>{switch(e.codecid){case 12:return"HEVC/H.265";default:case 7:return"AVC/H.264"}})();return{quality:c,width:e.width,height:e.height,codecs:e.codecs,codecId:e.codecid,bandWidth:e.bandwidth,frameRate:e.frameRate,backupUrls:(e.backupUrl||e.backup_url||[]).map((e=>e.replace("http:","https:"))),downloadUrl:(e.baseUrl||e.base_url||"").replace("http:","https:"),duration:p,videoCodec:t}})),w=(e=>{const{videoDashes:t,audioDashes:n,videoCodec:i}=e,o=(()=>{const e=e=>e.videoCodec===i;return t.some(e)?t.filter(e).sort((0,u.ascendingSort)((e=>e.bandWidth)))[0]:t.sort((0,u.ascendingSort)((e=>e.bandWidth)))[0]})();if(n.length>0){const e=n.sort((0,u.descendingSort)((e=>e.bandWidth)))[0];return[T(o),T(e)]}return[T(o)]})({audioDashes:(h||[]).map((e=>({bandWidth:e.bandwidth,codecs:e.codecs,codecId:e.codecid,backupUrls:(e.backupUrl||e.backup_url||[]).map((e=>e.replace("http:","https:"))),downloadUrl:(e.baseUrl||e.base_url||"").replace("http:","https:"),duration:p}))),videoDashes:g,videoCodec:t}).map(((e,t)=>{var n;return{...e,extension:null!==(n=U[t])&&void 0!==n?n:".m4s"}})),b=l.accept_quality.map((e=>m.find((t=>t.value===e)))).filter((e=>void 0!==e)),y=new q({input:e,jsonData:l,fragments:w,qualities:b,currentQuality:c});return P(e,y),y},z={name:"video.dash.avc",displayName:"dash (AVC/H.264)",description:"音画分离的 mp4 格式, 编码为H.264, 兼容性较好. 下载后可以合并为单个 mp4 文件.",downloadVideoInfo:async e=>Q(e,"AVC/H.264")},B={name:"video.dash.hevc",displayName:"dash (HEVC/H.265)",description:"音画分离的 mp4 格式, 编码为H.265, 体积较小, 兼容性较差. 下载后可以合并为单个 mp4 文件.",downloadVideoInfo:async e=>Q(e,"HEVC/H.265")},W=(e,t)=>{const n=e=>t.length>e?t[e]:t[t.length-1];return{fragments:e.durl.map(((e,t)=>({length:e.length,size:e.size,url:e.url,backupUrls:e.backup_url,extension:n(t)}))),qualities:e.accept_quality.map((e=>m.find((t=>t.value===e)))).filter((e=>void 0!==e)),currentQuality:m.find((t=>t.value===e.quality))}},F={name:"video.flv",displayName:"flv",description:"使用 flv 格式下载, 兼容 H.264 编码.",downloadVideoInfo:async e=>{var t;const{aid:n,cid:i,quality:o}=e,a={avid:n,cid:i,qn:null!==(t=null==o?void 0:o.value)&&void 0!==t?t:"",otype:"json",fourk:1,fnver:0,fnval:0},r=`https://api.bilibili.com/x/player/playurl?${(0,s.formData)(a)}`,d=await(0,v.bilibiliApi)((0,v.getJsonWithCredentials)(r),"获取视频链接失败"),l=new q({input:e,jsonData:d,...W(d,[".flv"])});return P(e,l),l}},[H]=(0,c.registerAndGetData)("downloadVideo.inputs",[S,$,E]),[M]=(0,c.registerAndGetData)("downloadVideo.apis",[F,z,B]),[R]=(0,c.registerAndGetData)("downloadVideo.assets",[]),[G]=(0,c.registerAndGetData)("downloadVideo.outputs",[{name:"consoleLogDemo",displayName:"Toast",runAction:async e=>{const t=e.infos.flatMap((e=>e.titledFragments)),n=t.map((e=>e.url)).join("\n");a.Toast.show(t.map((e=>`<a class="link" href="${e.url}" download="${e.title}">${e.title}</a>`)).join("\n"),"download video"),console.log(n),console.log(e)}}]),{basicConfig:J}=(0,o.getComponentSettings)("downloadVideo").options;var L=Vue.extend({components:{VPopup:l.VPopup,VButton:l.VButton,VDropdown:l.VDropdown,VIcon:l.VIcon},props:{triggerElement:{required:!0}},data(){const e=J.api,t=J.output;return{open:!1,busy:!1,testData:{videoInfo:null,multiple:!1},assets:R,qualities:[],selectedQuality:void 0,inputs:[],selectedInput:void 0,apis:M,selectedApi:M.find((t=>t.name===e))||M[0],outputs:G,selectedOutput:G.find((e=>e.name===t))||G[0]}},computed:{assetsWithOptions(){return this.assets.filter((e=>e.component))},filteredQualities(){return 0===this.qualities.length?m:this.qualities},canStartDownload(){if(this.busy||!this.open)return!1;return!Object.entries(this).filter((([e])=>e.startsWith("selected"))).some((([,e])=>!e))}},watch:{selectedInput(e){void 0!==e&&this.updateTestVideoInfo()},selectedApi(e){void 0!==e&&(this.updateTestVideoInfo(),J.api=e.name)},selectedOutput(e){void 0!==e&&(J.output=e.name)}},mounted(){coreApis.observer.videoChange((()=>{const e=H.filter((e=>{var t,n;return null===(t=null===(n=e.match)||void 0===n?void 0:n.some((e=>(0,s.matchUrlPattern)(e))))||void 0===t||t}));this.inputs=e,this.selectedInput=e[0]}))},methods:{formatFileSize:d.formatFileSize,saveSelectedQuality(){const e=this.selectedQuality;void 0!==e&&(J.quality=e.value,this.updateTestVideoInfo())},async getVideoItems(){const e=this.selectedInput;return await e.getInputs(this.$refs.inputOptions)},async updateTestVideoInfo(){if(!this.selectedInput)return;this.testData.videoInfo=null;const e=await this.getVideoItems();console.log("[updateTestVideoInfo]",e),this.testData.multiple=e.length>1;const t=this.selectedApi,[n]=e;if(!this.selectedQuality){const e=await t.downloadVideoInfo(n);if(this.qualities=e.qualities,this.selectedQuality=e.qualities[0],J.quality){const[t]=e.qualities.filter((e=>e.value<=J.quality));t&&(this.selectedQuality=t)}}try{n.quality=this.selectedQuality;const e=await t.downloadVideoInfo(n);this.testData.videoInfo=e}catch(e){this.testData.videoInfo=void 0}},async startDownload(e,t){try{this.busy=!0;const n=this.selectedInput,i=this.selectedApi,o=await n.getInputs(this.$refs.inputOptions);o.forEach((e=>{e.quality=this.selectedQuality}));const a=await Promise.all(o.map((e=>i.downloadVideoInfo(e)))),s=new j(a),r=(await Promise.all(R.map((e=>e.getAssets(a,this.$refs.assetsOptions.find((t=>t.$attrs.name===e.name))))))).flat();s.extraAssets.push(...r),await s.downloadExtraAssets(),await t.runAction(s,e)}catch(e){(0,r.logError)(e)}finally{this.busy=!1}}}}),Z=n(431),X=n.n(Z),Y={insert:"head",singleton:!1},K=(x()(X(),Y),X().locals,(0,C.Z)(L,i,[],!1,null,null,null));K.options.__file="registry/lib/components/video/download/DownloadVideo.vue";var ee=K.exports},81:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"multiple-widgets"},[n("DefaultWidget",{ref:"button",attrs:{name:"下载视频",icon:"mdi-download"},on:{mouseover:function(t){return e.createDownloadPanel()},click:function(t){return e.toggleDownloadPanel()}}})],1)};let o;i._withStripped=!0;var a=Vue.extend({components:{DefaultWidget:coreApis.ui.DefaultWidget},methods:{async createDownloadPanel(){if(!o){const e=document.createElement("div");document.body.appendChild(e);const t=await Promise.resolve().then(n.bind(n,896)).then((e=>e.default));o=new t({propsData:{triggerElement:this.$refs.button}}).$mount(e)}},async toggleDownloadPanel(){o&&(o.open=!o.open)}}}),s=(0,n(900).Z)(a,i,[],!1,null,null,null);s.options.__file="registry/lib/components/video/download/Widget.vue";var r=s.exports},731:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"single-video-info download-video-config-section"},[e.imageUrl?n("img",{staticClass:"shadow",attrs:{src:e.imageUrl}}):e._e(),e._v(" "),e.imageUrl?n("img",{attrs:{src:e.imageUrl}}):e._e()])};i._withStripped=!0;var o=coreApis.observer,a=n(729),s=n(663);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class d{constructor(e){r(this,"aid",void 0),r(this,"cid",void 0),r(this,"pageCount",void 0),r(this,"coverUrl",void 0),r(this,"tagId",void 0),r(this,"tagName",void 0),r(this,"title",void 0),r(this,"description",void 0),r(this,"up",void 0),r(this,"pages",void 0),r(this,"subtitles",void 0),this.aid=e}async fetchInfo(){let e;e=this.cid?`https://api.bilibili.com/x/web-interface/view?aid=${this.aid}&cid=${this.cid}`:`https://api.bilibili.com/x/web-interface/view?aid=${this.aid}`;const t=await(0,s.getJson)(e);if(0!==t.code)throw new Error(t.message);const{data:n}=t;return this.cid=n.cid,this.pageCount=n.videos,this.coverUrl=n.pic.replace("http:","https:"),this.tagId=n.tid,this.tagName=n.tname,this.title=n.title,this.description=n.desc,this.up={uid:n.owner.mid,name:n.owner.name,faceUrl:n.owner.face.replace("http:","https:")},this.pages=n.pages.map((e=>({cid:e.cid,title:e.part,pageNumber:e.page}))),this.subtitles=n.subtitle.list.map((e=>({id:e.id,languageCode:e.lan,language:e.lan_doc,url:e.subtitle_url.replace("http:","https:")}))),this}}var l=Vue.extend({data:()=>({imageUrl:""}),created(){(0,o.videoChange)((async()=>{const{aid:e}=unsafeWindow,t=new d(e);try{await t.fetchInfo()}catch(e){throw(0,a.logError)(e),e}this.imageUrl=t.coverUrl.replace("http:","https:")}))}}),c=n(379),u=n.n(c),p=n(233),f=n.n(p),m={insert:"head",singleton:!1},v=(u()(f(),m),f().locals,(0,n(900).Z)(l,i,[],!1,null,null,null));v.options.__file="registry/lib/components/video/download/inputs/video/SingleVideoInfo.vue";var h=v.exports},900:function(e,t,n){"use strict";function i(e,t,n,i,o,a,s,r){var d,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),s?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=d):o&&(d=r?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(e,t){return d.call(t),c(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:e,options:l}}n.d(t,{Z:function(){return i}})},663:function(e){"use strict";e.exports=coreApis.ajax},729:function(e){"use strict";e.exports=coreApis.utils.log}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";n.d(i,{component:function(){return t}});var e=coreApis.spinQuery;const t={name:"downloadVideo",displayName:"下载视频",entry:none,reload:none,unload:none,widget:{component:()=>Promise.resolve().then(n.bind(n,81)).then((e=>e.default)),condition:()=>(0,e.hasVideo)()},enabledByDefault:!0,tags:[componentsTags.video],options:{basicConfig:{defaultValue:{},displayName:"基础配置",hidden:!0}}}}(),i=i.component}()}));