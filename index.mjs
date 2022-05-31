// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var n=r.isPrimitive,t=e;var i=function(r){var e;if(!n(r))throw new TypeError(t("0dWA9",r));if(r<0||r>1)throw new RangeError(t("invalid argument. Must provide a nonnegative number on the interval: [0, 1]. Value: `%f`.",r));return function(n){if(0===arguments.length)return void 0===e?null:e;void 0===e?e=n:e+=r*(n-e);return e}};export{i as default};
//# sourceMappingURL=index.mjs.map
