// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function n(n){var t;if(!r(n))throw new TypeError(e("0dWA9",n));if(n<0||n>1)throw new RangeError(e("invalid argument. Must provide a nonnegative number on the interval: [0, 1]. Value: `%f`.",n));return function(r){if(0===arguments.length)return void 0===t?null:t;void 0===t?t=r:t+=n*(r-t);return t}}export{n as default};
//# sourceMappingURL=index.mjs.map
