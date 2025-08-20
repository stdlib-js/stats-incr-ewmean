// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(e){var n;if(!r(e))throw new TypeError(t("1HF9Y",e));if(e<0||e>1)throw new RangeError(t("1HFDa",e));return function(r){if(0===arguments.length)return void 0===n?null:n;void 0===n?n=r:n+=e*(r-n);return n}}export{e as default};
//# sourceMappingURL=index.mjs.map
