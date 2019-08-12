(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{112:function(e,t,n){
/*!
 * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=n(2),r=n(8),l=n(0),s=function(){function e(t,n){var o=n.location,a=void 0===o?0:o,i=n.distance,l=void 0===i?100:i,s=n.threshold,p=void 0===s?.6:s,c=n.maxPatternLength,f=void 0===c?32:c,u=n.caseSensitive,m=void 0!==u&&u,g=n.tokenSeparator,d=void 0===g?/ +/g:g,y=n.findAllMatches,v=void 0!==y&&y,h=n.minMatchCharLength,C=void 0===h?1:h,S=n.id,b=void 0===S?null:S,P=n.keys,A=void 0===P?[]:P,x=n.shouldSort,I=void 0===x||x,k=n.getFn,w=void 0===k?r:k,_=n.sortFn,E=void 0===_?function(e,t){return e.score-t.score}:_,M=n.tokenize,T=void 0!==M&&M,D=n.matchAllTokens,L=void 0!==D&&D,N=n.includeMatches,O=void 0!==N&&N,j=n.includeScore,F=void 0!==j&&j,G=n.verbose,R=void 0!==G&&G;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:a,distance:l,threshold:p,maxPatternLength:f,isCaseSensitive:m,tokenSeparator:d,findAllMatches:v,minMatchCharLength:C,id:b,keys:A,includeMatches:O,includeScore:F,shouldSort:I,getFn:w,sortFn:E,verbose:R,tokenize:T,matchAllTokens:L},this.setCollection(t)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),o=n.tokenSearchers,a=n.fullSearcher,i=this._search(o,a),r=i.weights,l=i.results;return this._computeScore(r,l),this.options.shouldSort&&this._sort(l),t.limit&&"number"==typeof t.limit&&(l=l.slice(0,t.limit)),this._format(l)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),o=0,a=n.length;o<a;o+=1)t.push(new i(n[o],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,o={},a=[];if("string"==typeof n[0]){for(var i=0,r=n.length;i<r;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:o,results:a,tokenSearchers:e,fullSearcher:t});return{weights:null,results:a}}for(var l={},s=0,p=n.length;s<p;s+=1)for(var c=n[s],f=0,u=this.options.keys.length;f<u;f+=1){var m=this.options.keys[f];if("string"!=typeof m){if(l[m.name]={weight:1-m.weight||1},m.weight<=0||m.weight>1)throw new Error("Key weight has to be > 0 and <= 1");m=m.name}else l[m]={weight:1};this._analyze({key:m,value:this.options.getFn(c,m),record:c,index:s},{resultMap:o,results:a,tokenSearchers:e,fullSearcher:t})}return{weights:l,results:a}}},{key:"_analyze",value:function(e,t){var n=e.key,o=e.arrayIndex,a=void 0===o?-1:o,i=e.value,r=e.record,s=e.index,p=t.tokenSearchers,c=void 0===p?[]:p,f=t.fullSearcher,u=void 0===f?[]:f,m=t.resultMap,g=void 0===m?{}:m,d=t.results,y=void 0===d?[]:d;if(null!=i){var v=!1,h=-1,C=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var S=u.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(S.score)),this.options.tokenize){for(var b=i.split(this.options.tokenSeparator),P=[],A=0;A<c.length;A+=1){var x=c[A];this._log('\nPattern: "'.concat(x.pattern,'"'));for(var I=!1,k=0;k<b.length;k+=1){var w=b[k],_=x.search(w),E={};_.isMatch?(E[w]=_.score,v=!0,I=!0,P.push(_.score)):(E[w]=1,this.options.matchAllTokens||P.push(1)),this._log('Token: "'.concat(w,'", score: ').concat(E[w]))}I&&(C+=1)}h=P[0];for(var M=P.length,T=1;T<M;T+=1)h+=P[T];h/=M,this._log("Token score average:",h)}var D=S.score;h>-1&&(D=(D+h)/2),this._log("Score average:",D);var L=!this.options.tokenize||!this.options.matchAllTokens||C>=c.length;if(this._log("\nCheck Matches: ".concat(L)),(v||S.isMatch)&&L){var N=g[s];N?N.output.push({key:n,arrayIndex:a,value:i,score:D,matchedIndices:S.matchedIndices}):(g[s]={item:r,output:[{key:n,arrayIndex:a,value:i,score:D,matchedIndices:S.matchedIndices}]},y.push(g[s]))}}else if(l(i))for(var O=0,j=i.length;O<j;O+=1)this._analyze({key:n,arrayIndex:O,value:i[O],record:r,index:s},{resultMap:g,results:y,tokenSearchers:c,fullSearcher:u})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,o=t.length;n<o;n+=1){for(var a=t[n].output,i=a.length,r=1,l=1,s=0;s<i;s+=1){var p=e?e[a[s].key].weight:1,c=(1===p?a[s].score:a[s].score||.001)*p;1!==p?l=Math.min(l,c):(a[s].nScore=c,r*=c)}t[n].score=1===l?r:l,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===o(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t})),n=null}var a=[];this.options.includeMatches&&a.push(function(e,t){var n=e.output;t.matches=[];for(var o=0,a=n.length;o<a;o+=1){var i=n[o];if(0!==i.matchedIndices.length){var r={indices:i.matchedIndices,value:i.value};i.key&&(r.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(r.arrayIndex=i.arrayIndex),t.matches.push(r)}}}),this.options.includeScore&&a.push(function(e,t){t.score=e.score});for(var i=0,r=e.length;i<r;i+=1){var l=e[i];if(this.options.id&&(l.item=this.options.getFn(l.item,this.options.id)[0]),a.length){for(var s={item:l.item},p=0,c=a.length;p<c;p+=1)a[p](l,s);t.push(s)}else t.push(l.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&a(t.prototype,n),e}();e.exports=s},function(e,t,n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=n(3),i=n(4),r=n(7),l=function(){function e(t,n){var o=n.location,a=void 0===o?0:o,i=n.distance,l=void 0===i?100:i,s=n.threshold,p=void 0===s?.6:s,c=n.maxPatternLength,f=void 0===c?32:c,u=n.isCaseSensitive,m=void 0!==u&&u,g=n.tokenSeparator,d=void 0===g?/ +/g:g,y=n.findAllMatches,v=void 0!==y&&y,h=n.minMatchCharLength,C=void 0===h?1:h;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:a,distance:l,threshold:p,maxPatternLength:f,isCaseSensitive:m,tokenSeparator:d,findAllMatches:v,minMatchCharLength:C},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=f&&(this.patternAlphabet=r(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,o=t.tokenSeparator;if(this.pattern.length>n)return a(e,this.pattern,o);var r=this.options,l=r.location,s=r.distance,p=r.threshold,c=r.findAllMatches,f=r.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:l,distance:s,threshold:p,findAllMatches:c,minMatchCharLength:f})}}])&&o(t.prototype,n),e}();e.exports=l},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,a=new RegExp(t.replace(n,"\\$&").replace(o,"|")),i=e.match(a),r=!!i,l=[];if(r)for(var s=0,p=i.length;s<p;s+=1){var c=i[s];l.push([e.indexOf(c),c.length-1])}return{score:r?.5:1,isMatch:r,matchedIndices:l}}},function(e,t,n){var o=n(5),a=n(6);e.exports=function(e,t,n,i){for(var r=i.location,l=void 0===r?0:r,s=i.distance,p=void 0===s?100:s,c=i.threshold,f=void 0===c?.6:c,u=i.findAllMatches,m=void 0!==u&&u,g=i.minMatchCharLength,d=void 0===g?1:g,y=l,v=e.length,h=f,C=e.indexOf(t,y),S=t.length,b=[],P=0;P<v;P+=1)b[P]=0;if(-1!==C){var A=o(t,{errors:0,currentLocation:C,expectedLocation:y,distance:p});if(h=Math.min(A,h),-1!==(C=e.lastIndexOf(t,y+S))){var x=o(t,{errors:0,currentLocation:C,expectedLocation:y,distance:p});h=Math.min(x,h)}}C=-1;for(var I=[],k=1,w=S+v,_=1<<S-1,E=0;E<S;E+=1){for(var M=0,T=w;M<T;)o(t,{errors:E,currentLocation:y+T,expectedLocation:y,distance:p})<=h?M=T:w=T,T=Math.floor((w-M)/2+M);w=T;var D=Math.max(1,y-T+1),L=m?v:Math.min(y+T,v)+S,N=Array(L+2);N[L+1]=(1<<E)-1;for(var O=L;O>=D;O-=1){var j=O-1,F=n[e.charAt(j)];if(F&&(b[j]=1),N[O]=(N[O+1]<<1|1)&F,0!==E&&(N[O]|=(I[O+1]|I[O])<<1|1|I[O+1]),N[O]&_&&(k=o(t,{errors:E,currentLocation:j,expectedLocation:y,distance:p}))<=h){if(h=k,(C=j)<=y)break;D=Math.max(1,2*y-C)}}if(o(t,{errors:E+1,currentLocation:y,expectedLocation:y,distance:p})>h)break;I=N}return{isMatch:C>=0,score:0===k?.001:k,matchedIndices:a(b,d)}}},function(e,t){e.exports=function(e,t){var n=t.errors,o=void 0===n?0:n,a=t.currentLocation,i=void 0===a?0:a,r=t.expectedLocation,l=void 0===r?0:r,s=t.distance,p=void 0===s?100:s,c=o/e.length,f=Math.abs(l-i);return p?c+f/p:f?1:c}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],o=-1,a=-1,i=0,r=e.length;i<r;i+=1){var l=e[i];l&&-1===o?o=i:l||-1===o||((a=i-1)-o+1>=t&&n.push([o,a]),o=-1)}return e[i-1]&&i-o>=t&&n.push([o,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,o=0;o<n;o+=1)t[e.charAt(o)]=0;for(var a=0;a<n;a+=1)t[e.charAt(a)]|=1<<n-a-1;return t}},function(e,t,n){var o=n(0);e.exports=function(e,t){return function e(t,n,a){if(n){var i=n.indexOf("."),r=n,l=null;-1!==i&&(r=n.slice(0,i),l=n.slice(i+1));var s=t[r];if(null!=s)if(l||"string"!=typeof s&&"number"!=typeof s)if(o(s))for(var p=0,c=s.length;p<c;p+=1)e(s[p],l,a);else l&&e(s,l,a);else a.push(s.toString())}else a.push(t);return a}(e,t,[])}}])},225:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(249),{page:e.exports.default}})},231:function(e,t,n){var o=n(232);e.exports=function(e){return null==e?"":o(e)}},232:function(e,t,n){var o=n(75),a=n(235),i=n(236),r=n(237),l=1/0,s=o?o.prototype:void 0,p=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return a(t,e)+"";if(r(t))return p?p.call(t):"";var n=t+"";return"0"==n&&1/t==-l?"-0":n}},233:function(e,t,n){var o=n(234),a="object"==typeof self&&self&&self.Object===Object&&self,i=o||a||Function("return this")();e.exports=i},234:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(109))},235:function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,a=Array(o);++n<o;)a[n]=t(e[n],n,e);return a}},236:function(e,t){var n=Array.isArray;e.exports=n},237:function(e,t,n){var o=n(238),a=n(241),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||a(e)&&o(e)==i}},238:function(e,t,n){var o=n(75),a=n(239),i=n(240),r="[object Null]",l="[object Undefined]",s=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?l:r:s&&s in Object(e)?a(e):i(e)}},239:function(e,t,n){var o=n(75),a=Object.prototype,i=a.hasOwnProperty,r=a.toString,l=o?o.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),n=e[l];try{e[l]=void 0;var o=!0}catch(e){}var a=r.call(e);return o&&(t?e[l]=n:delete e[l]),a}},240:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},241:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},242:function(e,t,n){var o=n(243)({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});e.exports=o},243:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},249:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=(n(226),n(229),function(e){return a.a.createElement("div",{className:"container is-widescreen is-mobile"},a.a.createElement("section",null,e.children))}),r=function(e){return a.a.createElement("div",{className:"card"},a.a.createElement("header",{className:"card-header"},a.a.createElement("p",{className:"card-header-title"},e.icon.category),a.a.createElement("a",{href:"#",className:"card-header-icon","aria-label":"more options"},a.a.createElement("span",{className:"icon"},a.a.createElement("i",{className:"fas fa-angle-down","aria-hidden":"true"})))),a.a.createElement("div",{className:"card-content"},a.a.createElement("div",{className:"content"},a.a.createElement("img",{className:"card-thumb-image",src:"".concat(e.icon.path,".svg"),alt:"".concat(e.icon.path)}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("b",null,e.icon.name))),a.a.createElement("footer",{className:"card-footer"},a.a.createElement("a",{href:"".concat(e.icon.path,".png"),download:!0,className:"card-footer-item"},"Download Png"),a.a.createElement("a",{href:"".concat(e.icon.path,".svg"),download:!0,className:"card-footer-item"},"Download Svg")))},l=[{type:"directory",name:"static/GCP Icons/Products & Services",contents:[{type:"directory",name:"API Platform &amp; Ecosystems",contents:[{type:"file",name:"API Analytics.png"},{type:"file",name:"API Analytics.svg"},{type:"file",name:"API Monetization.png"},{type:"file",name:"API Monetization.svg"},{type:"file",name:"Apigee API Platform.png"},{type:"file",name:"Apigee API Platform.svg"},{type:"file",name:"Apigee Sense.png"},{type:"file",name:"Apigee Sense.svg"},{type:"file",name:"Cloud Endpoints.png"},{type:"file",name:"Cloud Endpoints.svg"},{type:"file",name:"Developer Portal.png"},{type:"file",name:"Developer Portal.svg"}]},{type:"directory",name:"Big Data",contents:[{type:"file",name:"BigQuery.png"},{type:"file",name:"BigQuery.svg"},{type:"file",name:"Cloud Composer.png"},{type:"file",name:"Cloud Composer.svg"},{type:"file",name:"Cloud Dataflow.png"},{type:"file",name:"Cloud Dataflow.svg"},{type:"file",name:"Cloud Datalab.png"},{type:"file",name:"Cloud Datalab.svg"},{type:"file",name:"Cloud Dataprep.png"},{type:"file",name:"Cloud Dataprep.svg"},{type:"file",name:"Cloud Dataproc.png"},{type:"file",name:"Cloud Dataproc.svg"},{type:"file",name:"Cloud PubSub.png"},{type:"file",name:"Cloud PubSub.svg"},{type:"file",name:"Data Studio.png"},{type:"file",name:"Data Studio.svg"},{type:"file",name:"Genomics.png"},{type:"file",name:"Genomics.svg"}]},{type:"directory",name:"Cloud AI",contents:[{type:"file",name:"Advanced Solutions Lab.png"},{type:"file",name:"Advanced Solutions Lab.svg"},{type:"file",name:"Cloud AutoML.png"},{type:"file",name:"Cloud AutoML.svg"},{type:"file",name:"Cloud Jobs API.png"},{type:"file",name:"Cloud Jobs API.svg"},{type:"file",name:"Cloud Machine Learning.png"},{type:"file",name:"Cloud Machine Learning.svg"},{type:"file",name:"Cloud Natural Language API.png"},{type:"file",name:"Cloud Natural Language API.svg"},{type:"file",name:"Cloud Speech API.png"},{type:"file",name:"Cloud Speech API.svg"},{type:"file",name:"Cloud TPU.png"},{type:"file",name:"Cloud TPU.svg"},{type:"file",name:"Cloud Text-to-Speech.png"},{type:"file",name:"Cloud Text-to-Speech.svg"},{type:"file",name:"Cloud Translation API.png"},{type:"file",name:"Cloud Translation API.svg"},{type:"file",name:"Cloud Video Intelligence API.png"},{type:"file",name:"Cloud Video Intelligence API.svg"},{type:"file",name:"Cloud Vision API.png"},{type:"file",name:"Cloud Vision API.svg"},{type:"file",name:"Dialogflow Enterprise Edition.png"},{type:"file",name:"Dialogflow Enterprise Edition.svg"}]},{type:"directory",name:"Compute",contents:[{type:"file",name:"App Engine.png"},{type:"file",name:"App Engine.svg"},{type:"file",name:"Cloud Functions.png"},{type:"file",name:"Cloud Functions.svg"},{type:"file",name:"Compute Engine.png"},{type:"file",name:"Compute Engine.svg"},{type:"file",name:"Container Engine.png"},{type:"file",name:"Container Engine.svg"},{type:"file",name:"Container-Optimized OS.png"},{type:"file",name:"Container-Optimized OS.svg"},{type:"file",name:"GPU.png"},{type:"file",name:"GPU.svg"}]},{type:"directory",name:"Data Transfer",contents:[{type:"file",name:"Transfer Appliance.png"},{type:"file",name:"Transfer Appliance.svg"}]},{type:"directory",name:"Developer Tools",contents:[{type:"file",name:"Cloud Deployment Manager.png"},{type:"file",name:"Cloud Deployment Manager.svg"},{type:"file",name:"Cloud SDK.png"},{type:"file",name:"Cloud SDK.svg"},{type:"file",name:"Cloud Source Repositories.png"},{type:"file",name:"Cloud Source Repositories.svg"},{type:"file",name:"Cloud Test Lab.png"},{type:"file",name:"Cloud Test Lab.svg"},{type:"file",name:"Cloud Tools for Android Studio.png"},{type:"file",name:"Cloud Tools for Android Studio.svg"},{type:"file",name:"Cloud Tools for IntelliJ.png"},{type:"file",name:"Cloud Tools for IntelliJ.svg"},{type:"file",name:"Cloud Tools for PowerShell.png"},{type:"file",name:"Cloud Tools for PowerShell.svg"},{type:"file",name:"Cloud Tools for Visual Studio.png"},{type:"file",name:"Cloud Tools for Visual Studio.svg"},{type:"file",name:"Container Builder.png"},{type:"file",name:"Container Builder.svg"},{type:"file",name:"Container Registry.png"},{type:"file",name:"Container Registry.svg"},{type:"file",name:"Google Plugin for Eclipse.png"},{type:"file",name:"Google Plugin for Eclipse.svg"}]},{type:"directory",name:"Extras",contents:[{type:"file",name:"Blue Hexagon.png"},{type:"file",name:"Blue Hexagon.svg"},{type:"directory",name:"Expanded Product Card Icons",contents:[{type:"file",name:"App-Engine.png"},{type:"file",name:"App-Engine.svg"},{type:"file",name:"Cloud-Dataflow.png"},{type:"file",name:"Cloud-Dataflow.svg"},{type:"file",name:"Cloud-Dataproc.png"},{type:"file",name:"Cloud-Dataproc.svg"},{type:"file",name:"Compute-Engine.png"},{type:"file",name:"Compute-Engine.svg"},{type:"file",name:"Container-Engine.png"},{type:"file",name:"Container-Engine.svg"},{type:"file",name:"modifiers_autoscaling.png"},{type:"file",name:"modifiers_autoscaling.svg"},{type:"file",name:"modifiers_custom-virtual-machine.png"},{type:"file",name:"modifiers_custom-virtual-machine.svg"},{type:"file",name:"modifiers_high-CPU-machine.png"},{type:"file",name:"modifiers_high-CPU-machine.svg"},{type:"file",name:"modifiers_high-memory-machine.png"},{type:"file",name:"modifiers_high-memory-machine.svg"},{type:"file",name:"modifiers_preemptable-vm.png"},{type:"file",name:"modifiers_preemptable-vm.svg"},{type:"file",name:"modifiers_shared-core-machine-F1.png"},{type:"file",name:"modifiers_shared-core-machine-F1.svg"},{type:"file",name:"modifiers_shared-core-machine-G1.png"},{type:"file",name:"modifiers_shared-core-machine-G1.svg"},{type:"file",name:"modifiers_standard-machine.png"},{type:"file",name:"modifiers_standard-machine.svg"},{type:"file",name:"modifiers_storage.png"},{type:"file",name:"modifiers_storage.svg"}]},{type:"file",name:"Generic GCP.png"},{type:"file",name:"Generic GCP.svg"},{type:"file",name:"Google Cloud Platform.png"},{type:"file",name:"Google Cloud Platform.svg"},{type:"file",name:"Google Cloud Platform_lockup.png"},{type:"file",name:"Google Cloud Platform_lockup.svg"},{type:"directory",name:"Open Source Icons",contents:[{type:"file",name:"Forseti_lockup.png"},{type:"file",name:"Forseti_lockup.svg"},{type:"file",name:"Forseti_logo.png"},{type:"file",name:"Forseti_logo.svg"},{type:"file",name:"Istio_logo.png"},{type:"file",name:"Istio_logo.svg"},{type:"file",name:"Kubernetes_logo.png"},{type:"file",name:"Kubernetes_logo.svg"},{type:"file",name:"Kubernetes_name.png"},{type:"file",name:"Kubernetes_name.svg"},{type:"file",name:"TensorFlow_lockup.png"},{type:"file",name:"TensorFlow_logo.png"},{type:"file",name:"TensorFlow_logo.svg"}]},{type:"file",name:"Prediction API.png"},{type:"file",name:"Prediction API.svg"}]},{type:"directory",name:"Identity &amp; Security",contents:[{type:"file",name:"BeyondCorp.png"},{type:"file",name:"BeyondCorp.svg"},{type:"file",name:"Cloud IAM.png"},{type:"file",name:"Cloud IAM.svg"},{type:"file",name:"Cloud Resource Manager.png"},{type:"file",name:"Cloud Resource Manager.svg"},{type:"file",name:"Cloud Security Command Center.png"},{type:"file",name:"Cloud Security Command Center.svg"},{type:"file",name:"Cloud Security Scanner.png"},{type:"file",name:"Cloud Security Scanner.svg"},{type:"file",name:"Data Loss Prevention API.png"},{type:"file",name:"Data Loss Prevention API.svg"},{type:"file",name:"Identity-Aware Proxy.png"},{type:"file",name:"Identity-Aware Proxy.svg"},{type:"file",name:"Key Management Service.png"},{type:"file",name:"Key Management Service.svg"},{type:"file",name:"Security Key Enforcement.png"},{type:"file",name:"Security Key Enforcement.svg"}]},{type:"directory",name:"Internet of Things",contents:[{type:"file",name:"Cloud IoT Core.png"},{type:"file",name:"Cloud IoT Core.svg"}]},{type:"directory",name:"Management Tools",contents:[{type:"file",name:"Cloud APIs.png"},{type:"file",name:"Cloud APIs.svg"},{type:"file",name:"Cloud Billing API.png"},{type:"file",name:"Cloud Billing API.svg"},{type:"file",name:"Cloud Console.png"},{type:"file",name:"Cloud Console.svg"},{type:"file",name:"Cloud Deployment Manager.png"},{type:"file",name:"Cloud Deployment Manager.svg"},{type:"file",name:"Cloud Mobile App.png"},{type:"file",name:"Cloud Mobile App.svg"},{type:"file",name:"Cloud Shell.png"},{type:"file",name:"Cloud Shell.svg"},{type:"file",name:"Debugger.png"},{type:"file",name:"Debugger.svg"},{type:"file",name:"Error Reporting.png"},{type:"file",name:"Error Reporting.svg"},{type:"file",name:"Logging.png"},{type:"file",name:"Logging.svg"},{type:"file",name:"Monitoring.png"},{type:"file",name:"Monitoring.svg"},{type:"file",name:"Stackdriver.png"},{type:"file",name:"Stackdriver.svg"},{type:"file",name:"Trace.png"},{type:"file",name:"Trace.svg"}]},{type:"directory",name:"Networking",contents:[{type:"file",name:"Cloud Armor.png"},{type:"file",name:"Cloud Armor.svg"},{type:"file",name:"Cloud CDN.png"},{type:"file",name:"Cloud CDN.svg"},{type:"file",name:"Cloud DNS.png"},{type:"file",name:"Cloud DNS.svg"},{type:"file",name:"Cloud External IP Addresses.png"},{type:"file",name:"Cloud External IP Addresses.svg"},{type:"file",name:"Cloud Firewall Rules.png"},{type:"file",name:"Cloud Firewall Rules.svg"},{type:"file",name:"Cloud Load Balancing.png"},{type:"file",name:"Cloud Load Balancing.svg"},{type:"file",name:"Cloud Network.png"},{type:"file",name:"Cloud Network.svg"},{type:"file",name:"Cloud Router.png"},{type:"file",name:"Cloud Router.svg"},{type:"file",name:"Cloud Routes.png"},{type:"file",name:"Cloud Routes.svg"},{type:"file",name:"Cloud VPN.png"},{type:"file",name:"Cloud VPN.svg"},{type:"file",name:"Dedicated Interconnect.png"},{type:"file",name:"Dedicated Interconnect.svg"},{type:"file",name:"Partner Interconnect.png"},{type:"file",name:"Partner Interconnect.svg"},{type:"file",name:"Premium Network Tier.png"},{type:"file",name:"Premium Network Tier.svg"},{type:"file",name:"Standard Network Tier.png"},{type:"file",name:"Standard Network Tier.svg"},{type:"file",name:"Virtual Private Cloud.png"},{type:"file",name:"Virtual Private Cloud.svg"}]},{type:"directory",name:"Storage &amp; Databases",contents:[{type:"file",name:"Cloud Bigtable.png"},{type:"file",name:"Cloud Bigtable.svg"},{type:"file",name:"Cloud Datastore.png"},{type:"file",name:"Cloud Datastore.svg"},{type:"file",name:"Cloud Filestore.png"},{type:"file",name:"Cloud Filestore.svg"},{type:"file",name:"Cloud Memorystore.png"},{type:"file",name:"Cloud Memorystore.svg"},{type:"file",name:"Cloud SQL.png"},{type:"file",name:"Cloud SQL.svg"},{type:"file",name:"Cloud Spanner.png"},{type:"file",name:"Cloud Spanner.svg"},{type:"file",name:"Cloud Storage.png"},{type:"file",name:"Cloud Storage.svg"},{type:"file",name:"Persistent Disk.png"},{type:"file",name:"Persistent Disk.svg"}]}]},{type:"report",directories:14,files:231}],s=n(78),p=n.n(s),c=n(112),f=n.n(c);function u(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,a=!1,i=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e){var t=m(Object(o.useState)(e.icons),2),n=t[0],l=t[1],s=new f.a(e.icons,{keys:[{name:"name",weight:.3},{name:"category",weight:.7}]});return a.a.createElement(i,null,a.a.createElement("h1",null,a.a.createElement("img",{className:"icon-image",src:"./static/gcp.png",alt:"gcp icon"}),"Search Google Cloud Icons"),a.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},a.a.createElement("fieldset",null,a.a.createElement("input",{autoFocus:!0,type:"text",className:"input is-info",placeholder:"Type here...",onChange:function(t){return n=t.target.value,o=n&&n.trim()?s.search(n):u(e.icons),void l(o);var n,o}}),a.a.createElement("br",null),a.a.createElement("br",null))),a.a.createElement("div",{className:"columns is-multiline"},n.map(function(e,t){return a.a.createElement("div",{className:"column is-4",key:t},a.a.createElement(r,{icon:e}))})))};g.getInitialProps=function(){var e=l[0].contents.map(function(e){return e}),t=[],n=!0,o=!1,a=void 0;try{for(var i,r=function(){var e=i.value;e.contents.map(function(n){if(n.name.endsWith(".svg")){var o=p()(n.name.replace(/\..+$/,"")),a=p()(e.name),i={path:"./static/GCP Icons/Products & Services/"+a+"/"+o,category:a,name:o};return t.push(i)}})},s=e[Symbol.iterator]();!(n=(i=s.next()).done);n=!0)r()}catch(e){o=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return{icons:t}};t.default=g},75:function(e,t,n){var o=n(233).Symbol;e.exports=o},78:function(e,t,n){var o=n(231),a=n(242),i=/&(?:amp|lt|gt|quot|#39);/g,r=RegExp(i.source);e.exports=function(e){return(e=o(e))&&r.test(e)?e.replace(i,a):e}}},[[225,1,0,6]]]);