// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var r=e.isPrimitive,t=n;var i=function(e){var n;if(!r(e))throw new TypeError(t("invalid argument. Must provide a nonnegative number. Value: `%s`.",e));if(e<0||e>1)throw new RangeError(t("invalid argument. Must provide a nonnegative number on the interval [0,1]. Value: `%f`.",e));return function(r){if(0===arguments.length)return void 0===n?null:n;void 0===n?n=r:n+=e*(r-n);return n}};export{i as default};
//# sourceMappingURL=index.mjs.map
