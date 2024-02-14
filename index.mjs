// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(r){var t;if(!n(r))throw new TypeError(e("invalid argument. Must provide a nonnegative number. Value: `%s`.",r));if(r<0||r>1)throw new RangeError(e("invalid argument. Must provide a nonnegative number on the interval: [0, 1]. Value: `%f`.",r));return function(n){if(0===arguments.length)return void 0===t?null:t;void 0===t?t=n:t+=r*(n-t);return t}}export{r as default};
//# sourceMappingURL=index.mjs.map
