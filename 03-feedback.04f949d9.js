function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,i,o,u,a,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function E(e){return c=e,a=setTimeout(T,t),l?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function T(){var e=v();if(S(e))return O(e);a=setTimeout(T,function(e){var n=t-(e-f);return s?m(n,o-(e-c)):n}(e))}function O(e){return a=void 0,g&&r?b(e):(r=i=void 0,u)}function j(){var e=v(),n=S(e);if(r=arguments,i=this,f=e,n){if(void 0===a)return E(f);if(s)return a=setTimeout(T,t),b(f)}return void 0===a&&(a=setTimeout(T,t)),u}return t=y(t)||0,p(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=i=a=void 0},j.flush=function(){return void 0===a?u:O(v())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const b={userForm:document.querySelector("form"),userEmail:document.querySelector("input"),userMessage:document.querySelector("textarea"),STORAGE_KEY:"feedback-form-state"},E={email:"",message:""};b.userForm.addEventListener("input",e(t)((function(e){E[e.target.name]=e.target.value,localStorage.setItem(b.STORAGE_KEY,JSON.stringify(E))}),500)),b.userForm.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(b.STORAGE_KEY)})),function(){const e=localStorage.getItem(b.STORAGE_KEY),t=JSON.parse(e);e&&(b.userEmail.value=t.email,b.userMessage.value=t.message)}();
//# sourceMappingURL=03-feedback.04f949d9.js.map
