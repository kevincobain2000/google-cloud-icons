((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Card = function Card(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "card-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-header-title"
  }, props.icon.category), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "card-header-icon",
    "aria-label": "more options"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-angle-down",
    "aria-hidden": "true"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "card-thumb-image",
    src: "".concat(props.icon.path, ".svg"),
    alt: "".concat(props.icon.path)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, props.icon.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "card-footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "".concat(props.icon.path, ".png"),
    download: true,
    className: "card-footer-item"
  }, "Download Png"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "".concat(props.icon.path, ".svg"),
    download: true,
    className: "card-footer-item"
  }, "Download Svg")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/styles.scss */ "./css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/styles.css */ "./css/styles.css");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container is-widescreen is-mobile"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/fuse.js/dist/fuse.js":
/*!*******************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(2),a=n(8),s=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.caseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m,S=n.id,x=void 0===S?null:S,b=n.keys,M=void 0===b?[]:b,_=n.shouldSort,L=void 0===_||_,w=n.getFn,A=void 0===w?a:w,C=n.sortFn,I=void 0===C?function(e,t){return e.score-t.score}:C,O=n.tokenize,j=void 0!==O&&O,P=n.matchAllTokens,F=void 0!==P&&P,T=n.includeMatches,z=void 0!==T&&T,E=n.includeScore,K=void 0!==E&&E,$=n.verbose,J=void 0!==$&&$;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k,id:x,keys:M,includeMatches:z,includeScore:K,shouldSort:L,getFn:A,sortFn:I,verbose:J,tokenize:j,matchAllTokens:F},this.setCollection(t)}var t,n,c;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,h=n.length;c<h;c+=1)for(var l=n[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(null!=i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var S=f.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(S.score)),this.options.tokenize){for(var x=i.split(this.options.tokenSeparator),b=[],M=0;M<l.length;M+=1){var _=l[M];this._log('\nPattern: "'.concat(_.pattern,'"'));for(var L=!1,w=0;w<x.length;w+=1){var A=x[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,b.push(C.score)):(I[A]=1,this.options.matchAllTokens||b.push(1)),this._log('Token: "'.concat(A,'", score: ').concat(I[A]))}L&&(k+=1)}m=b[0];for(var O=b.length,j=1;j<O;j+=1)m+=b[j];m/=O,this._log("Token score average:",m)}var P=S.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var F=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: ".concat(F)),(y||S.isMatch)&&F){var T=v[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}):(v[c]={item:a,output:[{key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}]},g.push(v[c]))}}else if(s(i))for(var z=0,E=i.length;z<E;z+=1)this._analyze({key:n,arrayIndex:z,value:i[z],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=(1===h?o[c].score:o[c].score||.001)*h;1!==h?s=Math.min(s,l):(o[c].nScore=l,a*=l)}t[n].score=1===s?a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t})),n=null}var o=[];this.options.includeMatches&&o.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,n),c&&o(t,c),e}();e.exports=c},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(3),i=n(4),a=n(7),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.isCaseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern))}var t,n,s;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var a=this.options,s=a.location,c=a.distance,h=a.threshold,l=a.findAllMatches,u=a.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}])&&r(t.prototype,n),s&&r(t,s),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),S=t.length,x=[],b=0;b<y;b+=1)x[b]=0;if(-1!==k){var M=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(M,m),-1!==(k=e.lastIndexOf(t,g+S))){var _=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m)}}k=-1;for(var L=[],w=1,A=S+y,C=1<<S-1,I=0;I<S;I+=1){for(var O=0,j=A;O<j;){r(t,{errors:I,currentLocation:g+j,expectedLocation:g,distance:h})<=m?O=j:A=j,j=Math.floor((A-O)/2+O)}A=j;var P=Math.max(1,g-j+1),F=d?y:Math.min(g+j,y)+S,T=Array(F+2);T[F+1]=(1<<I)-1;for(var z=F;z>=P;z-=1){var E=z-1,K=n[e.charAt(E)];if(K&&(x[E]=1),T[z]=(T[z+1]<<1|1)&K,0!==I&&(T[z]|=(L[z+1]|L[z])<<1|1|L[z+1]),T[z]&C&&(w=r(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k)}}if(r(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=T}return{isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(x,p)}}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=r/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o}(e,t,[])}}])});

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_unescapeHtmlChar.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_unescapeHtmlChar.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/lodash/_basePropertyOf.js");

/** Used to map HTML entities to characters. */
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};

/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */
var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

module.exports = unescapeHtmlChar;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/unescape.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/unescape.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    unescapeHtmlChar = __webpack_require__(/*! ./_unescapeHtmlChar */ "./node_modules/lodash/_unescapeHtmlChar.js");

/** Used to match HTML entities and HTML characters. */
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
    reHasEscapedHtml = RegExp(reEscapedHtml.source);

/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
 * their corresponding characters.
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 *
 * @static
 * @memberOf _
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney, &amp; pebbles');
 * // => 'fred, barney, & pebbles'
 */
function unescape(string) {
  string = toString(string);
  return (string && reHasEscapedHtml.test(string))
    ? string.replace(reEscapedHtml, unescapeHtmlChar)
    : string;
}

module.exports = unescape;


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_bdd16cee6fee18b2e4c7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_bdd16cee6fee18b2e4c7 */ "dll-reference dll_bdd16cee6fee18b2e4c7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var _variables_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/Icons */ "./variables/Icons.js");
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/unescape */ "./node_modules/lodash/unescape.js");
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_unescape__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_5__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Index = function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.icons),
      _useState2 = _slicedToArray(_useState, 2),
      icons = _useState2[0],
      setIcons = _useState2[1];

  var options = {
    keys: [{
      name: "name",
      weight: 0.3
    }, {
      name: "category",
      weight: 0.7
    }]
  };
  var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_5___default.a(props.icons, options);

  var filterIcons = function filterIcons(name) {
    var icons = name && name.trim() ? fuse.search(name) : _toConsumableArray(props.icons);
    setIcons(icons);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "icon-image",
    src: "./static/gcp.png",
    alt: "gcp icon"
  }), "Search Google Cloud Icons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    autoFocus: true,
    type: "text",
    className: "input is-info",
    placeholder: "Type here...",
    onChange: function onChange(e) {
      return filterIcons(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline"
  }, icons.map(function (icon, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "column is-4",
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      icon: icon
    }));
  })));
};

Index.getInitialProps = function () {
  // There is just one directory
  var productsAndServicesDir = _variables_Icons__WEBPACK_IMPORTED_MODULE_3__["default"][0].contents;
  var directories = productsAndServicesDir.map(function (directory) {
    return directory;
  });
  var icons = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var dir = _step.value;
      var fileElement = dir.contents;
      fileElement.map(function (file) {
        if (file.name.endsWith(".svg")) {
          // remove extension
          var filename = lodash_unescape__WEBPACK_IMPORTED_MODULE_4___default()(file.name.replace(/\..+$/, ""));
          var dirname = lodash_unescape__WEBPACK_IMPORTED_MODULE_4___default()(dir.name);
          var icon = {
            path: "./static/GCP Icons/Products & Services/" + dirname + "/" + filename,
            category: dirname,
            name: filename
          };
          return icons.push(icon);
        }
      });
    };

    for (var _iterator = directories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return {
    icons: icons
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./variables/Icons.js":
/*!****************************!*\
  !*** ./variables/Icons.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Icons = [{
  "type": "directory",
  "name": "static/GCP Icons/Products & Services",
  "contents": [{
    "type": "directory",
    "name": "API Platform &amp; Ecosystems",
    "contents": [{
      "type": "file",
      "name": "API Analytics.png"
    }, {
      "type": "file",
      "name": "API Analytics.svg"
    }, {
      "type": "file",
      "name": "API Monetization.png"
    }, {
      "type": "file",
      "name": "API Monetization.svg"
    }, {
      "type": "file",
      "name": "Apigee API Platform.png"
    }, {
      "type": "file",
      "name": "Apigee API Platform.svg"
    }, {
      "type": "file",
      "name": "Apigee Sense.png"
    }, {
      "type": "file",
      "name": "Apigee Sense.svg"
    }, {
      "type": "file",
      "name": "Cloud Endpoints.png"
    }, {
      "type": "file",
      "name": "Cloud Endpoints.svg"
    }, {
      "type": "file",
      "name": "Developer Portal.png"
    }, {
      "type": "file",
      "name": "Developer Portal.svg"
    }]
  }, {
    "type": "directory",
    "name": "Big Data",
    "contents": [{
      "type": "file",
      "name": "BigQuery.png"
    }, {
      "type": "file",
      "name": "BigQuery.svg"
    }, {
      "type": "file",
      "name": "Cloud Composer.png"
    }, {
      "type": "file",
      "name": "Cloud Composer.svg"
    }, {
      "type": "file",
      "name": "Cloud Dataflow.png"
    }, {
      "type": "file",
      "name": "Cloud Dataflow.svg"
    }, {
      "type": "file",
      "name": "Cloud Datalab.png"
    }, {
      "type": "file",
      "name": "Cloud Datalab.svg"
    }, {
      "type": "file",
      "name": "Cloud Dataprep.png"
    }, {
      "type": "file",
      "name": "Cloud Dataprep.svg"
    }, {
      "type": "file",
      "name": "Cloud Dataproc.png"
    }, {
      "type": "file",
      "name": "Cloud Dataproc.svg"
    }, {
      "type": "file",
      "name": "Cloud PubSub.png"
    }, {
      "type": "file",
      "name": "Cloud PubSub.svg"
    }, {
      "type": "file",
      "name": "Data Studio.png"
    }, {
      "type": "file",
      "name": "Data Studio.svg"
    }, {
      "type": "file",
      "name": "Genomics.png"
    }, {
      "type": "file",
      "name": "Genomics.svg"
    }]
  }, {
    "type": "directory",
    "name": "Cloud AI",
    "contents": [{
      "type": "file",
      "name": "Advanced Solutions Lab.png"
    }, {
      "type": "file",
      "name": "Advanced Solutions Lab.svg"
    }, {
      "type": "file",
      "name": "Cloud AutoML.png"
    }, {
      "type": "file",
      "name": "Cloud AutoML.svg"
    }, {
      "type": "file",
      "name": "Cloud Jobs API.png"
    }, {
      "type": "file",
      "name": "Cloud Jobs API.svg"
    }, {
      "type": "file",
      "name": "Cloud Machine Learning.png"
    }, {
      "type": "file",
      "name": "Cloud Machine Learning.svg"
    }, {
      "type": "file",
      "name": "Cloud Natural Language API.png"
    }, {
      "type": "file",
      "name": "Cloud Natural Language API.svg"
    }, {
      "type": "file",
      "name": "Cloud Speech API.png"
    }, {
      "type": "file",
      "name": "Cloud Speech API.svg"
    }, {
      "type": "file",
      "name": "Cloud TPU.png"
    }, {
      "type": "file",
      "name": "Cloud TPU.svg"
    }, {
      "type": "file",
      "name": "Cloud Text-to-Speech.png"
    }, {
      "type": "file",
      "name": "Cloud Text-to-Speech.svg"
    }, {
      "type": "file",
      "name": "Cloud Translation API.png"
    }, {
      "type": "file",
      "name": "Cloud Translation API.svg"
    }, {
      "type": "file",
      "name": "Cloud Video Intelligence API.png"
    }, {
      "type": "file",
      "name": "Cloud Video Intelligence API.svg"
    }, {
      "type": "file",
      "name": "Cloud Vision API.png"
    }, {
      "type": "file",
      "name": "Cloud Vision API.svg"
    }, {
      "type": "file",
      "name": "Dialogflow Enterprise Edition.png"
    }, {
      "type": "file",
      "name": "Dialogflow Enterprise Edition.svg"
    }]
  }, {
    "type": "directory",
    "name": "Compute",
    "contents": [{
      "type": "file",
      "name": "App Engine.png"
    }, {
      "type": "file",
      "name": "App Engine.svg"
    }, {
      "type": "file",
      "name": "Cloud Functions.png"
    }, {
      "type": "file",
      "name": "Cloud Functions.svg"
    }, {
      "type": "file",
      "name": "Compute Engine.png"
    }, {
      "type": "file",
      "name": "Compute Engine.svg"
    }, {
      "type": "file",
      "name": "Container Engine.png"
    }, {
      "type": "file",
      "name": "Container Engine.svg"
    }, {
      "type": "file",
      "name": "Container-Optimized OS.png"
    }, {
      "type": "file",
      "name": "Container-Optimized OS.svg"
    }, {
      "type": "file",
      "name": "GPU.png"
    }, {
      "type": "file",
      "name": "GPU.svg"
    }]
  }, {
    "type": "directory",
    "name": "Data Transfer",
    "contents": [{
      "type": "file",
      "name": "Transfer Appliance.png"
    }, {
      "type": "file",
      "name": "Transfer Appliance.svg"
    }]
  }, {
    "type": "directory",
    "name": "Developer Tools",
    "contents": [{
      "type": "file",
      "name": "Cloud Deployment Manager.png"
    }, {
      "type": "file",
      "name": "Cloud Deployment Manager.svg"
    }, {
      "type": "file",
      "name": "Cloud SDK.png"
    }, {
      "type": "file",
      "name": "Cloud SDK.svg"
    }, {
      "type": "file",
      "name": "Cloud Source Repositories.png"
    }, {
      "type": "file",
      "name": "Cloud Source Repositories.svg"
    }, {
      "type": "file",
      "name": "Cloud Test Lab.png"
    }, {
      "type": "file",
      "name": "Cloud Test Lab.svg"
    }, {
      "type": "file",
      "name": "Cloud Tools for Android Studio.png"
    }, {
      "type": "file",
      "name": "Cloud Tools for Android Studio.svg"
    }, {
      "type": "file",
      "name": "Cloud Tools for IntelliJ.png"
    }, {
      "type": "file",
      "name": "Cloud Tools for IntelliJ.svg"
    }, {
      "type": "file",
      "name": "Cloud Tools for PowerShell.png"
    }, {
      "type": "file",
      "name": "Cloud Tools for PowerShell.svg"
    }, {
      "type": "file",
      "name": "Cloud Tools for Visual Studio.png"
    }, {
      "type": "file",
      "name": "Cloud Tools for Visual Studio.svg"
    }, {
      "type": "file",
      "name": "Container Builder.png"
    }, {
      "type": "file",
      "name": "Container Builder.svg"
    }, {
      "type": "file",
      "name": "Container Registry.png"
    }, {
      "type": "file",
      "name": "Container Registry.svg"
    }, {
      "type": "file",
      "name": "Google Plugin for Eclipse.png"
    }, {
      "type": "file",
      "name": "Google Plugin for Eclipse.svg"
    }]
  }, {
    "type": "directory",
    "name": "Extras",
    "contents": [{
      "type": "file",
      "name": "Blue Hexagon.png"
    }, {
      "type": "file",
      "name": "Blue Hexagon.svg"
    }, {
      "type": "directory",
      "name": "Expanded Product Card Icons",
      "contents": [{
        "type": "file",
        "name": "App-Engine.png"
      }, {
        "type": "file",
        "name": "App-Engine.svg"
      }, {
        "type": "file",
        "name": "Cloud-Dataflow.png"
      }, {
        "type": "file",
        "name": "Cloud-Dataflow.svg"
      }, {
        "type": "file",
        "name": "Cloud-Dataproc.png"
      }, {
        "type": "file",
        "name": "Cloud-Dataproc.svg"
      }, {
        "type": "file",
        "name": "Compute-Engine.png"
      }, {
        "type": "file",
        "name": "Compute-Engine.svg"
      }, {
        "type": "file",
        "name": "Container-Engine.png"
      }, {
        "type": "file",
        "name": "Container-Engine.svg"
      }, {
        "type": "file",
        "name": "modifiers_autoscaling.png"
      }, {
        "type": "file",
        "name": "modifiers_autoscaling.svg"
      }, {
        "type": "file",
        "name": "modifiers_custom-virtual-machine.png"
      }, {
        "type": "file",
        "name": "modifiers_custom-virtual-machine.svg"
      }, {
        "type": "file",
        "name": "modifiers_high-CPU-machine.png"
      }, {
        "type": "file",
        "name": "modifiers_high-CPU-machine.svg"
      }, {
        "type": "file",
        "name": "modifiers_high-memory-machine.png"
      }, {
        "type": "file",
        "name": "modifiers_high-memory-machine.svg"
      }, {
        "type": "file",
        "name": "modifiers_preemptable-vm.png"
      }, {
        "type": "file",
        "name": "modifiers_preemptable-vm.svg"
      }, {
        "type": "file",
        "name": "modifiers_shared-core-machine-F1.png"
      }, {
        "type": "file",
        "name": "modifiers_shared-core-machine-F1.svg"
      }, {
        "type": "file",
        "name": "modifiers_shared-core-machine-G1.png"
      }, {
        "type": "file",
        "name": "modifiers_shared-core-machine-G1.svg"
      }, {
        "type": "file",
        "name": "modifiers_standard-machine.png"
      }, {
        "type": "file",
        "name": "modifiers_standard-machine.svg"
      }, {
        "type": "file",
        "name": "modifiers_storage.png"
      }, {
        "type": "file",
        "name": "modifiers_storage.svg"
      }]
    }, {
      "type": "file",
      "name": "Generic GCP.png"
    }, {
      "type": "file",
      "name": "Generic GCP.svg"
    }, {
      "type": "file",
      "name": "Google Cloud Platform.png"
    }, {
      "type": "file",
      "name": "Google Cloud Platform.svg"
    }, {
      "type": "file",
      "name": "Google Cloud Platform_lockup.png"
    }, {
      "type": "file",
      "name": "Google Cloud Platform_lockup.svg"
    }, {
      "type": "directory",
      "name": "Open Source Icons",
      "contents": [{
        "type": "file",
        "name": "Forseti_lockup.png"
      }, {
        "type": "file",
        "name": "Forseti_lockup.svg"
      }, {
        "type": "file",
        "name": "Forseti_logo.png"
      }, {
        "type": "file",
        "name": "Forseti_logo.svg"
      }, {
        "type": "file",
        "name": "Istio_logo.png"
      }, {
        "type": "file",
        "name": "Istio_logo.svg"
      }, {
        "type": "file",
        "name": "Kubernetes_logo.png"
      }, {
        "type": "file",
        "name": "Kubernetes_logo.svg"
      }, {
        "type": "file",
        "name": "Kubernetes_name.png"
      }, {
        "type": "file",
        "name": "Kubernetes_name.svg"
      }, {
        "type": "file",
        "name": "TensorFlow_lockup.png"
      }, {
        "type": "file",
        "name": "TensorFlow_logo.png"
      }, {
        "type": "file",
        "name": "TensorFlow_logo.svg"
      }]
    }, {
      "type": "file",
      "name": "Prediction API.png"
    }, {
      "type": "file",
      "name": "Prediction API.svg"
    }]
  }, {
    "type": "directory",
    "name": "Identity &amp; Security",
    "contents": [{
      "type": "file",
      "name": "BeyondCorp.png"
    }, {
      "type": "file",
      "name": "BeyondCorp.svg"
    }, {
      "type": "file",
      "name": "Cloud IAM.png"
    }, {
      "type": "file",
      "name": "Cloud IAM.svg"
    }, {
      "type": "file",
      "name": "Cloud Resource Manager.png"
    }, {
      "type": "file",
      "name": "Cloud Resource Manager.svg"
    }, {
      "type": "file",
      "name": "Cloud Security Command Center.png"
    }, {
      "type": "file",
      "name": "Cloud Security Command Center.svg"
    }, {
      "type": "file",
      "name": "Cloud Security Scanner.png"
    }, {
      "type": "file",
      "name": "Cloud Security Scanner.svg"
    }, {
      "type": "file",
      "name": "Data Loss Prevention API.png"
    }, {
      "type": "file",
      "name": "Data Loss Prevention API.svg"
    }, {
      "type": "file",
      "name": "Identity-Aware Proxy.png"
    }, {
      "type": "file",
      "name": "Identity-Aware Proxy.svg"
    }, {
      "type": "file",
      "name": "Key Management Service.png"
    }, {
      "type": "file",
      "name": "Key Management Service.svg"
    }, {
      "type": "file",
      "name": "Security Key Enforcement.png"
    }, {
      "type": "file",
      "name": "Security Key Enforcement.svg"
    }]
  }, {
    "type": "directory",
    "name": "Internet of Things",
    "contents": [{
      "type": "file",
      "name": "Cloud IoT Core.png"
    }, {
      "type": "file",
      "name": "Cloud IoT Core.svg"
    }]
  }, {
    "type": "directory",
    "name": "Management Tools",
    "contents": [{
      "type": "file",
      "name": "Cloud APIs.png"
    }, {
      "type": "file",
      "name": "Cloud APIs.svg"
    }, {
      "type": "file",
      "name": "Cloud Billing API.png"
    }, {
      "type": "file",
      "name": "Cloud Billing API.svg"
    }, {
      "type": "file",
      "name": "Cloud Console.png"
    }, {
      "type": "file",
      "name": "Cloud Console.svg"
    }, {
      "type": "file",
      "name": "Cloud Deployment Manager.png"
    }, {
      "type": "file",
      "name": "Cloud Deployment Manager.svg"
    }, {
      "type": "file",
      "name": "Cloud Mobile App.png"
    }, {
      "type": "file",
      "name": "Cloud Mobile App.svg"
    }, {
      "type": "file",
      "name": "Cloud Shell.png"
    }, {
      "type": "file",
      "name": "Cloud Shell.svg"
    }, {
      "type": "file",
      "name": "Debugger.png"
    }, {
      "type": "file",
      "name": "Debugger.svg"
    }, {
      "type": "file",
      "name": "Error Reporting.png"
    }, {
      "type": "file",
      "name": "Error Reporting.svg"
    }, {
      "type": "file",
      "name": "Logging.png"
    }, {
      "type": "file",
      "name": "Logging.svg"
    }, {
      "type": "file",
      "name": "Monitoring.png"
    }, {
      "type": "file",
      "name": "Monitoring.svg"
    }, {
      "type": "file",
      "name": "Stackdriver.png"
    }, {
      "type": "file",
      "name": "Stackdriver.svg"
    }, {
      "type": "file",
      "name": "Trace.png"
    }, {
      "type": "file",
      "name": "Trace.svg"
    }]
  }, {
    "type": "directory",
    "name": "Networking",
    "contents": [{
      "type": "file",
      "name": "Cloud Armor.png"
    }, {
      "type": "file",
      "name": "Cloud Armor.svg"
    }, {
      "type": "file",
      "name": "Cloud CDN.png"
    }, {
      "type": "file",
      "name": "Cloud CDN.svg"
    }, {
      "type": "file",
      "name": "Cloud DNS.png"
    }, {
      "type": "file",
      "name": "Cloud DNS.svg"
    }, {
      "type": "file",
      "name": "Cloud External IP Addresses.png"
    }, {
      "type": "file",
      "name": "Cloud External IP Addresses.svg"
    }, {
      "type": "file",
      "name": "Cloud Firewall Rules.png"
    }, {
      "type": "file",
      "name": "Cloud Firewall Rules.svg"
    }, {
      "type": "file",
      "name": "Cloud Load Balancing.png"
    }, {
      "type": "file",
      "name": "Cloud Load Balancing.svg"
    }, {
      "type": "file",
      "name": "Cloud Network.png"
    }, {
      "type": "file",
      "name": "Cloud Network.svg"
    }, {
      "type": "file",
      "name": "Cloud Router.png"
    }, {
      "type": "file",
      "name": "Cloud Router.svg"
    }, {
      "type": "file",
      "name": "Cloud Routes.png"
    }, {
      "type": "file",
      "name": "Cloud Routes.svg"
    }, {
      "type": "file",
      "name": "Cloud VPN.png"
    }, {
      "type": "file",
      "name": "Cloud VPN.svg"
    }, {
      "type": "file",
      "name": "Dedicated Interconnect.png"
    }, {
      "type": "file",
      "name": "Dedicated Interconnect.svg"
    }, {
      "type": "file",
      "name": "Partner Interconnect.png"
    }, {
      "type": "file",
      "name": "Partner Interconnect.svg"
    }, {
      "type": "file",
      "name": "Premium Network Tier.png"
    }, {
      "type": "file",
      "name": "Premium Network Tier.svg"
    }, {
      "type": "file",
      "name": "Standard Network Tier.png"
    }, {
      "type": "file",
      "name": "Standard Network Tier.svg"
    }, {
      "type": "file",
      "name": "Virtual Private Cloud.png"
    }, {
      "type": "file",
      "name": "Virtual Private Cloud.svg"
    }]
  }, {
    "type": "directory",
    "name": "Storage &amp; Databases",
    "contents": [{
      "type": "file",
      "name": "Cloud Bigtable.png"
    }, {
      "type": "file",
      "name": "Cloud Bigtable.svg"
    }, {
      "type": "file",
      "name": "Cloud Datastore.png"
    }, {
      "type": "file",
      "name": "Cloud Datastore.svg"
    }, {
      "type": "file",
      "name": "Cloud Filestore.png"
    }, {
      "type": "file",
      "name": "Cloud Filestore.svg"
    }, {
      "type": "file",
      "name": "Cloud Memorystore.png"
    }, {
      "type": "file",
      "name": "Cloud Memorystore.svg"
    }, {
      "type": "file",
      "name": "Cloud SQL.png"
    }, {
      "type": "file",
      "name": "Cloud SQL.svg"
    }, {
      "type": "file",
      "name": "Cloud Spanner.png"
    }, {
      "type": "file",
      "name": "Cloud Spanner.svg"
    }, {
      "type": "file",
      "name": "Cloud Storage.png"
    }, {
      "type": "file",
      "name": "Cloud Storage.svg"
    }, {
      "type": "file",
      "name": "Persistent Disk.png"
    }, {
      "type": "file",
      "name": "Persistent Disk.svg"
    }]
  }]
}, {
  "type": "report",
  "directories": 14,
  "files": 231
}];
/* harmony default export */ __webpack_exports__["default"] = (Icons);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_bdd16cee6fee18b2e4c7":
/*!*******************************************!*\
  !*** external "dll_bdd16cee6fee18b2e4c7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_bdd16cee6fee18b2e4c7;

/***/ })

},[[3,"static/runtime/webpack.js","styles"]]]));;
//# sourceMappingURL=index.js.map