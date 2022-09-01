// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,a=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,a){var c,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=a.value,e.__proto__=c):e[t]=a.value),p="get"in a,y="set"in a,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,t,a.get),y&&i&&i.call(e,t,a.set),e};function c(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,d=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",_=y()?function(e){var t,r,n,o,i;if(null==e)return b.call(e);r=e[s],i=s,t=null!=(o=e)&&d.call(o,i);try{e[s]=void 0}catch(t){return b.call(e)}return n=b.call(e),t?e[s]=r:delete e[s],n}:function(e){return b.call(e)},m=Number,v=m.prototype.toString,g=y();function h(e){return"object"==typeof e&&(e instanceof m||(g?function(e){try{return v.call(e),!0}catch(e){return!1}}(e):"[object Number]"===_(e)))}function j(e){return f(e)||h(e)}function w(e){return f(e)&&e>=0}function S(e){return h(e)&&e.valueOf()>=0}function O(e){return w(e)||S(e)}function P(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return c(j,"isPrimitive",f),c(j,"isObject",h),c(O,"isPrimitive",w),c(O,"isObject",S),function(e){var t;if(!w(e))throw new TypeError(P("0dWA9",e));if(e<0||e>1)throw new RangeError(P("invalid argument. Must provide a nonnegative number on the interval: [0, 1]. Value: `%f`.",e));return function(r){return 0===arguments.length?void 0===t?null:t:(void 0===t?t=r:t+=e*(r-t),t)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).increwmean=t();
//# sourceMappingURL=browser.js.map
