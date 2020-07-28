/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
/*!
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.3
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(e,t){"use strict";var n;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,!FastClick.notNeeded(e)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],i=this,r=0,s=o.length;r<s;r++)i[o[r]]=function(e,t){return function(){return e.apply(t,arguments)}}(i[o[r]],i);deviceIsAndroid&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(n=e.onclick,e.addEventListener("click",function(e){n(e)},!1),e.onclick=null)}}function floatToString(e,t){var n=e.toFixed(t).toString();return n.match(/^\.\d+/)?"0"+n:n}!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e,t,n){var o,i,r=(n=n||Z).createElement("script");if(r.text=e,t)for(o in fe)(i=t[o]||t.getAttribute&&t.getAttribute(o))&&r.setAttribute(o,i);n.head.appendChild(r).parentNode.removeChild(r)}function o(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ie[re.call(e)]||"object":typeof e}function i(e){var t=!!e&&"length"in e&&e.length,n=o(e);return!ce(e)&&!pe(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function r(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}function s(e,t,n){return ce(t)?he.grep(e,function(e,o){return!!t.call(e,o,e)!==n}):t.nodeType?he.grep(e,function(e){return e===t!==n}):"string"!=typeof t?he.grep(e,function(e){return-1<oe.call(t,e)!==n}):he.filter(t,e,n)}function a(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function l(e){return e}function u(e){throw e}function c(e,t,n,o){var i;try{e&&ce(i=e.promise)?i.call(e).done(t).fail(n):e&&ce(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(o))}catch(e){n.apply(void 0,[e])}}function p(){Z.removeEventListener("DOMContentLoaded",p),e.removeEventListener("load",p),he.ready()}function f(e,t){return t.toUpperCase()}function d(e){return e.replace(Ae,"ms-").replace(Ne,f)}function h(){this.expando=he.expando+h.uid++}function m(e,t,n){var o,i;if(void 0===n&&1===e.nodeType)if(o="data-"+t.replace(Fe,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(o))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:De.test(i)?JSON.parse(i):i)}catch(e){}je.set(e,t,n)}else n=void 0;return n}function g(e,t,n,o){var i,r,s=20,a=o?function(){return o.cur()}:function(){return he.css(e,t,"")},l=a(),u=n&&n[3]||(he.cssNumber[t]?"":"px"),c=e.nodeType&&(he.cssNumber[t]||"px"!==u&&+l)&&Ve.exec(he.css(e,t));if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;s--;)he.style(e,t,c+u),(1-r)*(1-(r=a()/l||.5))<=0&&(s=0),c/=r;c*=2,he.style(e,t,c+u),n=n||[]}return n&&(c=+c||+l||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],o&&(o.unit=u,o.start=c,o.end=i)),i}function v(e,t){for(var n,o,i,r,s,a,l,u=[],c=0,p=e.length;c<p;c++)(o=e[c]).style&&(n=o.style.display,t?("none"===n&&(u[c]=Le.get(o,"display")||null,u[c]||(o.style.display="")),""===o.style.display&&qe(o)&&(u[c]=(l=s=r=void 0,s=(i=o).ownerDocument,a=i.nodeName,(l=$e[a])||(r=s.body.appendChild(s.createElement(a)),l=he.css(r,"display"),r.parentNode.removeChild(r),"none"===l&&(l="block"),$e[a]=l)))):"none"!==n&&(u[c]="none",Le.set(o,"display",n)));for(c=0;c<p;c++)null!=u[c]&&(e[c].style.display=u[c]);return e}function y(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&r(e,t)?he.merge([e],n):n}function b(e,t){for(var n=0,o=e.length;n<o;n++)Le.set(e[n],"globalEval",!t||Le.get(t[n],"globalEval"))}function w(e,t,n,i,r){for(var s,a,l,u,c,p,f=t.createDocumentFragment(),d=[],h=0,m=e.length;h<m;h++)if((s=e[h])||0===s)if("object"===o(s))he.merge(d,s.nodeType?[s]:s);else if(Je.test(s)){for(a=a||f.appendChild(t.createElement("div")),l=(Xe.exec(s)||["",""])[1].toLowerCase(),u=Ye[l]||Ye._default,a.innerHTML=u[1]+he.htmlPrefilter(s)+u[2],p=u[0];p--;)a=a.lastChild;he.merge(d,a.childNodes),(a=f.firstChild).textContent=""}else d.push(t.createTextNode(s));for(f.textContent="",h=0;s=d[h++];)if(i&&-1<he.inArray(s,i))r&&r.push(s);else if(c=Re(s),a=y(f.appendChild(s),"script"),c&&b(a),n)for(p=0;s=a[p++];)Ue.test(s.type||"")&&n.push(s);return f}function x(){return!0}function S(){return!1}function C(e,t){return e===function(){try{return Z.activeElement}catch(e){}}()==("focus"===t)}function T(e,t,n,o,i,r){var s,a;if("object"==typeof t){for(a in"string"!=typeof n&&(o=o||n,n=void 0),t)T(e,a,n,o,t[a],r);return e}if(null==o&&null==i?(i=n,o=n=void 0):null==i&&("string"==typeof n?(i=o,o=void 0):(i=o,o=n,n=void 0)),!1===i)i=S;else if(!i)return e;return 1===r&&(s=i,(i=function(e){return he().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=he.guid++)),e.each(function(){he.event.add(this,t,i,o,n)})}function E(e,t,n){n?(Le.set(e,t,!1),he.event.add(e,t,{namespace:!1,handler:function(e){var o,i,r=Le.get(this,t);if(1&e.isTrigger&&this[t]){if(r.length)(he.event.special[t]||{}).delegateType&&e.stopPropagation();else if(r=ee.call(arguments),Le.set(this,t,r),o=n(this,t),this[t](),r!==(i=Le.get(this,t))||o?Le.set(this,t,!1):i={},r!==i)return e.stopImmediatePropagation(),e.preventDefault(),i.value}else r.length&&(Le.set(this,t,{value:he.event.trigger(he.extend(r[0],he.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Le.get(e,t)&&he.event.add(e,t,x)}function k(e,t){return r(e,"table")&&r(11!==t.nodeType?t:t.firstChild,"tr")&&he(e).children("tbody")[0]||e}function I(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function P(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function A(e,t){var n,o,i,r,s,a,l,u;if(1===t.nodeType){if(Le.hasData(e)&&(r=Le.access(e),s=Le.set(t,r),u=r.events))for(i in delete s.handle,s.events={},u)for(n=0,o=u[i].length;n<o;n++)he.event.add(t,i,u[i][n]);je.hasData(e)&&(a=je.access(e),l=he.extend({},a),je.set(t,l))}}function N(e,t,o,i){t=te.apply([],t);var r,s,a,l,u,c,p=0,f=e.length,d=f-1,h=t[0],m=ce(h);if(m||1<f&&"string"==typeof h&&!ue.checkClone&&ot.test(h))return e.each(function(n){var r=e.eq(n);m&&(t[0]=h.call(this,n,r.html())),N(r,t,o,i)});if(f&&(s=(r=w(t,e[0].ownerDocument,!1,e,i)).firstChild,1===r.childNodes.length&&(r=s),s||i)){for(l=(a=he.map(y(r,"script"),I)).length;p<f;p++)u=r,p!==d&&(u=he.clone(u,!0,!0),l&&he.merge(a,y(u,"script"))),o.call(e[p],u,p);if(l)for(c=a[a.length-1].ownerDocument,he.map(a,P),p=0;p<l;p++)u=a[p],Ue.test(u.type||"")&&!Le.access(u,"globalEval")&&he.contains(c,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?he._evalUrl&&!u.noModule&&he._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):n(u.textContent.replace(it,""),u,c))}return e}function O(e,t,n){for(var o,i=t?he.filter(t,e):e,r=0;null!=(o=i[r]);r++)n||1!==o.nodeType||he.cleanData(y(o)),o.parentNode&&(n&&Re(o)&&b(y(o,"script")),o.parentNode.removeChild(o));return e}function L(e,t,n){var o,i,r,s,a=e.style;return(n=n||st(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||Re(e)||(s=he.style(e,t)),!ue.pixelBoxStyles()&&rt.test(s)&&at.test(t)&&(o=a.width,i=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=o,a.minWidth=i,a.maxWidth=r)),void 0!==s?s+"":s}function j(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}function D(e){return he.cssProps[e]||ct[e]||(e in ut?e:ct[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=lt.length;n--;)if((e=lt[n]+t)in ut)return e}(e)||e)}function F(e,t,n){var o=Ve.exec(t);return o?Math.max(0,o[2]-(n||0))+(o[3]||"px"):t}function z(e,t,n,o,i,r){var s="width"===t?1:0,a=0,l=0;if(n===(o?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=he.css(e,n+Me[s],!0,i)),o?("content"===n&&(l-=he.css(e,"padding"+Me[s],!0,i)),"margin"!==n&&(l-=he.css(e,"border"+Me[s]+"Width",!0,i))):(l+=he.css(e,"padding"+Me[s],!0,i),"padding"!==n?l+=he.css(e,"border"+Me[s]+"Width",!0,i):a+=he.css(e,"border"+Me[s]+"Width",!0,i));return!o&&0<=r&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-r-l-a-.5))||0),l}function V(e,t,n){var o=st(e),i=(!ue.boxSizingReliable()||n)&&"border-box"===he.css(e,"boxSizing",!1,o),r=i,s=L(e,t,o),a="offset"+t[0].toUpperCase()+t.slice(1);if(rt.test(s)){if(!n)return s;s="auto"}return(!ue.boxSizingReliable()&&i||"auto"===s||!parseFloat(s)&&"inline"===he.css(e,"display",!1,o))&&e.getClientRects().length&&(i="border-box"===he.css(e,"boxSizing",!1,o),(r=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+z(e,t,n||(i?"border":"content"),r,o,s)+"px"}function M(e,t,n,o,i){return new M.prototype.init(e,t,n,o,i)}function _(){gt&&(!1===Z.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(_):e.setTimeout(_,he.fx.interval),he.fx.tick())}function R(){return e.setTimeout(function(){mt=void 0}),mt=Date.now()}function H(e,t){var n,o=0,i={height:e};for(t=t?1:0;o<4;o+=2-t)i["margin"+(n=Me[o])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function q(e,t,n){for(var o,i=(W.tweeners[t]||[]).concat(W.tweeners["*"]),r=0,s=i.length;r<s;r++)if(o=i[r].call(n,t,e))return o}function W(e,t,n){var o,i,r=0,s=W.prefilters.length,a=he.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=mt||R(),n=Math.max(0,u.startTime+u.duration-t),o=1-(n/u.duration||0),r=0,s=u.tweens.length;r<s;r++)u.tweens[r].run(o);return a.notifyWith(e,[u,o,n]),o<1&&s?n:(s||a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:he.extend({},t),opts:he.extend(!0,{specialEasing:{},easing:he.easing._default},n),originalProperties:t,originalOptions:n,startTime:mt||R(),duration:n.duration,tweens:[],createTween:function(t,n){var o=he.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(o),o},stop:function(t){var n=0,o=t?u.tweens.length:0;if(i)return this;for(i=!0;n<o;n++)u.tweens[n].run(1);return t?(a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u,t])):a.rejectWith(e,[u,t]),this}}),c=u.props;for((!function(e,t){var n,o,i,r,s;for(n in e)if(i=t[o=d(n)],r=e[n],Array.isArray(r)&&(i=r[1],r=e[n]=r[0]),n!==o&&(e[o]=r,delete e[n]),(s=he.cssHooks[o])&&"expand"in s)for(n in r=s.expand(r),delete e[o],r)n in e||(e[n]=r[n],t[n]=i);else t[o]=i}(c,u.opts.specialEasing));r<s;r++)if(o=W.prefilters[r].call(u,e,c,u.opts))return ce(o.stop)&&(he._queueHooks(u.elem,u.opts.queue).stop=o.stop.bind(o)),o;return he.map(c,q,u),ce(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),he.fx.timer(he.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u}function $(e){return(e.match(Ee)||[]).join(" ")}function B(e){return e.getAttribute&&e.getAttribute("class")||""}function X(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(Ee)||[]}function U(e,t,n,i){var r;if(Array.isArray(t))he.each(t,function(t,o){n||Ot.test(e)?i(e,o):U(e+"["+("object"==typeof o&&null!=o?t:"")+"]",o,n,i)});else if(n||"object"!==o(t))i(e,t);else for(r in t)U(e+"["+r+"]",t[r],n,i)}function Y(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var o,i=0,r=t.toLowerCase().match(Ee)||[];if(ce(n))for(;o=r[i++];)"+"===o[0]?(o=o.slice(1)||"*",(e[o]=e[o]||[]).unshift(n)):(e[o]=e[o]||[]).push(n)}}function G(e,t,n,o){function i(a){var l;return r[a]=!0,he.each(e[a]||[],function(e,a){var u=a(t,n,o);return"string"!=typeof u||s||r[u]?s?!(l=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),l}var r={},s=e===qt;return i(t.dataTypes[0])||!r["*"]&&i("*")}function Q(e,t){var n,o,i=he.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:o||(o={}))[n]=t[n]);return o&&he.extend(!0,e,o),e}var J=[],Z=e.document,K=Object.getPrototypeOf,ee=J.slice,te=J.concat,ne=J.push,oe=J.indexOf,ie={},re=ie.toString,se=ie.hasOwnProperty,ae=se.toString,le=ae.call(Object),ue={},ce=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},pe=function(e){return null!=e&&e===e.window},fe={type:!0,src:!0,nonce:!0,noModule:!0},de="3.4.1",he=function(e,t){return new he.fn.init(e,t)},me=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;he.fn=he.prototype={jquery:de,constructor:he,length:0,toArray:function(){return ee.call(this)},get:function(e){return null==e?ee.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=he.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return he.each(this,e)},map:function(e){return this.pushStack(he.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ee.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:ne,sort:J.sort,splice:J.splice},he.extend=he.fn.extend=function(){var e,t,n,o,i,r,s=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||ce(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)o=e[t],"__proto__"!==t&&s!==o&&(u&&o&&(he.isPlainObject(o)||(i=Array.isArray(o)))?(n=s[t],r=i&&!Array.isArray(n)?[]:i||he.isPlainObject(n)?n:{},i=!1,s[t]=he.extend(u,r,o)):void 0!==o&&(s[t]=o));return s},he.extend({expando:"jQuery"+(de+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==re.call(e)||(t=K(e))&&("function"!=typeof(n=se.call(t,"constructor")&&t.constructor)||ae.call(n)!==le))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){n(e,{nonce:t&&t.nonce})},each:function(e,t){var n,o=0;if(i(e))for(n=e.length;o<n&&!1!==t.call(e[o],o,e[o]);o++);else for(o in e)if(!1===t.call(e[o],o,e[o]))break;return e},trim:function(e){return null==e?"":(e+"").replace(me,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(i(Object(e))?he.merge(n,"string"==typeof e?[e]:e):ne.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:oe.call(t,e,n)},merge:function(e,t){for(var n=+t.length,o=0,i=e.length;o<n;o++)e[i++]=t[o];return e.length=i,e},grep:function(e,t,n){for(var o=[],i=0,r=e.length,s=!n;i<r;i++)!t(e[i],i)!==s&&o.push(e[i]);return o},map:function(e,t,n){var o,r,s=0,a=[];if(i(e))for(o=e.length;s<o;s++)null!=(r=t(e[s],s,n))&&a.push(r);else for(s in e)null!=(r=t(e[s],s,n))&&a.push(r);return te.apply([],a)},guid:1,support:ue}),"function"==typeof Symbol&&(he.fn[Symbol.iterator]=J[Symbol.iterator]),he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ie["[object "+t+"]"]=t.toLowerCase()});var ge=function(e){function t(e,t,n,o){var i,r,s,a,l,c,f,d=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!o&&((t?t.ownerDocument||t:V)!==A&&P(t),t=t||A,O)){if(11!==h&&(l=me.exec(e)))if(i=l[1]){if(9===h){if(!(s=t.getElementById(i)))return n;if(s.id===i)return n.push(s),n}else if(d&&(s=d.getElementById(i))&&F(t,s)&&s.id===i)return n.push(s),n}else{if(l[2])return G.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&y.getElementsByClassName&&t.getElementsByClassName)return G.apply(n,t.getElementsByClassName(i)),n}if(y.qsa&&!W[e+" "]&&(!L||!L.test(e))&&(1!==h||"object"!==t.nodeName.toLowerCase())){if(f=e,d=t,1===h&&ae.test(e)){for((a=t.getAttribute("id"))?a=a.replace(be,we):t.setAttribute("id",a=z),r=(c=S(e)).length;r--;)c[r]="#"+a+" "+p(c[r]);f=c.join(","),d=ge.test(e)&&u(t.parentNode)||t}try{return G.apply(n,d.querySelectorAll(f)),n}catch(t){W(e,!0)}finally{a===z&&t.removeAttribute("id")}}}return T(e.replace(ie,"$1"),t,n,o)}function n(){var e=[];return function t(n,o){return e.push(n+" ")>b.cacheLength&&delete t[e.shift()],t[n+" "]=o}}function o(e){return e[z]=!0,e}function i(e){var t=A.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function r(e,t){for(var n=e.split("|"),o=n.length;o--;)b.attrHandle[n[o]]=t}function s(e,t){var n=t&&e,o=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(o)return o;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Se(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function l(e){return o(function(t){return t=+t,o(function(n,o){for(var i,r=e([],n.length,t),s=r.length;s--;)n[i=r[s]]&&(n[i]=!(o[i]=n[i]))})})}function u(e){return e&&void 0!==e.getElementsByTagName&&e}function c(){}function p(e){for(var t=0,n=e.length,o="";t<n;t++)o+=e[t].value;return o}function f(e,t,n){var o=t.dir,i=t.next,r=i||o,s=n&&"parentNode"===r,a=_++;return t.first?function(t,n,i){for(;t=t[o];)if(1===t.nodeType||s)return e(t,n,i);return!1}:function(t,n,l){var u,c,p,f=[M,a];if(l){for(;t=t[o];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[o];)if(1===t.nodeType||s)if(c=(p=t[z]||(t[z]={}))[t.uniqueID]||(p[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[o]||t;else{if((u=c[r])&&u[0]===M&&u[1]===a)return f[2]=u[2];if((c[r]=f)[2]=e(t,n,l))return!0}return!1}}function d(e){return 1<e.length?function(t,n,o){for(var i=e.length;i--;)if(!e[i](t,n,o))return!1;return!0}:e[0]}function h(e,t,n,o,i){for(var r,s=[],a=0,l=e.length,u=null!=t;a<l;a++)(r=e[a])&&(n&&!n(r,o,i)||(s.push(r),u&&t.push(a)));return s}function m(e,n,i,r,s,a){return r&&!r[z]&&(r=m(r)),s&&!s[z]&&(s=m(s,a)),o(function(o,a,l,u){var c,p,f,d=[],m=[],g=a.length,v=o||function(e,n,o){for(var i=0,r=n.length;i<r;i++)t(e,n[i],o);return o}(n||"*",l.nodeType?[l]:l,[]),y=!e||!o&&n?v:h(v,d,e,l,u),b=i?s||(o?e:g||r)?[]:a:y;if(i&&i(y,b,l,u),r)for(c=h(b,m),r(c,[],l,u),p=c.length;p--;)(f=c[p])&&(b[m[p]]=!(y[m[p]]=f));if(o){if(s||e){if(s){for(c=[],p=b.length;p--;)(f=b[p])&&c.push(y[p]=f);s(null,b=[],c,u)}for(p=b.length;p--;)(f=b[p])&&-1<(c=s?J(o,f):d[p])&&(o[c]=!(a[c]=f))}}else b=h(b===a?b.splice(g,b.length):b),s?s(null,a,b,u):G.apply(a,b)})}function g(e){for(var t,n,o,i=e.length,r=b.relative[e[0].type],s=r||b.relative[" "],a=r?1:0,l=f(function(e){return e===t},s,!0),u=f(function(e){return-1<J(t,e)},s,!0),c=[function(e,n,o){var i=!r&&(o||n!==E)||((t=n).nodeType?l(e,n,o):u(e,n,o));return t=null,i}];a<i;a++)if(n=b.relative[e[a].type])c=[f(d(c),n)];else{if((n=b.filter[e[a].type].apply(null,e[a].matches))[z]){for(o=++a;o<i&&!b.relative[e[o].type];o++);return m(1<a&&d(c),1<a&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ie,"$1"),n,a<o&&g(e.slice(a,o)),o<i&&g(e=e.slice(o)),o<i&&p(e))}c.push(n)}return d(c)}var v,y,b,w,x,S,C,T,E,k,I,P,A,N,O,L,j,D,F,z="sizzle"+1*new Date,V=e.document,M=0,_=0,R=n(),H=n(),q=n(),W=n(),$=function(e,t){return e===t&&(I=!0),0},B={}.hasOwnProperty,X=[],U=X.pop,Y=X.push,G=X.push,Q=X.slice,J=function(e,t){for(var n=0,o=e.length;n<o;n++)if(e[n]===t)return n;return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",ee="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",te="\\["+K+"*("+ee+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ee+"))|)"+K+"*\\]",ne=":("+ee+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+te+")*)|.*)\\)|)",oe=new RegExp(K+"+","g"),ie=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),re=new RegExp("^"+K+"*,"+K+"*"),se=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),ae=new RegExp(K+"|>"),le=new RegExp(ne),ue=new RegExp("^"+ee+"$"),ce={ID:new RegExp("^#("+ee+")"),CLASS:new RegExp("^\\.("+ee+")"),TAG:new RegExp("^("+ee+"|[*])"),ATTR:new RegExp("^"+te),PSEUDO:new RegExp("^"+ne),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},pe=/HTML$/i,fe=/^(?:input|select|textarea|button)$/i,de=/^h\d$/i,he=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ge=/[+~]/,ve=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),ye=function(e,t,n){var o="0x"+t-65536;return o!=o||n?t:o<0?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)},be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,we=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},xe=function(){P()},Se=f(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{G.apply(X=Q.call(V.childNodes),V.childNodes),X[V.childNodes.length].nodeType}catch(v){G={apply:X.length?function(e,t){Y.apply(e,Q.call(t))}:function(e,t){for(var n=e.length,o=0;e[n++]=t[o++];);e.length=n-1}}}for(v in y=t.support={},x=t.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!pe.test(t||n&&n.nodeName||"HTML")},P=t.setDocument=function(e){var t,n,o=e?e.ownerDocument||e:V;return o!==A&&9===o.nodeType&&o.documentElement&&(N=(A=o).documentElement,O=!x(A),V!==A&&(n=A.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",xe,!1):n.attachEvent&&n.attachEvent("onunload",xe)),y.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),y.getElementsByTagName=i(function(e){return e.appendChild(A.createComment("")),!e.getElementsByTagName("*").length}),y.getElementsByClassName=he.test(A.getElementsByClassName),y.getById=i(function(e){return N.appendChild(e).id=z,!A.getElementsByName||!A.getElementsByName(z).length}),y.getById?(b.filter.ID=function(e){var t=e.replace(ve,ye);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&O){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var t=e.replace(ve,ye);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&O){var n,o,i,r=t.getElementById(e);if(r){if((n=r.getAttributeNode("id"))&&n.value===e)return[r];for(i=t.getElementsByName(e),o=0;r=i[o++];)if((n=r.getAttributeNode("id"))&&n.value===e)return[r]}return[]}}),b.find.TAG=y.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):y.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,o=[],i=0,r=t.getElementsByTagName(e);if("*"===e){for(;n=r[i++];)1===n.nodeType&&o.push(n);return o}return r},b.find.CLASS=y.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&O)return t.getElementsByClassName(e)},j=[],L=[],(y.qsa=he.test(A.querySelectorAll))&&(i(function(e){N.appendChild(e).innerHTML="<a id='"+z+"'></a><select id='"+z+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&L.push("[*^$]="+K+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||L.push("\\["+K+"*(?:value|"+Z+")"),e.querySelectorAll("[id~="+z+"-]").length||L.push("~="),e.querySelectorAll(":checked").length||L.push(":checked"),e.querySelectorAll("a#"+z+"+*").length||L.push(".#.+[+~]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=A.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&L.push("name"+K+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&L.push(":enabled",":disabled"),N.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&L.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),L.push(",.*:")})),(y.matchesSelector=he.test(D=N.matches||N.webkitMatchesSelector||N.mozMatchesSelector||N.oMatchesSelector||N.msMatchesSelector))&&i(function(e){y.disconnectedMatch=D.call(e,"*"),D.call(e,"[s!='']:x"),j.push("!=",ne)}),L=L.length&&new RegExp(L.join("|")),j=j.length&&new RegExp(j.join("|")),t=he.test(N.compareDocumentPosition),F=t||he.test(N.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,o=t&&t.parentNode;return e===o||!(!o||1!==o.nodeType||!(n.contains?n.contains(o):e.compareDocumentPosition&&16&e.compareDocumentPosition(o)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},$=t?function(e,t){if(e===t)return I=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!y.sortDetached&&t.compareDocumentPosition(e)===n?e===A||e.ownerDocument===V&&F(V,e)?-1:t===A||t.ownerDocument===V&&F(V,t)?1:k?J(k,e)-J(k,t):0:4&n?-1:1)}:function(e,t){if(e===t)return I=!0,0;var n,o=0,i=e.parentNode,r=t.parentNode,a=[e],l=[t];if(!i||!r)return e===A?-1:t===A?1:i?-1:r?1:k?J(k,e)-J(k,t):0;if(i===r)return s(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;a[o]===l[o];)o++;return o?s(a[o],l[o]):a[o]===V?-1:l[o]===V?1:0}),A},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==A&&P(e),y.matchesSelector&&O&&!W[n+" "]&&(!j||!j.test(n))&&(!L||!L.test(n)))try{var o=D.call(e,n);if(o||y.disconnectedMatch||e.document&&11!==e.document.nodeType)return o}catch(e){W(n,!0)}return 0<t(n,A,null,[e]).length},t.contains=function(e,t){return(e.ownerDocument||e)!==A&&P(e),F(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==A&&P(e);var n=b.attrHandle[t.toLowerCase()],o=n&&B.call(b.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==o?o:y.attributes||!O?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},t.escape=function(e){return(e+"").replace(be,we)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],o=0,i=0;if(I=!y.detectDuplicates,k=!y.sortStable&&e.slice(0),e.sort($),I){for(;t=e[i++];)t===e[i]&&(o=n.push(i));for(;o--;)e.splice(n[o],1)}return k=null,e},w=t.getText=function(e){var t,n="",o=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=w(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[o++];)n+=w(t);return n},(b=t.selectors={cacheLength:50,createPseudo:o,match:ce,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ve,ye),e[3]=(e[3]||e[4]||e[5]||"").replace(ve,ye),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ce.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&le.test(n)&&(t=S(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ve,ye).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=R[e+" "];return t||(t=new RegExp("(^|"+K+")"+e+"("+K+"|$)"))&&R(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,o){return function(i){var r=t.attr(i,e);return null==r?"!="===n:!n||(r+="","="===n?r===o:"!="===n?r!==o:"^="===n?o&&0===r.indexOf(o):"*="===n?o&&-1<r.indexOf(o):"$="===n?o&&r.slice(-o.length)===o:"~="===n?-1<(" "+r.replace(oe," ")+" ").indexOf(o):"|="===n&&(r===o||r.slice(0,o.length+1)===o+"-"))}},CHILD:function(e,t,n,o,i){var r="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===o&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,m=r!==s?"nextSibling":"previousSibling",g=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,b=!1;if(g){if(r){for(;m;){for(f=t;f=f[m];)if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&y){for(b=(d=(u=(c=(p=(f=g)[z]||(f[z]={}))[f.uniqueID]||(p[f.uniqueID]={}))[e]||[])[0]===M&&u[1])&&u[2],f=d&&g.childNodes[d];f=++d&&f&&f[m]||(b=d=0)||h.pop();)if(1===f.nodeType&&++b&&f===t){c[e]=[M,d,b];break}}else if(y&&(b=d=(u=(c=(p=(f=t)[z]||(f[z]={}))[f.uniqueID]||(p[f.uniqueID]={}))[e]||[])[0]===M&&u[1]),!1===b)for(;(f=++d&&f&&f[m]||(b=d=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++b||(y&&((c=(p=f[z]||(f[z]={}))[f.uniqueID]||(p[f.uniqueID]={}))[e]=[M,b]),f!==t)););return(b-=i)===o||b%o==0&&0<=b/o}}},PSEUDO:function(e,n){var i,r=b.pseudos[e]||b.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return r[z]?r(n):1<r.length?(i=[e,e,"",n],b.setFilters.hasOwnProperty(e.toLowerCase())?o(function(e,t){for(var o,i=r(e,n),s=i.length;s--;)e[o=J(e,i[s])]=!(t[o]=i[s])}):function(e){return r(e,0,i)}):r}},pseudos:{not:o(function(e){var t=[],n=[],i=C(e.replace(ie,"$1"));return i[z]?o(function(e,t,n,o){for(var r,s=i(e,null,o,[]),a=e.length;a--;)(r=s[a])&&(e[a]=!(t[a]=r))}):function(e,o,r){return t[0]=e,i(t,null,r,n),t[0]=null,!n.pop()}}),has:o(function(e){return function(n){return 0<t(e,n).length}}),contains:o(function(e){return e=e.replace(ve,ye),function(t){return-1<(t.textContent||w(t)).indexOf(e)}}),lang:o(function(e){return ue.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ve,ye).toLowerCase(),function(t){var n;do{if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===N},focus:function(e){return e===A.activeElement&&(!A.hasFocus||A.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:a(!1),disabled:a(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return de.test(e.nodeName)},input:function(e){return fe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[n<0?n+t:n]}),even:l(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var o=n<0?n+t:t<n?t:n;0<=--o;)e.push(o);return e}),gt:l(function(e,t,n){for(var o=n<0?n+t:n;++o<t;)e.push(o);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[v]=function(e){return function(t){
return"input"===t.nodeName.toLowerCase()&&t.type===e}}(v);for(v in{submit:!0,reset:!0})b.pseudos[v]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(v);return c.prototype=b.filters=b.pseudos,b.setFilters=new c,S=t.tokenize=function(e,n){var o,i,r,s,a,l,u,c=H[e+" "];if(c)return n?0:c.slice(0);for(a=e,l=[],u=b.preFilter;a;){for(s in o&&!(i=re.exec(a))||(i&&(a=a.slice(i[0].length)||a),l.push(r=[])),o=!1,(i=se.exec(a))&&(o=i.shift(),r.push({value:o,type:i[0].replace(ie," ")}),a=a.slice(o.length)),b.filter)!(i=ce[s].exec(a))||u[s]&&!(i=u[s](i))||(o=i.shift(),r.push({value:o,type:s,matches:i}),a=a.slice(o.length));if(!o)break}return n?a.length:a?t.error(e):H(e,l).slice(0)},C=t.compile=function(e,n){var i,r,s,a,l,u,c=[],p=[],f=q[e+" "];if(!f){for(n||(n=S(e)),i=n.length;i--;)(f=g(n[i]))[z]?c.push(f):p.push(f);(f=q(e,(r=p,a=0<(s=c).length,l=0<r.length,u=function(e,n,o,i,u){var c,p,f,d=0,m="0",g=e&&[],v=[],y=E,w=e||l&&b.find.TAG("*",u),x=M+=null==y?1:Math.random()||.1,S=w.length;for(u&&(E=n===A||n||u);m!==S&&null!=(c=w[m]);m++){if(l&&c){for(p=0,n||c.ownerDocument===A||(P(c),o=!O);f=r[p++];)if(f(c,n||A,o)){i.push(c);break}u&&(M=x)}a&&((c=!f&&c)&&d--,e&&g.push(c))}if(d+=m,a&&m!==d){for(p=0;f=s[p++];)f(g,v,n,o);if(e){if(0<d)for(;m--;)g[m]||v[m]||(v[m]=U.call(i));v=h(v)}G.apply(i,v),u&&!e&&0<v.length&&1<d+s.length&&t.uniqueSort(i)}return u&&(M=x,E=y),g},a?o(u):u))).selector=e}return f},T=t.select=function(e,t,n,o){var i,r,s,a,l,c="function"==typeof e&&e,f=!o&&S(e=c.selector||e);if(n=n||[],1===f.length){if(2<(r=f[0]=f[0].slice(0)).length&&"ID"===(s=r[0]).type&&9===t.nodeType&&O&&b.relative[r[1].type]){if(!(t=(b.find.ID(s.matches[0].replace(ve,ye),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(i=ce.needsContext.test(e)?0:r.length;i--&&(s=r[i],!b.relative[a=s.type]);)if((l=b.find[a])&&(o=l(s.matches[0].replace(ve,ye),ge.test(r[0].type)&&u(t.parentNode)||t))){if(r.splice(i,1),!(e=o.length&&p(r)))return G.apply(n,o),n;break}}return(c||C(e,f))(o,t,!O,n,!t||ge.test(e)&&u(t.parentNode)||t),n},y.sortStable=z.split("").sort($).join("")===z,y.detectDuplicates=!!I,P(),y.sortDetached=i(function(e){return 1&e.compareDocumentPosition(A.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||r("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),y.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||r("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||r(Z,function(e,t,n){var o;if(!n)return!0===e[t]?t.toLowerCase():(o=e.getAttributeNode(t))&&o.specified?o.value:null}),t}(e);he.find=ge,he.expr=ge.selectors,he.expr[":"]=he.expr.pseudos,he.uniqueSort=he.unique=ge.uniqueSort,he.text=ge.getText,he.isXMLDoc=ge.isXML,he.contains=ge.contains,he.escapeSelector=ge.escape;var ve=function(e,t,n){for(var o=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&he(e).is(n))break;o.push(e)}return o},ye=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},be=he.expr.match.needsContext,we=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;he.filter=function(e,t,n){var o=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===o.nodeType?he.find.matchesSelector(o,e)?[o]:[]:he.find.matches(e,he.grep(t,function(e){return 1===e.nodeType}))},he.fn.extend({find:function(e){var t,n,o=this.length,i=this;if("string"!=typeof e)return this.pushStack(he(e).filter(function(){for(t=0;t<o;t++)if(he.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<o;t++)he.find(e,i[t],n);return 1<o?he.uniqueSort(n):n},filter:function(e){return this.pushStack(s(this,e||[],!1))},not:function(e){return this.pushStack(s(this,e||[],!0))},is:function(e){return!!s(this,"string"==typeof e&&be.test(e)?he(e):e||[],!1).length}});var xe,Se=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(he.fn.init=function(e,t,n){var o,i;if(!e)return this;if(n=n||xe,"string"==typeof e){if(!(o="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:Se.exec(e))||!o[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(o[1]){if(t=t instanceof he?t[0]:t,he.merge(this,he.parseHTML(o[1],t&&t.nodeType?t.ownerDocument||t:Z,!0)),we.test(o[1])&&he.isPlainObject(t))for(o in t)ce(this[o])?this[o](t[o]):this.attr(o,t[o]);return this}return(i=Z.getElementById(o[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):ce(e)?void 0!==n.ready?n.ready(e):e(he):he.makeArray(e,this)}).prototype=he.fn,xe=he(Z);var Ce=/^(?:parents|prev(?:Until|All))/,Te={children:!0,contents:!0,next:!0,prev:!0};he.fn.extend({has:function(e){var t=he(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(he.contains(this,t[e]))return!0})},closest:function(e,t){var n,o=0,i=this.length,r=[],s="string"!=typeof e&&he(e);if(!be.test(e))for(;o<i;o++)for(n=this[o];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&he.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(1<r.length?he.uniqueSort(r):r)},index:function(e){return e?"string"==typeof e?oe.call(he(e),this[0]):oe.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(he.uniqueSort(he.merge(this.get(),he(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),he.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ve(e,"parentNode")},parentsUntil:function(e,t,n){return ve(e,"parentNode",n)},next:function(e){return a(e,"nextSibling")},prev:function(e){return a(e,"previousSibling")},nextAll:function(e){return ve(e,"nextSibling")},prevAll:function(e){return ve(e,"previousSibling")},nextUntil:function(e,t,n){return ve(e,"nextSibling",n)},prevUntil:function(e,t,n){return ve(e,"previousSibling",n)},siblings:function(e){return ye((e.parentNode||{}).firstChild,e)},children:function(e){return ye(e.firstChild)},contents:function(e){return void 0!==e.contentDocument?e.contentDocument:(r(e,"template")&&(e=e.content||e),he.merge([],e.childNodes))}},function(e,t){he.fn[e]=function(n,o){var i=he.map(this,t,n);return"Until"!==e.slice(-5)&&(o=n),o&&"string"==typeof o&&(i=he.filter(o,i)),1<this.length&&(Te[e]||he.uniqueSort(i),Ce.test(e)&&i.reverse()),this.pushStack(i)}});var Ee=/[^\x20\t\r\n\f]+/g;he.Callbacks=function(e){var t,n;e="string"==typeof e?(t=e,n={},he.each(t.match(Ee)||[],function(e,t){n[t]=!0}),n):he.extend({},e);var i,r,s,a,l=[],u=[],c=-1,p=function(){for(a=a||e.once,s=i=!0;u.length;c=-1)for(r=u.shift();++c<l.length;)!1===l[c].apply(r[0],r[1])&&e.stopOnFalse&&(c=l.length,r=!1);e.memory||(r=!1),i=!1,a&&(l=r?[]:"")},f={add:function(){return l&&(r&&!i&&(c=l.length-1,u.push(r)),function t(n){he.each(n,function(n,i){ce(i)?e.unique&&f.has(i)||l.push(i):i&&i.length&&"string"!==o(i)&&t(i)})}(arguments),r&&!i&&p()),this},remove:function(){return he.each(arguments,function(e,t){for(var n;-1<(n=he.inArray(t,l,n));)l.splice(n,1),n<=c&&c--}),this},has:function(e){return e?-1<he.inArray(e,l):0<l.length},empty:function(){return l&&(l=[]),this},disable:function(){return a=u=[],l=r="",this},disabled:function(){return!l},lock:function(){return a=u=[],r||i||(l=r=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||p()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!s}};return f},he.extend({Deferred:function(t){var n=[["notify","progress",he.Callbacks("memory"),he.Callbacks("memory"),2],["resolve","done",he.Callbacks("once memory"),he.Callbacks("once memory"),0,"resolved"],["reject","fail",he.Callbacks("once memory"),he.Callbacks("once memory"),1,"rejected"]],o="pending",i={state:function(){return o},always:function(){return r.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return he.Deferred(function(t){he.each(n,function(n,o){var i=ce(e[o[4]])&&e[o[4]];r[o[1]](function(){var e=i&&i.apply(this,arguments);e&&ce(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[o[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,o,i){function r(t,n,o,i){return function(){var a=this,c=arguments,p=function(){var e,p;if(!(t<s)){if((e=o.apply(a,c))===n.promise())throw new TypeError("Thenable self-resolution");p=e&&("object"==typeof e||"function"==typeof e)&&e.then,ce(p)?i?p.call(e,r(s,n,l,i),r(s,n,u,i)):(s++,p.call(e,r(s,n,l,i),r(s,n,u,i),r(s,n,l,n.notifyWith))):(o!==l&&(a=void 0,c=[e]),(i||n.resolveWith)(a,c))}},f=i?p:function(){try{p()}catch(e){he.Deferred.exceptionHook&&he.Deferred.exceptionHook(e,f.stackTrace),s<=t+1&&(o!==u&&(a=void 0,c=[e]),n.rejectWith(a,c))}};t?f():(he.Deferred.getStackHook&&(f.stackTrace=he.Deferred.getStackHook()),e.setTimeout(f))}}var s=0;return he.Deferred(function(e){n[0][3].add(r(0,e,ce(i)?i:l,e.notifyWith)),n[1][3].add(r(0,e,ce(t)?t:l)),n[2][3].add(r(0,e,ce(o)?o:u))}).promise()},promise:function(e){return null!=e?he.extend(e,i):i}},r={};return he.each(n,function(e,t){var s=t[2],a=t[5];i[t[1]]=s.add,a&&s.add(function(){o=a},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),s.add(t[3].fire),r[t[0]]=function(){return r[t[0]+"With"](this===r?void 0:this,arguments),this},r[t[0]+"With"]=s.fireWith}),i.promise(r),t&&t.call(r,r),r},when:function(e){var t=arguments.length,n=t,o=Array(n),i=ee.call(arguments),r=he.Deferred(),s=function(e){return function(n){o[e]=this,i[e]=1<arguments.length?ee.call(arguments):n,--t||r.resolveWith(o,i)}};if(t<=1&&(c(e,r.done(s(n)).resolve,r.reject,!t),"pending"===r.state()||ce(i[n]&&i[n].then)))return r.then();for(;n--;)c(i[n],s(n),r.reject);return r.promise()}});var ke=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;he.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&ke.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},he.readyException=function(t){e.setTimeout(function(){throw t})};var Ie=he.Deferred();he.fn.ready=function(e){return Ie.then(e).catch(function(e){he.readyException(e)}),this},he.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--he.readyWait:he.isReady)||(he.isReady=!0)!==e&&0<--he.readyWait||Ie.resolveWith(Z,[he])}}),he.ready.then=Ie.then,"complete"===Z.readyState||"loading"!==Z.readyState&&!Z.documentElement.doScroll?e.setTimeout(he.ready):(Z.addEventListener("DOMContentLoaded",p),e.addEventListener("load",p));var Pe=function(e,t,n,i,r,s,a){var l=0,u=e.length,c=null==n;if("object"===o(n))for(l in r=!0,n)Pe(e,t,l,n[l],!0,s,a);else if(void 0!==i&&(r=!0,ce(i)||(a=!0),c&&(a?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(he(e),n)})),t))for(;l<u;l++)t(e[l],n,a?i:i.call(e[l],l,t(e[l],n)));return r?e:c?t.call(e):u?t(e[0],n):s},Ae=/^-ms-/,Ne=/-([a-z])/g,Oe=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};h.uid=1,h.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Oe(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var o,i=this.cache(e);if("string"==typeof t)i[d(t)]=n;else for(o in t)i[d(o)]=t[o];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][d(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,o=e[this.expando];if(void 0!==o){if(void 0!==t){n=(t=Array.isArray(t)?t.map(d):(t=d(t))in o?[t]:t.match(Ee)||[]).length;for(;n--;)delete o[t[n]]}(void 0===t||he.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!he.isEmptyObject(t)}};var Le=new h,je=new h,De=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Fe=/[A-Z]/g;he.extend({hasData:function(e){return je.hasData(e)||Le.hasData(e)},data:function(e,t,n){return je.access(e,t,n)},removeData:function(e,t){je.remove(e,t)},_data:function(e,t,n){return Le.access(e,t,n)},_removeData:function(e,t){Le.remove(e,t)}}),he.fn.extend({data:function(e,t){var n,o,i,r=this[0],s=r&&r.attributes;if(void 0===e){if(this.length&&(i=je.get(r),1===r.nodeType&&!Le.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(o=s[n].name).indexOf("data-")&&(o=d(o.slice(5)),m(r,o,i[o]));Le.set(r,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){je.set(this,e)}):Pe(this,function(t){var n;if(r&&void 0===t)return void 0!==(n=je.get(r,e))?n:void 0!==(n=m(r,e))?n:void 0;this.each(function(){je.set(this,e,t)})},null,t,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){je.remove(this,e)})}}),he.extend({queue:function(e,t,n){var o;if(e)return t=(t||"fx")+"queue",o=Le.get(e,t),n&&(!o||Array.isArray(n)?o=Le.access(e,t,he.makeArray(n)):o.push(n)),o||[]},dequeue:function(e,t){t=t||"fx";var n=he.queue(e,t),o=n.length,i=n.shift(),r=he._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),o--),i&&("fx"===t&&n.unshift("inprogress"),delete r.stop,i.call(e,function(){he.dequeue(e,t)},r)),!o&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Le.get(e,n)||Le.access(e,n,{empty:he.Callbacks("once memory").add(function(){Le.remove(e,[t+"queue",n])})})}}),he.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?he.queue(this[0],e):void 0===t?this:this.each(function(){var n=he.queue(this,e,t);he._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&he.dequeue(this,e)})},dequeue:function(e){return this.each(function(){he.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,o=1,i=he.Deferred(),r=this,s=this.length,a=function(){--o||i.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=Le.get(r[s],e+"queueHooks"))&&n.empty&&(o++,n.empty.add(a));return a(),i.promise(t)}});var ze=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ve=new RegExp("^(?:([+-])=|)("+ze+")([a-z%]*)$","i"),Me=["Top","Right","Bottom","Left"],_e=Z.documentElement,Re=function(e){return he.contains(e.ownerDocument,e)},He={composed:!0};_e.getRootNode&&(Re=function(e){return he.contains(e.ownerDocument,e)||e.getRootNode(He)===e.ownerDocument});var qe=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&Re(e)&&"none"===he.css(e,"display")},We=function(e,t,n,o){var i,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];for(r in i=n.apply(e,o||[]),t)e.style[r]=s[r];return i},$e={};he.fn.extend({show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){qe(this)?he(this).show():he(this).hide()})}});var Be=/^(?:checkbox|radio)$/i,Xe=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ue=/^$|^module$|\/(?:java|ecma)script/i,Ye={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ye.optgroup=Ye.option,Ye.tbody=Ye.tfoot=Ye.colgroup=Ye.caption=Ye.thead,Ye.th=Ye.td;var Ge,Qe,Je=/<|&#?\w+;/;Ge=Z.createDocumentFragment().appendChild(Z.createElement("div")),(Qe=Z.createElement("input")).setAttribute("type","radio"),Qe.setAttribute("checked","checked"),Qe.setAttribute("name","t"),Ge.appendChild(Qe),ue.checkClone=Ge.cloneNode(!0).cloneNode(!0).lastChild.checked,Ge.innerHTML="<textarea>x</textarea>",ue.noCloneChecked=!!Ge.cloneNode(!0).lastChild.defaultValue;var Ze=/^key/,Ke=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,et=/^([^.]*)(?:\.(.+)|)/;he.event={global:{},add:function(e,t,n,o,i){var r,s,a,l,u,c,p,f,d,h,m,g=Le.get(e);if(g)for(n.handler&&(n=(r=n).handler,i=r.selector),i&&he.find.matchesSelector(_e,i),n.guid||(n.guid=he.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(t){return void 0!==he&&he.event.triggered!==t.type?he.event.dispatch.apply(e,arguments):void 0}),u=(t=(t||"").match(Ee)||[""]).length;u--;)d=m=(a=et.exec(t[u])||[])[1],h=(a[2]||"").split(".").sort(),d&&(p=he.event.special[d]||{},d=(i?p.delegateType:p.bindType)||d,p=he.event.special[d]||{},c=he.extend({type:d,origType:m,data:o,handler:n,guid:n.guid,selector:i,needsContext:i&&he.expr.match.needsContext.test(i),namespace:h.join(".")},r),(f=l[d])||((f=l[d]=[]).delegateCount=0,p.setup&&!1!==p.setup.call(e,o,h,s)||e.addEventListener&&e.addEventListener(d,s)),p.add&&(p.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?f.splice(f.delegateCount++,0,c):f.push(c),he.event.global[d]=!0)},remove:function(e,t,n,o,i){var r,s,a,l,u,c,p,f,d,h,m,g=Le.hasData(e)&&Le.get(e);if(g&&(l=g.events)){for(u=(t=(t||"").match(Ee)||[""]).length;u--;)if(d=m=(a=et.exec(t[u])||[])[1],h=(a[2]||"").split(".").sort(),d){for(p=he.event.special[d]||{},f=l[d=(o?p.delegateType:p.bindType)||d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=f.length;r--;)c=f[r],!i&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||o&&o!==c.selector&&("**"!==o||!c.selector)||(f.splice(r,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&!1!==p.teardown.call(e,h,g.handle)||he.removeEvent(e,d,g.handle),delete l[d])}else for(d in l)he.event.remove(e,d+t[u],n,o,!0);he.isEmptyObject(l)&&Le.remove(e,"handle events")}},dispatch:function(e){var t,n,o,i,r,s,a=he.event.fix(e),l=new Array(arguments.length),u=(Le.get(this,"events")||{})[a.type]||[],c=he.event.special[a.type]||{};for(l[0]=a,t=1;t<arguments.length;t++)l[t]=arguments[t];if(a.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,a)){for(s=he.event.handlers.call(this,a,u),t=0;(i=s[t++])&&!a.isPropagationStopped();)for(a.currentTarget=i.elem,n=0;(r=i.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!1!==r.namespace&&!a.rnamespace.test(r.namespace)||(a.handleObj=r,a.data=r.data,void 0!==(o=((he.event.special[r.origType]||{}).handle||r.handler).apply(i.elem,l))&&!1===(a.result=o)&&(a.preventDefault(),a.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,o,i,r,s,a=[],l=t.delegateCount,u=e.target;if(l&&u.nodeType&&!("click"===e.type&&1<=e.button))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(r=[],s={},n=0;n<l;n++)void 0===s[i=(o=t[n]).selector+" "]&&(s[i]=o.needsContext?-1<he(i,this).index(u):he.find(i,this,null,[u]).length),s[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return u=this,l<t.length&&a.push({elem:u,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(he.Event.prototype,e,{enumerable:!0,configurable:!0,get:ce(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[he.expando]?e:new he.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return Be.test(t.type)&&t.click&&r(t,"input")&&E(t,"click",x),!1},trigger:function(e){var t=this||e;return Be.test(t.type)&&t.click&&r(t,"input")&&E(t,"click"),!0},_default:function(e){var t=e.target;return Be.test(t.type)&&t.click&&r(t,"input")&&Le.get(t,"click")||r(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},he.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},he.Event=function(e,t){if(!(this instanceof he.Event))return new he.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?x:S,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&he.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[he.expando]=!0},he.Event.prototype={constructor:he.Event,isDefaultPrevented:S,isPropagationStopped:S,isImmediatePropagationStopped:S,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=x,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=x,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=x,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},he.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Ze.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ke.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},he.event.addProp),he.each({focus:"focusin",blur:"focusout"},function(e,t){he.event.special[e]={setup:function(){return E(this,e,C),!1},trigger:function(){return E(this,e),!0},delegateType:t}}),he.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){he.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,o=e.relatedTarget,i=e.handleObj;return o&&(o===this||he.contains(this,o))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),he.fn.extend({on:function(e,t,n,o){return T(this,e,t,n,o)},one:function(e,t,n,o){return T(this,e,t,n,o,1)},off:function(e,t,n){var o,i;if(e&&e.preventDefault&&e.handleObj)return o=e.handleObj,he(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=S),this.each(function(){he.event.remove(this,e,n,t)})}});var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,nt=/<script|<style|<link/i,ot=/checked\s*(?:[^=]|=\s*.checked.)/i,it=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;he.extend({htmlPrefilter:function(e){return e.replace(tt,"<$1></$2>")},clone:function(e,t,n){var o,i,r,s,a,l,u,c=e.cloneNode(!0),p=Re(e);if(!(ue.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||he.isXMLDoc(e)))for(s=y(c),o=0,i=(r=y(e)).length;o<i;o++)a=r[o],l=s[o],"input"===(u=l.nodeName.toLowerCase())&&Be.test(a.type)?l.checked=a.checked:"input"!==u&&"textarea"!==u||(l.defaultValue=a.defaultValue);if(t)if(n)for(r=r||y(e),s=s||y(c),o=0,i=r.length;o<i;o++)A(r[o],s[o]);else A(e,c);return 0<(s=y(c,"script")).length&&b(s,!p&&y(e,"script")),c},cleanData:function(e){for(var t,n,o,i=he.event.special,r=0;void 0!==(n=e[r]);r++)if(Oe(n)){if(t=n[Le.expando]){if(t.events)for(o in t.events)i[o]?he.event.remove(n,o):he.removeEvent(n,o,t.handle);n[Le.expando]=void 0}n[je.expando]&&(n[je.expando]=void 0)}}}),he.fn.extend({detach:function(e){return O(this,e,!0)},remove:function(e){return O(this,e)},text:function(e){return Pe(this,function(e){return void 0===e?he.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return N(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||k(this,e).appendChild(e)})},prepend:function(){return N(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=k(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return N(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return N(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(he.cleanData(y(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return he.clone(this,e,t)})},html:function(e){return Pe(this,function(e){var t=this[0]||{},n=0,o=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!nt.test(e)&&!Ye[(Xe.exec(e)||["",""])[1].toLowerCase()]){e=he.htmlPrefilter(e);try{for(;n<o;n++)1===(t=this[n]||{}).nodeType&&(he.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return N(this,arguments,function(t){var n=this.parentNode;he.inArray(this,e)<0&&(he.cleanData(y(this)),n&&n.replaceChild(t,this))},e)}}),he.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){he.fn[e]=function(e){for(var n,o=[],i=he(e),r=i.length-1,s=0;s<=r;s++)n=s===r?this:this.clone(!0),he(i[s])[t](n),ne.apply(o,n.get());return this.pushStack(o)}});var rt=new RegExp("^("+ze+")(?!px)[a-z%]+$","i"),st=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},at=new RegExp(Me.join("|"),"i");!function(){function t(){if(u){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",_e.appendChild(l).appendChild(u);var t=e.getComputedStyle(u);o="1%"!==t.top,a=12===n(t.marginLeft),u.style.right="60%",s=36===n(t.right),i=36===n(t.width),u.style.position="absolute",r=12===n(u.offsetWidth/3),_e.removeChild(l),u=null}}function n(e){return Math.round(parseFloat(e))}var o,i,r,s,a,l=Z.createElement("div"),u=Z.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",ue.clearCloneStyle="content-box"===u.style.backgroundClip,he.extend(ue,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),o},reliableMarginLeft:function(){return t(),a},scrollboxSize:function(){return t(),r}}))}();var lt=["Webkit","Moz","ms"],ut=Z.createElement("div").style,ct={},pt=/^(none|table(?!-c[ea]).+)/,ft=/^--/,dt={position:"absolute",visibility:"hidden",display:"block"},ht={letterSpacing:"0",fontWeight:"400"};he.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=L(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,o){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,r,s,a=d(t),l=ft.test(t),u=e.style;if(l||(t=D(a)),s=he.cssHooks[t]||he.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(i=s.get(e,!1,o))?i:u[t];"string"==(r=typeof n)&&(i=Ve.exec(n))&&i[1]&&(n=g(e,t,i),r="number"),null!=n&&n==n&&("number"!==r||l||(n+=i&&i[3]||(he.cssNumber[a]?"":"px")),ue.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,o))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,o){var i,r,s,a=d(t);return ft.test(t)||(t=D(a)),(s=he.cssHooks[t]||he.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=L(e,t,o)),"normal"===i&&t in ht&&(i=ht[t]),""===n||n?(r=parseFloat(i),!0===n||isFinite(r)?r||0:i):i}}),he.each(["height","width"],function(e,t){he.cssHooks[t]={get:function(e,n,o){if(n)return!pt.test(he.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?V(e,t,o):We(e,dt,function(){return V(e,t,o)})},set:function(e,n,o){var i,r=st(e),s=!ue.scrollboxSize()&&"absolute"===r.position,a=(s||o)&&"border-box"===he.css(e,"boxSizing",!1,r),l=o?z(e,t,o,a,r):0;return a&&s&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(r[t])-z(e,t,"border",!1,r)-.5)),l&&(i=Ve.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=he.css(e,t)),F(0,n,l)}}}),he.cssHooks.marginLeft=j(ue.reliableMarginLeft,function(e,t){if(t)return(parseFloat(L(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),he.each({margin:"",padding:"",border:"Width"},function(e,t){he.cssHooks[e+t]={expand:function(n){for(var o=0,i={},r="string"==typeof n?n.split(" "):[n];o<4;o++)i[e+Me[o]+t]=r[o]||r[o-2]||r[0];return i}},"margin"!==e&&(he.cssHooks[e+t].set=F)}),he.fn.extend({css:function(e,t){return Pe(this,function(e,t,n){var o,i,r={},s=0;if(Array.isArray(t)){for(o=st(e),i=t.length;s<i;s++)r[t[s]]=he.css(e,t[s],!1,o);return r}return void 0!==n?he.style(e,t,n):he.css(e,t)},e,t,1<arguments.length)}}),((he.Tween=M).prototype={constructor:M,init:function(e,t,n,o,i,r){this.elem=e,this.prop=n,this.easing=i||he.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=o,this.unit=r||(he.cssNumber[n]?"":"px")},cur:function(){var e=M.propHooks[this.prop];return e&&e.get?e.get(this):M.propHooks._default.get(this)},run:function(e){var t,n=M.propHooks[this.prop];return this.options.duration?this.pos=t=he.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):M.propHooks._default.set(this),this}}).init.prototype=M.prototype,(M.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=he.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){he.fx.step[e.prop]?he.fx.step[e.prop](e):1!==e.elem.nodeType||!he.cssHooks[e.prop]&&null==e.elem.style[D(e.prop)]?e.elem[e.prop]=e.now:he.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=M.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},he.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},he.fx=M.prototype.init,he.fx.step={};var mt,gt,vt,yt,bt=/^(?:toggle|show|hide)$/,wt=/queueHooks$/;he.Animation=he.extend(W,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return g(n.elem,e,Ve.exec(t),n),n}]},tweener:function(e,t){ce(e)?(t=e,e=["*"]):e=e.match(Ee);for(var n,o=0,i=e.length;o<i;o++)n=e[o],W.tweeners[n]=W.tweeners[n]||[],W.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var o,i,r,s,a,l,u,c,p="width"in t||"height"in t,f=this,d={},h=e.style,m=e.nodeType&&qe(e),g=Le.get(e,"fxshow");for(o in n.queue||(null==(s=he._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,f.always(function(){f.always(function(){s.unqueued--,he.queue(e,"fx").length||s.empty.fire()})})),t)if(i=t[o],bt.test(i)){if(delete t[o],r=r||"toggle"===i,i===(m?"hide":"show")){if("show"!==i||!g||void 0===g[o])continue;m=!0}d[o]=g&&g[o]||he.style(e,o)}if((l=!he.isEmptyObject(t))||!he.isEmptyObject(d))for(o in p&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(u=g&&g.display)&&(u=Le.get(e,"display")),"none"===(c=he.css(e,"display"))&&(u?c=u:(v([e],!0),u=e.style.display||u,c=he.css(e,"display"),v([e]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===he.css(e,"float")&&(l||(f.done(function(){h.display=u}),null==u&&(c=h.display,u="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",f.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),l=!1,d)l||(g?"hidden"in g&&(m=g.hidden):g=Le.access(e,"fxshow",{display:u}),r&&(g.hidden=!m),m&&v([e],!0),f.done(function(){
for(o in m||v([e]),Le.remove(e,"fxshow"),d)he.style(e,o,d[o])})),l=q(m?g[o]:0,o,f),o in g||(g[o]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?W.prefilters.unshift(e):W.prefilters.push(e)}}),he.speed=function(e,t,n){var o=e&&"object"==typeof e?he.extend({},e):{complete:n||!n&&t||ce(e)&&e,duration:e,easing:n&&t||t&&!ce(t)&&t};return he.fx.off?o.duration=0:"number"!=typeof o.duration&&(o.duration in he.fx.speeds?o.duration=he.fx.speeds[o.duration]:o.duration=he.fx.speeds._default),null!=o.queue&&!0!==o.queue||(o.queue="fx"),o.old=o.complete,o.complete=function(){ce(o.old)&&o.old.call(this),o.queue&&he.dequeue(this,o.queue)},o},he.fn.extend({fadeTo:function(e,t,n,o){return this.filter(qe).css("opacity",0).show().end().animate({opacity:t},e,n,o)},animate:function(e,t,n,o){var i=he.isEmptyObject(e),r=he.speed(t,n,o),s=function(){var t=W(this,he.extend({},e),r);(i||Le.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||!1===r.queue?this.each(s):this.queue(r.queue,s)},stop:function(e,t,n){var o=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",r=he.timers,s=Le.get(this);if(i)s[i]&&s[i].stop&&o(s[i]);else for(i in s)s[i]&&s[i].stop&&wt.test(i)&&o(s[i]);for(i=r.length;i--;)r[i].elem!==this||null!=e&&r[i].queue!==e||(r[i].anim.stop(n),t=!1,r.splice(i,1));!t&&n||he.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Le.get(this),o=n[e+"queue"],i=n[e+"queueHooks"],r=he.timers,s=o?o.length:0;for(n.finish=!0,he.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;t<s;t++)o[t]&&o[t].finish&&o[t].finish.call(this);delete n.finish})}}),he.each(["toggle","show","hide"],function(e,t){var n=he.fn[t];he.fn[t]=function(e,o,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(H(t,!0),e,o,i)}}),he.each({slideDown:H("show"),slideUp:H("hide"),slideToggle:H("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){he.fn[e]=function(e,n,o){return this.animate(t,e,n,o)}}),he.timers=[],he.fx.tick=function(){var e,t=0,n=he.timers;for(mt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||he.fx.stop(),mt=void 0},he.fx.timer=function(e){he.timers.push(e),he.fx.start()},he.fx.interval=13,he.fx.start=function(){gt||(gt=!0,_())},he.fx.stop=function(){gt=null},he.fx.speeds={slow:600,fast:200,_default:400},he.fn.delay=function(t,n){return t=he.fx&&he.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,o){var i=e.setTimeout(n,t);o.stop=function(){e.clearTimeout(i)}})},vt=Z.createElement("input"),yt=Z.createElement("select").appendChild(Z.createElement("option")),vt.type="checkbox",ue.checkOn=""!==vt.value,ue.optSelected=yt.selected,(vt=Z.createElement("input")).value="t",vt.type="radio",ue.radioValue="t"===vt.value;var xt,St=he.expr.attrHandle;he.fn.extend({attr:function(e,t){return Pe(this,he.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){he.removeAttr(this,e)})}}),he.extend({attr:function(e,t,n){var o,i,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===e.getAttribute?he.prop(e,t,n):(1===r&&he.isXMLDoc(e)||(i=he.attrHooks[t.toLowerCase()]||(he.expr.match.bool.test(t)?xt:void 0)),void 0!==n?null===n?void he.removeAttr(e,t):i&&"set"in i&&void 0!==(o=i.set(e,n,t))?o:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(o=i.get(e,t))?o:null==(o=he.find.attr(e,t))?void 0:o)},attrHooks:{type:{set:function(e,t){if(!ue.radioValue&&"radio"===t&&r(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,o=0,i=t&&t.match(Ee);if(i&&1===e.nodeType)for(;n=i[o++];)e.removeAttribute(n)}}),xt={set:function(e,t,n){return!1===t?he.removeAttr(e,n):e.setAttribute(n,n),n}},he.each(he.expr.match.bool.source.match(/\w+/g),function(e,t){var n=St[t]||he.find.attr;St[t]=function(e,t,o){var i,r,s=t.toLowerCase();return o||(r=St[s],St[s]=i,i=null!=n(e,t,o)?s:null,St[s]=r),i}});var Ct=/^(?:input|select|textarea|button)$/i,Tt=/^(?:a|area)$/i;he.fn.extend({prop:function(e,t){return Pe(this,he.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[he.propFix[e]||e]})}}),he.extend({prop:function(e,t,n){var o,i,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&he.isXMLDoc(e)||(t=he.propFix[t]||t,i=he.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(o=i.set(e,n,t))?o:e[t]=n:i&&"get"in i&&null!==(o=i.get(e,t))?o:e[t]},propHooks:{tabIndex:{get:function(e){var t=he.find.attr(e,"tabindex");return t?parseInt(t,10):Ct.test(e.nodeName)||Tt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ue.optSelected||(he.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),he.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){he.propFix[this.toLowerCase()]=this}),he.fn.extend({addClass:function(e){var t,n,o,i,r,s,a,l=0;if(ce(e))return this.each(function(t){he(this).addClass(e.call(this,t,B(this)))});if((t=X(e)).length)for(;n=this[l++];)if(i=B(n),o=1===n.nodeType&&" "+$(i)+" "){for(s=0;r=t[s++];)o.indexOf(" "+r+" ")<0&&(o+=r+" ");i!==(a=$(o))&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,o,i,r,s,a,l=0;if(ce(e))return this.each(function(t){he(this).removeClass(e.call(this,t,B(this)))});if(!arguments.length)return this.attr("class","");if((t=X(e)).length)for(;n=this[l++];)if(i=B(n),o=1===n.nodeType&&" "+$(i)+" "){for(s=0;r=t[s++];)for(;-1<o.indexOf(" "+r+" ");)o=o.replace(" "+r+" "," ");i!==(a=$(o))&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e,o="string"===n||Array.isArray(e);return"boolean"==typeof t&&o?t?this.addClass(e):this.removeClass(e):ce(e)?this.each(function(n){he(this).toggleClass(e.call(this,n,B(this),t),t)}):this.each(function(){var t,i,r,s;if(o)for(i=0,r=he(this),s=X(e);t=s[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else void 0!==e&&"boolean"!==n||((t=B(this))&&Le.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Le.get(this,"__className__")||""))})},hasClass:function(e){var t,n,o=0;for(t=" "+e+" ";n=this[o++];)if(1===n.nodeType&&-1<(" "+$(B(n))+" ").indexOf(t))return!0;return!1}});var Et=/\r/g;he.fn.extend({val:function(e){var t,n,o,i=this[0];return arguments.length?(o=ce(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=o?e.call(this,n,he(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=he.map(i,function(e){return null==e?"":e+""})),(t=he.valHooks[this.type]||he.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=he.valHooks[i.type]||he.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(Et,""):null==n?"":n:void 0}}),he.extend({valHooks:{option:{get:function(e){var t=he.find.attr(e,"value");return null!=t?t:$(he.text(e))}},select:{get:function(e){var t,n,o,i=e.options,s=e.selectedIndex,a="select-one"===e.type,l=a?null:[],u=a?s+1:i.length;for(o=s<0?u:a?s:0;o<u;o++)if(((n=i[o]).selected||o===s)&&!n.disabled&&(!n.parentNode.disabled||!r(n.parentNode,"optgroup"))){if(t=he(n).val(),a)return t;l.push(t)}return l},set:function(e,t){for(var n,o,i=e.options,r=he.makeArray(t),s=i.length;s--;)((o=i[s]).selected=-1<he.inArray(he.valHooks.option.get(o),r))&&(n=!0);return n||(e.selectedIndex=-1),r}}}}),he.each(["radio","checkbox"],function(){he.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<he.inArray(he(e).val(),t)}},ue.checkOn||(he.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),ue.focusin="onfocusin"in e;var kt=/^(?:focusinfocus|focusoutblur)$/,It=function(e){e.stopPropagation()};he.extend(he.event,{trigger:function(t,n,o,i){var r,s,a,l,u,c,p,f,d=[o||Z],h=se.call(t,"type")?t.type:t,m=se.call(t,"namespace")?t.namespace.split("."):[];if(s=f=a=o=o||Z,3!==o.nodeType&&8!==o.nodeType&&!kt.test(h+he.event.triggered)&&(-1<h.indexOf(".")&&(h=(m=h.split(".")).shift(),m.sort()),u=h.indexOf(":")<0&&"on"+h,(t=t[he.expando]?t:new he.Event(h,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=m.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=o),n=null==n?[t]:he.makeArray(n,[t]),p=he.event.special[h]||{},i||!p.trigger||!1!==p.trigger.apply(o,n))){if(!i&&!p.noBubble&&!pe(o)){for(l=p.delegateType||h,kt.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),a=s;a===(o.ownerDocument||Z)&&d.push(a.defaultView||a.parentWindow||e)}for(r=0;(s=d[r++])&&!t.isPropagationStopped();)f=s,t.type=1<r?l:p.bindType||h,(c=(Le.get(s,"events")||{})[t.type]&&Le.get(s,"handle"))&&c.apply(s,n),(c=u&&s[u])&&c.apply&&Oe(s)&&(t.result=c.apply(s,n),!1===t.result&&t.preventDefault());return t.type=h,i||t.isDefaultPrevented()||p._default&&!1!==p._default.apply(d.pop(),n)||!Oe(o)||u&&ce(o[h])&&!pe(o)&&((a=o[u])&&(o[u]=null),he.event.triggered=h,t.isPropagationStopped()&&f.addEventListener(h,It),o[h](),t.isPropagationStopped()&&f.removeEventListener(h,It),he.event.triggered=void 0,a&&(o[u]=a)),t.result}},simulate:function(e,t,n){var o=he.extend(new he.Event,n,{type:e,isSimulated:!0});he.event.trigger(o,null,t)}}),he.fn.extend({trigger:function(e,t){return this.each(function(){he.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return he.event.trigger(e,t,n,!0)}}),ue.focusin||he.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){he.event.simulate(t,e.target,he.event.fix(e))};he.event.special[t]={setup:function(){var o=this.ownerDocument||this,i=Le.access(o,t);i||o.addEventListener(e,n,!0),Le.access(o,t,(i||0)+1)},teardown:function(){var o=this.ownerDocument||this,i=Le.access(o,t)-1;i?Le.access(o,t,i):(o.removeEventListener(e,n,!0),Le.remove(o,t))}}});var Pt=e.location,At=Date.now(),Nt=/\?/;he.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(t){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||he.error("Invalid XML: "+t),n};var Ot=/\[\]$/,Lt=/\r?\n/g,jt=/^(?:submit|button|image|reset|file)$/i,Dt=/^(?:input|select|textarea|keygen)/i;he.param=function(e,t){var n,o=[],i=function(e,t){var n=ce(t)?t():t;o[o.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!he.isPlainObject(e))he.each(e,function(){i(this.name,this.value)});else for(n in e)U(n,e[n],t,i);return o.join("&")},he.fn.extend({serialize:function(){return he.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=he.prop(this,"elements");return e?he.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!he(this).is(":disabled")&&Dt.test(this.nodeName)&&!jt.test(e)&&(this.checked||!Be.test(e))}).map(function(e,t){var n=he(this).val();return null==n?null:Array.isArray(n)?he.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Ft=/%20/g,zt=/#.*$/,Vt=/([?&])_=[^&]*/,Mt=/^(.*?):[ \t]*([^\r\n]*)$/gm,_t=/^(?:GET|HEAD)$/,Rt=/^\/\//,Ht={},qt={},Wt="*/".concat("*"),$t=Z.createElement("a");$t.href=Pt.href,he.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Pt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Pt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":he.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Q(Q(e,he.ajaxSettings),t):Q(he.ajaxSettings,e)},ajaxPrefilter:Y(Ht),ajaxTransport:Y(qt),ajax:function(t,n){function o(t,n,o,a){var u,f,d,w,x,S=n;c||(c=!0,l&&e.clearTimeout(l),i=void 0,s=a||"",C.readyState=0<t?4:0,u=200<=t&&t<300||304===t,o&&(w=function(e,t,n){for(var o,i,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===o&&(o=e.mimeType||t.getResponseHeader("Content-Type"));if(o)for(i in a)if(a[i]&&a[i].test(o)){l.unshift(i);break}if(l[0]in n)r=l[0];else{for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){r=i;break}s||(s=i)}r=r||s}if(r)return r!==l[0]&&l.unshift(r),n[r]}(h,C,o)),w=function(e,t,n,o){var i,r,s,a,l,u={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s];for(r=c.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&o&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=c.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(s=u[l+" "+r]||u["* "+r]))for(i in u)if((a=i.split(" "))[1]===r&&(s=u[l+" "+a[0]]||u["* "+a[0]])){!0===s?s=u[i]:!0!==u[i]&&(r=a[0],c.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}(h,w,C,u),u?(h.ifModified&&((x=C.getResponseHeader("Last-Modified"))&&(he.lastModified[r]=x),(x=C.getResponseHeader("etag"))&&(he.etag[r]=x)),204===t||"HEAD"===h.type?S="nocontent":304===t?S="notmodified":(S=w.state,f=w.data,u=!(d=w.error))):(d=S,!t&&S||(S="error",t<0&&(t=0))),C.status=t,C.statusText=(n||S)+"",u?v.resolveWith(m,[f,S,C]):v.rejectWith(m,[C,S,d]),C.statusCode(b),b=void 0,p&&g.trigger(u?"ajaxSuccess":"ajaxError",[C,h,u?f:d]),y.fireWith(m,[C,S]),p&&(g.trigger("ajaxComplete",[C,h]),--he.active||he.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,r,s,a,l,u,c,p,f,d,h=he.ajaxSetup({},n),m=h.context||h,g=h.context&&(m.nodeType||m.jquery)?he(m):he.event,v=he.Deferred(),y=he.Callbacks("once memory"),b=h.statusCode||{},w={},x={},S="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(c){if(!a)for(a={};t=Mt.exec(s);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?s:null},setRequestHeader:function(e,t){return null==c&&(e=x[e.toLowerCase()]=x[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)C.always(e[C.status]);else for(t in e)b[t]=[b[t],e[t]];return this},abort:function(e){var t=e||S;return i&&i.abort(t),o(0,t),this}};if(v.promise(C),h.url=((t||h.url||Pt.href)+"").replace(Rt,Pt.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(Ee)||[""],null==h.crossDomain){u=Z.createElement("a");try{u.href=h.url,u.href=u.href,h.crossDomain=$t.protocol+"//"+$t.host!=u.protocol+"//"+u.host}catch(t){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=he.param(h.data,h.traditional)),G(Ht,h,n,C),c)return C;for(f in(p=he.event&&h.global)&&0==he.active++&&he.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!_t.test(h.type),r=h.url.replace(zt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Ft,"+")):(d=h.url.slice(r.length),h.data&&(h.processData||"string"==typeof h.data)&&(r+=(Nt.test(r)?"&":"?")+h.data,delete h.data),!1===h.cache&&(r=r.replace(Vt,"$1"),d=(Nt.test(r)?"&":"?")+"_="+At+++d),h.url=r+d),h.ifModified&&(he.lastModified[r]&&C.setRequestHeader("If-Modified-Since",he.lastModified[r]),he.etag[r]&&C.setRequestHeader("If-None-Match",he.etag[r])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Wt+"; q=0.01":""):h.accepts["*"]),h.headers)C.setRequestHeader(f,h.headers[f]);if(h.beforeSend&&(!1===h.beforeSend.call(m,C,h)||c))return C.abort();if(S="abort",y.add(h.complete),C.done(h.success),C.fail(h.error),i=G(qt,h,n,C)){if(C.readyState=1,p&&g.trigger("ajaxSend",[C,h]),c)return C;h.async&&0<h.timeout&&(l=e.setTimeout(function(){C.abort("timeout")},h.timeout));try{c=!1,i.send(w,o)}catch(t){if(c)throw t;o(-1,t)}}else o(-1,"No Transport");return C},getJSON:function(e,t,n){return he.get(e,t,n,"json")},getScript:function(e,t){return he.get(e,void 0,t,"script")}}),he.each(["get","post"],function(e,t){he[t]=function(e,n,o,i){return ce(n)&&(i=i||o,o=n,n=void 0),he.ajax(he.extend({url:e,type:t,dataType:i,data:n,success:o},he.isPlainObject(e)&&e))}}),he._evalUrl=function(e,t){return he.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){he.globalEval(e,t)}})},he.fn.extend({wrapAll:function(e){var t;return this[0]&&(ce(e)&&(e=e.call(this[0])),t=he(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return ce(e)?this.each(function(t){he(this).wrapInner(e.call(this,t))}):this.each(function(){var t=he(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ce(e);return this.each(function(n){he(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){he(this).replaceWith(this.childNodes)}),this}}),he.expr.pseudos.hidden=function(e){return!he.expr.pseudos.visible(e)},he.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},he.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},Xt=he.ajaxSettings.xhr();ue.cors=!!Xt&&"withCredentials"in Xt,ue.ajax=Xt=!!Xt,he.ajaxTransport(function(t){var n,o;if(ue.cors||Xt&&!t.crossDomain)return{send:function(i,r){var s,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];for(s in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(s,i[s]);n=function(e){return function(){n&&(n=o=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(Bt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),o=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=o:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){n&&o()})},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(i){if(n)throw i}},abort:function(){n&&n()}}}),he.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),he.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return he.globalEval(e),e}}}),he.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),he.ajaxTransport("script",function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(o,i){t=he("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),Z.head.appendChild(t[0])},abort:function(){n&&n()}}});var Ut,Yt=[],Gt=/(=)\?(?=&|$)|\?\?/;he.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||he.expando+"_"+At++;return this[e]=!0,e}}),he.ajaxPrefilter("json jsonp",function(t,n,o){var i,r,s,a=!1!==t.jsonp&&(Gt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gt.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=ce(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Gt,"$1"+i):!1!==t.jsonp&&(t.url+=(Nt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||he.error(i+" was not called"),s[0]},t.dataTypes[0]="json",r=e[i],e[i]=function(){s=arguments},o.always(function(){void 0===r?he(e).removeProp(i):e[i]=r,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),s&&ce(r)&&r(s[0]),s=r=void 0}),"script"}),ue.createHTMLDocument=((Ut=Z.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),he.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(ue.createHTMLDocument?((o=(t=Z.implementation.createHTMLDocument("")).createElement("base")).href=Z.location.href,t.head.appendChild(o)):t=Z),r=!n&&[],(i=we.exec(e))?[t.createElement(i[1])]:(i=w([e],t,r),r&&r.length&&he(r).remove(),he.merge([],i.childNodes)));var o,i,r},he.fn.load=function(e,t,n){var o,i,r,s=this,a=e.indexOf(" ");return-1<a&&(o=$(e.slice(a)),e=e.slice(0,a)),ce(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<s.length&&he.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){r=arguments,s.html(o?he("<div>").append(he.parseHTML(e)).find(o):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},he.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){he.fn[t]=function(e){return this.on(t,e)}}),he.expr.pseudos.animated=function(e){return he.grep(he.timers,function(t){return e===t.elem}).length},he.offset={setOffset:function(e,t,n){var o,i,r,s,a,l,u=he.css(e,"position"),c=he(e),p={};"static"===u&&(e.style.position="relative"),a=c.offset(),r=he.css(e,"top"),l=he.css(e,"left"),("absolute"===u||"fixed"===u)&&-1<(r+l).indexOf("auto")?(s=(o=c.position()).top,i=o.left):(s=parseFloat(r)||0,i=parseFloat(l)||0),ce(t)&&(t=t.call(e,n,he.extend({},a))),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):c.css(p)}},he.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){he.offset.setOffset(this,e,t)});var t,n,o=this[0];return o?o.getClientRects().length?(t=o.getBoundingClientRect(),n=o.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,o=this[0],i={top:0,left:0};if("fixed"===he.css(o,"position"))t=o.getBoundingClientRect();else{for(t=this.offset(),n=o.ownerDocument,e=o.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===he.css(e,"position");)e=e.parentNode;e&&e!==o&&1===e.nodeType&&((i=he(e).offset()).top+=he.css(e,"borderTopWidth",!0),i.left+=he.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-he.css(o,"marginTop",!0),left:t.left-i.left-he.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===he.css(e,"position");)e=e.offsetParent;return e||_e})}}),he.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;he.fn[e]=function(o){return Pe(this,function(e,o,i){var r;if(pe(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===i)return r?r[t]:e[o];r?r.scrollTo(n?r.pageXOffset:i,n?i:r.pageYOffset):e[o]=i},e,o,arguments.length)}}),he.each(["top","left"],function(e,t){he.cssHooks[t]=j(ue.pixelPosition,function(e,n){if(n)return n=L(e,t),rt.test(n)?he(e).position()[t]+"px":n})}),he.each({Height:"height",Width:"width"},function(e,t){he.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,o){he.fn[o]=function(i,r){var s=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===r?"margin":"border");return Pe(this,function(t,n,i){var r;return pe(t)?0===o.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===i?he.css(t,n,a):he.style(t,n,i,a)},t,s?i:void 0,s)}})}),he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){he.fn[t]=function(e,n){return 0<arguments.length?this.on(t,null,e,n):this.trigger(t)}}),he.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),he.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,o){return this.on(t,e,n,o)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),he.proxy=function(e,t){var n,o,i;if("string"==typeof t&&(n=e[t],t=e,e=n),ce(e))return o=ee.call(arguments,2),(i=function(){return e.apply(t||this,o.concat(ee.call(arguments)))}).guid=e.guid=e.guid||he.guid++,i},he.holdReady=function(e){e?he.readyWait++:he.ready(!0)},he.isArray=Array.isArray,he.parseJSON=JSON.parse,he.nodeName=r,he.isFunction=ce,he.isWindow=pe,he.camelCase=d,he.type=o,he.now=Date.now,he.isNumeric=function(e){var t=he.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return he});var Qt=e.jQuery,Jt=e.$;return he.noConflict=function(t){return e.$===he&&(e.$=Jt),t&&e.jQuery===he&&(e.jQuery=Qt),he},t||(e.jQuery=e.$=he),he});var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;if(FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===e.type||e.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(e.className)},FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},FastClick.prototype.sendClick=function(e,t){"use strict";var n,o;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),o=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},FastClick.prototype.determineEventType=function(e){"use strict";return deviceIsAndroid&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(e){"use strict";var t;deviceIsIOS&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;if(!(t=e.fastClickScrollParent)||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";return e.nodeType===Node.TEXT_NODE?e.parentNode:e},FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,o;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],deviceIsIOS){if(o=window.getSelection(),o.rangeCount&&!o.isCollapsed)return!0;if(!deviceIsIOS4){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},FastClick.prototype.onTouchMove=function(e){"use strict";return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},FastClick.prototype.findControl=function(e){"use strict";return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,o,i,r,s=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(r=e.changedTouches[0],s=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||s,s.fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(o=s.tagName.toLowerCase())){if(t=this.findControl(s)){if(this.focus(s),deviceIsAndroid)return!1;s=t}}else if(this.needsFocus(s))return e.timeStamp-n>100||deviceIsIOS&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(s),this.sendClick(s,e),deviceIsIOS&&"select"===o||(this.targetElement=null,e.preventDefault()),!1);return!(!deviceIsIOS||deviceIsIOS4||!(i=s.fastClickScrollParent)||i.fastClickLastScrollTop===i.scrollTop)||(this.needsClick(s)||(e.preventDefault(),this.sendClick(s,e)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(e){"use strict";return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},FastClick.prototype.onClick=function(e){"use strict";var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||(t=this.onMouse(e),t||(this.targetElement=null),t)},FastClick.prototype.destroy=function(){"use strict";var e=this.layer;deviceIsAndroid&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(e){"use strict";var t,n,o;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(deviceIsBlackBerry10&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),o[1]>=10&&o[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){
if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction},FastClick.attach=function(e,t){"use strict";return new FastClick(e,t)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick,/*!
 *  jQuery OwlCarousel v1.3.2
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */
"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(e,t,n){var o={init:function(t,n){var o=this;o.$elem=e(n),o.options=e.extend({},e.fn.owlCarousel.options,o.$elem.data(),t),o.userOptions=t,o.loadContent()},loadContent:function(){function t(e){var t,n="";if("function"==typeof o.options.jsonSuccess)o.options.jsonSuccess.apply(this,[e]);else{for(t in e.owl)e.owl.hasOwnProperty(t)&&(n+=e.owl[t].item);o.$elem.html(n)}o.logIn()}var n,o=this;"function"==typeof o.options.beforeInit&&o.options.beforeInit.apply(this,[o.$elem]),"string"==typeof o.options.jsonPath?(n=o.options.jsonPath,e.getJSON(n,t)):o.logIn()},logIn:function(){var e=this;e.$elem.data("owl-originalStyles",e.$elem.attr("style")).data("owl-originalClasses",e.$elem.attr("class")),e.$elem.css({opacity:0}),e.orignalItems=e.options.items,e.checkBrowser(),e.wrapperWidth=0,e.checkVisible=null,e.setVars()},setVars:function(){var e=this;if(0===e.$elem.children().length)return!1;e.baseClass(),e.eventTypes(),e.$userItems=e.$elem.children(),e.itemsAmount=e.$userItems.length,e.wrapItems(),e.$owlItems=e.$elem.find(".owl-item"),e.$owlWrapper=e.$elem.find(".owl-wrapper"),e.playDirection="next",e.prevItem=0,e.prevArr=[0],e.currentItem=0,e.customEvents(),e.onStartup()},onStartup:function(){var e=this;e.updateItems(),e.calculateAll(),e.buildControls(),e.updateControls(),e.response(),e.moveEvents(),e.stopOnHover(),e.owlStatus(),!1!==e.options.transitionStyle&&e.transitionTypes(e.options.transitionStyle),!0===e.options.autoPlay&&(e.options.autoPlay=5e3),e.play(),e.$elem.find(".owl-wrapper").css("display","block"),e.$elem.is(":visible")?e.$elem.css("opacity",1):e.watchVisibility(),e.onstartup=!1,e.eachMoveUpdate(),"function"==typeof e.options.afterInit&&e.options.afterInit.apply(this,[e.$elem])},eachMoveUpdate:function(){var e=this;!0===e.options.lazyLoad&&e.lazyLoad(),!0===e.options.autoHeight&&e.autoHeight(),e.onVisibleItems(),"function"==typeof e.options.afterAction&&e.options.afterAction.apply(this,[e.$elem])},updateVars:function(){var e=this;"function"==typeof e.options.beforeUpdate&&e.options.beforeUpdate.apply(this,[e.$elem]),e.watchVisibility(),e.updateItems(),e.calculateAll(),e.updatePosition(),e.updateControls(),e.eachMoveUpdate(),"function"==typeof e.options.afterUpdate&&e.options.afterUpdate.apply(this,[e.$elem])},reload:function(){var e=this;t.setTimeout(function(){e.updateVars()},0)},watchVisibility:function(){var e=this;if(!1!==e.$elem.is(":visible"))return!1;e.$elem.css({opacity:0}),t.clearInterval(e.autoPlayInterval),t.clearInterval(e.checkVisible),e.checkVisible=t.setInterval(function(){e.$elem.is(":visible")&&(e.reload(),e.$elem.animate({opacity:1},200),t.clearInterval(e.checkVisible))},500)},wrapItems:function(){var e=this;e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),e.wrapperOuter=e.$elem.find(".owl-wrapper-outer"),e.$elem.css("display","block")},baseClass:function(){var e=this,t=e.$elem.hasClass(e.options.baseClass),n=e.$elem.hasClass(e.options.theme);t||e.$elem.addClass(e.options.baseClass),n||e.$elem.addClass(e.options.theme)},updateItems:function(){var t,n,o=this;if(!1===o.options.responsive)return!1;if(!0===o.options.singleItem)return o.options.items=o.orignalItems=1,o.options.itemsCustom=!1,o.options.itemsDesktop=!1,o.options.itemsDesktopSmall=!1,o.options.itemsTablet=!1,o.options.itemsTabletSmall=!1,o.options.itemsMobile=!1,!1;if(t=e(o.options.responsiveBaseWidth).width(),t>(o.options.itemsDesktop[0]||o.orignalItems)&&(o.options.items=o.orignalItems),!1!==o.options.itemsCustom)for(o.options.itemsCustom.sort(function(e,t){return e[0]-t[0]}),n=0;n<o.options.itemsCustom.length;n+=1)o.options.itemsCustom[n][0]<=t&&(o.options.items=o.options.itemsCustom[n][1]);else t<=o.options.itemsDesktop[0]&&!1!==o.options.itemsDesktop&&(o.options.items=o.options.itemsDesktop[1]),t<=o.options.itemsDesktopSmall[0]&&!1!==o.options.itemsDesktopSmall&&(o.options.items=o.options.itemsDesktopSmall[1]),t<=o.options.itemsTablet[0]&&!1!==o.options.itemsTablet&&(o.options.items=o.options.itemsTablet[1]),t<=o.options.itemsTabletSmall[0]&&!1!==o.options.itemsTabletSmall&&(o.options.items=o.options.itemsTabletSmall[1]),t<=o.options.itemsMobile[0]&&!1!==o.options.itemsMobile&&(o.options.items=o.options.itemsMobile[1]);o.options.items>o.itemsAmount&&!0===o.options.itemsScaleUp&&(o.options.items=o.itemsAmount)},response:function(){var n,o,i=this;if(!0!==i.options.responsive)return!1;o=e(t).width(),i.resizer=function(){e(t).width()!==o&&(!1!==i.options.autoPlay&&t.clearInterval(i.autoPlayInterval),t.clearTimeout(n),n=t.setTimeout(function(){o=e(t).width(),i.updateVars()},i.options.responsiveRefreshRate))},e(t).resize(i.resizer)},updatePosition:function(){var e=this;e.jumpTo(e.currentItem),!1!==e.options.autoPlay&&e.checkAp()},appendItemsSizes:function(){var t=this,n=0,o=t.itemsAmount-t.options.items;t.$owlItems.each(function(i){var r=e(this);r.css({width:t.itemWidth}).data("owl-item",Number(i)),i%t.options.items!=0&&i!==o||i>o||(n+=1),r.data("owl-roundPages",n)})},appendWrapperSizes:function(){var e=this,t=e.$owlItems.length*e.itemWidth;e.$owlWrapper.css({width:2*t,left:0}),e.appendItemsSizes()},calculateAll:function(){var e=this;e.calculateWidth(),e.appendWrapperSizes(),e.loops(),e.max()},calculateWidth:function(){var e=this;e.itemWidth=Math.round(e.$elem.width()/e.options.items)},max:function(){var e=this,t=-1*(e.itemsAmount*e.itemWidth-e.options.items*e.itemWidth);return e.options.items>e.itemsAmount?(e.maximumItem=0,t=0,e.maximumPixels=0):(e.maximumItem=e.itemsAmount-e.options.items,e.maximumPixels=t),t},min:function(){return 0},loops:function(){var t,n,o,i=this,r=0,s=0;for(i.positionsInArray=[0],i.pagesInArray=[],t=0;t<i.itemsAmount;t+=1)s+=i.itemWidth,i.positionsInArray.push(-s),!0===i.options.scrollPerPage&&(n=e(i.$owlItems[t]),(o=n.data("owl-roundPages"))!==r&&(i.pagesInArray[r]=i.positionsInArray[t],r=o))},buildControls:function(){var t=this;!0!==t.options.navigation&&!0!==t.options.pagination||(t.owlControls=e('<div class="owl-controls"/>').toggleClass("clickable",!t.browser.isTouch).appendTo(t.$elem)),!0===t.options.pagination&&t.buildPagination(),!0===t.options.navigation&&t.buildButtons()},buildButtons:function(){var t=this,n=e('<div class="owl-buttons"/>');t.owlControls.append(n),t.buttonPrev=e("<div/>",{class:"owl-prev",html:t.options.navigationText[0]||""}),t.buttonNext=e("<div/>",{class:"owl-next",html:t.options.navigationText[1]||""}),n.append(t.buttonPrev).append(t.buttonNext),n.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(e){e.preventDefault()}),n.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(n){n.preventDefault(),e(this).hasClass("owl-next")?t.next():t.prev()})},buildPagination:function(){var t=this;t.paginationWrapper=e('<div class="owl-pagination"/>'),t.owlControls.append(t.paginationWrapper),t.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(n){n.preventDefault(),Number(e(this).data("owl-page"))!==t.currentItem&&t.goTo(Number(e(this).data("owl-page")),!0)})},updatePagination:function(){var t,n,o,i,r,s,a=this;if(!1===a.options.pagination)return!1;for(a.paginationWrapper.html(""),t=0,n=a.itemsAmount-a.itemsAmount%a.options.items,i=0;i<a.itemsAmount;i+=1)i%a.options.items==0&&(t+=1,n===i&&(o=a.itemsAmount-a.options.items),r=e("<div/>",{class:"owl-page"}),s=e("<span></span>",{text:!0===a.options.paginationNumbers?t:"",class:!0===a.options.paginationNumbers?"owl-numbers":""}),r.append(s),r.data("owl-page",n===i?o:i),r.data("owl-roundPages",t),a.paginationWrapper.append(r));a.checkPagination()},checkPagination:function(){var t=this;if(!1===t.options.pagination)return!1;t.paginationWrapper.find(".owl-page").each(function(){e(this).data("owl-roundPages")===e(t.$owlItems[t.currentItem]).data("owl-roundPages")&&(t.paginationWrapper.find(".owl-page").removeClass("active"),e(this).addClass("active"))})},checkNavigation:function(){var e=this;if(!1===e.options.navigation)return!1;!1===e.options.rewindNav&&(0===e.currentItem&&0===e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.addClass("disabled")):0===e.currentItem&&0!==e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.removeClass("disabled")):e.currentItem===e.maximumItem?(e.buttonPrev.removeClass("disabled"),e.buttonNext.addClass("disabled")):0!==e.currentItem&&e.currentItem!==e.maximumItem&&(e.buttonPrev.removeClass("disabled"),e.buttonNext.removeClass("disabled")))},updateControls:function(){var e=this;e.updatePagination(),e.checkNavigation(),e.owlControls&&(e.options.items>=e.itemsAmount?e.owlControls.hide():e.owlControls.show())},destroyControls:function(){var e=this;e.owlControls&&e.owlControls.remove()},next:function(e){var t=this;if(t.isTransition)return!1;if(t.currentItem+=!0===t.options.scrollPerPage?t.options.items:1,t.currentItem>t.maximumItem+(!0===t.options.scrollPerPage?t.options.items-1:0)){if(!0!==t.options.rewindNav)return t.currentItem=t.maximumItem,!1;t.currentItem=0,e="rewind"}t.goTo(t.currentItem,e)},prev:function(e){var t=this;if(t.isTransition)return!1;if(!0===t.options.scrollPerPage&&t.currentItem>0&&t.currentItem<t.options.items?t.currentItem=0:t.currentItem-=!0===t.options.scrollPerPage?t.options.items:1,t.currentItem<0){if(!0!==t.options.rewindNav)return t.currentItem=0,!1;t.currentItem=t.maximumItem,e="rewind"}t.goTo(t.currentItem,e)},goTo:function(e,n,o){var i,r=this;return!r.isTransition&&("function"==typeof r.options.beforeMove&&r.options.beforeMove.apply(this,[r.$elem]),e>=r.maximumItem?e=r.maximumItem:e<=0&&(e=0),r.currentItem=r.owl.currentItem=e,!1!==r.options.transitionStyle&&"drag"!==o&&1===r.options.items&&!0===r.browser.support3d?(r.swapSpeed(0),!0===r.browser.support3d?r.transition3d(r.positionsInArray[e]):r.css2slide(r.positionsInArray[e],1),r.afterGo(),r.singleItemTransition(),!1):(i=r.positionsInArray[e],!0===r.browser.support3d?(r.isCss3Finish=!1,!0===n?(r.swapSpeed("paginationSpeed"),t.setTimeout(function(){r.isCss3Finish=!0},r.options.paginationSpeed)):"rewind"===n?(r.swapSpeed(r.options.rewindSpeed),t.setTimeout(function(){r.isCss3Finish=!0},r.options.rewindSpeed)):(r.swapSpeed("slideSpeed"),t.setTimeout(function(){r.isCss3Finish=!0},r.options.slideSpeed)),r.transition3d(i)):!0===n?r.css2slide(i,r.options.paginationSpeed):"rewind"===n?r.css2slide(i,r.options.rewindSpeed):r.css2slide(i,r.options.slideSpeed),void r.afterGo()))},jumpTo:function(e){var t=this;"function"==typeof t.options.beforeMove&&t.options.beforeMove.apply(this,[t.$elem]),e>=t.maximumItem||-1===e?e=t.maximumItem:e<=0&&(e=0),t.swapSpeed(0),!0===t.browser.support3d?t.transition3d(t.positionsInArray[e]):t.css2slide(t.positionsInArray[e],1),t.currentItem=t.owl.currentItem=e,t.afterGo()},afterGo:function(){var e=this;e.prevArr.push(e.currentItem),e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2],e.prevArr.shift(0),e.prevItem!==e.currentItem&&(e.checkPagination(),e.checkNavigation(),e.eachMoveUpdate(),!1!==e.options.autoPlay&&e.checkAp()),"function"==typeof e.options.afterMove&&e.prevItem!==e.currentItem&&e.options.afterMove.apply(this,[e.$elem])},stop:function(){var e=this;e.apStatus="stop",t.clearInterval(e.autoPlayInterval)},checkAp:function(){var e=this;"stop"!==e.apStatus&&e.play()},play:function(){var e=this;if(e.apStatus="play",!1===e.options.autoPlay)return!1;t.clearInterval(e.autoPlayInterval),e.autoPlayInterval=t.setInterval(function(){e.next(!0)},e.options.autoPlay)},swapSpeed:function(e){var t=this;"slideSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)):"paginationSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)):"string"!=typeof e&&t.$owlWrapper.css(t.addCssSpeed(e))},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}},transition3d:function(e){var t=this;t.$owlWrapper.css(t.doTranslate(e))},css2move:function(e){this.$owlWrapper.css({left:e})},css2slide:function(e,t){var n=this;n.isCssFinish=!1,n.$owlWrapper.stop(!0,!0).animate({left:e},{duration:t||n.options.slideSpeed,complete:function(){n.isCssFinish=!0}})},checkBrowser:function(){var e,o,i,r,s=this,a="translate3d(0px, 0px, 0px)",l=n.createElement("div");l.style.cssText="  -moz-transform:"+a+"; -ms-transform:"+a+"; -o-transform:"+a+"; -webkit-transform:"+a+"; transform:"+a,e=/translate3d\(0px, 0px, 0px\)/g,o=l.style.cssText.match(e),i=null!==o&&1===o.length,r="ontouchstart"in t||t.navigator.msMaxTouchPoints,s.browser={support3d:i,isTouch:r}},moveEvents:function(){var e=this;!1===e.options.mouseDrag&&!1===e.options.touchDrag||(e.gestures(),e.disabledEvents())},eventTypes:function(){var e=this,t=["s","e","x"];e.ev_types={},!0===e.options.mouseDrag&&!0===e.options.touchDrag?t=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:!1===e.options.mouseDrag&&!0===e.options.touchDrag?t=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===e.options.mouseDrag&&!1===e.options.touchDrag&&(t=["mousedown.owl","mousemove.owl","mouseup.owl"]),e.ev_types.start=t[0],e.ev_types.move=t[1],e.ev_types.end=t[2]},disabledEvents:function(){var t=this;t.$elem.on("dragstart.owl",function(e){e.preventDefault()}),t.$elem.on("mousedown.disableTextSelect",function(t){return e(t.target).is("input, textarea, select, option")})},gestures:function(){function o(e){if(void 0!==e.touches)return{x:e.touches[0].pageX,y:e.touches[0].pageY};if(void 0===e.touches){if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY};if(void 0===e.pageX)return{x:e.clientX,y:e.clientY}}}function i(t){"on"===t?(e(n).on(l.ev_types.move,s),e(n).on(l.ev_types.end,a)):"off"===t&&(e(n).off(l.ev_types.move),e(n).off(l.ev_types.end))}function r(n){var r,s=n.originalEvent||n||t.event;if(3===s.which)return!1;if(!(l.itemsAmount<=l.options.items)){if(!1===l.isCssFinish&&!l.options.dragBeforeAnimFinish)return!1;if(!1===l.isCss3Finish&&!l.options.dragBeforeAnimFinish)return!1;!1!==l.options.autoPlay&&t.clearInterval(l.autoPlayInterval),!0===l.browser.isTouch||l.$owlWrapper.hasClass("grabbing")||l.$owlWrapper.addClass("grabbing"),l.newPosX=0,l.newRelativeX=0,e(this).css(l.removeTransition()),r=e(this).position(),u.relativePos=r.left,u.offsetX=o(s).x-r.left,u.offsetY=o(s).y-r.top,i("on"),u.sliding=!1,u.targetElement=s.target||s.srcElement}}function s(i){var r,s,a=i.originalEvent||i||t.event;l.newPosX=o(a).x-u.offsetX,l.newPosY=o(a).y-u.offsetY,l.newRelativeX=l.newPosX-u.relativePos,"function"==typeof l.options.startDragging&&!0!==u.dragging&&0!==l.newRelativeX&&(u.dragging=!0,l.options.startDragging.apply(l,[l.$elem])),(l.newRelativeX>8||l.newRelativeX<-8)&&!0===l.browser.isTouch&&(void 0!==a.preventDefault?a.preventDefault():a.returnValue=!1,u.sliding=!0),(l.newPosY>10||l.newPosY<-10)&&!1===u.sliding&&e(n).off("touchmove.owl"),r=function(){return l.newRelativeX/5},s=function(){return l.maximumPixels+l.newRelativeX/5},l.newPosX=Math.max(Math.min(l.newPosX,r()),s()),!0===l.browser.support3d?l.transition3d(l.newPosX):l.css2move(l.newPosX)}function a(n){var o,r,s,a=n.originalEvent||n||t.event;a.target=a.target||a.srcElement,u.dragging=!1,!0!==l.browser.isTouch&&l.$owlWrapper.removeClass("grabbing"),l.newRelativeX<0?l.dragDirection=l.owl.dragDirection="left":l.dragDirection=l.owl.dragDirection="right",0!==l.newRelativeX&&(o=l.getNewPosition(),l.goTo(o,!1,"drag"),u.targetElement===a.target&&!0!==l.browser.isTouch&&(e(a.target).on("click.disable",function(t){t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e(t.target).off("click.disable")}),r=e._data(a.target,"events").click,s=r.pop(),r.splice(0,0,s))),i("off")}var l=this,u={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};l.isCssFinish=!0,l.$elem.on(l.ev_types.start,".owl-wrapper",r)},getNewPosition:function(){var e=this,t=e.closestItem();return t>e.maximumItem?(e.currentItem=e.maximumItem,t=e.maximumItem):e.newPosX>=0&&(t=0,e.currentItem=0),t},closestItem:function(){var t=this,n=!0===t.options.scrollPerPage?t.pagesInArray:t.positionsInArray,o=t.newPosX,i=null;return e.each(n,function(r,s){o-t.itemWidth/20>n[r+1]&&o-t.itemWidth/20<s&&"left"===t.moveDirection()?(i=s,!0===t.options.scrollPerPage?t.currentItem=e.inArray(i,t.positionsInArray):t.currentItem=r):o+t.itemWidth/20<s&&o+t.itemWidth/20>(n[r+1]||n[r]-t.itemWidth)&&"right"===t.moveDirection()&&(!0===t.options.scrollPerPage?(i=n[r+1]||n[n.length-1],t.currentItem=e.inArray(i,t.positionsInArray)):(i=n[r+1],t.currentItem=r+1))}),t.currentItem},moveDirection:function(){var e,t=this;return t.newRelativeX<0?(e="right",t.playDirection="next"):(e="left",t.playDirection="prev"),e},customEvents:function(){var e=this;e.$elem.on("owl.next",function(){e.next()}),e.$elem.on("owl.prev",function(){e.prev()}),e.$elem.on("owl.play",function(t,n){e.options.autoPlay=n,e.play(),e.hoverStatus="play"}),e.$elem.on("owl.stop",function(){e.stop(),e.hoverStatus="stop"}),e.$elem.on("owl.goTo",function(t,n){e.goTo(n)}),e.$elem.on("owl.jumpTo",function(t,n){e.jumpTo(n)})},stopOnHover:function(){var e=this;!0===e.options.stopOnHover&&!0!==e.browser.isTouch&&!1!==e.options.autoPlay&&(e.$elem.on("mouseover",function(){e.stop()}),e.$elem.on("mouseout",function(){"stop"!==e.hoverStatus&&e.play()}))},lazyLoad:function(){var t,n,o,i,r=this;if(!1===r.options.lazyLoad)return!1;for(t=0;t<r.itemsAmount;t+=1)n=e(r.$owlItems[t]),"loaded"!==n.data("owl-loaded")&&(o=n.data("owl-item"),i=n.find(".lazyOwl"),"string"==typeof i.data("src")?(void 0===n.data("owl-loaded")&&(i.hide(),n.addClass("loading").data("owl-loaded","checked")),(!0!==r.options.lazyFollow||o>=r.currentItem)&&o<r.currentItem+r.options.items&&i.length&&r.lazyPreload(n,i)):n.data("owl-loaded","loaded"))},lazyPreload:function(e,n){function o(){e.data("owl-loaded","loaded").removeClass("loading"),n.removeAttr("data-src"),"fade"===s.options.lazyEffect?n.fadeIn(400):n.show(),"function"==typeof s.options.afterLazyLoad&&s.options.afterLazyLoad.apply(this,[s.$elem])}function i(){a+=1,s.completeImg(n.get(0))||!0===r?o():a<=100?t.setTimeout(i,100):o()}var r,s=this,a=0;"DIV"===n.prop("tagName")?(n.css("background-image","url("+n.data("src")+")"),r=!0):n[0].src=n.data("src"),i()},autoHeight:function(){function n(){var n=e(r.$owlItems[r.currentItem]).height();r.wrapperOuter.css("height",n+"px"),r.wrapperOuter.hasClass("autoHeight")||t.setTimeout(function(){r.wrapperOuter.addClass("autoHeight")},0)}function o(){i+=1,r.completeImg(s.get(0))?n():i<=100?t.setTimeout(o,100):r.wrapperOuter.css("height","")}var i,r=this,s=e(r.$owlItems[r.currentItem]).find("img");void 0!==s.get(0)?(i=0,o()):n()},completeImg:function(e){return!!e.complete&&("undefined"===typeof e.naturalWidth||0!==e.naturalWidth)},onVisibleItems:function(){var t,n=this;for(!0===n.options.addClassActive&&n.$owlItems.removeClass("active"),n.visibleItems=[],t=n.currentItem;t<n.currentItem+n.options.items;t+=1)n.visibleItems.push(t),!0===n.options.addClassActive&&e(n.$owlItems[t]).addClass("active");n.owl.visibleItems=n.visibleItems},transitionTypes:function(e){var t=this;t.outClass="owl-"+e+"-out",t.inClass="owl-"+e+"-in"},singleItemTransition:function(){var e=this,t=e.outClass,n=e.inClass,o=e.$owlItems.eq(e.currentItem),i=e.$owlItems.eq(e.prevItem),r=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],s=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,a="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=!0,e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":s+"px","-moz-perspective-origin":s+"px","perspective-origin":s+"px"}),i.css(function(e){return{position:"relative",left:e+"px"}}(r)).addClass(t).on(a,function(){e.endPrev=!0,i.off(a),e.clearTransStyle(i,t)}),o.addClass(n).on(a,function(){e.endCurrent=!0,o.off(a),e.clearTransStyle(o,n)})},clearTransStyle:function(e,t){var n=this;e.css({position:"",left:""}).removeClass(t),n.endPrev&&n.endCurrent&&(n.$owlWrapper.removeClass("owl-origin"),n.endPrev=!1,n.endCurrent=!1,n.isTransition=!1)},owlStatus:function(){var e=this;e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}},clearEvents:function(){var o=this;o.$elem.off(".owl owl mousedown.disableTextSelect"),e(n).off(".owl owl"),e(t).off("resize",o.resizer)},unWrap:function(){var e=this;0!==e.$elem.children().length&&(e.$owlWrapper.unwrap(),e.$userItems.unwrap().unwrap(),e.owlControls&&e.owlControls.remove()),e.clearEvents(),e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))},destroy:function(){var e=this;e.stop(),t.clearInterval(e.checkVisible),e.unWrap(),e.$elem.removeData()},reinit:function(t){var n=this,o=e.extend({},n.userOptions,t);n.unWrap(),n.init(o,n.$elem)},addItem:function(e,t){var n,o=this;return!!e&&(0===o.$elem.children().length?(o.$elem.append(e),o.setVars(),!1):(o.unWrap(),n=void 0===t||-1===t?-1:t,n>=o.$userItems.length||-1===n?o.$userItems.eq(-1).after(e):o.$userItems.eq(n).before(e),void o.setVars()))},removeItem:function(e){var t,n=this;if(0===n.$elem.children().length)return!1;t=void 0===e||-1===e?-1:e,n.unWrap(),n.$userItems.eq(t).remove(),n.setVars()}};e.fn.owlCarousel=function(t){return this.each(function(){if(!0===e(this).data("owl-init"))return!1;e(this).data("owl-init",!0);var n=Object.create(o);n.init(t,this),e.data(this,"owlCarousel",n)})},e.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:t,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document),/*!
 * Spin.js
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n,o=document.createElement(e||"div");for(n in t)o[n]=t[n];return o}function t(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function n(e,t,n,o){var i=["opacity",t,~~(100*e),n,o].join("-"),r=.01+n/o*100,s=Math.max(1-(1-e)/t*(100-r),e),a=l.substring(0,l.indexOf("Animation")).toLowerCase(),u=a&&"-"+a+"-"||"";return c[i]||(p.insertRule("@"+u+"keyframes "+i+"{0%{opacity:"+s+"}"+r+"%{opacity:"+e+"}"+(r+.01)+"%{opacity:1}"+(r+t)%100+"%{opacity:"+e+"}100%{opacity:"+s+"}}",p.cssRules.length),c[i]=1),i}function o(e,t){var n,o,i=e.style;for(t=t.charAt(0).toUpperCase()+t.slice(1),o=0;o<u.length;o++)if(n=u[o]+t,void 0!==i[n])return n;if(void 0!==i[t])return t}function i(e,t){for(var n in t)e.style[o(e,n)||n]=t[n];return e}function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)void 0===e[o]&&(e[o]=n[o])}return e}function s(e,t){return"string"==typeof e?e:e[t%e.length]}function a(e){this.opts=r(e||{},a.defaults,f)}var l,u=["webkit","Moz","ms","O"],c={},p=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}(),f={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};a.defaults={},r(a.prototype,{spin:function(t){this.stop();var n=this,o=n.opts,r=n.el=i(e(0,{className:o.className}),{position:o.position,width:0,zIndex:o.zIndex});o.radius,o.length,o.width;if(i(r,{left:o.left,top:o.top}),t&&t.insertBefore(r,t.firstChild||null),r.setAttribute("role","progressbar"),n.lines(r,n.opts),!l){var s,a=0,u=(o.lines-1)*(1-o.direction)/2,c=o.fps,p=c/o.speed,f=(1-o.opacity)/(p*o.trail/100),d=p/o.lines;!function e(){a++;for(var t=0;t<o.lines;t++)s=Math.max(1-(a+(o.lines-t)*d)%p*f,o.opacity),n.opacity(r,t*o.direction+u,s,o);n.timeout=n.el&&setTimeout(e,~~(1e3/c))}()}return n},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(o,r){function a(t,n){return i(e(),{position:"absolute",width:r.length+r.width+"px",height:r.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/r.lines*c+r.rotate)+"deg) translate("+r.radius+"px,0)",borderRadius:(r.corners*r.width>>1)+"px"})}for(var u,c=0,p=(r.lines-1)*(1-r.direction)/2;c<r.lines;c++)u=i(e(),{position:"absolute",top:1+~(r.width/2)+"px",transform:r.hwaccel?"translate3d(0,0,0)":"",opacity:r.opacity,animation:l&&n(r.opacity,r.trail,p+c*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"}),r.shadow&&t(u,i(a("#000","0 0 4px #000"),{top:"2px"})),t(o,t(u,a(s(r.color,c),"0 0 1px rgba(0,0,0,.1)")));return o},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}});var d=i(e("group"),{behavior:"url(#default#VML)"});return!o(d,"transform")&&d.adj?function(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}p.addRule(".spin-vml","behavior:url(#default#VML)"),a.prototype.lines=function(e,o){function r(){return i(n("group",{coordsize:c+" "+c,coordorigin:-u+" "+-u}),{width:c,height:c})}function a(e,a,l){t(f,t(i(r(),{rotation:360/o.lines*e+"deg",left:~~a}),t(i(n("roundrect",{arcsize:o.corners}),{width:u,height:o.width,left:o.radius,top:-o.width>>1,filter:l}),n("fill",{color:s(o.color,e),opacity:o.opacity}),n("stroke",{opacity:0}))))}var l,u=o.length+o.width,c=2*u,p=2*-(o.width+o.length)+"px",f=i(r(),{position:"absolute",top:p,left:p});if(o.shadow)for(l=1;l<=o.lines;l++)a(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=o.lines;l++)a(l);return t(e,f)},a.prototype.opacity=function(e,t,n,o){var i=e.firstChild;o=o.shadow&&o.lines||0,i&&t+o<i.childNodes.length&&(i=i.childNodes[t+o],i=i&&i.firstChild,(i=i&&i.firstChild)&&(i.opacity=n))}}():l=o(d,"animation"),a}),/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
function(e){if("object"==typeof exports)e(require("jquery"),require("spin"));else if("function"==typeof define&&define.amd)define(["jquery","spin"],e);else{if(!window.Spinner)throw new Error("Spin.js not present");e(window.jQuery,window.Spinner)}}(function(e,t){e.fn.spin=function(n,o){return this.each(function(){var i=e(this),r=i.data();r.spinner&&(r.spinner.stop(),delete r.spinner),!1!==n&&(n=e.extend({color:o||i.css("color")},e.fn.spin.presets[n]||n),r.spinner=new t(n).spin(this))})},e.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}}),function(e){function t(e){var t=e.length,o=n.type(e);return"function"!==o&&!n.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===o||0===t||"number"==typeof t&&t>0&&t-1 in e))}if(!e.jQuery){var n=function(e,t){return new n.fn.init(e,t)};n.isWindow=function(e){return null!=e&&e==e.window},n.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?i[s.call(e)]||"object":typeof e},n.isArray=Array.isArray||function(e){return"array"===n.type(e)},n.isPlainObject=function(e){var t;if(!e||"object"!==n.type(e)||e.nodeType||n.isWindow(e))return!1;try{if(e.constructor&&!r.call(e,"constructor")&&!r.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||r.call(e,t)},n.each=function(e,n,o){var i=0,r=e.length,s=t(e);if(o){if(s)for(;i<r&&!1!==n.apply(e[i],o);i++);else for(i in e)if(!1===n.apply(e[i],o))break}else if(s)for(;i<r&&!1!==n.call(e[i],i,e[i]);i++);else for(i in e)if(!1===n.call(e[i],i,e[i]))break;return e},n.data=function(e,t,i){if(void 0===i){var r=e[n.expando],s=r&&o[r];if(void 0===t)return s;if(s&&t in s)return s[t]}else if(void 0!==t){var r=e[n.expando]||(e[n.expando]=++n.uuid);return o[r]=o[r]||{},o[r][t]=i,i}},n.removeData=function(e,t){var i=e[n.expando],r=i&&o[i];r&&n.each(t,function(e,t){delete r[t]})},n.extend=function(){var e,t,o,i,r,s,a=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[l]||{},l++),"object"!=typeof a&&"function"!==n.type(a)&&(a={}),l===u&&(a=this,l--);l<u;l++)if(null!=(r=arguments[l]))for(i in r)e=a[i],o=r[i],a!==o&&(c&&o&&(n.isPlainObject(o)||(t=n.isArray(o)))?(t?(t=!1,s=e&&n.isArray(e)?e:[]):s=e&&n.isPlainObject(e)?e:{},a[i]=n.extend(c,s,o)):void 0!==o&&(a[i]=o));return a},n.queue=function(e,o,i){if(e){o=(o||"fx")+"queue";var r=n.data(e,o);return i?(!r||n.isArray(i)?r=n.data(e,o,function(e,n){var o=n||[];return null!=e&&(t(Object(e))?function(e,t){for(var n=+t.length,o=0,i=e.length;o<n;)e[i++]=t[o++];if(n!==n)for(;void 0!==t[o];)e[i++]=t[o++];e.length=i}(o,"string"==typeof e?[e]:e):[].push.call(o,e)),o}(i)):r.push(i),r):r||[]}},n.dequeue=function(e,t){n.each(e.nodeType?[e]:e,function(e,o){t=t||"fx";var i=n.queue(o,t),r=i.shift();"inprogress"===r&&(r=i.shift()),r&&("fx"===t&&i.unshift("inprogress"),r.call(o,function(){n.dequeue(o,t)}))})},n.fn=n.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),o=this.offset(),i=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:n(e).offset();return o.top-=parseFloat(t.style.marginTop)||0,o.left-=parseFloat(t.style.marginLeft)||0,e.style&&(i.top+=parseFloat(e.style.borderTopWidth)||0,i.left+=parseFloat(e.style.borderLeftWidth)||0),{top:o.top-i.top,left:o.left-i.left}}};var o={};n.expando="velocity"+(new Date).getTime(),n.uuid=0;for(var i={},r=i.hasOwnProperty,s=i.toString,a="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<a.length;l++)i["[object "+a[l]+"]"]=a[l].toLowerCase();n.fn.init.prototype=n.fn,e.Velocity={Utilities:n}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,n,o){/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
function i(e){for(var t=-1,n=e?e.length:0,o=[];++t<n;){var i=e[t];i&&o.push(i)}return o}function r(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function s(e){var t=f.data(e,"velocity");return null===t?o:t}function a(e){return function(t){return Math.round(t*e)*(1/e)}}/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function l(e,n,o,i){function r(e,t){return 1-3*t+3*e}function s(e,t){return 3*t-6*e}function a(e){return 3*e}function l(e,t,n){return((r(t,n)*e+s(t,n))*e+a(t))*e}function u(e,t,n){return 3*r(t,n)*e*e+2*s(t,n)*e+a(t)}function c(t,n){for(var i=0;i<m;++i){var r=u(n,e,o);if(0===r)return n;n-=(l(n,e,o)-t)/r}return n}function p(){for(var t=0;t<b;++t)C[t]=l(t*w,e,o)}function f(t,n,i){var r,s,a=0;do{s=n+(i-n)/2,r=l(s,e,o)-t,r>0?i=s:n=s}while(Math.abs(r)>v&&++a<y);return s}function d(t){for(var n=0,i=1,r=b-1;i!=r&&C[i]<=t;++i)n+=w;--i;var s=(t-C[i])/(C[i+1]-C[i]),a=n+s*w,l=u(a,e,o);return l>=g?c(t,a):0==l?a:f(t,n,n+w)}function h(){T=!0,e==n&&o==i||p()}var m=4,g=.001,v=1e-7,y=10,b=11,w=1/(b-1),x="Float32Array"in t;if(4!==arguments.length)return!1;for(var S=0;S<4;++S)if("number"!=typeof arguments[S]||isNaN(arguments[S])||!isFinite(arguments[S]))return!1;e=Math.min(e,1),o=Math.min(o,1),e=Math.max(e,0),o=Math.max(o,0);var C=x?new Float32Array(b):new Array(b),T=!1,E=function(t){return T||h(),e===n&&o===i?t:0===t?0:1===t?1:l(d(t),n,i)};E.getControlPoints=function(){return[{x:e,y:n},{x:o,y:i}]};var k="generateBezier("+[e,n,o,i]+")";return E.toString=function(){return k},E}function u(e,t){var n=e;return m.isString(e)?b.Easings[e]||(n=!1):n=m.isArray(e)&&1===e.length?a.apply(null,e):m.isArray(e)&&2===e.length?w.apply(null,e.concat([t])):!(!m.isArray(e)||4!==e.length)&&l.apply(null,e),!1===n&&(n=b.Easings[b.defaults.easing]?b.defaults.easing:y),n}function c(e){if(e)for(var t=(new Date).getTime(),n=0,i=b.State.calls.length;n<i;n++)if(b.State.calls[n]){var r=b.State.calls[n],a=r[0],l=r[2],u=r[3],d=!!u;u||(u=b.State.calls[n][3]=t-16);for(var h=Math.min((t-u)/l.duration,1),g=0,v=a.length;g<v;g++){var y=a[g],w=y.element;if(s(w)){var S=!1;if(l.display!==o&&null!==l.display&&"none"!==l.display){if("flex"===l.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){x.setPropertyValue(w,"display",t)})}x.setPropertyValue(w,"display",l.display)}l.visibility!==o&&"hidden"!==l.visibility&&x.setPropertyValue(w,"visibility",l.visibility);for(var E in y)if("element"!==E){var k,I=y[E],P=m.isString(I.easing)?b.Easings[I.easing]:I.easing;if(1===h)k=I.endValue;else if(k=I.startValue+(I.endValue-I.startValue)*P(h),!d&&k===I.currentValue)continue;if(I.currentValue=k,x.Hooks.registered[E]){var A=x.Hooks.getRoot(E),N=s(w).rootPropertyValueCache[A];N&&(I.rootPropertyValue=N)}var O=x.setPropertyValue(w,E,I.currentValue+(0===parseFloat(k)?"":I.unitType),I.rootPropertyValue,I.scrollData);x.Hooks.registered[E]&&(x.Normalizations.registered[A]?s(w).rootPropertyValueCache[A]=x.Normalizations.registered[A]("extract",null,O[1]):s(w).rootPropertyValueCache[A]=O[1]),"transform"===O[0]&&(S=!0)}l.mobileHA&&s(w).transformCache.translate3d===o&&(s(w).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&x.flushTransformCache(w)}}l.display!==o&&"none"!==l.display&&(b.State.calls[n][2].display=!1),l.visibility!==o&&"hidden"!==l.visibility&&(b.State.calls[n][2].visibility=!1),l.progress&&l.progress.call(r[1],r[1],h,Math.max(0,u+l.duration-t),u),1===h&&p(n)}b.State.isTicking&&C(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var n=b.State.calls[e][0],i=b.State.calls[e][1],r=b.State.calls[e][2],a=b.State.calls[e][4],l=!1,u=0,c=n.length;u<c;u++){var p=n[u].element;if(t||r.loop||("none"===r.display&&x.setPropertyValue(p,"display",r.display),"hidden"===r.visibility&&x.setPropertyValue(p,"visibility",r.visibility)),!0!==r.loop&&(f.queue(p)[1]===o||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&s(p)){s(p).isAnimating=!1,s(p).rootPropertyValueCache={};var d=!1;f.each(x.Lists.transforms3D,function(e,t){var n=/^scale/.test(t)?1:0,i=s(p).transformCache[t];s(p).transformCache[t]!==o&&new RegExp("^\\("+n+"[^.]").test(i)&&(d=!0,delete s(p).transformCache[t])}),r.mobileHA&&(d=!0,delete s(p).transformCache.translate3d),d&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&r.complete&&!r.loop&&u===c-1)try{r.complete.call(i,i)}catch(e){setTimeout(function(){throw e},1)}a&&!0!==r.loop&&a(i),!0!==r.loop||t||(f.each(s(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360)}),b(p,"reverse",{loop:!0,delay:r.delay})),!1!==r.queue&&f.dequeue(p,r.queue)}b.State.calls[e]=!1;for(var h=0,m=b.State.calls.length;h<m;h++)if(!1!==b.State.calls[h]){l=!0;break}!1===l&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(n.documentMode)return n.documentMode;for(var e=7;e>4;e--){var t=n.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return o}(),h=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var n,o=(new Date).getTime();/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
return n=Math.max(0,16-(o-e)),e=o+n,setTimeout(function(){t(o+n)},n)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},/* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==o&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},g=!1;if(e.fn&&e.fn.jquery?(f=e,g=!0):f=t.Velocity.Utilities,d<=8&&!g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(d<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var v=400,y="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:v,easing:y,begin:o,complete:o,progress:o,display:o,visibility:o,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:1,patch:0},debug:!1};t.pageYOffset!==o?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
var w=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,o){var i={x:t.x+o.dx*n,v:t.v+o.dv*n,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function n(n,o){var i={dx:n.v,dv:e(n)},r=t(n,.5*o,i),s=t(n,.5*o,r),a=t(n,o,s),l=1/6*(i.dx+2*(r.dx+s.dx)+a.dx),u=1/6*(i.dv+2*(r.dv+s.dv)+a.dv);return n.x=n.x+l*o,n.v=n.v+u*o,n}return function e(t,o,i){var r,s,a,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(t=parseFloat(t)||500,o=parseFloat(o)||20,i=i||null,l.tension=t,l.friction=o,r=null!==i,r?(c=e(t,o),s=c/i*.016):s=.016;;)if(a=n(a||l,s),u.push(1+a.x),c+=16,!(Math.abs(a.x)>1e-4&&Math.abs(a.v)>1e-4))break;return r?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var x=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var n,o,i;if(d)for(n in x.Hooks.templates){o=x.Hooks.templates[n],i=o[0].split(" ");var r=o[1].match(x.RegEx.valueSplit);"Color"===i[0]&&(i.push(i.shift()),r.push(r.shift()),x.Hooks.templates[n]=[i.join(" "),r.join(" ")])}for(n in x.Hooks.templates){o=x.Hooks.templates[n],i=o[0].split(" ");for(var e in i){var s=n+i[e],a=e;x.Hooks.registered[s]=[n,a]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var n=x.Hooks.registered[e];if(n){var o=n[0],i=n[1];return t=x.Hooks.cleanRootPropertyValue(o,t),t.toString().match(x.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,n){var o=x.Hooks.registered[e];if(o){var i,r=o[0],s=o[1];return n=x.Hooks.cleanRootPropertyValue(r,n),i=n.toString().match(x.RegEx.valueSplit),i[s]=t,i.join(" ")}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip";case"extract":var o;return x.RegEx.wrappedValueAlreadyExtracted.test(n)?o=n:(o=n.toString().match(x.RegEx.valueUnwrap),o=o?o[1].replace(/,(\s+)?/g," "):n),o;case"inject":return"rect("+n+")"}},blur:function(e,t,n){switch(e){case"name":return"-webkit-filter";case"extract":var o=parseFloat(n);if(!o&&0!==o){var i=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);o=i?i[1]:0}return o;case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(e,t,n){if(d<=8)switch(e){case"name":return"filter";case"extract":var o=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=o?o[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return n}}},register:function(){d<=9||b.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,n,i){switch(e){case"name":return"transform";case"extract":return s(n)===o||s(n).transformCache[t]===o?/^scale/i.test(t)?1:0:s(n).transformCache[t].replace(/[()]/g,"");case"inject":var r=!1;switch(t.substr(0,t.length-1)){case"translate":r=!/(%|px|em|rem|vw|vh|\d)$/i.test(i);break;case"scal":case"scale":b.State.isAndroid&&s(n).transformCache[t]===o&&i<1&&(i=1),r=!/(\d)$/i.test(i);break;case"skew":case"rotate":r=!/(deg|\d)$/i.test(i)}return r||(s(n).transformCache[t]="("+i+")"),s(n).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,n,i){switch(e){case"name":return t;case"extract":var r;if(x.RegEx.wrappedValueAlreadyExtracted.test(i))r=i;else{var s,a={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(i)?s=a[i]!==o?a[i]:a.black:x.RegEx.isHex.test(i)?s="rgb("+x.Values.hexToRgb(i).join(" ")+")":/^rgba?\(/i.test(i)||(s=a.black),r=(s||i).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return d<=8||3!==r.split(" ").length||(r+=" 1"),r;case"inject":return d<=8?4===i.split(" ").length&&(i=i.split(/\s+/).slice(0,3).join(" ")):3===i.split(" ").length&&(i+=" 1"),(d<=8?"rgb":"rgba")+"("+i.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,o=t.length;n<o;n++){var i;if(i=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[i]))return b.State.prefixMatches[e]=i,[i,!0]}return[e,!1]}},Values:{/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
hexToRgb:function(e){var t,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(n,function(e,t,n,o){return t+t+n+n+o+o}),t=o.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,n,i,r){function a(e,n){function i(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(d<=8)l=f.css(e,n);else{var u=!1;if(/^(width|height)$/.test(n)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!r){if("height"===n&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return i(),c}if("width"===n&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return i(),p}}var h;h=s(e)===o?t.getComputedStyle(e,null):s(e).computedStyle?s(e).computedStyle:s(e).computedStyle=t.getComputedStyle(e,null),(d||b.State.isFirefox)&&"borderColor"===n&&(n="borderTopColor"),l=9===d&&"filter"===n?h.getPropertyValue(n):h[n],""!==l&&null!==l||(l=e.style[n]),i()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(n)){var m=a(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(n))&&(l=f(e).position()[n]+"px")}return l}var l;if(x.Hooks.registered[n]){var u=n,c=x.Hooks.getRoot(u);i===o&&(i=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(i=x.Normalizations.registered[c]("extract",e,i)),l=x.Hooks.extractValue(u,i)}else if(x.Normalizations.registered[n]){var p,h;p=x.Normalizations.registered[n]("name",e),"transform"!==p&&(h=a(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(h)&&x.Hooks.templates[n]&&(h=x.Hooks.templates[n][1])),l=x.Normalizations.registered[n]("extract",e,h)}return/^[\d-]/.test(l)||(l=s(e)&&s(e).isSVG&&x.Names.SVGAttribute(n)?/^(height|width)$/i.test(n)?e.getBBox()[n]:e.getAttribute(n):a(e,x.Names.prefixCheck(n)[0])),x.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+n+": "+l),l},setPropertyValue:function(e,n,o,i,r){var a=n;if("scroll"===n)r.container?r.container["scroll"+r.direction]=o:"Left"===r.direction?t.scrollTo(o,r.alternateValue):t.scrollTo(r.alternateValue,o);else if(x.Normalizations.registered[n]&&"transform"===x.Normalizations.registered[n]("name",e))x.Normalizations.registered[n]("inject",e,o),a="transform",o=s(e).transformCache[n];else{if(x.Hooks.registered[n]){var l=n,u=x.Hooks.getRoot(n);i=i||x.getPropertyValue(e,u),o=x.Hooks.injectValue(l,o,i),n=u}if(x.Normalizations.registered[n]&&(o=x.Normalizations.registered[n]("inject",e,o),n=x.Normalizations.registered[n]("name",e)),a=x.Names.prefixCheck(n)[0],d<=8)try{e.style[a]=o}catch(e){b.debug&&console.log("Browser does not support ["+o+"] for ["+a+"]")}else s(e)&&s(e).isSVG&&x.Names.SVGAttribute(n)?e.setAttribute(n,o):e.style[a]=o;b.debug>=2&&console.log("Set "+n+" ("+a+"): "+o)}return[a,o]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var n="";if((d||b.State.isAndroid&&!b.State.isChrome)&&s(e).isSVG){var o={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(s(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),o[e]&&(n+=e+"("+o[e].join(" ")+") ",delete o[e])})}else{var i,r;f.each(s(e).transformCache,function(t){if(i=s(e).transformCache[t],"transformPerspective"===t)return r=i,!0;9===d&&"rotateZ"===t&&(t="rotate"),n+=t+i+" "}),r&&(n="perspective"+r+" "+n)}x.setPropertyValue(e,"transform",n)}};x.Hooks.register(),x.Normalizations.register(),b.hook=function(e,t,n){var i=o;return e=r(e),f.each(e,function(e,r){if(s(r)===o&&b.init(r),n===o)i===o&&(i=b.CSS.getPropertyValue(r,t));else{var a=b.CSS.setPropertyValue(r,t,n);"transform"===a[0]&&b.CSS.flushTransformCache(r),i=a}}),i};var S=function(){function e(){return l?P.promise||null:d}function a(){function e(e){function d(e,t){var n=o,i=o,r=o;return m.isArray(e)?(n=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||x.RegEx.isHex.test(e[1])?r=e[1]:(m.isString(e[1])&&!x.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(i=t?e[1]:u(e[1],l.duration),e[2]!==o&&(r=e[2]))):n=e,t||(i=i||l.easing),m.isFunction(n)&&(n=n.call(a,E,T)),m.isFunction(r)&&(r=r.call(a,E,T)),[n||0,i,r]}function h(e,t){var n,o;return o=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return n=e,""}),n||(n=x.Values.getUnitType(e)),[o,n]}if(l.begin&&0===E)try{l.begin.call(g,g)}catch(e){setTimeout(function(){throw e},1)}if("scroll"===A){var v,S,C,k=/^x$/i.test(l.axis)?"Left":"Top",I=parseFloat(l.offset)||0;l.container?m.isWrapped(l.container)||m.isNode(l.container)?(l.container=l.container[0]||l.container,v=l.container["scroll"+k],C=v+f(a).position()[k.toLowerCase()]+I):l.container=null:(v=b.State.scrollAnchor[b.State["scrollProperty"+k]],S=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===k?"Top":"Left")]],C=f(a).offset()[k.toLowerCase()]+I),p={scroll:{rootPropertyValue:!1,startValue:v,currentValue:v,endValue:C,unitType:"",easing:l.easing,scrollData:{container:l.container,direction:k,alternateValue:S}},element:a},b.debug&&console.log("tweensContainer (scroll): ",p.scroll,a)}else if("reverse"===A){if(!s(a).tweensContainer)return void f.dequeue(a,l.queue);"none"===s(a).opts.display&&(s(a).opts.display="auto"),"hidden"===s(a).opts.visibility&&(s(a).opts.visibility="visible"),s(a).opts.loop=!1,s(a).opts.begin=null,s(a).opts.complete=null,w.easing||delete l.easing,w.duration||delete l.duration,l=f.extend({},s(a).opts,l);var N=f.extend(!0,{},s(a).tweensContainer);for(var O in N)if("element"!==O){var L=N[O].startValue;N[O].startValue=N[O].currentValue=N[O].endValue,N[O].endValue=L,m.isEmptyObject(w)||(N[O].easing=l.easing),b.debug&&console.log("reverse tweensContainer ("+O+"): "+JSON.stringify(N[O]),a)}p=N}else if("start"===A){var N;s(a).tweensContainer&&!0===s(a).isAnimating&&(N=s(a).tweensContainer),f.each(y,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var n=d(t,!0),i=n[0],r=n[1],s=n[2];if(x.RegEx.isHex.test(i)){for(var a=["Red","Green","Blue"],l=x.Values.hexToRgb(i),u=s?x.Values.hexToRgb(s):o,c=0;c<a.length;c++){var p=[l[c]];r&&p.push(r),u!==o&&p.push(u[c]),y[e+a[c]]=p}delete y[e]}}});for(var j in y){var D=d(y[j]),V=D[0],M=D[1],_=D[2];j=x.Names.camelCase(j);var R=x.Hooks.getRoot(j),H=!1;if(s(a).isSVG||!1!==x.Names.prefixCheck(R)[1]||x.Normalizations.registered[R]!==o){(l.display!==o&&null!==l.display&&"none"!==l.display||l.visibility!==o&&"hidden"!==l.visibility)&&/opacity|filter/.test(j)&&!_&&0!==V&&(_=0),l._cacheValues&&N&&N[j]?(_===o&&(_=N[j].endValue+N[j].unitType),H=s(a).rootPropertyValueCache[R]):x.Hooks.registered[j]?_===o?(H=x.getPropertyValue(a,R),_=x.getPropertyValue(a,j,H)):H=x.Hooks.templates[R][1]:_===o&&(_=x.getPropertyValue(a,j));var q,W,$,B=!1;if(q=h(j,_),_=q[0],$=q[1],q=h(j,V),V=q[0].replace(/^([+-\/*])=/,function(e,t){return B=t,""}),W=q[1],_=parseFloat(_)||0,V=parseFloat(V)||0,"%"===W&&(/^(fontSize|lineHeight)$/.test(j)?(V/=100,W="em"):/^scale/.test(j)?(V/=100,W=""):/(Red|Green|Blue)$/i.test(j)&&(V=V/100*255,W="")),/[\/*]/.test(B))W=$;else if($!==W&&0!==_)if(0===V)W=$;else{r=r||function(){var e={myParent:a.parentNode||n.body,position:x.getPropertyValue(a,"position"),fontSize:x.getPropertyValue(a,"fontSize")},o=e.position===F.lastPosition&&e.myParent===F.lastParent,i=e.fontSize===F.lastFontSize;F.lastParent=e.myParent,F.lastPosition=e.position,F.lastFontSize=e.fontSize;var r={};if(i&&o)r.emToPx=F.lastEmToPx,r.percentToPxWidth=F.lastPercentToPxWidth,r.percentToPxHeight=F.lastPercentToPxHeight;else{var l=s(a).isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");b.init(l),e.myParent.appendChild(l),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(l,t,"hidden")}),b.CSS.setPropertyValue(l,"position",e.position),b.CSS.setPropertyValue(l,"fontSize",e.fontSize),b.CSS.setPropertyValue(l,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(l,t,"100%")}),b.CSS.setPropertyValue(l,"paddingLeft","100em"),r.percentToPxWidth=F.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(l,"width",null,!0))||1)/100,r.percentToPxHeight=F.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(l,"height",null,!0))||1)/100,r.emToPx=F.lastEmToPx=(parseFloat(x.getPropertyValue(l,"paddingLeft"))||1)/100,e.myParent.removeChild(l)}return null===F.remToPx&&(F.remToPx=parseFloat(x.getPropertyValue(n.body,"fontSize"))||16),null===F.vwToPx&&(F.vwToPx=parseFloat(t.innerWidth)/100,F.vhToPx=parseFloat(t.innerHeight)/100),r.remToPx=F.remToPx,r.vwToPx=F.vwToPx,r.vhToPx=F.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(r),a),r}();var X=/margin|padding|left|right|width|text|word|letter/i.test(j)||/X$/.test(j)||"x"===j?"x":"y";switch($){case"%":_*="x"===X?r.percentToPxWidth:r.percentToPxHeight;break;case"px":break;default:_*=r[$+"ToPx"]}switch(W){case"%":_*=1/("x"===X?r.percentToPxWidth:r.percentToPxHeight);break;case"px":break;default:_*=1/r[W+"ToPx"]}}switch(B){case"+":V=_+V;break;case"-":V=_-V;break;case"*":V*=_;break;case"/":V=_/V}p[j]={rootPropertyValue:H,startValue:_,currentValue:_,endValue:V,unitType:W,easing:M},b.debug&&console.log("tweensContainer ("+j+"): "+JSON.stringify(p[j]),a)}else b.debug&&console.log("Skipping ["+R+"] due to a lack of browser support.")}p.element=a}p.element&&(x.Values.addClass(a,"velocity-animating"),z.push(p),""===l.queue&&(s(a).tweensContainer=p,s(a).opts=l),s(a).isAnimating=!0,E===T-1?(b.State.calls.length>1e4&&(b.State.calls=i(b.State.calls)),b.State.calls.push([z,g,l,null,P.resolver]),!1===b.State.isTicking&&(b.State.isTicking=!0,c())):E++)}var r,a=this,l=f.extend({},b.defaults,w),p={};switch(s(a)===o&&b.init(a),parseFloat(l.delay)&&!1!==l.queue&&f.queue(a,l.queue,function(e){b.velocityQueueEntryFlag=!0,s(a).delayTimer={setTimeout:setTimeout(e,parseFloat(l.delay)),next:e}}),l.duration.toString().toLowerCase()){case"fast":l.duration=200;break;case"normal":l.duration=v;break;case"slow":l.duration=600;break;default:l.duration=parseFloat(l.duration)||1}!1!==b.mock&&(!0===b.mock?l.duration=l.delay=1:(l.duration*=parseFloat(b.mock)||1,l.delay*=parseFloat(b.mock)||1)),l.easing=u(l.easing,l.duration),l.begin&&!m.isFunction(l.begin)&&(l.begin=null),l.progress&&!m.isFunction(l.progress)&&(l.progress=null),l.complete&&!m.isFunction(l.complete)&&(l.complete=null),l.display!==o&&null!==l.display&&(l.display=l.display.toString().toLowerCase(),"auto"===l.display&&(l.display=b.CSS.Values.getDisplayType(a))),l.visibility!==o&&null!==l.visibility&&(l.visibility=l.visibility.toString().toLowerCase()),l.mobileHA=l.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,!1===l.queue?l.delay?setTimeout(e,l.delay):e():f.queue(a,l.queue,function(t,n){if(!0===n)return P.promise&&P.resolver(g),!0;b.velocityQueueEntryFlag=!0,e(t)}),""!==l.queue&&"fx"!==l.queue||"inprogress"===f.queue(a)[0]||f.dequeue(a)}var l,d,h,g,y,w,C=arguments[0]&&(f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(l=!1,h=0,g=this,d=this):(l=!0,h=1,g=C?arguments[0].elements:arguments[0]),g=r(g)){C?(y=arguments[0].properties,w=arguments[0].options):(y=arguments[h],w=arguments[h+1]);var T=g.length,E=0;if("stop"!==y&&!f.isPlainObject(w)){var k=h+1;w={};for(var I=k;I<arguments.length;I++)m.isArray(arguments[I])||!/^(fast|normal|slow)$/i.test(arguments[I])&&!/^\d/.test(arguments[I])?m.isString(arguments[I])||m.isArray(arguments[I])?w.easing=arguments[I]:m.isFunction(arguments[I])&&(w.complete=arguments[I]):w.duration=arguments[I]}var P={promise:null,resolver:null,rejecter:null};l&&b.Promise&&(P.promise=new b.Promise(function(e,t){P.resolver=e,P.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"stop":f.each(g,function(e,t){s(t)&&s(t).delayTimer&&(clearTimeout(s(t).delayTimer.setTimeout),s(t).delayTimer.next&&s(t).delayTimer.next(),delete s(t).delayTimer)});var N=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(n,i){var r=m.isString(w)?w:"";if(w!==o&&t[2].queue!==r)return!0;f.each(g,function(t,n){n===i&&(w!==o&&(f.each(f.queue(n,r),function(e,t){m.isFunction(t)&&t(null,!0)}),f.queue(n,r,[])),s(n)&&""===r&&f.each(s(n).tweensContainer,function(e,t){t.endValue=t.currentValue}),N.push(e))})})}),f.each(N,function(e,t){p(t,!0)}),P.promise&&P.resolver(g),e();default:if(!f.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var O=f.extend({},w),L=O.duration,j=O.delay||0;return!0===O.backwards&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(O.stagger)?O.delay=j+parseFloat(O.stagger)*e:m.isFunction(O.stagger)&&(O.delay=j+O.stagger.call(t,e,T)),O.drag&&(O.duration=parseFloat(L)||(/^(callout|transition)/.test(y)?1e3:v),O.duration=Math.max(O.duration*(O.backwards?1-e/T:(e+1)/T),.75*O.duration,200)),b.Redirects[y].call(t,t,O||{},e,T,g,P.promise?P:o)}),e()}var D="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return P.promise?P.rejecter(new Error(D)):console.log(D),e()}A="start"}var F={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},z=[];f.each(g,function(e,t){m.isNode(t)&&a.call(t)});var V,O=f.extend({},b.defaults,w);if(O.loop=parseInt(O.loop),V=2*O.loop-1,O.loop)for(var M=0;M<V;M++){var _={delay:O.delay,progress:O.progress};M===V-1&&(_.display=O.display,_.visibility=O.visibility,_.complete=O.complete),S(g,"reverse",_)}return e()}};b=f.extend(S,b),b.animate=S;var C=t.requestAnimationFrame||h;return b.State.isMobile||n.hidden===o||n.addEventListener("visibilitychange",function(){n.hidden?(C=function(e){return setTimeout(function(){e(!0)},16)},c()):C=t.requestAnimationFrame||h}),e.Velocity=b,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,n,i,r,s,a){var l=f.extend({},n),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===o&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(s,s);for(var n in p){d[n]=e.style[n];var o=b.CSS.getPropertyValue(e,n);p[n]="Down"===t?[o,0]:[0,o]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(s,s),a&&a.resolver(s)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,n,i,r,s,a){var l=f.extend({},n),u={opacity:"In"===t?1:0},c=l.complete;l.complete=i!==r-1?l.begin=null:function(){c&&c.call(s,s),a&&a.resolver(s)},l.display===o&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}),function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("div");i.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',o.appendChild(i.childNodes[1])}return t&&e.extend(n,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];n.customSelector&&t.push(n.customSelector);var o=".fitvidsignore";n.ignore&&(o=o+", "+n.ignore);var i=e(this).find(t.join(","));i=i.not("object object"),i=i.not(o),i.each(function(){var t=e(this);if(!(t.parents(o).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),r=n/i;if(!t.attr("name")){var s="fitvid"+e.fn.fitVids._count;t.attr("name",s),e.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*r+"%"),t.removeAttr("height").removeAttr("width")}})})},e.fn.fitVids._count=0}(window.jQuery||window.Zepto),/*
 *	jQuery dotdotdot 1.6.16
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
function(e,t){function n(e,t,n){var o=e.children(),i=!1;e.empty();for(var s=0,a=o.length;s<a;s++){var l=o.eq(s);if(e.append(l),n&&e.append(n),r(e,t)){l.remove(),i=!0;break}n&&n.detach()}return i}function o(t,n,s,a,l){var u=!1,c=function(e){l&&e[e.is("table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style")?"after":"append"](l)};return t.contents().detach().each(function(){var p=this,f=e(p);if(void 0===p||3==p.nodeType&&0==e.trim(p.data).length)return!0;if(f.is("script, .dotdotdot-keep"))t.append(f);else{if(u)return!0;t.append(f),c(t),r(s,a)&&((u=3==p.nodeType?i(f,n,s,a,l):o(f,n,s,a,l))||(c(e(t.contents().last())),u=!0)),u||l&&l.detach()}}),u}function i(t,n,o,i,a){var c=t[0];if(!c)return!1;var f=u(c),d=-1!==f.indexOf(" ")?" ":"　",h="letter"==i.wrap?"":d,m=f.split(h),g=-1,v=-1,y=0,b=m.length-1;for(i.fallbackToLetter&&0==y&&0==b&&(h="",m=f.split(h),b=m.length-1);y<=b&&(0!=y||0!=b);){var w=Math.floor((y+b)/2);if(w==v)break;v=w,l(c,m.slice(0,v+1).join(h)+i.ellipsis),r(o,i)?(b=v,i.fallbackToLetter&&0==y&&0==b&&(h="",m=m[0].split(h),g=-1,v=-1,y=0,b=m.length-1)):(g=v,y=v)}if(-1==g||1==m.length&&0==m[0].length){var x=t.parent();t.detach();var S=a&&a.closest(x).length?a.length:0;x.contents().length>S?c=p(x.contents().eq(-1-S),n):(c=p(x,n,!0),S||x.detach()),c&&(f=s(u(c),i),l(c,f),S&&a&&e(c).parent().append(a))}else f=s(m.slice(0,g+1).join(h),i),l(c,f);return!0}function r(e,t){return e.innerHeight()>t.maxHeight}function s(t,n){for(;e.inArray(t.slice(-1),n.lastCharacter.remove)>-1;)t=t.slice(0,-1);return e.inArray(t.slice(-1),n.lastCharacter.noEllipsis)<0&&(t+=n.ellipsis),t}function a(e){return{width:e.innerWidth(),height:e.innerHeight()}}function l(e,t){e.innerText?e.innerText=t:e.nodeValue?e.nodeValue=t:e.textContent&&(e.textContent=t)}function u(e){return e.innerText?e.innerText:e.nodeValue?e.nodeValue:e.textContent?e.textContent:""}function c(e){do{e=e.previousSibling}while(e&&1!==e.nodeType&&3!==e.nodeType);return e}function p(t,n,o){var i,r=t&&t[0];if(r){if(!o){if(3===r.nodeType)return r;if(e.trim(t.text()))return p(t.contents().last(),n)}for(i=c(r);!i;){if(t=t.parent(),t.is(n)||!t.length)return!1;i=c(t[0])}if(i)return p(e(i),n)}return!1}function f(t,n){return!!t&&("string"==typeof t?(t=e(t,n),!!t.length&&t):!!t.jquery&&t)}function d(e){for(var t=e.innerHeight(),n=["paddingTop","paddingBottom"],o=0,i=n.length;o<i;o++){var r=parseInt(e.css(n[o]),10);isNaN(r)&&(r=0),t-=r}return t}if(!e.fn.dotdotdot){e.fn.dotdotdot=function(t){if(0==this.length)return e.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){e(this).dotdotdot(t)});var i=this;i.data("dotdotdot")&&i.trigger("destroy.dot"),i.data("dotdotdot-style",i.attr("style")||""),i.css("word-wrap","break-word"),"nowrap"===i.css("white-space")&&i.css("white-space","normal"),i.bind_events=function(){return i.bind("update.dot",function(t,a){t.preventDefault(),t.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:d(i),l.maxHeight+=l.tolerance,void 0!==a&&(("string"==typeof a||a instanceof HTMLElement)&&(a=e("<div />").append(a).contents()),a instanceof e&&(s=a)),m=i.wrapInner('<div class="dotdotdot" />').children(),m.contents().detach().end().append(s.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,p=!1;return u.afterElement&&(c=u.afterElement.clone(!0),c.show(),u.afterElement.detach()),r(m,l)&&(p="children"==l.wrap?n(m,l,c):o(m,i,m,l,c)),m.replaceWith(m.contents()),m=null,e.isFunction(l.callback)&&l.callback.call(i[0],p,s),u.isTruncated=p,p}).bind("isTruncated.dot",function(e,t){return e.preventDefault(),e.stopPropagation(),"function"==typeof t&&t.call(i[0],u.isTruncated),u.isTruncated}).bind("originalContent.dot",function(e,t){return e.preventDefault(),e.stopPropagation(),"function"==typeof t&&t.call(i[0],s),s}).bind("destroy.dot",function(e){e.preventDefault(),e.stopPropagation(),i.unwatch().unbind_events().contents().detach().end().append(s).attr("style",i.data("dotdotdot-style")||"").data("dotdotdot",!1)}),i},i.unbind_events=function(){return i.unbind(".dot"),i},i.watch=function(){if(i.unwatch(),"window"==l.watch){var t=e(window),n=t.width(),o=t.height();t.bind("resize.dot"+u.dotId,function(){n==t.width()&&o==t.height()&&l.windowResizeFix||(n=t.width(),o=t.height(),p&&clearInterval(p),p=setTimeout(function(){i.trigger("update.dot")},100))})}else c=a(i),p=setInterval(function(){if(i.is(":visible")){var e=a(i);c.width==e.width&&c.height==e.height||(i.trigger("update.dot"),c=e)}},500);return i},i.unwatch=function(){return e(window).unbind("resize.dot"+u.dotId),p&&clearInterval(p),i};var s=i.contents(),l=e.extend(!0,{},e.fn.dotdotdot.defaults,t),u={},c={},p=null,m=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=e.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=e.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),u.afterElement=f(l.after,i),u.isTruncated=!1,u.dotId=h++,i.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&i.watch(),i},e.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},e.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},e.fn.dotdotdot.debug=function(e){};var h=1,m=e.fn.html;e.fn.html=function(t){/*
 *	jQuery dotdotdot 1.6.16
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
return void 0!=t&&!e.isFunction(t)&&this.data("dotdotdot")?this.trigger("update",[t]):m.apply(this,arguments)};var g=e.fn.text;e.fn.text=function(t){return void 0!=t&&!e.isFunction(t)&&this.data("dotdotdot")?(t=e("<div />").text(t).html(),this.trigger("update",[t])):g.apply(this,arguments)}}}(jQuery),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).cssVars=t()}(this,function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function t(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function n(e){function t(){return!("<"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().charAt(0))}function n(e,t){r.onError(e,s[t],t)}function o(e,t){var n=r.onSuccess(e,s[t],t);e=!1===n?"":n||e,a[t]=e,-1===a.indexOf(null)&&r.onComplete(a)}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={mimeType:i.mimeType||null,onBeforeSend:i.onBeforeSend||Function.prototype,onSuccess:i.onSuccess||Function.prototype,onError:i.onError||Function.prototype,onComplete:i.onComplete||Function.prototype},s=Array.isArray(e)?e:[e],a=Array.apply(null,Array(s.length)).map(function(e){return null}),l=document.createElement("a");s.forEach(function(e,i){if(l.setAttribute("href",e),l.href=String(l.href),Boolean(document.all&&!window.atob)&&l.host.split(":")[0]!==location.host.split(":")[0])if(l.protocol===location.protocol){var s=new XDomainRequest;s.open("GET",e),s.timeout=0,s.onprogress=Function.prototype,s.ontimeout=Function.prototype,s.onload=function(){t(s.responseText)?o(s.responseText,i):n(s,i)},s.onerror=function(e){n(s,i)},setTimeout(function(){s.send()},0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),n(null,i);else{var a=new XMLHttpRequest;a.open("GET",e),r.mimeType&&a.overrideMimeType&&a.overrideMimeType(r.mimeType),r.onBeforeSend(a,e,i),a.onreadystatechange=function(){4===a.readyState&&(200===a.status&&t(a.responseText)?o(a.responseText,i):n(a,i))},a.send()}})}function o(e){function t(){if(-1===u.indexOf(null)){var e=u.join("");a.onComplete(e,u,l)}}function o(e,o,i,s){var l=a.onSuccess(e,i,s);!function e(t,o,i,s){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],c=r(t,i,u);c.rules.length?n(c.absoluteUrls,{onBeforeSend:function(e,t,n){a.onBeforeSend(e,o,t)},onSuccess:function(e,t,n){var i=a.onSuccess(e,o,t),s=r(e=!1===i?"":i||e,t,u);return s.rules.forEach(function(t,n){e=e.replace(t,s.absoluteRules[n])}),e},onError:function(n,r,a){l.push({xhr:n,url:r}),u.push(c.rules[a]),e(t,o,i,s,l,u)},onComplete:function(n){n.forEach(function(e,n){t=t.replace(c.rules[n],e)}),e(t,o,i,s,l,u)}}):s(t,l)}(e=void 0!==l&&!1===Boolean(l)?"":l||e,i,s,function(e,n){null===u[o]&&(n.forEach(function(e){return a.onError(e.xhr,i,e.url)}),!a.filter||a.filter.test(e)?u[o]=e:u[o]="",t())})}function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o={};return o.rules=(e.replace(s.cssComments,"").match(s.cssImports)||[]).filter(function(e){return-1===n.indexOf(e)}),o.urls=o.rules.map(function(e){return e.replace(s.cssImports,"$1")}),o.absoluteUrls=o.urls.map(function(e){return i(e,t)}),o.absoluteRules=o.rules.map(function(e,n){var r=o.urls[n],s=i(o.absoluteUrls[n],t);return e.replace(r,s)}),o}var s={cssComments:/\/\*[\s\S]+?\*\//g,cssImports:/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g},a={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},l=Array.apply(null,a.rootElement.querySelectorAll(a.include)).filter(function(e){return t=e,n=a.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,n);var t,n}),u=Array.apply(null,Array(l.length)).map(function(e){return null});l.length?l.forEach(function(e,r){var s=e.getAttribute("href"),l=e.getAttribute("rel"),c="LINK"===e.nodeName&&s&&l&&"stylesheet"===l.toLowerCase(),p="STYLE"===e.nodeName;if(c)n(s,{mimeType:"text/css",onBeforeSend:function(t,n,o){a.onBeforeSend(t,e,n)},onSuccess:function(t,n,a){var l=i(s,location.href);o(t,r,e,l)},onError:function(n,o,i){u[r]="",a.onError(n,e,o),t()}});else if(p){var f=e.textContent;a.useCSSOM&&(f=Array.apply(null,e.sheet.cssRules).map(function(e){return e.cssText}).join("")),o(f,r,e,location.href)}else u[r]="",t()}):a.onComplete("",[])}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),o=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(o),n.body.appendChild(i),o.href=t,i.href=e,i.href}function r(e,t,n){e instanceof RegExp&&(e=s(e,n)),t instanceof RegExp&&(t=s(t,n));var o=a(e,t,n);return o&&{start:o[0],end:o[1],pre:n.slice(0,o[0]),body:n.slice(o[0]+e.length,o[1]),post:n.slice(o[1]+t.length)}}function s(e,t){var n=t.match(e);return n?n[0]:null}function a(e,t,n){var o,i,r,s,a,l=n.indexOf(e),u=n.indexOf(t,l+1),c=l;if(l>=0&&u>0){for(o=[],r=n.length;c>=0&&!a;)c==l?(o.push(c),l=n.indexOf(e,c+1)):1==o.length?a=[o.pop(),u]:((i=o.pop())<r&&(r=i,s=u),u=n.indexOf(t,c+1)),c=l<u&&l>=0?l:u;o.length&&(a=[r,s])}return a}function l(t){function n(e){throw new Error("CSS parse error: ".concat(e))}function o(e){var n=e.exec(t);if(n)return t=t.slice(n[0].length),n}function i(){return o(/^{\s*/)}function r(){return o(/^}/)}function s(){o(/^\s*/)}function a(){if(s(),"/"===t[0]&&"*"===t[1]){for(var e=2;t[e]&&("*"!==t[e]||"/"!==t[e+1]);)e++;if(!t[e])return n("end of comment is missing");var o=t.slice(2,e);return t=t.slice(e+2),{type:"comment",comment:o}}}function l(){for(var e,t=[];e=a();)t.push(e);return v.removeComments?[]:t}function u(){for(s();"}"===t[0];)n("extra closing bracket");var e=o(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(e)return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,function(e){return e.replace(/,/g,"‌")}).split(/\s*(?![^(]*\)),\s*/).map(function(e){return e.replace(/\u200C/g,",")})}function c(){o(/^([;\s]*)+/);var e=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,t=o(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(t){if(t=t[0].trim(),!o(/^:\s*/))return n("property missing ':'");var i=o(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),r={type:"declaration",property:t.replace(e,""),value:i?i[0].replace(e,"").trim():""};return o(/^[;\s]*/),r}}function p(){if(!i())return n("missing '{'");for(var e,t=l();e=c();)t.push(e),t=t.concat(l());return r()?t:n("missing '}'")}function f(){s();for(var e,t=[];e=o(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),o(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:p()}}function h(){if(s(),"@"===t[0]){var e=function(){var e=o(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=o(/^([-\w]+)\s*/)))return n("@keyframes missing name");var s,a=e[1];if(!i())return n("@keyframes missing '{'");for(var u=l();s=f();)u.push(s),u=u.concat(l());return r()?{type:"keyframes",name:a,vendor:t,keyframes:u}:n("@keyframes missing '}'")}}()||function(){var e=o(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:g()}}()||function(){if(o(/^@host\s*/))return{type:"host",rules:g()}}()||function(){var e=o(/^@media *([^{]+)/);if(e)return{type:"media",media:e[1].trim(),rules:g()}}()||function(){var e=o(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}()||function(){if(o(/^@page */))return{type:"page",selectors:u()||[],declarations:p()}}()||function(){var e=o(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:g()}}()||function(){if(o(/^@font-face\s*/))return{type:"font-face",declarations:p()}}()||function(){var e=o(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}();if(e&&v.onlyVars){var a=!1;return a=e.declarations?e.declarations.some(function(e){return/var\(/.test(e.value)}):(e.keyframes||e.rules||[]).some(function(e){return(e.declarations||[]).some(function(e){return/var\(/.test(e.value)})}),a?e:{}}return e}}function m(){if(v.onlyVars){var e=d("{","}",t);if(e){var o=-1!==e.pre.indexOf(":root")&&/--\S*\s*:/.test(e.body),i=/var\(/.test(e.body);if(!o&&!i)return t=t.slice(e.end+1),{}}}var r=u()||[],s=v.onlyVars?p().filter(function(e){var t=r.some(function(e){return-1!==e.indexOf(":root")})&&/^--\S/.test(e.property),n=/var\(/.test(e.value);return t||n}):p();return r.length||n("selector missing"),{type:"rule",selectors:r,declarations:s}}function g(e){if(!e&&!i())return n("missing '{'");for(var o,s=l();t.length&&(e||"}"!==t[0])&&(o=h()||m());)o.type&&s.push(o),s=s.concat(l());return e||r()?s:n("missing '}'")}var v=e({},{onlyVars:!1,removeComments:!1},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});return{type:"stylesheet",stylesheet:{rules:g(!0),errors:[]}}}function u(t){var n,o,i=e({},{fixNestedCalc:!0,onlyVars:!1,persist:!1,preserve:!1,variables:{},onWarning:function(){}},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),r=i.persist?g.dom:g.temp=JSON.parse(JSON.stringify(g.dom)),s=l(t,{onlyVars:i.onlyVars});if(s.stylesheet.rules.forEach(function(e){var t=[];if("rule"===e.type&&1===e.selectors.length&&":root"===e.selectors[0]&&(e.declarations.forEach(function(e,n){var o=e.property,i=e.value;o&&0===o.indexOf(h)&&(r[o]=i,t.push(n))}),!i.preserve))for(var n=t.length-1;n>=0;n--)e.declarations.splice(t[n],1)}),Object.keys(g.user).forEach(function(e){r[e]=g.user[e]}),Object.keys(i.variables).length){var a={declarations:[],selectors:[":root"],type:"rule"};Object.keys(i.variables).forEach(function(e){var t="--".concat(e.replace(/^-+/,"")),n=i.variables[e];i.persist&&(g.user[t]=n),r[t]!==n&&(r[t]=n,a.declarations.push({type:"declaration",property:t,value:n}))}),i.preserve&&a.declarations.length&&s.stylesheet.rules.push(a)}return function e(t,n){t.rules.forEach(function(o){o.rules?e(o,n):o.keyframes?o.keyframes.forEach(function(e){"keyframe"===e.type&&n(e.declarations,o)}):o.declarations&&n(o.declarations,t)})}(s.stylesheet,function(e,t){for(var n,o,s,a=0;a<e.length;a++)s=(n=e[a]).value,"declaration"===n.type&&s&&-1!==s.indexOf(m+"(")&&(o=c(s,r,i))!==n.value&&(i.preserve?(e.splice(a,0,{type:n.type,property:n.property,value:o}),a++):n.value=o)}),i.fixNestedCalc&&(n=s.stylesheet.rules,o=/(-[a-z]+-)?calc\(/,n.forEach(function(e){e.declarations&&e.declarations.forEach(function(e){for(var t=e.value,n="";o.test(t);){var i=d("calc(",")",t||"");for(t=t.slice(i.end);o.test(i.body);){var r=d(o,")",i.body);i.body="".concat(r.pre,"(").concat(r.body,")").concat(r.post)}n+="".concat(i.pre,"calc(").concat(i.body),n+=o.test(t)?"":")".concat(i.post)}e.value=n||e.value})})),function(e){function t(e){for(var t="",r=0;r<e.length;r++){var s=e[r];o&&o(s);var a=i[s.type](s);a&&(t+=a,a.length&&s.selectors&&(t+=n))}return t}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,i={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+t(e.rules)+"}"},"font-face":function(e){return"@font-face{"+t(e.declarations)+"}"},host:function(e){return"@host{"+t(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+t(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+t(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+t(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+t(e.declarations)+"}"},rule:function(e){var n=e.declarations;if(n.length)return e.selectors.join(",")+"{"+t(n)+"}"},supports:function(e){return"@supports "+e.supports+"{"+t(e.rules)+"}"}};return t(e.stylesheet.rules)}(s)}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(-1===e.indexOf("var("))return e;var i=d("(",")",e),r="CSS transform warning:";return i?"var"===i.pre.slice(-3)?0===i.body.trim().length?(n.onWarning("".concat(r," var() must contain a non-whitespace string")),e):i.pre.slice(0,-3)+function(e){var i=e.split(",")[0].replace(/[\s\n\t]/g,""),s=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],a=t.hasOwnProperty(i)?String(t[i]):void 0,l=a||(s?String(s):void 0),u=o||e;return a||n.onWarning("".concat(r,' variable "').concat(i,'" is undefined')),l&&"undefined"!==l&&l.length>0?c(l,t,n,u):"var(".concat(u,")")}(i.body)+c(i.post,t,n):i.pre+"(".concat(c(i.body,t,n),")")+c(i.post,t,n):(-1!==e.indexOf("var(")&&n.onWarning("".concat(r,' missing closing ")" in the value "').concat(e,'"')),e)}function p(){function n(e,t,n,o){s.silent||console.error("".concat(e,"\n"),t),s.onError(e,t,n,o)}function i(e){s.silent||console.warn(e),s.onWarning(e)}var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=e({},w,r),a=v;if(s.exclude="#".concat(a)+(s.exclude?",".concat(s.exclude):""),y)if("loading"!==document.readyState){var l=s.shadowDOM||s.rootElement.shadowRoot||s.rootElement.host;if(b&&s.onlyLegacy){if(s.updateDOM){var c=s.rootElement.host||(s.rootElement===document?document.documentElement:s.rootElement);Object.keys(s.variables).forEach(function(e){var t="--".concat(e.replace(/^-+/,"")),n=s.variables[e];c.style.setProperty(t,n)})}}else l&&!C?o({rootElement:w.rootElement,include:w.include,exclude:s.exclude,onSuccess:function(e,t,n){return(e.match(x.cssRootRules)||[]).join("")||!1},onComplete:function(e,t,n){u(e,{persist:!0}),C=!0,p(s)}}):(s.watch?function(e,t){if(window.MutationObserver){var n=function(e){return"LINK"===e.tagName&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")},o=function(e){return"STYLE"===e.tagName&&(!t||e.id!==t)},i=null;S&&S.disconnect(),e.watch=w.watch,(S=new MutationObserver(function(t){var r=!1;t.forEach(function(t){if("attributes"===t.type)r=n(t.target)||o(t.target);else if("childList"===t.type){var s=Array.apply(null,t.addedNodes),a=Array.apply(null,t.removedNodes);r=[].concat(s,a).some(function(e){var t=n(e)&&!e.disabled,i=o(e)&&!e.disabled&&x.cssVars.test(e.textContent);return t||i})}r&&(clearTimeout(i),i=setTimeout(function(){p(e)},1))})})).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0})}}(s,a):!1===s.watch&&S&&S.disconnect(),o({rootElement:s.rootElement,include:s.include,exclude:s.exclude,filter:s.onlyVars?x.cssVars:null,onBeforeSend:s.onBeforeSend,onSuccess:function(e,t,n){var o=s.onSuccess(e,t,n);return e=void 0!==o&&!1===Boolean(o)?"":o||e,s.updateURLs&&(e.replace(x.cssComments,"").match(x.cssUrls)||[]).forEach(function(t){var o=t.replace(x.cssUrls,"$1"),i=f(o,n);e=e.replace(t,t.replace(o,i))}),e},onError:function(e,t,o){var i=e.responseURL||f(o,location.href),r=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");n("CSS XHR Error: ".concat(i," ").concat(e.status," ").concat(r),t,e,i)},onComplete:function(o,r,l){var c=null;o=r.map(function(e,t){return x.cssVars.test(e)?e:"/*__CSSVARSPONYFILL-".concat(t,"__*/")}).join("");try{o=u(o,{fixNestedCalc:s.fixNestedCalc,onlyVars:s.onlyVars,persist:s.updateDOM,preserve:s.preserve,variables:s.variables,onWarning:i});var f=x.cssKeyframes.test(o);if(o=o.replace(/\/\*__CSSVARSPONYFILL-(\d+)__\*\//g,function(e,t){return r[t]}),s.updateDOM&&l&&l.length){var d=l[l.length-1];(c=s.rootElement.querySelector("#".concat(a))||document.createElement("style")).setAttribute("id",a),c.textContent!==o&&(c.textContent=o),d.nextSibling!==c&&d.parentNode&&d.parentNode.insertBefore(c,d.nextSibling),f&&function(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter(function(e){return getComputedStyle(document.body)[e]})[0];if(t){for(var n=e.getElementsByTagName("*"),o=[],i=0,r=n.length;i<r;i++){var s=n[i];"none"!==getComputedStyle(s)[t]&&(s.style[t]+="__CSSVARSPONYFILL-KEYFRAMES__",o.push(s))}document.body.offsetHeight;for(var a=0,l=o.length;a<l;a++){var u=o[a].style;u[t]=u[t].replace("__CSSVARSPONYFILL-KEYFRAMES__","")}}}(s.rootElement)}}catch(e){var h=!1;r.forEach(function(e,t){try{e=u(e,s)}catch(e){var o=l[t-0];h=!0,n(e.message,o)}}),h||n(e.message||e)}if(s.shadowDOM)for(var m,v=[s.rootElement].concat(t(s.rootElement.querySelectorAll("*"))),y=0;m=v[y];++y)m.shadowRoot&&m.shadowRoot.querySelector("style")&&p(e({},s,{rootElement:m.shadowRoot,variables:g.dom}));s.onComplete(o,c,JSON.parse(JSON.stringify(s.updateDOM?g.dom:g.temp)))}}))}else document.addEventListener("DOMContentLoaded",function e(t){p(r),document.removeEventListener("DOMContentLoaded",e)})}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),o=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(o),n.body.appendChild(i),o.href=t,i.href=e,i.href}var d=r;r.range=a;var h="--",m="var",g={dom:{},temp:{},user:{}},v="css-vars-ponyfill",y="undefined"!=typeof window,b=y&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),w={rootElement:y?document:null,include:"style,link[rel=stylesheet]",exclude:"",fixNestedCalc:!0,onlyLegacy:!0,onlyVars:!1,preserve:!1,shadowDOM:!1,silent:!1,updateDOM:!0,updateURLs:!0,variables:{},watch:null,onBeforeSend:function(){},onSuccess:function(){},onWarning:function(){},onError:function(){},onComplete:function(){}},x={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssRootRules:/(?::root\s*{\s*[^}]*})/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVars:/(?:(?::root\s*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},S=null,C=!1;return p}),/*! jQuery UI - v1.12.1 - 2020-02-11
* http://jqueryui.com
* Includes: focusable.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){for(var t=e.css("visibility");"inherit"===t;)e=e.parent(),t=e.css("visibility");return"hidden"!==t}e.ui=e.ui||{};e.ui.version="1.12.1";/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
e.ui.focusable=function(n,o){var i,r,s,a,l,u=n.nodeName.toLowerCase();return"area"===u?(i=n.parentNode,r=i.name,!(!n.href||!r||"map"!==i.nodeName.toLowerCase())&&(s=e("img[usemap='#"+r+"']"),s.length>0&&s.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(u)?(a=!n.disabled)&&(l=e(n).closest("fieldset")[0])&&(a=!l.disabled):a="a"===u?n.href||o:o,a&&e(n).is(":visible")&&t(e(n)))},e.extend(e.expr[":"],{focusable:function(t){return e.ui.focusable(t,null!=e.attr(t,"tabindex"))}});e.ui.focusable}),/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function t(e){return a.raw?e:encodeURIComponent(e)}function n(e){return a.raw?e:decodeURIComponent(e)}function o(e){return t(a.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(s," ")),a.json?JSON.parse(e):e}catch(e){}}function r(t,n){var o=a.raw?t:i(t);return e.isFunction(n)?n(o):o}var s=/\+/g,a=e.cookie=function(i,s,l){if(arguments.length>1&&!e.isFunction(s)){if(l=e.extend({},a.defaults,l),"number"==typeof l.expires){var u=l.expires,c=l.expires=new Date;c.setMilliseconds(c.getMilliseconds()+864e5*u)}return document.cookie=[t(i),"=",o(s),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var p=i?void 0:{},f=document.cookie?document.cookie.split("; "):[],d=0,h=f.length;d<h;d++){var m=f[d].split("="),g=n(m.shift()),v=m.join("=");if(i===g){p=r(v,s);break}i||void 0===(v=r(v))||(p[g]=v)}return p};a.defaults={},e.removeCookie=function(t,n){return e.cookie(t,"",e.extend({},n,{expires:-1})),!e.cookie(t)}}),/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
function(e,t){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(n){return t(e,n)}):"object"==typeof module&&module.exports?module.exports=t(e,require("jquery")):e.jQueryBridget=t(e,e.jQuery)}(window,function(e,t){"use strict";function n(n,r,a){function l(e,t,o){var i,r="$()."+n+'("'+t+'")';return e.each(function(e,l){var u=a.data(l,n);if(!u)return void s(n+" not initialized. Cannot call methods, i.e. "+r);var c=u[t];if(!c||"_"==t.charAt(0))return void s(r+" is not a valid method");var p=c.apply(u,o);i=void 0===i?p:i}),void 0!==i?i:e}function u(e,t){e.each(function(e,o){var i=a.data(o,n);i?(i.option(t),i._init()):(i=new r(o,t),a.data(o,n,i))})}(a=a||t||e.jQuery)&&(r.prototype.option||(r.prototype.option=function(e){a.isPlainObject(e)&&(this.options=a.extend(!0,this.options,e))}),a.fn[n]=function(e){if("string"==typeof e){return l(this,e,i.call(arguments,1))}return u(this,e),this},o(a))}function o(e){!e||e&&e.bridget||(e.bridget=n)}var i=Array.prototype.slice,r=e.console,s=void 0===r?function(){}:function(e){r.error(e)};return o(t||e.jQuery),n}),function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},o=n[e]=n[e]||[];return-1==o.indexOf(t)&&o.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{};return(n[e]=n[e]||{})[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var o=n.indexOf(t);return-1!=o&&n.splice(o,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){n=n.slice(0),t=t||[];for(var o=this._onceEvents&&this._onceEvents[e],i=0;i<n.length;i++){var r=n[i];o&&o[r]&&(this.off(e,r),delete o[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"function"==typeof define&&define.amd?define("get-size/get-size",t):"object"==typeof module&&module.exports?module.exports=t():e.getSize=t()}(window,function(){"use strict";function e(e){var t=parseFloat(e);return-1==e.indexOf("%")&&!isNaN(t)&&t}function t(){}function n(){for(var e={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},t=0;u>t;t++){e[l[t]]=0}return e}function o(e){var t=getComputedStyle(e);return t||a("Style returned "+t+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),t}function i(){if(!c){c=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var n=document.body||document.documentElement;n.appendChild(t);var i=o(t);s=200==Math.round(e(i.width)),r.isBoxSizeOuter=s,n.removeChild(t)}}function r(t){if(i(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var r=o(t);if("none"==r.display)return n();var a={};a.width=t.offsetWidth,a.height=t.offsetHeight;for(var c=a.isBorderBox="border-box"==r.boxSizing,p=0;u>p;p++){var f=l[p],d=r[f],h=parseFloat(d);a[f]=isNaN(h)?0:h}var m=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,v=a.marginLeft+a.marginRight,y=a.marginTop+a.marginBottom,b=a.borderLeftWidth+a.borderRightWidth,w=a.borderTopWidth+a.borderBottomWidth,x=c&&s,S=e(r.width);!1!==S&&(a.width=S+(x?0:m+b));var C=e(r.height);return!1!==C&&(a.height=C+(x?0:g+w)),a.innerWidth=a.width-(m+b),a.innerHeight=a.height-(g+w),a.outerWidth=a.width+v,a.outerHeight=a.height+y,a}}var s,a="undefined"==typeof console?t:function(e){console.error(e)},l=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=l.length,c=!1;return r}),function(e,t){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",t):"object"==typeof module&&module.exports?module.exports=t():e.matchesSelector=t()}(window,function(){"use strict";var e=function(){var e=window.Element.prototype;if(e.matches)return"matches";if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],n=0;n<t.length;n++){var o=t[n],i=o+"MatchesSelector";if(e[i])return i}}();return function(t,n){return t[e](n)}}),function(e,t){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(n){return t(e,n)}):"object"==typeof module&&module.exports?module.exports=t(e,require("desandro-matches-selector")):e.fizzyUIUtils=t(e,e.matchesSelector)}(window,function(e,t){var n={};n.extend=function(e,t){for(var n in t)e[n]=t[n];return e},n.modulo=function(e,t){return(e%t+t)%t};var o=Array.prototype.slice;n.makeArray=function(e){return Array.isArray(e)?e:null===e||void 0===e?[]:"object"==typeof e&&"number"==typeof e.length?o.call(e):[e]},n.removeFrom=function(e,t){var n=e.indexOf(t);-1!=n&&e.splice(n,1)},n.getParent=function(e,n){for(;e.parentNode&&e!=document.body;)if(e=e.parentNode,t(e,n))return e},n.getQueryElement=function(e){return"string"==typeof e?document.querySelector(e):e},n.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},n.filterFindElements=function(e,o){e=n.makeArray(e);var i=[];return e.forEach(function(e){if(e instanceof HTMLElement){if(!o)return void i.push(e);t(e,o)&&i.push(e);for(var n=e.querySelectorAll(o),r=0;r<n.length;r++)i.push(n[r])}}),i},n.debounceMethod=function(e,t,n){n=n||100;var o=e.prototype[t],i=t+"Timeout";e.prototype[t]=function(){var e=this[i];clearTimeout(e);var t=arguments,r=this;this[i]=setTimeout(function(){o.apply(r,t),delete r[i]},n)}},n.docReady=function(e){var t=document.readyState;"complete"==t||"interactive"==t?setTimeout(e):document.addEventListener("DOMContentLoaded",e)},n.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(e,t,n){return t+"-"+n}).toLowerCase()};var i=e.console;return n.htmlInit=function(t,o){n.docReady(function(){var r=n.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),l=document.querySelectorAll(".js-"+r),u=n.makeArray(a).concat(n.makeArray(l)),c=s+"-options",p=e.jQuery;u.forEach(function(e){var n,r=e.getAttribute(s)||e.getAttribute(c);try{n=r&&JSON.parse(r)}catch(t){return void(i&&i.error("Error parsing "+s+" on "+e.className+": "+t))}var a=new t(e,n);p&&p.data(e,o,a)})})},n}),function(e,t){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],t):"object"==typeof module&&module.exports?module.exports=t(require("ev-emitter"),require("get-size")):(e.Outlayer={},e.Outlayer.Item=t(e.EvEmitter,e.getSize))}(window,function(e,t){"use strict";function n(e){for(var t in e)return!1;return null,!0}function o(e,t){e&&(this.element=e,this.layout=t,this.position={x:0,y:0},this._create())}var i=document.documentElement.style,r="string"==typeof i.transition?"transition":"WebkitTransition",s="string"==typeof i.transform?"transform":"WebkitTransform",a={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],l={transform:s,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},u=o.prototype=Object.create(e.prototype);u.constructor=o,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},u.getSize=function(){this.size=t(this.element)},u.css=function(e){var t=this.element.style;for(var n in e){t[l[n]||n]=e[n]}},u.getPosition=function(){var e=getComputedStyle(this.element),t=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=e[t?"left":"right"],i=e[n?"top":"bottom"],r=parseFloat(o),s=parseFloat(i),a=this.layout.size;-1!=o.indexOf("%")&&(r=r/100*a.width),-1!=i.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=t?a.paddingLeft:a.paddingRight,s-=n?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},u.layoutPosition=function(){var e=this.layout.size,t={},n=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),i=n?"paddingLeft":"paddingRight",r=n?"left":"right",s=n?"right":"left",a=this.position.x+e[i];t[r]=this.getXValue(a),t[s]="";var l=o?"paddingTop":"paddingBottom",u=o?"top":"bottom",c=o?"bottom":"top",p=this.position.y+e[l];t[u]=this.getYValue(p),t[c]="",this.css(t),this.emitEvent("layout",[this])},u.getXValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?e/this.layout.size.width*100+"%":e+"px"},u.getYValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?e/this.layout.size.height*100+"%":e+"px"},u._transitionTo=function(e,t){this.getPosition();var n=this.position.x,o=this.position.y,i=e==this.position.x&&t==this.position.y;if(this.setPosition(e,t),i&&!this.isTransitioning)return void this.layoutPosition();var r=e-n,s=t-o,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},u.getTranslate=function(e,t){var n=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return e=n?e:-e,t=o?t:-t,"translate3d("+e+"px, "+t+"px, 0)"},u.goTo=function(e,t){this.setPosition(e,t),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(e,t){this.position.x=parseFloat(e),this.position.y=parseFloat(t)},u._nonTransition=function(e){this.css(e.to),e.isCleaning&&this._removeStyles(e.to);for(var t in e.onTransitionEnd)e.onTransitionEnd[t].call(this)},u.transition=function(e){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(e);var t=this._transn;for(var n in e.onTransitionEnd)t.onEnd[n]=e.onTransitionEnd[n];for(n in e.to)t.ingProperties[n]=!0,e.isCleaning&&(t.clean[n]=!0);if(e.from){this.css(e.from);this.element.offsetHeight;null}this.enableTransition(e.to),this.css(e.to),this.isTransitioning=!0};var c="opacity,"+function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}(s);u.enableTransition=function(){if(!this.isTransitioning){var e=this.layout.options.transitionDuration;e="number"==typeof e?e+"ms":e,this.css({transitionProperty:c,transitionDuration:e,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(a,this,!1)}},u.onwebkitTransitionEnd=function(e){this.ontransitionend(e)},u.onotransitionend=function(e){this.ontransitionend(e)};var p={"-webkit-transform":"transform"};u.ontransitionend=function(e){if(e.target===this.element){var t=this._transn,o=p[e.propertyName]||e.propertyName;if(delete t.ingProperties[o],n(t.ingProperties)&&this.disableTransition(),o in t.clean&&(this.element.style[e.propertyName]="",delete t.clean[o]),o in t.onEnd){t.onEnd[o].call(this),delete t.onEnd[o]}this.emitEvent("transitionEnd",[this])}},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(a,this,!1),this.isTransitioning=!1},u._removeStyles=function(e){var t={};for(var n in e)t[n]="";this.css(t)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(f)},u.stagger=function(e){e=isNaN(e)?0:e,this.staggerDelay=e+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},u.reveal=function(){delete this.isHidden,this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:e.hiddenStyle,to:e.visibleStyle,isCleaning:!0,onTransitionEnd:t})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(e){var t=this.layout.options[e];if(t.opacity)return"opacity";for(var n in t)return n},u.hide=function(){this.isHidden=!0,this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:e.visibleStyle,to:e.hiddenStyle,isCleaning:!0,onTransitionEnd:t})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(e,t){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(n,o,i,r){return t(e,n,o,i,r)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):e.Outlayer=t(e,e.EvEmitter,e.getSize,e.fizzyUIUtils,e.Outlayer.Item)}(window,function(e,t,n,o,i){"use strict";function r(e,t){var n=o.getQueryElement(e);if(!n)return void(l&&l.error("Bad element for "+this.constructor.namespace+": "+(n||e)));this.element=n,u&&(this.$element=u(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(t);var i=++p;this.element.outlayerGUID=i,f[i]=this,this._create(),this._getOption("initLayout")&&this.layout()}function s(e){function t(){e.apply(this,arguments)}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t}function a(e){if("number"==typeof e)return e;var t=e.match(/(^\d*\.?\d*)(\w*)/),n=t&&t[1],o=t&&t[2];return n.length?(n=parseFloat(n))*(h[o]||1):0}var l=e.console,u=e.jQuery,c=function(){},p=0,f={};r.namespace="outlayer",r.Item=i,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var d=r.prototype;o.extend(d,t.prototype),d.option=function(e){o.extend(this.options,e)},d._getOption=function(e){var t=this.constructor.compatOptions[e];return t&&void 0!==this.options[t]?this.options[t]:this.options[e]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},d._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},d.reloadItems=function(){this.items=this._itemize(this.element.children)},d._itemize=function(e){for(var t=this._filterFindItemElements(e),n=this.constructor.Item,o=[],i=0;i<t.length;i++){var r=t[i],s=new n(r,this);o.push(s)}return o},d._filterFindItemElements=function(e){return o.filterFindElements(e,this.options.itemSelector)},d.getItemElements=function(){return this.items.map(function(e){return e.element})},d.layout=function(){this._resetLayout(),this._manageStamps();var e=this._getOption("layoutInstant"),t=void 0!==e?e:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},d._init=d.layout,d._resetLayout=function(){this.getSize()},d.getSize=function(){this.size=n(this.element)},d._getMeasurement=function(e,t){var o,i=this.options[e];i?("string"==typeof i?o=this.element.querySelector(i):i instanceof HTMLElement&&(o=i),this[e]=o?n(o)[t]:i):this[e]=0},d.layoutItems=function(e,t){e=this._getItemsForLayout(e),this._layoutItems(e,t),this._postLayout()},d._getItemsForLayout=function(e){return e.filter(function(e){return!e.isIgnored})},d._layoutItems=function(e,t){if(this._emitCompleteOnItems("layout",e),e&&e.length){var n=[];e.forEach(function(e){var o=this._getItemLayoutPosition(e);o.item=e,o.isInstant=t||e.isLayoutInstant,n.push(o)},this),this._processLayoutQueue(n)}},d._getItemLayoutPosition=function(){return{x:0,y:0}},d._processLayoutQueue=function(e){this.updateStagger(),e.forEach(function(e,t){this._positionItem(e.item,e.x,e.y,e.isInstant,t)},this)},d.updateStagger=function(){var e=this.options.stagger;return null===e||void 0===e?void(this.stagger=0):(this.stagger=a(e),this.stagger)},d._positionItem=function(e,t,n,o,i){o?e.goTo(t,n):(e.stagger(i*this.stagger),e.moveTo(t,n))},d._postLayout=function(){this.resizeContainer()},d.resizeContainer=function(){if(this._getOption("resizeContainer")){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},d._getContainerSize=c,d._setContainerMeasure=function(e,t){if(void 0!==e){var n=this.size;n.isBorderBox&&(e+=t?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth),e=Math.max(e,0),this.element.style[t?"width":"height"]=e+"px"}},d._emitCompleteOnItems=function(e,t){function n(){i.dispatchEvent(e+"Complete",null,[t])}function o(){++s==r&&n()}var i=this,r=t.length;if(!t||!r)return void n();var s=0;t.forEach(function(t){t.once(e,o)})},d.dispatchEvent=function(e,t,n){var o=t?[t].concat(n):n;if(this.emitEvent(e,o),u)if(this.$element=this.$element||u(this.element),t){var i=u.Event(t);i.type=e,this.$element.trigger(i,n)}else this.$element.trigger(e,n)},d.ignore=function(e){var t=this.getItem(e);t&&(t.isIgnored=!0)},d.unignore=function(e){var t=this.getItem(e);t&&delete t.isIgnored},d.stamp=function(e){(e=this._find(e))&&(this.stamps=this.stamps.concat(e),e.forEach(this.ignore,this))},d.unstamp=function(e){(e=this._find(e))&&e.forEach(function(e){o.removeFrom(this.stamps,e),this.unignore(e)},this)},d._find=function(e){return e?("string"==typeof e&&(e=this.element.querySelectorAll(e)),e=o.makeArray(e)):void 0},d._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},d._getBoundingRect=function(){var e=this.element.getBoundingClientRect(),t=this.size;this._boundingRect={left:e.left+t.paddingLeft+t.borderLeftWidth,top:e.top+t.paddingTop+t.borderTopWidth,right:e.right-(t.paddingRight+t.borderRightWidth),bottom:e.bottom-(t.paddingBottom+t.borderBottomWidth)}},d._manageStamp=c,d._getElementOffset=function(e){var t=e.getBoundingClientRect(),o=this._boundingRect,i=n(e);return{left:t.left-o.left-i.marginLeft,top:t.top-o.top-i.marginTop,right:o.right-t.right-i.marginRight,bottom:o.bottom-t.bottom-i.marginBottom}},d.handleEvent=o.handleEvent,d.bindResize=function(){e.addEventListener("resize",this),this.isResizeBound=!0},d.unbindResize=function(){e.removeEventListener("resize",this),this.isResizeBound=!1},d.onresize=function(){this.resize()},o.debounceMethod(r,"onresize",100),d.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},d.needsResizeLayout=function(){var e=n(this.element);return this.size&&e&&e.innerWidth!==this.size.innerWidth},d.addItems=function(e){var t=this._itemize(e);return t.length&&(this.items=this.items.concat(t)),t},d.appended=function(e){var t=this.addItems(e);t.length&&(this.layoutItems(t,!0),this.reveal(t))},d.prepended=function(e){var t=this._itemize(e);if(t.length){var n=this.items.slice(0);this.items=t.concat(n),this._resetLayout(),this._manageStamps(),this.layoutItems(t,!0),this.reveal(t),this.layoutItems(n)}},d.reveal=function(e){if(this._emitCompleteOnItems("reveal",e),e&&e.length){var t=this.updateStagger();e.forEach(function(e,n){e.stagger(n*t),e.reveal()})}},d.hide=function(e){if(this._emitCompleteOnItems("hide",e),e&&e.length){var t=this.updateStagger();e.forEach(function(e,n){e.stagger(n*t),e.hide()})}},d.revealItemElements=function(e){var t=this.getItems(e);this.reveal(t)},d.hideItemElements=function(e){var t=this.getItems(e);this.hide(t)},d.getItem=function(e){for(var t=0;t<this.items.length;t++){var n=this.items[t];if(n.element==e)return n}},d.getItems=function(e){e=o.makeArray(e);var t=[];return e.forEach(function(e){var n=this.getItem(e);n&&t.push(n)},this),t},d.remove=function(e){var t=this.getItems(e);this._emitCompleteOnItems("remove",t),t&&t.length&&t.forEach(function(e){e.remove(),o.removeFrom(this.items,e)},this)},d.destroy=function(){var e=this.element.style;e.height="",e.position="",e.width="",this.items.forEach(function(e){e.destroy()}),this.unbindResize();var t=this.element.outlayerGUID;delete f[t],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(e){e=o.getQueryElement(e);var t=e&&e.outlayerGUID;return t&&f[t]},r.create=function(e,t){var n=s(r);return n.defaults=o.extend({},r.defaults),o.extend(n.defaults,t),n.compatOptions=o.extend({},r.compatOptions),n.namespace=e,n.data=r.data,n.Item=s(i),o.htmlInit(n,e),u&&u.bridget&&u.bridget(e,n),n};var h={ms:1,s:1e3};return r.Item=i,r}),function(e,t){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],t):"object"==typeof module&&module.exports?module.exports=t(require("outlayer"),require("get-size")):e.Masonry=t(e.Outlayer,e.getSize)}(window,function(e,t){var n=e.create("masonry");n.compatOptions.fitWidth="isFitWidth";var o=n.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var e=0;e<this.cols;e++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var e=this.items[0],n=e&&e.element;this.columnWidth=n&&t(n).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,i=this.containerWidth+this.gutter,r=i/o,s=o-i%o,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},o.getContainerWidth=function(){var e=this._getOption("fitWidth"),n=e?this.element.parentNode:this.element,o=t(n);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(e){e.getSize();var t=e.size.outerWidth%this.columnWidth,n=t&&1>t?"round":"ceil",o=Math[n](e.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var i=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[i](o,e),s={x:this.columnWidth*r.col,y:r.y},a=r.y+e.size.outerHeight,l=o+r.col,u=r.col;l>u;u++)this.colYs[u]=a;return s},o._getTopColPosition=function(e){var t=this._getTopColGroup(e),n=Math.min.apply(Math,t);return{col:t.indexOf(n),y:n}},o._getTopColGroup=function(e){if(2>e)return this.colYs;for(var t=[],n=this.cols+1-e,o=0;n>o;o++)t[o]=this._getColGroupY(o,e);return t},o._getColGroupY=function(e,t){if(2>t)return this.colYs[e];var n=this.colYs.slice(e,e+t);return Math.max.apply(Math,n)},o._getHorizontalColPosition=function(e,t){var n=this.horizontalColIndex%this.cols;n=e>1&&n+e>this.cols?0:n;var o=t.size.outerWidth&&t.size.outerHeight;return this.horizontalColIndex=o?n+e:this.horizontalColIndex,{col:n,y:this._getColGroupY(n,e)}},o._manageStamp=function(e){var n=t(e),o=this._getElementOffset(e),i=this._getOption("originLeft"),r=i?o.left:o.right,s=r+n.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var l=Math.floor(s/this.columnWidth);l-=s%this.columnWidth?0:1,l=Math.min(this.cols-1,l);for(var u=this._getOption("originTop"),c=(u?o.top:o.bottom)+n.outerHeight,p=a;l>=p;p++)this.colYs[p]=Math.max(c,this.colYs[p])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var e={height:this.maxY};return this._getOption("fitWidth")&&(e.width=this._getContainerFitWidth()),e},o._getContainerFitWidth=function(){for(var e=0,t=this.cols;--t&&0===this.colYs[t];)e++;return(this.cols-e)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var e=this.containerWidth;return this.getContainerWidth(),e!=this.containerWidth},n}),function(e,t,n){function o(e,t){return typeof e===t}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function r(){var e=t.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function s(e,n,o,s){var a,l,u,c,p="modernizr",f=i("div"),d=r();if(parseInt(o,10))for(;o--;)u=i("div"),u.id=s?s[o]:p+(o+1),f.appendChild(u);return a=i("style"),a.type="text/css",a.id="s"+p,(d.fake?d:f).appendChild(a),d.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=p,d.fake&&(d.style.background="",d.style.overflow="hidden",c=x.style.overflow,x.style.overflow="hidden",x.appendChild(d)),l=n(f,e),d.fake?(d.parentNode.removeChild(d),x.style.overflow=c,x.offsetHeight):f.parentNode.removeChild(f),!!l}function a(e,t){return!!~(""+e).indexOf(t)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var i;for(var r in e)if(e[r]in t)return!1===n?e[r]:(i=t[e[r]],o(i,"function")?u(i,n||t):i);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(t,n,o){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var r=e.console;if(null!==i)o&&(i=i.getPropertyValue(o));else if(r){var s=r.error?"error":"log";r[s].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[o];return i}function d(t,o){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(p(t[i]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];i--;)r.push("("+p(t[i])+":"+o+")");return r=r.join(" or "),s("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return n}function h(e,t,r,s){function u(){p&&(delete A.style,delete A.modElem)}if(s=!o(s,"undefined")&&s,!o(r,"undefined")){var c=d(e,r);if(!o(c,"undefined"))return c}for(var p,f,h,m,g,v=["modernizr","tspan","samp"];!A.style&&v.length;)p=!0,A.modElem=i(v.shift()),A.style=A.modElem.style;for(h=e.length,f=0;h>f;f++)if(m=e[f],g=A.style[m],a(m,"-")&&(m=l(m)),A.style[m]!==n){if(s||o(r,"undefined"))return u(),"pfx"!=t||m;try{A.style[m]=r}catch(e){}if(A.style[m]!=g)return u(),"pfx"!=t||m}return u(),!1}function m(e,t,n,i,r){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+k.join(s+" ")+s).split(" ");return o(t,"string")||o(t,"undefined")?h(a,t,i,r):(a=(e+" "+I.join(s+" ")+s).split(" "),c(a,t,n))}function g(e,t,o){return m(e,n,n,t,o)}var v=[],y=[],b={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},w=function(){};w.prototype=b,w=new w,w.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}});var x=t.documentElement,S="svg"===x.nodeName.toLowerCase(),C=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=C;var T=b.testStyles=s;w.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var o=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(o,function(e){n=9===e.offsetTop})}return n});var E="Moz O ms Webkit",k=b._config.usePrefixes?E.split(" "):[];b._cssomPrefixes=k;var I=b._config.usePrefixes?E.toLowerCase().split(" "):[];b._domPrefixes=I;var P={elem:i("modernizr")};w._q.push(function(){delete P.elem});var A={style:P.elem.style};w._q.unshift(function(){delete A.style}),b.testAllProps=m,b.testAllProps=g,w.addTest("cssgridlegacy",g("grid-columns","10px",!0)),w.addTest("cssgrid",g("grid-template-rows","none",!0)),function(){var e,t,n,i,r,s,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=o(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)s=e[r],a=s.split("."),1===a.length?w[a[0]]=i:(!w[a[0]]||w[a[0]]instanceof Boolean||(w[a[0]]=new Boolean(w[a[0]])),w[a[0]][a[1]]=i),v.push((i?"":"no-")+a.join("-"))}}(),function(e){var t=x.className,n=w._config.classPrefix||"";if(S&&(t=t.baseVal),w._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}w._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?x.className.baseVal=t:x.className=t)}(v),delete b.addTest,delete b.addAsyncTest;for(var N=0;N<w._q.length;N++)w._q[N]();e.Modernizr=w}(window,document),void 0===Shopify)var Shopify={};Shopify.each=function(e,t){for(var n=0;n<e.length;n++)t(e[n],n)},Shopify.map=function(e,t){for(var n=[],o=0;o<e.length;o++)n.push(t(e[o],o));return n},Shopify.arrayIncludes=function(e,t){for(var n=0;n<e.length;n++)if(e[n]==t)return!0;return!1},Shopify.uniq=function(e){for(var t=[],n=0;n<e.length;n++)Shopify.arrayIncludes(t,e[n])||t.push(e[n]);return t},Shopify.isDefined=function(e){return void 0!==e},Shopify.getClass=function(e){return Object.prototype.toString.call(e).slice(8,-1)},Shopify.extend=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.baseConstructor=t,e.superClass=t.prototype},Shopify.urlParam=function(e){var t=RegExp("[?&]"+e+"=([^&]*)").exec(window.location.search);return t&&decodeURIComponent(t[1].replace(/\+/g," "))},Shopify.Product=function(e){Shopify.isDefined(e)&&this.update(e)},Shopify.Product.prototype.update=function(e){for(property in e)this[property]=e[property]},Shopify.Product.prototype.optionNames=function(){return"Array"==Shopify.getClass(this.options)?this.options:[]},Shopify.Product.prototype.optionValues=function(e){if(!Shopify.isDefined(this.variants))return null;var t=Shopify.map(this.variants,function(t){var n="option"+(e+1);return null==t[n]?null:t[n]});return null==t[0]?null:Shopify.uniq(t)},Shopify.Product.prototype.getVariant=function(e){var t=null;return e.length!=this.options.length?t:(Shopify.each(this.variants,function(n){for(var o=!0,i=0;i<e.length;i++)n["option"+(i+1)]!=e[i]&&(o=!1);1!=o||(t=n)}),t)},Shopify.Product.prototype.getVariantById=function(e){for(var t=0;t<this.variants.length;t++){var n=this.variants[t];if(e==n.id)return n}return null},Shopify.money_format="${{amount}}",Shopify.formatMoney=function(e,t){function n(e,t){return void 0===e?t:e}function o(e,t,o,i){if(t=n(t,2),o=n(o,","),i=n(i,"."),isNaN(e)||null==e)return 0;var r=(e=(e/100).toFixed(t)).split(".");return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+o)+(r[1]?i+r[1]:"")}"string"==typeof e&&(e=e.replace(".",""));var i="",r=/\{\{\s*(\w+)\s*\}\}/,s=t||this.money_format;switch(s.match(r)[1]){case"amount":i=o(e,2);break;case"amount_no_decimals":i=o(e,0);break;case"amount_with_comma_separator":i=o(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":i=o(e,0,".",",")}return s.replace(r,i)},Shopify.OptionSelectors=function(e,t){return this.selectorDivClass="selector-wrapper",this.selectorClass="single-option-selector",this.variantIdFieldIdSuffix="-variant-id",this.variantIdField=null,this.historyState=null,this.selectors=[],this.domIdPrefix=e,this.product=new Shopify.Product(t.product),this.onVariantSelected=Shopify.isDefined(t.onVariantSelected)?t.onVariantSelected:function(){},this.replaceSelector(e),this.initDropdown(),t.enableHistoryState&&(this.historyState=new Shopify.OptionSelectors.HistoryState(this)),!0},Shopify.OptionSelectors.prototype.initDropdown=function(){var e={initialLoad:!0};if(!this.selectVariantFromDropdown(e)){var t=this;setTimeout(function(){t.selectVariantFromParams(e)||t.fireOnChangeForFirstDropdown.call(t,e)})}},Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown=function(e){this.selectors[0].element.onchange(e)},Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown=function(e){
this.selectVariantFromParams(e)||this.selectVariantFromDropdown(e)},Shopify.OptionSelectors.prototype.replaceSelector=function(e){var t=document.getElementById(e),n=t.parentNode;Shopify.each(this.buildSelectors(),function(e){n.insertBefore(e,t)}),t.style.display="none",this.variantIdField=t},Shopify.OptionSelectors.prototype.selectVariantFromDropdown=function(e){var t=document.getElementById(this.domIdPrefix).querySelector("[selected]");if(!t)return!1;var n=t.value;return this.selectVariant(n,e)},Shopify.OptionSelectors.prototype.selectVariantFromParams=function(e){var t=Shopify.urlParam("variant");return this.selectVariant(t,e)},Shopify.OptionSelectors.prototype.selectVariant=function(e,t){var n=this.product.getVariantById(e);if(null==n)return!1;for(var o=0;o<this.selectors.length;o++){var i=this.selectors[o].element,r=n[i.getAttribute("data-option")];null!=r&&this.optionExistInSelect(i,r)&&(i.value=r)}return"undefined"!=typeof jQuery?jQuery(this.selectors[0].element).trigger("change",t):this.selectors[0].element.onchange(t),!0},Shopify.OptionSelectors.prototype.optionExistInSelect=function(e,t){for(var n=0;n<e.options.length;n++)if(e.options[n].value==t)return!0},Shopify.OptionSelectors.prototype.insertSelectors=function(e,t){Shopify.isDefined(t)&&this.setMessageElement(t),this.domIdPrefix="product-"+this.product.id+"-variant-selector";var n=document.getElementById(e);Shopify.each(this.buildSelectors(),function(e){n.appendChild(e)})},Shopify.OptionSelectors.prototype.buildSelectors=function(){for(var e=0;e<this.product.optionNames().length;e++){var t=new Shopify.SingleOptionSelector(this,e,this.product.optionNames()[e],this.product.optionValues(e));t.element.disabled=!1,this.selectors.push(t)}var n=this.selectorDivClass,o=this.product.optionNames();return Shopify.map(this.selectors,function(e){var t=document.createElement("div");if(t.setAttribute("class",n),o.length>1){var i=document.createElement("label");i.htmlFor=e.element.id,i.innerHTML=e.name,t.appendChild(i)}return t.appendChild(e.element),t})},Shopify.OptionSelectors.prototype.selectedValues=function(){for(var e=[],t=0;t<this.selectors.length;t++){var n=this.selectors[t].element.value;e.push(n)}return e},Shopify.OptionSelectors.prototype.updateSelectors=function(e,t){var n=this.selectedValues(),o=this.product.getVariant(n);o?(this.variantIdField.disabled=!1,this.variantIdField.value=o.id):this.variantIdField.disabled=!0,this.onVariantSelected(o,this,t),null!=this.historyState&&this.historyState.onVariantChange(o,this,t)},Shopify.OptionSelectorsFromDOM=function(e,t){var n=t.optionNames||[],o=t.priceFieldExists||!0,i=t.delimiter||"/",r=this.createProductFromSelector(e,n,o,i);t.product=r,Shopify.OptionSelectorsFromDOM.baseConstructor.call(this,e,t)},Shopify.extend(Shopify.OptionSelectorsFromDOM,Shopify.OptionSelectors),Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector=function(e,t,n,o){Shopify.isDefined(n)||(n=!0),Shopify.isDefined(o)||(o="/");var i=document.getElementById(e),r=i.childNodes,s=(i.parentNode,t.length),a=[];Shopify.each(r,function(e,i){if(1==e.nodeType&&"option"==e.tagName.toLowerCase()){var r=e.innerHTML.split(new RegExp("\\s*\\"+o+"\\s*"));0==t.length&&(s=r.length-(n?1:0));var l=r.slice(0,s),u=n?r[s]:"",c=(e.getAttribute("value"),{available:!e.disabled,id:parseFloat(e.value),price:u,option1:l[0],option2:l[1],option3:l[2]});a.push(c)}});var l={variants:a};if(0==t.length){l.options=[];for(var u=0;u<s;u++)l.options[u]="option "+(u+1)}else l.options=t;return l},Shopify.SingleOptionSelector=function(e,t,n,o){this.multiSelector=e,this.values=o,this.index=t,this.name=n,this.element=document.createElement("select");for(var i=0;i<o.length;i++){var r=document.createElement("option");r.value=o[i],r.innerHTML=o[i],this.element.appendChild(r)}return this.element.setAttribute("class",this.multiSelector.selectorClass),this.element.setAttribute("data-option","option"+(t+1)),this.element.id=e.domIdPrefix+"-option-"+t,this.element.onchange=function(n,o){o=o||{},e.updateSelectors(t,o)},!0},Shopify.Image={preload:function(e,t){for(var n=0;n<e.length;n++){var o=e[n];this.loadImage(this.getSizedImageUrl(o,t))}},loadImage:function(e){(new Image).src=e},switchImage:function(e,t,n){if(e&&t){var o=this.imageSize(t.src),i=this.getSizedImageUrl(e.src,o);n?n(i,e,t):t.src=i}},imageSize:function(e){var t=e.match(/_(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./);return null!=t?t[1]:null},getSizedImageUrl:function(e,t){if(null==t)return e;if("master"==t)return this.removeProtocol(e);var n=e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null!=n){var o=e.split(n[0]),i=n[0];return this.removeProtocol(o[0]+"_"+t+i)}return null},removeProtocol:function(e){return e.replace(/http(s)?:/,"")}},Shopify.OptionSelectors.HistoryState=function(e){this.browserSupports()&&this.register(e)},Shopify.OptionSelectors.HistoryState.prototype.register=function(e){window.addEventListener("popstate",function(t){e.selectVariantFromParamsOrDropdown({popStateCall:!0})})},Shopify.OptionSelectors.HistoryState.prototype.onVariantChange=function(e,t,n){this.browserSupports()&&(!e||n.initialLoad||n.popStateCall||window.history.replaceState({},document.title,"?variant="+e.id))},Shopify.OptionSelectors.HistoryState.prototype.browserSupports=function(){return window.history&&window.history.replaceState};
(function() {
  var FrameworkAlign,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  theme.classes.FrameworkA11y = (function() {
    function FrameworkA11y() {
      var _this;
      _this = this;
      _this.tab_forwards = null;
      _this.focusable_items = null;
      _this.customFocusOrder();
    }

    FrameworkA11y.prototype.customFocusOrder = function() {
      var _this, focus_triggers;
      _this = this;
      focus_triggers = $(".a11y--focus-trigger");
      focus_triggers.attr('tabindex', '0');
      $(document).on("keydown", function(e) {
        _this.tab_forwards = true;
        if (e.which === 9 && e.shiftKey) {
          _this.tab_forwards = false;
        }
        return true;
      });
      return focus_triggers.on("focus", function() {
        var focus_trigger, move_to;
        focus_trigger = $(this);
        _this.getFocusableItems();
        if (_this.tab_forwards) {
          move_to = focus_trigger.attr("data-forward-to");
          if ($(move_to).is('.a11y--focus-trigger')) {
            focus_trigger = $(move_to);
          }
          move_to = focus_trigger.attr("data-forward-to");
        } else if (_this.tab_forwards === false) {
          move_to = focus_trigger.attr("data-back-to");
          if ($(move_to).is('.a11y--focus-trigger')) {
            focus_trigger = $(move_to);
          }
          move_to = focus_trigger.attr("data-back-to");
        }
        _this.focus_index = _this.focusable_items.index(focus_trigger);
        return _this.moveFocus(move_to);
      });
    };

    FrameworkA11y.prototype.getFocusableItems = function() {
      var _this;
      _this = this;
      return _this.focusable_items = $(':focusable');
    };

    FrameworkA11y.prototype.moveFocus = function(move_to) {
      var _this, focus_index_increment, target_defined, target_is_focusable;
      _this = this;
      target_defined = move_to ? true : false;
      target_is_focusable = _this.focusable_items.index($(move_to + ":visible")) > -1 ? true : false;
      focus_index_increment = _this.tab_forwards ? 1 : -1;
      if (target_defined && target_is_focusable) {
        return $(move_to).focus();
      } else if (target_defined && !target_is_focusable) {
        if (_this.tab_forwards) {
          return $(move_to).find(':focusable:not(.a11y--focus-trigger)').first().focus();
        } else {
          return $(move_to).find(':focusable:not(.a11y--focus-trigger)').last().focus();
        }
      } else if (!target_defined) {
        return _this.focusable_items.eq(_this.focus_index + focus_index_increment).focus();
      }
    };

    return FrameworkA11y;

  })();

  FrameworkAlign = (function() {
    function FrameworkAlign(element1, type1) {
      this.element = element1;
      this.type = type1;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.fillYSpace = bind(this.fillYSpace, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.createOverlapDetectors = bind(this.createOverlapDetectors, this);
      this.position = bind(this.position, this);
      this.parent = this.element.parent();
      this.left_side_border;
      this.right_element_width = null;
      this.position();
      this.fillYSpace();
      this.createOverlapDetectors();
      this.resizeListeners();
    }

    FrameworkAlign.prototype.position = function() {
      if (this.type === 'center-x') {
        return this.element.css({
          'margin-left': -(this.element.outerWidth() / 2)
        });
      }
    };

    FrameworkAlign.prototype.createOverlapDetectors = function() {
      var _this;
      _this = this;
      if (_this.type === 'right') {
        return this.right_element_width = _this.element.outerWidth();
      }
    };

    FrameworkAlign.prototype.checkOverlap = function() {
      var _this, left_element, left_side_border, right_side_border;
      _this = this;
      if (_this.type === 'right') {
        _this.parent.removeClass('overlap');
        left_element = _this.parent.children().eq(_this.element.index() - 1);
        left_side_border = left_element.position().left + left_element.outerWidth();
        right_side_border = _this.parent.outerWidth() - _this.right_element_width;
        if (left_side_border >= right_side_border) {
          return _this.parent.addClass('overlap');
        }
      }
    };

    FrameworkAlign.prototype.fillYSpace = function() {
      var _this, container_height, text_panel_height;
      _this = this;
      if (_this.type === 'fill-y--dynamic') {
        container_height = _this.parent.outerHeight();
        text_panel_height = _this.parent.find('.fw--align--fill-y--fixed').outerHeight();
        return _this.element.outerHeight(container_height - text_panel_height);
      }
    };

    FrameworkAlign.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      $(window).on('resize.FrameworkAlign', function() {
        _this.checkOverlap();
        return _this.fillYSpace();
      });
      return setTimeout(function() {
        return _this.checkOverlap();
      }, 1);
    };

    return FrameworkAlign;

  })();

  theme.classes.FrameworkAnimation = (function() {
    function FrameworkAnimation() {}

    return FrameworkAnimation;

  })();

  theme.classes.FrameworkArticle = (function() {
    function FrameworkArticle(root) {
      var _this;
      this.root = root;
      this.startDisqus = bind(this.startDisqus, this);
      this.hideTagInfo = bind(this.hideTagInfo, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    FrameworkArticle.prototype.load = function() {
      var _this, comments_enabled, enable_disqus, no_tags_displayed;
      _this = this;
      no_tags_displayed = $('.article--tag').length === 0 ? true : false;
      enable_disqus = $('.article--root').attr('data-enable-disqus') === 'true' ? true : false;
      comments_enabled = $('.article--root').attr('data-comments-enabled') === 'true' ? true : false;
      if (no_tags_displayed) {
        _this.hideTagInfo();
      }
      if (enable_disqus && comments_enabled) {
        return _this.startDisqus();
      }
    };

    FrameworkArticle.prototype.hideTagInfo = function() {
      var _this;
      _this = this;
      return $('.article--tag-info').hide();
    };

    FrameworkArticle.prototype.startDisqus = function() {
      var _this, disqusConfig, disqus_shortname;
      _this = this;
      disqusConfig = function() {
        _this.page.url = $('.article--root').attr('data-canonical-url');
        return _this.page.identifier = $('.article--root').attr('data-article-id');
      };
      disqus_shortname = $('.article--root').attr('data-disqus-shortname');
      return (function() {
        var s;
        s = document.createElement('script');
        s.src = "https://" + disqus_shortname + ".disqus.com/embed.js";
        s.setAttribute('data-timestamp', +new Date());
        return (document.head || document.body).appendChild(s);
      })();
    };

    return FrameworkArticle;

  })();

  theme.classes.FrameworkBlog = (function() {
    function FrameworkBlog(root) {
      var _this;
      this.root = root;
      this.initMasonry = bind(this.initMasonry, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    FrameworkBlog.prototype.load = function() {
      var _this, is_mobile;
      _this = this;
      _this.eventListeners();
      _this.has_multi_columns = _this.root.attr('data-columns') !== '1';
      is_mobile = theme.utils.mqs.current_window === 'small';
      if (!is_mobile && _this.has_multi_columns) {
        _this.initMasonry();
        return $(window).on('load', function() {
          return _this.initMasonry();
        });
      }
    };

    FrameworkBlog.prototype.eventListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Blog', theme.utils.debounce(100, function() {
        if (_this.has_multi_columns && theme.utils.mqs.current_window !== 'small') {
          return _this.initMasonry();
        } else {
          return $('.blog--list').masonry('destroy');
        }
      }));
    };

    FrameworkBlog.prototype.initMasonry = function() {
      return $('.blog--list').masonry({
        itemSelector: '.blog--list--item',
        percentPosition: true,
        horizontalOrder: true,
        columnWidth: '.blog--list--item'
      });
    };

    return FrameworkBlog;

  })();

  theme.classes.FrameworkCart = (function() {
    function FrameworkCart(root) {
      var _this;
      this.root = root;
      this.renderDynamicCheckoutButtons = bind(this.renderDynamicCheckoutButtons, this);
      this.updateTotals = bind(this.updateTotals, this);
      this.updateAllHasItems = bind(this.updateAllHasItems, this);
      this.swapInImages = bind(this.swapInImages, this);
      this.updateHtml = bind(this.updateHtml, this);
      this.updateAllHtml = bind(this.updateAllHtml, this);
      this.getHtml = bind(this.getHtml, this);
      this.removeItem = bind(this.removeItem, this);
      this.updateQuantity = bind(this.updateQuantity, this);
      this.updateNote = bind(this.updateNote, this);
      this.addItem = bind(this.addItem, this);
      this.clearRequests = bind(this.clearRequests, this);
      this.htmlListener = bind(this.htmlListener, this);
      this.orderNotesListener = bind(this.orderNotesListener, this);
      this.removeButtonListener = bind(this.removeButtonListener, this);
      this.minusButtonListener = bind(this.minusButtonListener, this);
      this.plusButtonListener = bind(this.plusButtonListener, this);
      this.inputBoxListener = bind(this.inputBoxListener, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.getAjaxUrl = bind(this.getAjaxUrl, this);
      this.getOtherCarts = bind(this.getOtherCarts, this);
      _this = this;
      _this.ajaxReq = {};
      _this.other_carts = _this.getOtherCarts();
      _this.total_item_count = $('.cart--external--total-items');
      _this.total_price = $('.cart--external--total-price');
      _this.updateTimer = {};
      _this.view = _this.root.data('view');
      _this.getAjaxUrl();
      _this.updateTotals();
      _this.htmlListener();
      _this.eventListeners();
      _this.renderDynamicCheckoutButtons();
    }

    FrameworkCart.prototype.getOtherCarts = function() {
      var _this, other_carts;
      _this = this;
      return other_carts = $('[data-js-class="Cart"]').not(_this.root);
    };

    FrameworkCart.prototype.getAjaxUrl = function() {
      var _this;
      _this = this;
      _this.ajax_url = window.top.location.href;
      _this.ajax_url = _this.ajax_url.replace(window.location.hostname + window.location.pathname, window.location.hostname + theme.urls.cart);
      _this.ajax_url = _this.ajax_url.replace('#', '');
      if (_this.ajax_url.indexOf("?") >= 0) {
        _this.ajax_url = _this.ajax_url + '&';
      } else {
        _this.ajax_url = _this.ajax_url + '?';
      }
      _this.ajax_desktop_url = _this.ajax_url + 'view=ajax--desktop';
      return _this.ajax_mobile_url = _this.ajax_url + 'view=ajax--mobile';
    };

    FrameworkCart.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.inputBoxListener();
      _this.plusButtonListener();
      _this.minusButtonListener();
      _this.removeButtonListener();
      return _this.orderNotesListener();
    };

    FrameworkCart.prototype.inputBoxListener = function() {
      var _this, input_box;
      _this = this;
      input_box = _this.root.find('.cart--quantity--input');
      input_box.on('keydown', function(event) {
        if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 37 && event.which !== 39 && event.which !== 9) {
          return event.preventDefault();
        }
      });
      return input_box.on('keyup', function(event) {
        var item_key, quantity;
        $(this).attr('data-loading', 'true');
        item_key = $(this).closest('.cart--item').data('item-key');
        _this.clearRequests(item_key);
        if (event.which === 8 && $(this).val().length === 0) {
          return;
        }
        quantity = theme.utils.isNaN(parseInt($(this).val())) ? 1 : parseInt($(this).val());
        if (quantity !== 0) {
          return _this.updateQuantity(item_key, quantity, 700, function(success) {
            if (success) {
              return _this.updateAllHtml(function() {});
            }
          });
        } else {
          return _this.removeItem(item_key);
        }
      });
    };

    FrameworkCart.prototype.plusButtonListener = function() {
      var _this, plus_button;
      _this = this;
      plus_button = _this.root.find('.cart--item--quantity .plus');
      return plus_button.on('click', function() {
        var input, item_key, quantity;
        input = $(this).prev('input');
        quantity = theme.utils.isNaN(parseInt(input.val())) ? 1 : parseInt(input.val()) + 1;
        input.val(quantity);
        input.attr('data-loading', 'true');
        item_key = $(this).closest('.cart--item').data('item-key');
        _this.clearRequests(item_key);
        _this.updateQuantity(item_key, quantity, 700, function(success) {
          if (success) {
            return _this.updateAllHtml(function() {});
          }
        });
        return false;
      });
    };

    FrameworkCart.prototype.minusButtonListener = function() {
      var _this, minus_button;
      _this = this;
      minus_button = _this.root.find('.cart--item--quantity .minus');
      return minus_button.on('click', function() {
        var input, item_key, quantity;
        input = $(this).siblings('input');
        quantity = theme.utils.isNaN(parseInt(input.val())) ? 1 : parseInt(input.val()) - 1;
        if (quantity < 1) {
          quantity = 1;
          return false;
        }
        input.val(quantity);
        input.attr('data-loading', 'true');
        item_key = $(this).closest('.cart--item').data('item-key');
        _this.clearRequests(item_key);
        _this.updateQuantity(item_key, quantity, 700, function(success) {
          if (success) {
            return _this.updateAllHtml(function() {});
          }
        });
        return false;
      });
    };

    FrameworkCart.prototype.removeButtonListener = function() {
      var _this, remove_button;
      _this = this;
      remove_button = _this.root.find('.cart--item--remove');
      return remove_button.on('click', function() {
        var item, item_key;
        item = $(this).closest('.cart--item');
        item_key = item.data('item-key');
        item.find('input').attr('data-loading', 'true');
        _this.clearRequests(item_key);
        _this.removeItem(item_key);
        return false;
      });
    };

    FrameworkCart.prototype.orderNotesListener = function() {
      var _this, note;
      _this = this;
      note = _this.root.find('.cart--notes--textarea');
      return note.on('keyup paste', function(event) {
        var order_note;
        clearTimeout(_this.typing_timer);
        order_note = $(this).val();
        return _this.typing_timer = setTimeout(function() {
          clearTimeout(_this.typing_timer);
          return _this.updateNote(order_note);
        }, 700);
      });
    };

    FrameworkCart.prototype.htmlListener = function() {
      var _this;
      _this = this;
      return _this.root.on('updateHtml', function() {
        return _this.updateHtml(function() {});
      });
    };

    FrameworkCart.prototype.clearRequests = function(item_key) {
      var _this;
      _this = this;
      if (_this.ajaxReq.item_key) {
        _this.ajaxReq.item_key.abort();
      }
      if (_this.updateTimer.item_key) {
        return clearTimeout(_this.updateTimer.item_key);
      }
    };

    FrameworkCart.prototype.addItem = function(form, callback) {
      var _this;
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: "json",
        data: form.serialize()
      }).done(function(data, textStatus, jqXHR) {
        callback(true);
        _this.updateAllHasItems(1, true);
        return _this.updateTotals();
      }).fail(function(jqXHR, textStatus) {
        console.log('Error - ajax update quantity', JSON.parse(jqXHR.responseText).description);
        return callback(false, JSON.parse(jqXHR.responseText).description);
      });
    };

    FrameworkCart.prototype.updateNote = function(order_note) {
      var _this;
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/cart/update.js",
        dataType: "json",
        data: {
          note: order_note
        }
      }).done(function() {
        return _this.updateAllHtml(function() {});
      }).fail(function(jqXHR, textStatus) {
        return console.log('Error - ajax update note', JSON.parse(jqXHR.responseText).description);
      });
    };

    FrameworkCart.prototype.updateQuantity = function(item_key, quantity, time_out, callback) {
      var _this, ajaxCall;
      _this = this;
      ajaxCall = function() {
        return _this.ajaxReq.item_key = $.ajax({
          type: "POST",
          url: "/cart/change.js",
          dataType: "json",
          data: "quantity=" + quantity + "&id=" + item_key
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          return _this.updateTotals();
        }).fail(function(jqXHR, textStatus) {
          if (jqXHR.responseText) {
            console.log('Error - ajax update quantity', JSON.parse(jqXHR.responseText).description);
          }
          return callback(false);
        });
      };
      return _this.updateTimer.item_key = setTimeout(ajaxCall, time_out);
    };

    FrameworkCart.prototype.removeItem = function(item_key) {
      var _this;
      _this = this;
      return _this.updateQuantity(item_key, 0, 0, function(success) {
        if (success) {
          return _this.updateAllHtml(function() {});
        }
      });
    };

    FrameworkCart.prototype.getHtml = function(view, callback) {
      var _this, url;
      _this = this;
      url = _this.ajax_desktop_url;
      if (view === 'mobile') {
        url = _this.ajax_mobile_url;
      }
      return $.ajax({
        url: url,
        type: "GET",
        dataType: "html",
        success: function(data) {
          var cart_html;
          cart_html = $($.parseHTML(data));
          callback(cart_html);
        },
        error: function(jqxhr, textStatus, error) {
          var err;
          err = textStatus + ', ' + error;
          console.log('search.json Request Failed: ' + err);
          callback(false);
        }
      });
    };

    FrameworkCart.prototype.updateAllHtml = function(update_all_html_done) {
      var _this;
      _this = this;
      _this.updateHtml(update_all_html_done);
      return _this.other_carts.trigger('updateHtml');
    };

    FrameworkCart.prototype.updateHtml = function(update_all_html_done) {
      var _this;
      _this = this;
      return _this.getHtml(_this.view, function(new_html) {
        var new_form, old_form;
        old_form = _this.root.find('.cart--form');
        new_form = new_html.find('.cart--form');
        new_form = _this.swapInImages(old_form, new_form);
        old_form.replaceWith(new_form);
        _this.eventListeners();
        return update_all_html_done();
      });
    };

    FrameworkCart.prototype.swapInImages = function(old_html, new_html) {
      var _this, new_items;
      _this = this;
      new_items = new_html.find('.cart--item');
      new_items.each(function() {
        var new_image, new_instance, old_image, old_item, variant_id;
        variant_id = $(this).data('variant-id');
        new_image = $(this).find('.cart--item--image');
        new_instance = new_html.find("[data-variant-id=\"" + variant_id + "\"] .cart--item--image").index(new_image);
        old_item = old_html.find("[data-variant-id=\"" + variant_id + "\"]").eq(new_instance);
        if (old_item.length > 0) {
          old_image = old_item.find('.cart--item--image');
          return new_image.replaceWith(old_image);
        }
      });
      return new_html;
    };

    FrameworkCart.prototype.updateAllHasItems = function(item_count, force_true) {
      var _this, has_items;
      if (force_true == null) {
        force_true = false;
      }
      _this = this;
      has_items = false;
      if (item_count > 0 || force_true) {
        has_items = true;
      }
      _this.root.attr('data-has-items', has_items);
      return _this.other_carts.attr('data-has-items', has_items);
    };

    FrameworkCart.prototype.updateTotals = function() {
      var _this;
      _this = this;
      return $.ajax({
        type: "GET",
        url: "/cart.js",
        dataType: "json"
      }).done(function(data, textStatus, jqXHR) {
        var count, total_price;
        total_price = theme.utils.formatMoney(data.total_price);
        count = data.item_count;
        _this.updateAllHasItems(count);
        _this.total_price.html(total_price);
        _this.total_item_count.text(count);
        return _this.updateTotalsComplete(count);
      }).fail(function(jqXHR, textStatus) {
        return console.log('Error - ajax updating totals', JSON.parse(jqXHR.responseText).description);
      });
    };

    FrameworkCart.prototype.renderDynamicCheckoutButtons = function() {
      var _this;
      _this = this;
      if (window.location.pathname === theme.urls.cart) {
        $('.off-canvas--right-sidebar .cart--additional-buttons').remove();
        if (theme.utils.mqs.current_window === 'small') {
          return $('[data-view="desktop"] .cart--additional-buttons').remove();
        }
      }
    };

    return FrameworkCart;

  })();

  theme.classes.FrameworkFeaturedCollections = (function() {
    function FrameworkFeaturedCollections(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-collections--body');
      _this.items = _this.root.find('.featured-collections--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedCollections.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-collections--image');
    };

    FrameworkFeaturedCollections.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedCollections', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedCollections;

  })();

  theme.classes.FrameworkFeaturedGrid = (function() {
    function FrameworkFeaturedGrid(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-grid--body');
      _this.items = _this.root.find('.featured-grid--item');
      _this.text_position = _this.root.data('text-position');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedGrid.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      _this.items.find('.featured-grid--item--image, .placeholder--root').css('height', 'auto');
      if (_this.text_position === 'center' && theme.utils.mqs.current_window !== 'small') {
        return;
      }
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-grid--item--image');
    };

    FrameworkFeaturedGrid.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedGrid;

  })();

  theme.classes.FrameworkFeaturedProduct = (function() {
    function FrameworkFeaturedProduct(root) {
      var _this;
      this.root = root;
      this.updateVariantImage = bind(this.updateVariantImage, this);
      this.thumbNavigation = bind(this.thumbNavigation, this);
      this.addProductComplete = bind(this.addProductComplete, this);
      this.addToCartListener = bind(this.addToCartListener, this);
      this.updateVariantImage = bind(this.updateVariantImage, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.initiateVariants = bind(this.initiateVariants, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.id = _this.root.data('id');
      _this.add_button = _this.root.find('.featured-product--add-to-cart');
      _this.cart_form = _this.root.find('.featured-product--cart-form > form');
      _this.compare_price = _this.root.find('.featured-product--compare-price');
      _this.main_images = _this.root.find('.featured-product--media');
      _this.price = _this.root.find('.featured-product--actual-price');
      _this.price_wrapper = _this.root.find('.featured-product--price-wrapper');
      _this.smart_payment_buttons = _this.root.find('.featured-product--smart-payment-buttons');
      _this.thumbs = _this.root.find('.featured-product--thumb');
      _this.unavailable_variant = _this.root.find('.featured-product--unavailable-variant');
      _this.variant_sold_out = _this.root.find('.featured-product--sold-out--variant');
      _this.cart_form = _this.root.find('.featured-product--cart-form > form');
      _this.json = JSON.parse(_this.root.find('.featured-product--json').text());
      _this.load();
    }

    FrameworkFeaturedProduct.prototype.load = function() {
      var _this;
      _this = this;
      _this.initiateVariants();
      _this.addToCartListener();
      return _this.thumbNavigation();
    };

    FrameworkFeaturedProduct.prototype.initiateVariants = function() {
      var _this, id, options;
      _this = this;
      if (_this.root.find('select').length > 0) {
        id = "featured-product--select--" + _this.id;
        return options = new Shopify.OptionSelectors(id, {
          product: _this.json,
          onVariantSelected: _this.variantSelected,
          enableHistoryState: false
        });
      }
    };

    FrameworkFeaturedProduct.prototype.variantSelected = function(variant, selector, options) {
      var _this, product_sold_out, variant_compare_price, variant_price;
      _this = this;
      product_sold_out = false;
      if (_this.root.find('.featured-product--sold-out--product').length) {
        product_sold_out = true;
      }
      _this.variant_sold_out.hide();
      _this.unavailable_variant.hide();
      _this.add_button.hide();
      _this.price_wrapper.hide();
      if (!variant) {
        _this.unavailable_variant.show();
        _this.smart_payment_buttons.hide();
        return false;
      } else if (variant && variant.available) {
        _this.price_wrapper.show();
        _this.add_button.show();
        _this.smart_payment_buttons.show();
      } else if (product_sold_out) {
        _this.variant_sold_out.hide();
        _this.add_button.hide();
        _this.smart_payment_buttons.hide();
      } else {
        _this.variant_sold_out.show();
        _this.smart_payment_buttons.hide();
      }
      variant_price = theme.utils.formatMoney(variant.price);
      _this.price.replaceWith("<span class='featured-product--actual-price money font--accent'>" + variant_price + "</span>");
      _this.price = _this.root.find('.featured-product--actual-price');
      if (variant.compare_at_price > variant.price) {
        variant_compare_price = theme.utils.formatMoney(variant.compare_at_price);
        _this.compare_price.replaceWith("<span class='featured-product--compare-price money font--light-accent'>" + variant_compare_price + "</span>");
        _this.compare_price = _this.root.find('.featured-product--compare-price');
        _this.compare_price.show();
      } else {
        _this.compare_price.hide();
      }
      if (variant.featured_media) {
        return _this.updateVariantImage(variant.featured_media.id);
      }
    };

    FrameworkFeaturedProduct.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      return _this.root.on('theme:section:load', function() {
        return new Shopify.OptionSelectors('featured-product--select', {
          product: theme.product_json,
          onVariantSelected: _this.variantSelected,
          enableHistoryState: true
        });
      });
    };

    FrameworkFeaturedProduct.prototype.updateVariantImage = function(variant_id) {
      var _this, variant_image;
      _this = this;
      _this.main_images.attr('data-active', 'false');
      variant_image = _this.main_images.filter("[data-id='" + variant_id + "']");
      return variant_image.attr('data-active', 'true');
    };

    FrameworkFeaturedProduct.prototype.addToCartListener = function() {
      var _this;
      _this = this;
      if (_this.cart_form.length > 0 && theme.settings.cart_type === 'drawer') {
        return _this.cart_form.on('submit', function() {
          _this.cart_form.find('.error').remove();
          _this.add_button.attr('data-loading', 'true');
          theme.partials.Cart.addItem($(this), function(success, error) {
            if (success) {
              return theme.partials.Cart.updateAllHtml(function() {
                return _this.addProductComplete();
              });
            } else {
              _this.cart_form.append("<div class='featured-product--error error'>" + error + "</div>");
              return _this.add_button.attr('data-loading', 'false');
            }
          });
          return false;
        });
      }
    };

    FrameworkFeaturedProduct.prototype.addProductComplete = function() {
      var _this;
      _this = this;
      _this.add_button.attr('data-loading', 'false');
      return $('[data-off-canvas--open="right-sidebar"]').first().trigger('click');
    };

    FrameworkFeaturedProduct.prototype.thumbNavigation = function() {
      var _this;
      _this = this;
      return _this.thumbs.on('keypress click', function(e) {
        var clicked_id, clicked_media, current_media;
        if (theme.utils.a11yClick(e)) {
          current_media = _this.root.find('.featured-product--media[data-active="true"] > *');
          current_media.trigger('pause-media');
          clicked_id = $(this).data('id');
          clicked_media = _this.root.find(".featured-product--media[data-id='" + clicked_id + "'] > *:not(.a11y--focus-trigger)");
          _this.updateVariantImage(clicked_id);
          if (theme.utils.mqs.current_window !== 'small') {
            clicked_media.trigger('play-media');
          }
          if (clicked_media.parent().data('media-type') !== 'image') {
            return clicked_media.focus();
          }
        }
      });
    };

    FrameworkFeaturedProduct.prototype.updateVariantImage = function(variant_id) {
      var _this, variant_image, variant_thumb;
      _this = this;
      _this.main_images.attr('data-active', 'false');
      variant_image = _this.main_images.filter("[data-id='" + variant_id + "']");
      variant_image.attr('data-active', 'true');
      _this.thumbs.attr('data-active', 'false');
      variant_thumb = _this.thumbs.filter("[data-id='" + variant_id + "']");
      return variant_thumb.attr('data-active', 'true');
    };

    return FrameworkFeaturedProduct;

  })();

  theme.classes.FrameworkFeaturedVideo = (function() {
    function FrameworkFeaturedVideo(root) {
      var _this;
      this.root = root;
      this.hideThumbnail = bind(this.hideThumbnail, this);
      this.playButtonListener = bind(this.playButtonListener, this);
      this.vimeoEvents = bind(this.vimeoEvents, this);
      this.insertVimeoPlayer = bind(this.insertVimeoPlayer, this);
      this.youtubeEvents = bind(this.youtubeEvents, this);
      this.youtubeReady = bind(this.youtubeReady, this);
      this.insertYoutubePlayer = bind(this.insertYoutubePlayer, this);
      this.insertAPIScript = bind(this.insertAPIScript, this);
      this.playerInit = bind(this.playerInit, this);
      this.checkAPIScriptExists = bind(this.checkAPIScriptExists, this);
      _this = this;
      _this.video_type = _this.root.data('videoType');
      _this.video_id = _this.root.data('videoId');
      _this.thumbnail = _this.root.data('thumbnail');
      _this.section_id = _this.root.data('sectionId');
      _this.youtubeVars = {};
      _this.vimeoVars = {
        id: _this.video_id,
        autopause: 0,
        playsinline: 0,
        title: 0
      };
      if (_this.thumbnail) {
        _this.playButtonListener();
      } else {
        _this.checkAPIScriptExists();
      }
    }

    FrameworkFeaturedVideo.prototype.checkAPIScriptExists = function() {
      var _this;
      _this = this;
      if (_this.video_type === 'vimeo') {
        if (theme.utils.vimeoScriptAdded) {
          return _this.playerInit();
        } else {
          return _this.insertAPIScript('https://player.vimeo.com/api/player.js');
        }
      } else {
        if (theme.utils.youtubeScriptAdded) {
          return _this.playerInit();
        } else {
          return _this.insertAPIScript('https://www.youtube.com/iframe_api');
        }
      }
    };

    FrameworkFeaturedVideo.prototype.playerInit = function() {
      var _this;
      _this = this;
      if (_this.video_type === 'vimeo') {
        if (_this.thumbnail) {
          return _this.insertVimeoPlayer();
        } else {
          $(window).on('load', function() {
            return _this.insertVimeoPlayer();
          });
          return _this.root.on('theme:section:load', function() {
            return _this.insertVimeoPlayer();
          });
        }
      } else {
        if (_this.thumbnail) {
          return _this.insertYoutubePlayer();
        } else {
          $(window).on('load', function() {
            return _this.insertYoutubePlayer();
          });
          return _this.root.on('theme:section:load', function() {
            return _this.insertYoutubePlayer();
          });
        }
      }
    };

    FrameworkFeaturedVideo.prototype.insertAPIScript = function(api_url) {
      var _this, script_tag;
      _this = this;
      script_tag = document.createElement('script');
      script_tag.src = api_url;
      if (_this.video_type === 'vimeo') {
        theme.utils.vimeoScriptAdded = true;
        script_tag.onload = function() {
          return _this.insertVimeoPlayer();
        };
      } else {
        theme.utils.youtubeScriptAdded = true;
        $(window).on('theme.utils.youtubeAPIReady', function() {
          return _this.insertYoutubePlayer();
        });
      }
      return document.body.appendChild(script_tag);
    };

    FrameworkFeaturedVideo.prototype.insertYoutubePlayer = function() {
      var _this;
      _this = this;
      if (!_this.thumbnail) {
        _this.youtubeVars.playsinline = 1;
        _this.youtubeVars.fs = 0;
        _this.youtubeVars.loop = 1;
        _this.youtubeVars.playlist = _this.video_id;
      }
      return _this.player = new YT.Player("player-" + _this.section_id, {
        videoId: _this.video_id,
        playerVars: _this.youtubeVars,
        events: {
          'onReady': _this.youtubeReady,
          'onStateChange': _this.youtubeEvents
        }
      });
    };

    FrameworkFeaturedVideo.prototype.youtubeReady = function() {
      var _this;
      _this = this;
      if (!_this.thumbnail) {
        _this.player.mute();
      }
      return _this.player.playVideo();
    };

    FrameworkFeaturedVideo.prototype.youtubeEvents = function(event) {
      var YTP, _this, remains;
      _this = this;
      YTP = event.target;
      if (_this.thumbnail) {
        if (event.data === 0) {
          YTP.seekTo(0);
          return YTP.pauseVideo();
        }
      } else {
        if (event.data === 1) {
          remains = YTP.getDuration() - YTP.getCurrentTime();
          if (_this.rewindTO) {
            clearTimeout(_this.rewindTO);
          }
          return _this.rewindTO = setTimeout((function() {
            YTP.seekTo(0);
          }), (remains - 0.1) * 1000);
        }
      }
    };

    FrameworkFeaturedVideo.prototype.insertVimeoPlayer = function() {
      var _this;
      _this = this;
      if (!_this.thumbnail) {
        _this.vimeoVars.playsinline = 1;
        _this.vimeoVars.muted = 1;
        _this.vimeoVars.background = 1;
        _this.vimeoVars.loop = 1;
      }
      _this.player = new Vimeo.Player("player-" + _this.section_id, _this.vimeoVars);
      if (_this.thumbnail) {
        _this.vimeoEvents();
      }
      return _this.player.play();
    };

    FrameworkFeaturedVideo.prototype.vimeoEvents = function() {
      var _this;
      _this = this;
      _this.player.getDuration().then(function(duration) {
        return _this.player.addCuePoint(duration - 0.3, {});
      });
      return _this.player.on('cuepoint', function() {
        _this.player.setCurrentTime(0);
        return _this.player.pause();
      });
    };

    FrameworkFeaturedVideo.prototype.playButtonListener = function() {
      var _this;
      _this = this;
      return _this.root.find('.feature-video--play svg, .feature-video--play-mobile svg').on('click', function() {
        _this.checkAPIScriptExists();
        return _this.hideThumbnail();
      });
    };

    FrameworkFeaturedVideo.prototype.hideThumbnail = function() {
      var _this;
      _this = this;
      return setTimeout(function() {
        return _this.root.find('.feature-video--header, .feature-video--thumbnail, .feature-video--play-mobile').hide();
      }, 350);
    };

    return FrameworkFeaturedVideo;

  })();

  theme.classes.FrameworkFeedbackBar = (function() {
    function FrameworkFeedbackBar(root) {
      var _this;
      this.root = root;
      this.load = bind(this.load, this);
      _this = this;
      _this.messages = _this.root.find('.feedback-bar--message span');
      _this.load();
    }

    FrameworkFeedbackBar.prototype.load = function() {
      var _this, anchor_tag, message, message_elem;
      _this = this;
      _this.messages.hide();
      anchor_tag = window.location.hash.substr(1);
      message = anchor_tag.replace('feedback-bar--', '');
      message_elem = _this.messages.filter('[data-feedback-bar--message="' + message + '"]');
      if (message_elem.length) {
        message_elem.show();
        setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'true');
        }, 200);
        return setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'false');
        }, 3000);
      }
    };

    return FrameworkFeedbackBar;

  })();

  theme.classes.FrameworkFooter = (function() {
    function FrameworkFooter(root) {
      var _this;
      this.root = root;
      this.stickyFooter = bind(this.stickyFooter, this);
      this.addListeners = bind(this.addListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    FrameworkFooter.prototype.load = function() {
      var _this;
      _this = this;
      _this.addListeners();
      return _this.stickyFooter();
    };

    FrameworkFooter.prototype.addListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize', function() {
        return _this.stickyFooter();
      });
    };

    FrameworkFooter.prototype.stickyFooter = function() {
      var _this, total_content_height;
      _this = this;
      total_content_height = $('.header--root').outerHeight() + $('.main-content').outerHeight() + _this.root.outerHeight();
      if ($(window).outerHeight() > total_content_height) {
        return $('.main-content').css({
          'min-height': $(window).outerHeight() - $('.header--root').outerHeight() - _this.root.outerHeight()
        });
      }
    };

    return FrameworkFooter;

  })();

  theme.classes.FrameworkLoadingAnimation = (function() {
    function FrameworkLoadingAnimation(root) {
      var _this;
      this.root = root;
      _this = this;
      if (_this.root.hasClass('tiny')) {
        _this.root.spin('tiny');
      } else {
        _this.root.spin('small');
      }
    }

    return FrameworkLoadingAnimation;

  })();

  theme.classes.FrameworkLocalization = (function() {
    function FrameworkLocalization(root) {
      var _this;
      this.root = root;
      this.submitFormOnOptionClick = bind(this.submitFormOnOptionClick, this);
      this.toggleFormDisplay = bind(this.toggleFormDisplay, this);
      this.hideFormWhenHoverOut = bind(this.hideFormWhenHoverOut, this);
      this.hideFormWhenFocusOut = bind(this.hideFormWhenFocusOut, this);
      this.showFormWhenHover = bind(this.showFormWhenHover, this);
      this.showFormWhenClick = bind(this.showFormWhenClick, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.form_items = _this.root.find('[data-form-item]');
      _this.form_toggle = _this.root.find('[data-form-toggle]');
      _this.form_input = _this.root.find('[data-form-input]');
      _this.form_item_links = _this.root.find('[data-form-item-link]');
      _this.is_touch_only = Modernizr.touchevents && theme.utils.mqs.current_window !== 'large';
      _this.load();
    }

    FrameworkLocalization.prototype.load = function() {
      var _this;
      _this = this;
      _this.showFormWhenClick();
      _this.showFormWhenHover();
      _this.hideFormWhenFocusOut();
      _this.hideFormWhenHoverOut();
      return _this.submitFormOnOptionClick();
    };

    FrameworkLocalization.prototype.showFormWhenClick = function() {
      var _this;
      _this = this;
      return _this.form_toggle.on('click keydown', function(event) {
        var aria_expanded;
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        aria_expanded = $(this).attr('aria-expanded') === 'true';
        return _this.toggleFormDisplay(!aria_expanded);
      });
    };

    FrameworkLocalization.prototype.showFormWhenHover = function() {
      var _this;
      _this = this;
      _this.form_toggle.on('mouseenter', function(event) {
        if (!_this.is_touch_only) {
          $('[data-form-toggle]').not($(this)).attr('aria-expanded', false);
          if (_this.timer) {
            clearTimeout(_this.timer);
          }
          return _this.toggleFormDisplay(true);
        }
      });
      return _this.form_item_links.on('mouseenter', function() {
        if (!_this.is_touch_only) {
          if (_this.timer) {
            return clearTimeout(_this.timer);
          }
        }
      });
    };

    FrameworkLocalization.prototype.hideFormWhenFocusOut = function() {
      var _this;
      _this = this;
      _this.form_toggle.on('focusout', function(event) {
        var form_lost_focus;
        form_lost_focus = _this.root.has(event.relatedTarget).length === 0;
        if (form_lost_focus) {
          return _this.toggleFormDisplay(false);
        }
      });
      _this.form_items.on('focusout', function(event) {
        var child_in_focus, is_visible;
        child_in_focus = $(this).has(event.relatedTarget).length > 0;
        is_visible = $(this).prev().attr('aria-expanded') === 'true';
        if (is_visible && !child_in_focus) {
          return _this.toggleFormDisplay(false);
        }
      });
      return _this.root.on('keyup', function(event) {
        if (event.key !== "Escape") {
          return;
        }
        _this.toggleFormDisplay(false);
        return _this.form_toggle.focus();
      });
    };

    FrameworkLocalization.prototype.hideFormWhenHoverOut = function() {
      var _this;
      _this = this;
      _this.form_items.on('mouseleave', function() {
        if (!_this.is_touch_only) {
          return _this.toggleFormDisplay(false);
        }
      });
      return _this.form_toggle.on('mouseleave', function(event) {
        if (!_this.is_touch_only) {
          return _this.timer = setTimeout(function() {
            return _this.toggleFormDisplay(false);
          }, 750);
        }
      });
    };

    FrameworkLocalization.prototype.toggleFormDisplay = function(aria_expanded) {
      var _this;
      _this = this;
      return _this.form_toggle.attr('aria-expanded', aria_expanded);
    };

    FrameworkLocalization.prototype.submitFormOnOptionClick = function() {
      var _this;
      _this = this;
      return _this.form_item_links.on('mousedown click', function(event) {
        var value;
        event.preventDefault();
        value = $(this).attr('data-value');
        _this.form_input.val(value);
        return _this.root.closest('form').submit();
      });
    };

    return FrameworkLocalization;

  })();

  theme.classes.FrameworkMap = (function() {
    function FrameworkMap(root) {
      var _this;
      this.root = root;
      this.buildStyles = bind(this.buildStyles, this);
      this.buildMap = bind(this.buildMap, this);
      this.geolocate = bind(this.geolocate, this);
      this.loadMapsApi = bind(this.loadMapsApi, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.api_status = null;
      _this.map_instance = null;
      _this.key = _this.root.data('api-key');
      _this.address = _this.root.data('address');
      _this.theme = _this.root.data('theme');
      _this.styles = null;
      _this.container = _this.root.find('.map--google-maps');
      _this.center = null;
      _this.load();
    }

    FrameworkMap.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.container.length > 0) {
        return _this.loadMapsApi();
      }
    };

    FrameworkMap.prototype.loadMapsApi = function() {
      var _this, other_map_loading_checker;
      _this = this;
      if (theme.utils.google_map_api_status === 'loading') {
        return other_map_loading_checker = setInterval(function() {
          if (theme.utils.google_map_api_status === 'loaded') {
            _this.geolocate();
            return clearInterval(other_map_loading_checker);
          }
        }, 100);
      } else if (typeof window.google === 'undefined') {
        theme.utils.google_map_api_status = 'loading';
        return $.getScript('https://maps.googleapis.com/maps/api/js?key=' + _this.key).then(function() {
          _this.geolocate();
          return theme.utils.google_map_api_status = 'loaded';
        });
      } else {
        return _this.geolocate();
      }
    };

    FrameworkMap.prototype.geolocate = function() {
      var _this, geocoder;
      _this = this;
      geocoder = new google.maps.Geocoder;
      return geocoder.geocode({
        address: _this.address
      }, function(results, status) {
        if (status === 'OK') {
          _this.center = results[0].geometry.location;
          _this.buildStyles();
          return _this.buildMap();
        } else {
          return console.log('couldn\'t convert address with geocoder');
        }
      });
    };

    FrameworkMap.prototype.buildMap = function() {
      var _this, center, map, mapOptions, marker;
      _this = this;
      mapOptions = {
        zoom: 15,
        center: _this.center,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: _this.styles
      };
      map = new google.maps.Map(_this.container[0], mapOptions);
      center = map.getCenter();
      marker = new google.maps.Marker({
        map: map,
        position: map.getCenter()
      });
      return _this.map_instance = google.maps.event.addDomListener(window, 'resize', theme.utils.debounce(500, function() {
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
      }));
    };

    FrameworkMap.prototype.buildStyles = function() {
      var _this;
      _this = this;
      if (_this.theme === 'grayscale') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ];
      } else if (_this.theme === 'dark') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ];
      }
    };

    return FrameworkMap;

  })();

  theme.classes.FrameworkMediaQueries = (function() {
    function FrameworkMediaQueries() {
      this.screenSizeListener = bind(this.screenSizeListener, this);
      this.getScreenSize = bind(this.getScreenSize, this);
      this.medium_screen = 1024;
      this.large_screen = 1024;
      this.current_window = null;
      this.getScreenSize();
      this.screenSizeListener();
    }

    FrameworkMediaQueries.prototype.getScreenSize = function() {
      var _this;
      _this = this;
      if (window.matchMedia("only screen and (min-width: " + _this.large_screen + "px)").matches) {
        if (_this.current_window !== 'large') {
          return _this.current_window = 'large';
        }
      } else if (window.matchMedia("only screen and (min-width: " + _this.medium_screen + "px)").matches) {
        if (_this.current_window !== 'medium') {
          return _this.current_window = 'medium';
        }
      } else {
        if (_this.current_window !== 'small') {
          return _this.current_window = 'small';
        }
      }
    };

    FrameworkMediaQueries.prototype.screenSizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize', function() {
        return _this.getScreenSize();
      });
    };

    return FrameworkMediaQueries;

  })();

  theme.classes.FrameworkModal = (function() {
    function FrameworkModal(container1) {
      var _this;
      this.container = container1;
      _this = this;
      _this.fullscreen = _this.container.data('modal--fullscreen') ? true : false;
      if (_this.container.data('modal--custom-close')) {
        _this.custom_close_button = _this.container.data('modal--custom-close');
      } else {
        _this.custom_close_button = '';
      }
      _this.force_view = _this.container.data('force-view');
      _this.view = _this.container.data('modal--view');
      _this.links = _this.container.find('.modal--link');
      _this.content = _this.container.find('.modal--content');
      _this.window = $('.modal--window');
      _this.window_container = _this.window.find('.modal--container');
      _this.mask = _this.window.find('.modal--mask');
      _this.close_button = _this.window.find('.modal--close');
      _this.next_button = _this.window.find('.modal--next');
      _this.prev_button = _this.window.find('.modal--prev');
      _this.slider = null;
      _this.slides = null;
      _this.main_content_window = $('.off-canvas--main-content');
      _this.openListeners();
      _this.modal_state = 'closed';
      _this.nav_lock = false;
    }

    FrameworkModal.prototype.openListeners = function() {
      var _this;
      _this = this;
      return _this.links.on('keypress.FrameworkModal, click.FrameworkModal, quick-open', function(e) {
        var clicked_item;
        if (e.type === 'keypress' && theme.utils.a11yClick(e) === false) {
          return false;
        }
        clicked_item = $(this);
        _this.links.each(function(index) {
          if ($(this).is(clicked_item)) {
            if (e.type === 'quick-open') {
              return _this.open(index, true);
            } else {
              return _this.open(index);
            }
          }
        });
        return false;
      });
    };

    FrameworkModal.prototype.open = function(index, quick_open) {
      var _this, scrolled_position;
      if (quick_open == null) {
        quick_open = false;
      }
      _this = this;
      if (_this.modal_state === 'closed') {
        _this.modal_state = 'opened';
        $('html').addClass('modal-open');
        _this.window.attr('data-modal--fullscreen', _this.fullscreen);
        _this.window.attr('data-modal--custom-close', _this.custom_close_button);
        _this.window.attr('data-modal--view', _this.view);
        _this.closeListeners();
        _this.positionListeners();
        scrolled_position = $(window).scrollTop();
        _this.main_content_window.css({
          position: 'fixed',
          top: -scrolled_position
        });
        _this.moveContentToWindow();
        if (_this.slides.length > 1) {
          _this.next_button.show();
          _this.prev_button.show();
          _this.prevListeners();
          _this.nextListeners();
        }
        _this.window.show();
        _this.window_container.show();
        _this.renderVideo(_this.slides.eq(index));
        if (quick_open) {
          _this.slides.eq(index).addClass('active');
          return _this.position();
        } else {
          _this.mask.fadeIn();
          return _this.loadModal(_this.slides.eq(index), function() {
            return setTimeout(function() {
              return _this.window_container.find('input[type="text"]').focus();
            }, 0);
          });
        }
      }
    };

    FrameworkModal.prototype.moveContentToWindow = function(index) {
      var _this, content;
      _this = this;
      content = _this.container.find('.modal--content');
      _this.window_container.append(content);
      return _this.slides = _this.window_container.find('.modal--content');
    };

    FrameworkModal.prototype.detectImageSlide = function(slide) {
      var _this;
      return _this = this;
    };

    FrameworkModal.prototype.renderVideo = function(slide) {
      var _this, id, iframe, src_url, type, video;
      _this = this;
      video = slide.find('.responsive-video').first();
      src_url = video.data('video');
      type = _this.extractVideoType(src_url);
      id = _this.extractVideoId(src_url, type);
      iframe = _this.createIframe(type, id);
      if (type === 'vimeo') {
        video.addClass('vimeo');
      }
      if (type === 'kickstarter') {
        video.addClass('kickstarter');
      }
      return video.append(iframe);
    };

    FrameworkModal.prototype.extractVideoType = function(src_url) {
      var _this, matches, re;
      _this = this;
      re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i;
      matches = re.exec(src_url);
      if (matches) {
        return 'youtube';
      }
      re = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
      matches = re.exec(src_url);
      if (matches) {
        return 'vimeo';
      }
      re = /^.*(kickstarter)\.com/g;
      matches = re.exec(src_url);
      if (matches) {
        return 'kickstarter';
      }
      return false;
    };

    FrameworkModal.prototype.extractVideoId = function(src_url, type) {
      var _this, match, regExp;
      _this = this;
      if (type === 'youtube') {
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        match = src_url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
      } else if (type === "vimeo") {
        regExp = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        match = src_url.match(regExp);
        if (match) {
          return match[2];
        }
      } else if (type === "kickstarter") {
        regExp = /(?:kickstarter\.com\/projects\/)(.*)(|\?)/;
        match = src_url.match(regExp);
        if (match) {
          return match[1];
        }
      }
    };

    FrameworkModal.prototype.createIframe = function(type, id) {
      var _this;
      _this = this;
      if (type === "youtube") {
        return "<iframe src='//www.youtube.com/embed/" + id + "?autoplay=1' frameborder='0' allowfullwidth></iframe>";
      } else if (type === "vimeo") {
        return "<iframe src='//player.vimeo.com/video/" + id + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1?' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
      } else if (type === "kickstarter") {
        return "<iframe src='//www.kickstarter.com/projects/" + id + "/widget/video.html' frameborder='0' webkitallowfullwidth mozallowfullwidth allowfullwidth></iframe>";
      }
    };

    FrameworkModal.prototype.removeVideos = function() {
      var _this;
      _this = this;
      return _this.slides.find('.responsive-video').each(function() {
        if ($(this).data('video')) {
          return $(this).find('iframe').remove();
        }
      });
    };

    FrameworkModal.prototype.loadModal = function(modal, callback) {
      var _this;
      _this = this;
      modal.addClass('active');
      _this.position();
      if (callback) {
        callback();
      }
      return _this.nav_lock = false;
    };

    FrameworkModal.prototype.position = function() {
      var _this, active_modal, entire_modal_height, modal_height, modal_width;
      _this = this;
      if (_this.window_container != null) {
        active_modal = _this.content.filter('.active');
        _this.window_container.attr('style', '');
        _this.positionVideoColumns(active_modal);
        _this.detectImageSlide(active_modal);
        _this.window.removeClass('fixed');
        modal_height = active_modal.outerHeight();
        modal_width = active_modal.outerWidth();
        entire_modal_height = modal_height + parseInt(_this.window.css('padding-top')) + parseInt(_this.window.css('padding-bottom'));
        if (_this.fullscreen) {
          return;
        }
        if (active_modal.hasClass('type--image')) {
          entire_modal_height = modal_height;
        }
        if ($(window).height() >= entire_modal_height && _this.force_view !== 'absolute') {
          return _this.window.addClass('fixed');
        } else {
          $("html, body").animate({
            scrollTop: 0
          }, '0');
          $('body,html').on('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal', function(e) {
            if (e.which > 0 || e.type === "mousewheel" || e.type === "touchmove") {
              return $("html,body").stop();
            }
          });
          return _this.window.removeClass('fixed');
        }
      }
    };

    FrameworkModal.prototype.positionVideoColumns = function(modal) {
      var _this, column_one, column_two, height_one, height_two;
      _this = this;
      if (modal.find('.responsive-video').length > 0) {
        column_one = modal.find('.fw--blocks > div').eq(0);
        column_two = modal.find('.fw--blocks > div').eq(1);
        column_one.css({
          width: ''
        });
        column_two.css({
          width: ''
        });
        height_one = column_one.outerHeight();
        height_two = column_two.outerHeight();
        if (height_one < height_two) {
          column_one.css({
            width: '100%'
          });
          return column_two.css({
            width: '100%'
          });
        }
      }
    };

    FrameworkModal.prototype.positionListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FrameworkModal', function() {
        return _this.position();
      });
    };

    FrameworkModal.prototype.nextListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 39) {
          return _this.next();
        }
      });
      return _this.next_button.on('click.FrameworkModal', function() {
        return _this.next();
      });
    };

    FrameworkModal.prototype.next = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if ((index + 1) === _this.slides.length) {
          active_slide = _this.slides.eq(0);
        } else {
          active_slide = _this.slides.eq(index + 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.prevListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 37) {
          return _this.prev();
        }
      });
      return _this.prev_button.on('click.FrameworkModal', function() {
        return _this.prev();
      });
    };

    FrameworkModal.prototype.prev = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if (index === 0) {
          active_slide = _this.slides.eq(_this.slides.length - 1);
        } else {
          active_slide = _this.slides.eq(index - 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.closeListeners = function() {
      var _this;
      _this = this;
      _this.container.on('quick-close', function() {
        return _this.close(true);
      });
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 27) {
          return _this.close();
        }
      });
      _this.mask.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.window_container.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.content.on('click.FrameworkModal', function(e) {
        return e.stopPropagation();
      });
      return _this.close_button.on('click.FrameworkModal', function() {
        return _this.close();
      });
    };

    FrameworkModal.prototype.close = function(quick_close) {
      var _this, scrolled_position;
      if (quick_close == null) {
        quick_close = false;
      }
      _this = this;
      scrolled_position = parseInt(_this.main_content_window.css('top')) * -1;
      _this.container.trigger('modalClosed');
      _this.main_content_window.css({
        top: '0',
        position: 'relative'
      });
      $(window).scrollTop(scrolled_position);
      _this.putBackContent();
      _this.next_button.hide();
      _this.prev_button.hide();
      _this.window.hide();
      if (quick_close) {
        _this.mask.hide();
        this.window_container.empty();
        _this.modal_state = 'closed';
      } else {
        _this.mask.fadeOut(function() {
          _this.window_container.empty();
          return _this.modal_state = 'closed';
        });
      }
      $('html').removeClass('modal-open');
      _this.removeListeners();
      return $(window).trigger('FrameworkModal.afterClose');
    };

    FrameworkModal.prototype.putBackContent = function() {
      var _this;
      _this = this;
      _this.removeVideos();
      return _this.slides.removeClass('active').appendTo(_this.container);
    };

    FrameworkModal.prototype.removeListeners = function() {
      var _this;
      _this = this;
      $(document).off('keydown.FrameworkModal');
      $(window).off('resize.FrameworkModal');
      $('body,html').off('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal');
      _this.next_button.off('click.FrameworkModal');
      _this.prev_button.off('click.FrameworkModal');
      _this.close_button.off('click.FrameworkModal');
      _this.mask.off('click.FrameworkModal');
      return _this.window_container.off('click.FrameworkModal');
    };

    return FrameworkModal;

  })();

  theme.classes.FrameworkOffCanvas = (function() {
    function FrameworkOffCanvas(root) {
      var _this;
      this.root = root;
      this.touchListener = bind(this.touchListener, this);
      this.closeRight = bind(this.closeRight, this);
      this.closeLeft = bind(this.closeLeft, this);
      this.fadeInOverlay = bind(this.fadeInOverlay, this);
      this.openRight = bind(this.openRight, this);
      this.openLeft = bind(this.openLeft, this);
      this.toggle = bind(this.toggle, this);
      this.toggleListeners = bind(this.toggleListeners, this);
      this.viewPortHeightListener = bind(this.viewPortHeightListener, this);
      this.setViewPortHeight = bind(this.setViewPortHeight, this);
      this.setState = bind(this.setState, this);
      this.unload = bind(this.unload, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.viewport = $('.off-canvas--viewport');
      _this.left_sidebar = $('.off-canvas--left-sidebar');
      _this.right_sidebar = $('.off-canvas--right-sidebar');
      _this.main_content = $('.off-canvas--main-content');
      _this.overlay = $('.off-canvas--overlay');
      _this.state = 'closed';
      _this.load();
    }

    FrameworkOffCanvas.prototype.load = function() {
      var _this;
      _this = this;
      _this.close = $('.off-canvas--close');
      _this.triggers = $('.off-canvas--open');
      _this.setViewPortHeight();
      _this.viewPortHeightListener();
      _this.toggleListeners();
      return _this.touchListener();
    };

    FrameworkOffCanvas.prototype.unload = function() {
      var _this;
      _this = this;
      _this.triggers.off('click');
      _this.overlay.add(_this.close).off('click');
      $(document).off('touchstart.OffCanvas');
      return $(document).off('touchend.OffCanvas');
    };

    FrameworkOffCanvas.prototype.setState = function(state) {
      var _this;
      _this = this;
      _this.state = state;
      return _this.root.attr('data-off-canvas--state', state);
    };

    FrameworkOffCanvas.prototype.setViewPortHeight = function() {
      var _this;
      _this = this;
      return _this.viewport.css({
        'min-height': $(window).height()
      });
    };

    FrameworkOffCanvas.prototype.viewPortHeightListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize', function() {
        return _this.setViewPortHeight();
      });
    };

    FrameworkOffCanvas.prototype.toggleListeners = function() {
      var _this;
      _this = this;
      _this.triggers.on('click', function() {
        if ($(this).data('off-canvas--open') === 'left-sidebar') {
          _this.toggle('left-sidebar');
        } else if ($(this).data('off-canvas--open') === 'right-sidebar') {
          _this.toggle('right-sidebar');
        }
        return false;
      });
      return _this.overlay.add(_this.close).on('click', function() {
        if (_this.state === 'left-open') {
          return _this.toggle('left-sidebar');
        } else if (_this.state === 'right-open') {
          return _this.toggle('right-sidebar');
        }
      });
    };

    FrameworkOffCanvas.prototype.toggle = function(element) {
      var _this;
      _this = this;
      if (element === 'left-sidebar' && _this.state === 'closed') {
        return _this.openLeft();
      } else if (element === 'left-sidebar' && _this.state === 'left-open') {
        return _this.closeLeft();
      } else if (element === 'right-sidebar' && _this.state === 'closed') {
        return _this.openRight();
      } else if (element === 'right-sidebar' && _this.state === 'right-open') {
        return _this.closeRight();
      }
    };

    FrameworkOffCanvas.prototype.openLeft = function() {
      var _this;
      _this = this;
      _this.setState('left-open');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.left_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          return _this.left_sidebar.css({
            position: 'relative'
          });
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.openRight = function() {
      var _this;
      _this = this;
      _this.setState('right-open');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.right_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          return _this.right_sidebar.css({
            position: 'relative'
          });
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.fadeInOverlay = function() {
      var _this;
      _this = this;
      _this.overlay.show();
      return _this.overlay.velocity({
        opacity: '0.3'
      });
    };

    FrameworkOffCanvas.prototype.closeLeft = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'left-open') {
        return false;
      }
      _this.setState('closed');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.left_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          _this.left_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.closeRight = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'right-open') {
        return false;
      }
      _this.setState('closed');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.right_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          _this.right_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.touchListener = function() {
      var _this, position;
      _this = this;
      if (!Modernizr.touchevents) {
        return false;
      }
      position = {
        start: {},
        end: {}
      };
      $(document).on('touchstart.OffCanvas', function(e) {
        position.start.x = e.originalEvent.touches[0].clientX;
        position.start.y = e.originalEvent.touches[0].clientY;
      });
      return $(document).on('touchend.OffCanvas', function(e) {
        position.end.x = e.originalEvent.changedTouches[0].clientX;
        position.end.y = e.originalEvent.changedTouches[0].clientY;
        if (Math.abs(position.start.y - position.end.y) > 30) {
          return false;
        }
        if (position.start.x > position.end.x + 5) {
          return _this.closeLeft();
        } else if (position.start.x < position.end.x - 5) {
          return _this.closeRight();
        }
      });
    };

    return FrameworkOffCanvas;

  })();

  theme.classes.FrameworkProductModel = (function() {
    function FrameworkProductModel(root) {
      var _this;
      this.root = root;
      this.loadModel = bind(this.loadModel, this);
      this.loadAssets = bind(this.loadAssets, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.view = _this.root.data('view');
      _this.key = _this.root.closest('[data-id]').data('id');
      _this.cdn = 'https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui';
      _this.load();
    }

    FrameworkProductModel.prototype.load = function() {
      var _this;
      _this = this;
      _this.eventListeners();
      if (theme.utils.modelScriptAdded) {
        return;
      }
      theme.utils.modelScriptAdded = true;
      return _this.loadAssets();
    };

    FrameworkProductModel.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.root.on('model-ready', function() {
        return _this.loadModel();
      });
      _this.root.on('theme:section:load', function() {
        return _this.loadModel();
      });
      _this.root.on('pause-media', function() {
        if (_this.model) {
          return _this.model.pause();
        }
      });
      _this.root.on('play-media', function() {
        if (_this.model) {
          return _this.model.play();
        }
      });
      return $(window).on('resize.ProductModel', theme.utils.debounce(250, function() {
        $('.product-model--root').trigger('pause-media');
        return $('.product-model--root').trigger('model-ready');
      }));
    };

    FrameworkProductModel.prototype.loadAssets = function() {
      var _this;
      _this = this;
      theme.utils.insertStylesheet(_this.cdn + ".css");
      return theme.utils.insertScript(_this.cdn + ".en.js", function() {
        return $('.product-model--root').trigger('model-ready');
      });
    };

    FrameworkProductModel.prototype.loadModel = function() {
      var _this;
      _this = this;
      if (_this.model) {
        return;
      }
      if (theme.utils.mqs.current_window === 'small' && _this.view === 'desktop') {
        return;
      } else if (theme.utils.mqs.current_window !== 'small' && _this.view === 'mobile') {
        return;
      }
      return _this.model = new Shopify.ModelViewerUI(_this.root.find('model-viewer'));
    };

    return FrameworkProductModel;

  })();

  theme.classes.FrameworkProductRecommendations = (function() {
    function FrameworkProductRecommendations(root) {
      var _this;
      this.root = root;
      this.loadHoverImages = bind(this.loadHoverImages, this);
      this.checkIfEmpty = bind(this.checkIfEmpty, this);
      this.loadProducts = bind(this.loadProducts, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.loadProducts();
      _this.resizeListeners();
    }

    FrameworkProductRecommendations.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      _this.item_container = _this.root.find('.product-recommendations--body');
      _this.items = _this.root.find('.product--root');
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.product--image-wrapper');
    };

    FrameworkProductRecommendations.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    FrameworkProductRecommendations.prototype.loadProducts = function() {
      var _this, maxProducts, productId, productRecommendations, request, requestUrl;
      _this = this;
      productRecommendations = document.getElementsByClassName("product-recommendations--root")[0];
      productId = productRecommendations.dataset.productId;
      maxProducts = productRecommendations.dataset.maxProducts;
      requestUrl = theme.urls.product_recommendations + "?section_id=framework--product-recommendations&limit=" + maxProducts + "&product_id=" + productId;
      request = new XMLHttpRequest();
      request.open("GET", requestUrl);
      request.onload = function() {
        var container;
        if (request.status >= 200 && request.status < 300) {
          container = document.createElement("div");
          container.innerHTML = request.response;
          productRecommendations.innerHTML = container.querySelector(".product-recommendations--root").innerHTML;
          _this.matchImageHeights();
          _this.checkIfEmpty();
          return _this.loadHoverImages();
        }
      };
      return request.send();
    };

    FrameworkProductRecommendations.prototype.checkIfEmpty = function() {
      var _this, empty;
      _this = this;
      empty = $('.product--root').length > 0 ? false : true;
      return $('.product-recommendations--root').attr('data-empty', empty);
    };

    FrameworkProductRecommendations.prototype.loadHoverImages = function() {
      var _this;
      _this = this;
      return $('.product--root[data-hover-image="true"]').each(function() {
        var product;
        product = $(this);
        return theme.utils.imagesLoaded(product, function() {
          return product.attr('data-hover-image', 'loaded');
        });
      });
    };

    return FrameworkProductRecommendations;

  })();

  theme.classes.FrameworkProductVideo = (function() {
    function FrameworkProductVideo(root) {
      var _this;
      this.root = root;
      this.skipVideo = bind(this.skipVideo, this);
      this.loadYoutubeVideo = bind(this.loadYoutubeVideo, this);
      this.loadPlyrVideo = bind(this.loadPlyrVideo, this);
      this.loadYoutubeAsset = bind(this.loadYoutubeAsset, this);
      this.loadPlyrAssets = bind(this.loadPlyrAssets, this);
      this.resizeListener = bind(this.resizeListener, this);
      this.youtubeListeners = bind(this.youtubeListeners, this);
      this.plyrListeners = bind(this.plyrListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.view = _this.root.data('view');
      _this.type = _this.root.data('type');
      _this.loop_enabled = _this.root.data('loop-enabled');
      _this.load();
    }

    FrameworkProductVideo.prototype.load = function() {
      var _this;
      _this = this;
      _this.resizeListener();
      if (_this.type === 'youtube') {
        _this.id = _this.root.find('.product-video').attr('id');
        _this.video_id = _this.root.data('video-id');
        _this.youtubeListeners();
        return _this.loadYoutubeAsset();
      } else {
        _this.plyr_cdn = 'https://cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr';
        _this.plyrListeners();
        return _this.loadPlyrAssets();
      }
    };

    FrameworkProductVideo.prototype.plyrListeners = function() {
      var _this;
      _this = this;
      _this.root.on('plyr-video-ready', function() {
        return _this.loadPlyrVideo();
      });
      _this.root.on('theme:section:load', function() {
        return _this.loadPlyrVideo();
      });
      _this.root.on('pause-media', function() {
        if (_this.video) {
          return _this.video.pause();
        }
      });
      return _this.root.on('play-media', function() {
        if (_this.video) {
          return _this.video.play();
        }
      });
    };

    FrameworkProductVideo.prototype.youtubeListeners = function() {
      var _this;
      _this = this;
      $(window).on('theme.utils.youtubeAPIReady', function() {
        return _this.loadYoutubeVideo();
      });
      return _this.root.on('theme:section:load', function() {
        return _this.loadYoutubeVideo();
      });
    };

    FrameworkProductVideo.prototype.resizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize.ProductVideo', theme.utils.debounce(250, function() {
        $('.product-video--root').trigger('pause-media');
        $('.product-video--root').trigger('plyr-video-ready');
        return $('.product-video--root').trigger('theme.utils.youtubeAPIReady');
      }));
    };

    FrameworkProductVideo.prototype.loadPlyrAssets = function() {
      var _this;
      _this = this;
      if (theme.utils.plyrScriptAdded) {
        return;
      }
      theme.utils.plyrScriptAdded = true;
      theme.utils.insertStylesheet(_this.plyr_cdn + ".css");
      return theme.utils.insertScript(_this.plyr_cdn + ".en.js", function() {
        return $('.product-video--root').trigger('plyr-video-ready');
      });
    };

    FrameworkProductVideo.prototype.loadYoutubeAsset = function() {
      var _this;
      _this = this;
      if (theme.utils.youtubeScriptAdded) {
        return;
      }
      theme.utils.youtubeScriptAdded = true;
      return theme.utils.insertScript('https://www.youtube.com/iframe_api');
    };

    FrameworkProductVideo.prototype.loadPlyrVideo = function() {
      var _this;
      _this = this;
      if (_this.video) {
        return;
      }
      if (_this.skipVideo()) {
        return;
      }
      return _this.video = new Shopify.Plyr(_this.root.find('video'), {
        iconUrl: _this.plyr_cdn + ".svg",
        loop: {
          active: _this.loop_enabled
        }
      });
    };

    FrameworkProductVideo.prototype.loadYoutubeVideo = function() {
      var _this;
      _this = this;
      if (_this.video) {
        return;
      }
      if (_this.skipVideo()) {
        return;
      }
      return _this.video = new YT.Player(_this.id, {
        videoId: _this.video_id,
        events: {
          onReady: function(event) {
            _this.root.on('pause-media', function() {
              return event.target.pauseVideo();
            });
            return _this.root.on('play-media', function() {
              return event.target.playVideo();
            });
          },
          onStateChange: function(event) {
            if (event.data === 0 && _this.loop_enabled) {
              event.target.seekTo(0);
            }
            if (event.data === 1) {
              return $('.product-page--media > *').not(_this.root).trigger('pause-media');
            }
          }
        }
      });
    };

    FrameworkProductVideo.prototype.skipVideo = function() {
      var _this;
      _this = this;
      if (theme.utils.mqs.current_window === 'small' && _this.view === 'desktop') {
        return true;
      } else if (theme.utils.mqs.current_window !== 'small' && _this.view === 'mobile') {
        return true;
      } else {
        return false;
      }
    };

    return FrameworkProductVideo;

  })();

  theme.classes.FrameworkSearch = (function() {
    function FrameworkSearch(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      this.getResults = bind(this.getResults, this);
      this.listenForKeyEntered = bind(this.listenForKeyEntered, this);
      this.getSearchUrl = bind(this.getSearchUrl, this);
      this.searchLinks = bind(this.searchLinks, this);
      this.loadSpinners = bind(this.loadSpinners, this);
      this.onOpen = bind(this.onOpen, this);
      _this = this;
      _this.articles = _this.root.find('.search--articles');
      _this.form = _this.root.find('form');
      _this.icon = _this.root.find('.search--icon');
      _this.loading = _this.root.find('.search--loading');
      _this.no_results = _this.root.find('.search--no-results');
      _this.products = _this.root.find('.search--products');
      _this.results = _this.root.find('.search--results');
      _this.text_box = _this.root.find('.search--textbox');
      _this.toggle_link = _this.root.find('.search--toggle');
      _this.show_articles = _this.root.data('show-articles');
      _this.show_pages = _this.root.data('show-pages');
      _this.view = _this.root.data('view');
      _this.ajax_request = null;
      _this.search_term = null;
      _this.search_url = null;
      _this.close_results_timer = null;
      _this.typing_timer = null;
      _this.article_page_combination = "";
      _this.offCanvas = theme.partials.OffCanvas;
      if (_this.show_articles && _this.show_pages) {
        _this.article_page_combination = 'article,page';
      } else if (_this.show_articles) {
        _this.article_page_combination = 'article';
      } else if (_this.show_pages) {
        _this.article_page_combination = 'page';
      }
      if (_this.view === 'modal') {
        _this.searchLinks();
        _this.getSearchUrl();
        _this.listenForKeyEntered();
        _this.loadSpinners();
      }
      _this.resizeListeners();
      _this.matchImageHeights();
    }

    FrameworkSearch.prototype.onOpen = function() {
      var _this, temp_val;
      _this = this;
      _this.text_box.focus();
      temp_val = _this.text_box.val();
      _this.text_box.val('');
      _this.text_box.val(temp_val);
      return _this.text_box.trigger('keyup');
    };

    FrameworkSearch.prototype.loadSpinners = function() {
      var _this, spinner;
      _this = this;
      spinner = _this.loading.find('.animation');
      if (spinner.hasClass('tiny')) {
        return spinner.spin('tiny');
      } else {
        return spinner.spin('small');
      }
    };

    FrameworkSearch.prototype.searchLinks = function() {
      var _this;
      _this = this;
      $(".off-canvas--main-content a[href='" + theme.urls.search + "']").on('click', function() {
        $('[data-trigger="search-modal"]').trigger('click');
        _this.onOpen();
        return false;
      });
      $(".off-canvas--right-sidebar a[href='" + theme.urls.search + "']").on('click', function() {
        _this.offCanvas.closeRight();
        setTimeout(function() {
          $('[data-trigger="search-modal"]').trigger('click');
          return _this.onOpen();
        }, 450);
        return false;
      });
      return $(".off-canvas--left-sidebar a[href='" + theme.urls.search + "']").on('click', function() {
        _this.offCanvas.closeLeft();
        setTimeout(function() {
          $('[data-trigger="search-modal"]').trigger('click');
          return _this.onOpen();
        }, 450);
        return false;
      });
    };

    FrameworkSearch.prototype.getSearchUrl = function() {
      var _this;
      _this = this;
      _this.search_url = window.top.location.href;
      _this.search_url = _this.search_url.replace(window.location.hostname + window.location.pathname, window.location.hostname + theme.urls.search);
      _this.search_url = _this.search_url.replace('#', '');
      if (_this.search_url.indexOf("?") >= 0) {
        return _this.search_url = _this.search_url + '&';
      } else {
        return _this.search_url = _this.search_url + '?';
      }
    };

    FrameworkSearch.prototype.listenForKeyEntered = function() {
      var _this;
      _this = this;
      return _this.text_box.attr("autocomplete", "off").on("keyup paste", function(event) {
        var term;
        clearTimeout(_this.typing_timer);
        term = $(this).val();
        if (term.length < 2 && event.type !== 'paste') {
          _this.products.empty();
          _this.articles.empty();
          _this.loading.hide();
          _this.icon.show();
          return false;
        }
        _this.loading.show();
        _this.icon.hide();
        return _this.typing_timer = setTimeout(function() {
          var url;
          clearTimeout(_this.typing_timer);
          url = _this.search_url + "view=ajax-product&type=product&q=" + term + "*";
          _this.getResults(url, term, 'product');
          if (_this.show_articles || _this.show_pages) {
            url = _this.search_url + "view=ajax-article-page&type=" + _this.article_page_combination + "&q=" + term + "*";
            return _this.getResults(url, term, 'article');
          }
        }, 750);
      });
    };

    FrameworkSearch.prototype.getResults = function(url, term, type) {
      var _this;
      _this = this;
      _this.products.empty();
      _this.articles.empty();
      $.ajax({
        url: url,
        type: "GET",
        dataType: "html",
        success: function(data) {
          _this.loading.hide();
          _this.icon.show();
          if (type === 'product') {
            _this.products.empty();
            _this.products.append(data);
            return _this.matchImageHeights();
          } else if (type === 'article') {
            _this.articles.empty();
            return _this.articles.append(data);
          }
        },
        error: function(jqxhr, textStatus, error) {
          var err;
          err = textStatus + ', ' + error;
          return console.log('search.json Request Failed: ' + err);
        }
      });
    };

    FrameworkSearch.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.products, _this.products.find('.product--root'), '.product--image-wrapper');
    };

    FrameworkSearch.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Search', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkSearch;

  })();

  theme.classes.Sections = (function() {
    function Sections() {
      this.unload = bind(this.unload, this);
      this.deselectBlock = bind(this.deselectBlock, this);
      this.selectBlock = bind(this.selectBlock, this);
      this.deselectSection = bind(this.deselectSection, this);
      this.selectSection = bind(this.selectSection, this);
      this.load = bind(this.load, this);
      this.getActiveBlock = bind(this.getActiveBlock, this);
      this.getActiveSection = bind(this.getActiveSection, this);
      this.listeners = bind(this.listeners, this);
      var _this;
      _this = this;
      _this.listeners();
    }

    Sections.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.load();
      _this.unload();
      _this.selectSection();
      _this.deselectSection();
      _this.selectBlock();
      return _this.deselectBlock();
    };

    Sections.prototype.getActiveSection = function(evt) {
      var _this, active_section;
      _this = this;
      active_section = $(evt.target).find('[data-section-id]');
      return active_section;
    };

    Sections.prototype.getActiveBlock = function(evt) {
      var _this, active_block;
      _this = this;
      active_block = $(evt.target);
      return active_block;
    };

    Sections.prototype.load = function(evt) {
      var _this;
      _this = this;
      return $(document).on('shopify:section:load', function(evt) {
        var active_section;
        theme.utils.loadJsClasses();
        active_section = _this.getActiveSection(evt);
        active_section.triggerHandler("theme:section:load");
        return active_section.find('[data-js-class]').each(function() {
          return $(this).triggerHandler("theme:section:load");
        });
      });
    };

    Sections.prototype.selectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:select', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        return active_section.triggerHandler("theme:section:select");
      });
    };

    Sections.prototype.deselectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:deselect', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        return active_section.triggerHandler('theme:section:deselect');
      });
    };

    Sections.prototype.selectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:select', function(evt) {
        var active_block;
        active_block = _this.getActiveBlock(evt);
        return active_block.triggerHandler('theme:block:select');
      });
    };

    Sections.prototype.deselectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:deselect', function(evt) {
        var active_block;
        active_block = _this.getActiveBlock(evt);
        return active_block.triggerHandler('theme:block:deselect');
      });
    };

    Sections.prototype.unload = function(evt) {
      var _this;
      _this = this;
      return $(document).on('shopify:section:unload', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        active_section.triggerHandler("theme:section:unload");
        return active_section.find('[data-js-loaded="true"]').each(function() {
          return $(this).triggerHandler("theme:section:unload");
        });
      });
    };

    return Sections;

  })();

  theme.classes.FrameworkSlider = (function() {
    function FrameworkSlider(container1) {
      this.container = container1;
      this.eventListeners = bind(this.eventListeners, this);
      this.pauseMedia = bind(this.pauseMedia, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.updateContextMenu = bind(this.updateContextMenu, this);
      this.autoplay = bind(this.autoplay, this);
      this.formatPaginationNumbers = bind(this.formatPaginationNumbers, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.createSlider = bind(this.createSlider, this);
      this.autoplay_enabled = this.container.data('autoplay') ? true : false;
      this.navigation = this.container.data('navigation') ? true : false;
      this.pagination_numbers = this.container.data('pagination-numbers') ? true : false;
      this.autoplay_frequency = 3000;
      this.slide_length = this.container.children().length;
      this.active_index = 0;
      this.news_panel = this.container.data('news-panel') ? true : false;
      this.createSlider();
      this.eventListeners();
      this.owl = this.container.data('owlCarousel');
    }

    FrameworkSlider.prototype.createSlider = function() {
      var _this, slider;
      _this = this;
      slider = this.container.owlCarousel({
        singleItem: true,
        navigation: _this.navigation,
        navigationText: false,
        pagination: _this.container.data('pagination') ? true : false,
        paginationNumbers: _this.pagination_numbers,
        scrollPerPageNav: true,
        slideSpeed: 800,
        autoHeight: false,
        autoPlay: _this.autoplay(),
        afterInit: function() {},
        afterAction: function() {
          _this.alignPlayButton();
          _this.active_index = _this.getActiveIndex();
          _this.updateContextMenu(_this.active_index);
          _this.formatPaginationNumbers();
          return _this.pauseMedia();
        }
      });
      if (_this.navigation) {
        slider.find('.owl-prev').html('<svg class="icon--root icon--chevron-left" viewBox="0 0 12 20"> <path d="M2.648 10l8.613-8.614L9.99.114.102 10l9.887 9.886 1.272-1.272z" fill-rule="nonzero" /> </svg>');
        slider.find('.owl-next').html('<svg class="icon--root icon--chevron-right" viewBox="0 0 12 20"> <path d="M8.716 10L.102 18.614l1.273 1.272L11.261 10 1.375.114.102 1.386z" fill-rule="nonzero" /> </svg>');
      }
      return slider;
    };

    FrameworkSlider.prototype.getActiveIndex = function() {
      return this.container.find('.owl-pagination .owl-page.active').index();
    };

    FrameworkSlider.prototype.formatPaginationNumbers = function() {
      return this.container.find('.owl-page.active .owl-numbers').text((this.active_index + 1) + "/" + this.slide_length);
    };

    FrameworkSlider.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    FrameworkSlider.prototype.updateContextMenu = function(index) {
      var context_navigation, type_class;
      if (this.news_panel) {
        type_class = '.' + this.container.find('.slide').eq(index).data('feed-type');
        context_navigation = this.container.closest('.template--index--news').find('.context-navigation');
        context_navigation.find('.item').hide();
        return context_navigation.find(type_class).show();
      }
    };

    FrameworkSlider.prototype.alignPlayButton = function() {
      var play_button, play_button_height, slide, slide_height, video_offset;
      slide = this.container.find('.owl-item').eq(this.active_index);
      play_button = slide.find('.play-button');
      if (play_button.length === 0) {
        return;
      }
      play_button.css('visibility', 'hidden');
      if (PAGE.hasClass('transparent-menu') && $('.header--root').css('position') === 'absolute') {
        slide_height = slide.outerHeight();
        play_button_height = play_button.outerHeight();
        video_offset = (slide_height - play_button_height) / 2;
        play_button.css({
          'margin-top': 0,
          'top': video_offset
        });
      } else {
        play_button.css({
          'margin-top': '-40px',
          'top': '50%'
        });
      }
      return play_button.css('visibility', 'visible');
    };

    FrameworkSlider.prototype.pauseMedia = function() {
      var _this;
      _this = this;
      _this.media = '.product-video--root, .product-model--root';
      return _this.container.find(_this.media).trigger('pause-media');
    };

    FrameworkSlider.prototype.eventListeners = function() {
      var _this;
      _this = this;
      this.container.find(".play-button").on('click', function() {
        var video_modal;
        video_modal = new VideoModal($(this).closest('.video'));
        video_modal.open();
        _this.owl.stop();
        return false;
      });
      return this.container.find('.owl-pagination .owl-page, .skip-to-next').on('click', function() {
        _this.owl.next();
        return false;
      });
    };

    return FrameworkSlider;

  })();

  theme.classes.FrameworkStickyColumn = (function() {
    function FrameworkStickyColumn(container1, column_a, column_b, mq) {
      this.container = container1;
      this.column_a = column_a;
      this.column_b = column_b;
      this.mq = mq;
      this.Listeners = bind(this.Listeners, this);
      this.setColumnPosition = bind(this.setColumnPosition, this);
      this.getAlignment = bind(this.getAlignment, this);
      this.getState = bind(this.getState, this);
      this.resetLargerColumn = bind(this.resetLargerColumn, this);
      this.getSmallerColumn = bind(this.getSmallerColumn, this);
      this.heightsHaveChanged = bind(this.heightsHaveChanged, this);
      this.setHeights = bind(this.setHeights, this);
      this.loadColumns = bind(this.loadColumns, this);
      if (Modernizr.touchevents) {
        return false;
      }
      this.current_state = 'auto';
      this.column_a_height = 0;
      this.column_b_height = 0;
      this.loadColumns();
    }

    FrameworkStickyColumn.prototype.loadColumns = function() {
      var _this;
      _this = this;
      return theme.utils.imagesLoaded(_this.container, function() {
        _this.Listeners();
        return _this.setColumnPosition();
      });
    };

    FrameworkStickyColumn.prototype.setHeights = function() {
      this.column_a_height = this.column_a.outerHeight();
      return this.column_b_height = this.column_b.outerHeight();
    };

    FrameworkStickyColumn.prototype.heightsHaveChanged = function() {
      if (this.column_a.outerHeight() !== this.column_a_height) {
        this.setHeights();
        return true;
      }
      if (this.column_b.outerHeight() !== this.column_b_height) {
        this.setHeights();
        return true;
      }
      return false;
    };

    FrameworkStickyColumn.prototype.getSmallerColumn = function() {
      if (this.column_a_height < this.column_b_height) {
        return this.column_a;
      } else {
        return this.column_b;
      }
    };

    FrameworkStickyColumn.prototype.resetLargerColumn = function() {
      if (this.column_a_height > this.column_b_height) {
        return this.column_a.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else {
        return this.column_b.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      }
    };

    FrameworkStickyColumn.prototype.getState = function(scroll_pos, window_height, column) {
      var column_height, height_for_bottom, overflowing_column, state;
      state = 'auto';
      if (this.mq.current_window === 'small') {
        return 'auto';
      }
      column_height = column.outerHeight();
      if (window_height > column_height) {
        overflowing_column = true;
      }
      if (scroll_pos < this.container.offset().top) {
        state = 'auto';
      }
      if (overflowing_column) {
        height_for_bottom = column_height;
      } else {
        height_for_bottom = window_height;
      }
      if ((scroll_pos + height_for_bottom) > (this.container.offset().top + this.container.outerHeight())) {
        state = 'absolute-bottom';
      } else if (scroll_pos > this.container.offset().top && overflowing_column) {
        state = 'fixed-top';
      } else if (window_height < column_height && (scroll_pos + window_height) > (this.container.offset().top + column.outerHeight())) {
        state = 'fixed-bottom';
      }
      return state;
    };

    FrameworkStickyColumn.prototype.getAlignment = function(column) {
      if (column.hasClass('column-a')) {
        return 'left';
      } else if (column.hasClass('column-b')) {
        return 'right';
      }
    };

    FrameworkStickyColumn.prototype.setColumnPosition = function() {
      var _this, align, column, state;
      _this = this;
      _this.setHeights();
      column = _this.getSmallerColumn();
      state = _this.getState($(window).scrollTop(), $(window).height(), column);
      align = _this.getAlignment(column);
      if (state === 'auto' && this.current_state !== 'auto') {
        this.current_state = 'auto';
        column.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else if (state === 'fixed-bottom' && this.current_state !== 'fixed-bottom') {
        this.current_state = 'fixed-bottom';
        column.css({
          'position': 'fixed',
          'top': 'auto',
          'bottom': 0
        });
      } else if (state === 'fixed-top' && this.current_state !== 'fixed-top') {
        this.current_state = 'fixed-top';
        column.css({
          'position': 'fixed',
          'top': 0,
          'bottom': 'auto'
        });
      } else if (state === 'absolute-bottom' && this.current_state !== 'absolute-bottom') {
        this.current_state = 'absolute-bottom';
        column.css({
          'position': 'absolute',
          'top': 'auto',
          'bottom': 0
        });
      }
      if (align === 'right') {
        return column.css({
          'right': 0
        });
      }
    };

    FrameworkStickyColumn.prototype.Listeners = function() {
      var _this;
      _this = this;
      $(window).on('scroll', function() {
        return _this.setColumnPosition();
      });
      setInterval(function() {
        if (_this.heightsHaveChanged()) {
          _this.resetLargerColumn();
          return _this.setColumnPosition();
        }
      }, 250);
      return $(window).on('resize', function() {
        _this.resetLargerColumn();
        return _this.setColumnPosition();
      });
    };

    return FrameworkStickyColumn;

  })();

  theme.classes.FrameworkUtils = (function() {
    function FrameworkUtils() {
      this.formatMoney = bind(this.formatMoney, this);
      this.insertScript = bind(this.insertScript, this);
      this.insertStylesheet = bind(this.insertStylesheet, this);
      var _this;
      _this = this;
      _this.google_map_api_status = null;
      cssVars();
    }

    FrameworkUtils.prototype.a11yClick = function(event) {
      var code;
      if (event.type === 'click') {
        return true;
      } else if (event.type === 'keypress') {
        code = event.charCode || event.keyCode;
        if (code === 32) {
          event.preventDefault();
        }
        if (code === 32 || code === 13) {
          return true;
        }
      }
      return false;
    };

    FrameworkUtils.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkUtils.prototype.imagesLoaded = function(selector, callback) {
      var count, images_length;
      count = 0;
      images_length = selector.find('img[data-sizes="auto"]').length;
      if (images_length < 1) {
        callback();
        return;
      }
      return selector.on('lazybeforeunveil', function(e) {
        return $(e.target).one('load', function() {
          count++;
          if (count === images_length) {
            return callback();
          }
        });
      });
    };

    FrameworkUtils.prototype.matchImageHeights = function(container, items, image_class) {
      var _this, greatest_image_height, items_per_row, row_items;
      _this = this;
      items_per_row = Math.round(container.width() / items.first().outerWidth());
      greatest_image_height = 0;
      row_items = $();
      items.find(image_class).css('height', 'auto');
      items.find('.placeholder--root').css('height', 'auto');
      return items.each(function(index) {
        var this_height;
        if ($(this).find('.image--root').length > 0) {
          this_height = $(this).find(image_class + " .image--root").outerHeight();
        } else {
          this_height = $(this).find('.placeholder--root').outerHeight();
        }
        row_items = row_items.add($(this));
        if (this_height > greatest_image_height) {
          greatest_image_height = this_height;
        }
        if (index % items_per_row === items_per_row - 1 || index + 1 === items.length) {
          row_items.find(image_class + ", .placeholder--root").height(greatest_image_height);
          greatest_image_height = 0;
          return row_items = $();
        }
      });
    };

    FrameworkUtils.prototype.insertStylesheet = function(src) {
      var _this, stylesheet;
      _this = this;
      stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = src;
      return document.head.appendChild(stylesheet);
    };

    FrameworkUtils.prototype.insertScript = function(src, callback) {
      var _this, script;
      _this = this;
      script = document.createElement('script');
      script.src = src;
      if (callback) {
        script.onload = callback;
      }
      return document.body.appendChild(script);
    };

    FrameworkUtils.prototype.isNaN = function(num) {
      var _this;
      _this = this;
      return num !== num;
    };

    FrameworkUtils.prototype.formatMoney = function(raw_amount) {
      var _this;
      _this = this;
      return Shopify.formatMoney(raw_amount, theme.shop.money_format);
    };

    return FrameworkUtils;

  })();

  theme.classes.FrameworkXMenu = (function() {
    function FrameworkXMenu(root) {
      var _this;
      this.root = root;
      this.slideUp = bind(this.slideUp, this);
      this.slideDown = bind(this.slideDown, this);
      this.arrangeMegaNav = bind(this.arrangeMegaNav, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.debugging = false;
      _this.state = 'closed';
      _this.parent_links = _this.root.find('.x-menu--level-1--link > a');
      _this.sub_menu_links = _this.root.find('.x-menu--level-1--link:not([data-x-menu--depth="1"]) > a');
      _this.sub_menu_items = _this.sub_menu_links.parent().find('ul a');
      _this.parents_with_sub_menu = _this.sub_menu_links.parent();
      _this.overlap_parent = _this.root.data('x-menu--overlap-parent');
      _this.load();
    }

    FrameworkXMenu.prototype.load = function() {
      var _this;
      _this = this;
      _this.arrangeMegaNav();
      _this.listeners();
      _this.checkOverlap();
      return _this.resizeListeners();
    };

    FrameworkXMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.parents_with_sub_menu.on('mouseenter.XMenu', function(e) {
        return _this.slideDown($(this).find('> a'));
      });
      _this.parents_with_sub_menu.on('mouseleave.XMenu', function() {
        return _this.slideUp();
      });
      _this.parent_links.on('focus', function(e) {
        return _this.slideUp();
      });
      _this.sub_menu_links.on('focus', function(e) {
        return _this.slideDown($(this));
      });
      return _this.sub_menu_links.on('touchstart.XMenu', function(e) {
        e.preventDefault();
        if ($(this).parent().attr('data-x-menu--open') === 'true') {
          return _this.slideUp();
        } else {
          return _this.slideDown($(this));
        }
      });
    };

    FrameworkXMenu.prototype.checkOverlap = function() {
      var _this, center_index, center_item, center_item_left_edge, center_item_right_edge, center_item_width, container, container_width, first_center_child, last_center_child, left_break_point, left_item, right_item, right_item_edge;
      _this = this;
      if (Modernizr.touchevents && theme.utils.mqs.current_window !== 'large') {
        _this.root.attr('data-x-menu--overlap', 'true');
        return false;
      }
      _this.root.attr('data-x-menu--overlap', 'false');
      center_item = _this.root;
      if (_this.overlap_parent === 1) {
        center_item = center_item.parent();
      } else if (_this.overlap_parent === 2) {
        center_item = center_item.parent().parent();
      }
      container = center_item.parent();
      center_index = center_item.index();
      left_item = false;
      if (center_index > 1) {
        left_item = container.children().eq(center_index - 1);
      }
      right_item = false;
      if (center_index + 1 < container.children().length) {
        right_item = container.children().eq(center_index + 1);
      }
      container_width = container.width();
      center_item_width = _this.root.outerWidth();
      if (left_item) {
        first_center_child = center_item.find('> :first-child');
        center_item_left_edge = first_center_child.offset().left - 1;
        left_break_point = (container_width - center_item_width) / 2;
        if (left_edge >= center_item_left_edge) {
          _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
      if (right_item) {
        last_center_child = center_item.find('> :last-child');
        center_item_right_edge = last_center_child.outerWidth() + last_center_child.offset().left + 1;
        right_item_edge = right_item.offset().left;
        if (center_item_right_edge >= right_item_edge) {
          return _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
    };

    FrameworkXMenu.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.XMenu', _this.debounce(100, function() {
        return _this.checkOverlap();
      }));
    };

    FrameworkXMenu.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkXMenu.prototype.arrangeMegaNav = function() {
      var _this, mega_navs;
      _this = this;
      if (_this.parents_with_sub_menu.length === 0) {
        return false;
      }
      mega_navs = _this.root.find('[data-x-menu--depth="3"] .x-menu--level-2--container');
      return mega_navs.each(function() {
        var container, single_parents, single_parents_container;
        container = $(this);
        single_parents = container.find('[data-x-menu--single-parent="true"]');
        if (single_parents.length > 0) {
          single_parents_container = $('<div class="x-menu--single-parents"></div>').insertAfter(container.find('.x-menu--bg'));
          return single_parents_container.append('<ul>').find('ul').append(single_parents);
        }
      });
    };

    FrameworkXMenu.prototype.slideDown = function(link, delay) {
      var _this, display_type, link_wrapper, menu_height, sub_menu;
      if (delay == null) {
        delay = false;
      }
      _this = this;
      clearTimeout(_this.timer);
      link_wrapper = link.parent();
      if (link_wrapper.attr('data-x-menu--open') === 'true' || _this.state === 'closing') {
        return false;
      }
      _this.slideUp(false);
      if (delay && delay !== 'complete') {
        _this.timer = setTimeout(function() {
          return _this.slideDown(link, 'complete');
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.icon--chevron-up').show();
        link.closest('.x-menu--level-1--link').find('.icon--chevron-down').hide();
        link.closest('.x-menu--level-1--link').find('.icon--minus').show();
        link.closest('.x-menu--level-1--link').find('.icon--plus').hide();
        _this.state = 'open';
        link_wrapper.attr('data-x-menu--open', 'true');
        link.attr('aria-expanded', 'true');
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        display_type = 'block';
        if (link_wrapper.attr('data-x-menu--depth') === "3") {
          display_type = 'flex';
        }
        sub_menu.velocity('stop');
        sub_menu.css({
          height: 'auto',
          display: display_type
        });
        sub_menu.find('.x-menu--level-2--list').css({
          display: display_type
        });
        menu_height = sub_menu.outerHeight();
        sub_menu.css({
          height: 0,
          opacity: 1
        });
        sub_menu.velocity({
          height: [menu_height, 0]
        }, {
          queue: false,
          duration: 600,
          easing: "easeOutExpo"
        });
      }
    };

    FrameworkXMenu.prototype.slideUp = function(delay) {
      var _this, link, link_wrapper, sub_menu;
      if (delay == null) {
        delay = 300;
      }
      _this = this;
      if (_this.debugging) {
        return false;
      }
      link_wrapper = _this.parents_with_sub_menu.filter('[data-x-menu--open="true"]');
      link = link_wrapper.find('> a');
      if (link_wrapper.attr('data-x-menu--open') === 'false') {
        return false;
      }
      if (delay) {
        return _this.timer = setTimeout(function() {
          return _this.slideUp(false);
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.icon--chevron-up').hide();
        link.closest('.x-menu--level-1--link').find('.icon--chevron-down').show();
        link.closest('.x-menu--level-1--link').find('.icon--minus').hide();
        link.closest('.x-menu--level-1--link').find('.icon--plus').show();
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        link_wrapper.attr('data-x-menu--open', 'false');
        link.attr('aria-expanded', 'false');
        return sub_menu.velocity({
          opacity: 0
        }, {
          begin: function() {
            return _this.state = 'closing';
          },
          complete: function() {
            sub_menu.css({
              'display': 'none'
            });
            return _this.state = 'closed';
          },
          duration: 200
        });
      }
    };

    return FrameworkXMenu;

  })();

  theme.classes.FrameworkYMenu = (function() {
    function FrameworkYMenu(root) {
      var _this;
      this.root = root;
      this.slideRight = bind(this.slideRight, this);
      this.slideLeft = bind(this.slideLeft, this);
      this.adjustHeight = bind(this.adjustHeight, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.state = 'closed';
      _this.sub_menu_links = _this.root.find('.icon--chevron-right--small').parent();
      _this.back_links = _this.root.find('.y-menu--back-link a');
      _this.regular_links = _this.root.find('.y-menu--level-1--link > a:not([data-submenu="true"]), .y-menu--level-2--link > a:not([data-submenu="true"]), .y-menu--level-3--link > a:not([data-submenu="true"])');
      _this.timer = null;
      _this.load();
    }

    FrameworkYMenu.prototype.load = function() {
      var _this;
      _this = this;
      return _this.listeners();
    };

    FrameworkYMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.regular_links.on('click', function(e) {
        var href;
        href = $(this).attr('href');
        if (href.indexOf('#') !== -1) {
          if (theme.partials.OffCanvas.state === 'left-open') {
            theme.partials.OffCanvas.closeLeft();
          } else if (theme.partials.OffCanvas.state === 'right-open') {
            theme.partials.OffCanvas.closeRight();
          }
          setTimeout(function() {
            return window.top.location.href = href;
          }, 450);
        }
      });
      _this.sub_menu_links.on('click', function(e) {
        _this.slideLeft($(this));
        return false;
      });
      return _this.back_links.on('click', function(e) {
        _this.slideRight($(this));
        return false;
      });
    };

    FrameworkYMenu.prototype.adjustHeight = function(open_list) {
      var _this, current_height, open_list_height;
      _this = this;
      _this.root.css({
        height: 'auto'
      });
      current_height = _this.root.outerHeight();
      open_list_height = open_list.outerHeight();
      if (open_list.css('position') === 'absolute') {
        open_list.css('position', 'relative');
        open_list_height = open_list.outerHeight();
        open_list.css('position', 'absolute');
      }
      return _this.root.velocity({
        height: open_list_height
      });
    };

    FrameworkYMenu.prototype.slideLeft = function(link) {
      var _this, sub_menu;
      _this = this;
      sub_menu = link.closest('li').find('ul').first();
      sub_menu.css({
        display: 'block'
      });
      _this.adjustHeight(sub_menu);
      return sub_menu.velocity({
        translateX: ['-100%', 0]
      });
    };

    FrameworkYMenu.prototype.slideRight = function(link) {
      var _this, container, parent_container;
      _this = this;
      container = link.closest('ul');
      parent_container = container.parent().closest('ul');
      _this.adjustHeight(parent_container);
      return container.velocity({
        translateX: [0, '-100%']
      });
    };

    return FrameworkYMenu;

  })();

  theme.classes.Article = (function(superClass) {
    extend(Article, superClass);

    function Article() {
      return Article.__super__.constructor.apply(this, arguments);
    }

    return Article;

  })(theme.classes.FrameworkArticle);

  theme.classes.Cart = (function(superClass) {
    extend(Cart, superClass);

    function Cart() {
      this.updateTotalsComplete = bind(this.updateTotalsComplete, this);
      return Cart.__super__.constructor.apply(this, arguments);
    }

    Cart.prototype.updateTotalsComplete = function(count) {
      var _this;
      _this = this;
      if (count > 0) {
        _this.total_item_count.css('display', 'inline-block');
        return _this.total_item_count.parent().show();
      } else {
        _this.total_item_count.not('.header--mobile-cart-count').hide();
        return _this.total_item_count.not('.header--mobile-cart-count').parent().hide();
      }
    };

    return Cart;

  })(theme.classes.FrameworkCart);

  theme.classes.FeaturedProduct = (function(superClass) {
    extend(FeaturedProduct, superClass);

    function FeaturedProduct() {
      return FeaturedProduct.__super__.constructor.apply(this, arguments);
    }

    return FeaturedProduct;

  })(theme.classes.FrameworkFeaturedProduct);

  theme.classes.FeaturedVideo = (function(superClass) {
    extend(FeaturedVideo, superClass);

    function FeaturedVideo() {
      return FeaturedVideo.__super__.constructor.apply(this, arguments);
    }

    return FeaturedVideo;

  })(theme.classes.FrameworkFeaturedVideo);

  theme.classes.Footer = (function(superClass) {
    extend(Footer, superClass);

    function Footer() {
      return Footer.__super__.constructor.apply(this, arguments);
    }

    return Footer;

  })(theme.classes.FrameworkFooter);

  theme.classes.Slideshow = (function() {
    function Slideshow(root) {
      var _this, slide_parent;
      this.root = root;
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.alignCaption = bind(this.alignCaption, this);
      this.isFirstSlider = bind(this.isFirstSlider, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.autoplay = bind(this.autoplay, this);
      this.createSlider = bind(this.createSlider, this);
      _this = this;
      this.el = _this.root.find('.slides');
      slide_parent = this.el.closest('.slider');
      this.autoplay_enabled = slide_parent.data('autoplay');
      if (slide_parent.find('.slide').length < 2) {
        this.autoplay_enabled = false;
      }
      this.autoplay_frequency = slide_parent.data('rotateFrequency');
      this.transition_style = slide_parent.data('transitionStyle');
      this.createSlider();
      this.owl = $(".owl-carousel").data('owlCarousel');
    }

    Slideshow.prototype.createSlider = function() {
      var slider, slider_options;
      slider = this;
      slider_options = {
        singleItem: true,
        navigation: false,
        paginationNumbers: false,
        scrollPerPageNav: true,
        slideSpeed: 800,
        pagination: true,
        autoHeight: true,
        autoPlay: slider.autoplay(),
        afterInit: function() {
          return slider.eventListeners();
        },
        afterAction: function() {
          slider.alignCaption();
          return slider.alignPlayButton();
        }
      };
      if (this.transition_style !== 'default') {
        slider_options['transitionStyle'] = this.transition_style;
      }
      return slider.el.owlCarousel(slider_options);
    };

    Slideshow.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    Slideshow.prototype.getActiveIndex = function() {
      return this.el.find('.owl-pagination .owl-page.active').index();
    };

    Slideshow.prototype.isFirstSlider = function() {
      var current_section_id, first_section, first_section_id;
      first_section = $('.index-sections').children('div:first');
      first_section_id = first_section.find('.slider').data('sectionId');
      current_section_id = this.el.closest('.slider').data('sectionId');
      if (first_section.hasClass('section--slideshow')) {
        return current_section_id === first_section_id;
      }
      return false;
    };

    Slideshow.prototype.alignCaption = function() {
      var caption, caption_height, caption_width, left_offset, middle_top, slide, slide_height, slide_padding, slide_width, top_offset;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      caption = slide.find('.caption');
      caption.css('visibility', 'hidden');
      caption_height = caption.outerHeight();
      caption_width = caption.outerWidth();
      slide_padding = 30;
      slide_height = slide.outerHeight();
      slide_width = slide.outerWidth();
      top_offset = 0;
      if (caption.hasClass('top')) {
        caption.css('top', top_offset + slide_padding);
      } else if (caption.hasClass('middle')) {
        middle_top = top_offset + (slide_height - top_offset - caption_height) / 2;
        caption.css('top', middle_top);
      }
      if (caption.hasClass('center')) {
        left_offset = (slide_width - caption_width) / 2;
        caption.css('left', left_offset);
      }
      return caption.css('visibility', 'visible');
    };

    Slideshow.prototype.alignPlayButton = function() {
      var play_button, slide;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      play_button = slide.find('.play-button');
      play_button.css('visibility', 'hidden');
      play_button.css({
        'margin-top': '-40px',
        'top': '50%'
      });
      return play_button.css('visibility', 'visible');
    };

    Slideshow.prototype.eventListeners = function() {
      var slider;
      slider = this;
      return this.el.find('.owl-pagination .owl-page').on('click', function() {
        return slider.owl.stop();
      });
    };

    return Slideshow;

  })();

  theme.classes.Header = (function() {
    function Header(root) {
      var _this;
      this.root = root;
      this.moveYMenu = bind(this.moveYMenu, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    Header.prototype.load = function() {
      var _this;
      _this = this;
      _this.moveYMenu();
      if ($('.modal.window').css('display') === 'block') {
        $('.modal.window .close').trigger('click');
      }
      return _this.root.on('theme:section:load', function() {
        theme.partials.OffCanvas.unload();
        return theme.partials.OffCanvas.load();
      });
    };

    Header.prototype.moveYMenu = function() {
      var _this;
      _this = this;
      $('.mobile-nav--menu').empty();
      return $('.y-menu').appendTo('.mobile-nav--menu');
    };

    return Header;

  })();

  theme.classes.Localization = (function(superClass) {
    extend(Localization, superClass);

    function Localization() {
      return Localization.__super__.constructor.apply(this, arguments);
    }

    return Localization;

  })(theme.classes.FrameworkLocalization);

  theme.classes.OffCanvas = (function(superClass) {
    extend(OffCanvas, superClass);

    function OffCanvas(root) {
      this.root = root;
      OffCanvas.__super__.constructor.apply(this, arguments);
    }

    return OffCanvas;

  })(theme.classes.FrameworkOffCanvas);

  theme.classes.Popup = (function() {
    function Popup(root) {
      var _this;
      this.root = root;
      _this = this;
      _this.container = _this.root.find('.popup--container');
      _this.open_link = $('.popup--open');
      _this.close_link = _this.root.find('.popup--close');
      _this.show_again_after = _this.root.data('show-again-after');
      _this.mode = _this.root.data('mode');
      _this.newsletter_form = _this.root.find('#contact_form');
      _this.body = $('body');
      _this.eventListeners();
      _this.autoPopup();
    }

    Popup.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.open_link.on('keypress.Popup, click.Popup', function(e) {
        if (_this.body.hasClass('popup--opened')) {
          _this.close();
        } else {
          _this.open();
        }
        return false;
      });
      _this.close_link.on('keypress.Popup, click.Popup', function(e) {
        _this.close();
        return false;
      });
      return _this.newsletter_form.on('submit', function(event) {
        var form, form_dom;
        form_dom = this;
        form = $(this);
        form.find('.error, .success').remove();
        event.preventDefault();
        if (form.find('input[type="email"]').val().length === 0) {
          form.prepend("<p class='error'>" + theme.translations.mailing_list_email_blank + "</p>");
          return false;
        } else {
          form.find('input[type="email"], input[type="submit"]').hide();
          form.prepend("<p class='success'>" + theme.translations.mailing_list_success_message + "</p>").show();
          setTimeout(function() {
            return form_dom.submit();
          }, 500);
        }
        return false;
      });
    };

    Popup.prototype.open = function(source) {
      var _this;
      _this = this;
      _this.container.removeClass('popup--closed');
      _this.container.velocity({
        translateY: [0, _this.container.outerHeight()]
      }, {
        duration: 300
      });
      _this.body.addClass('popup--opened');
      return setTimeout(function() {
        return _this.body.css('padding-bottom', _this.container.outerHeight());
      }, 300);
    };

    Popup.prototype.delayUntilValidScrollPosition = function() {
      var _this;
      _this = this;
      return $(window).on("DOMMouseScroll.Popup mousewheel.Popup touchmove.Popup scroll.Popup touchmove.Popup", function(e) {
        var header_offset, scroll_top;
        header_offset = $('.header').offset().top;
        scroll_top = $(window).scrollTop();
        if (scroll_top > header_offset) {
          _this.open();
          return $(window).off("DOMMouseScroll.Popup mousewheel.Popup touchmove.Popup scroll.Popup touchmove.Popup");
        }
      });
    };

    Popup.prototype.close = function() {
      var _this;
      _this = this;
      _this.body.removeClass('popup--opened');
      _this.body.velocity({
        paddingBottom: 0
      }, {
        duration: 300
      });
      return _this.container.velocity({
        translateY: [_this.container.outerHeight(), 0]
      }, {
        duration: 300,
        complete: function() {
          return _this.container.addClass('popup--closed');
        }
      });
    };

    Popup.prototype.autoPopup = function() {
      var _this;
      _this = this;
      if (_this.mode === 'manual') {
        return;
      }
      if (!Modernizr.localstorage || _this.mode === 'test') {
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      } else if (localStorage['troop-themes'] === void 0) {
        _this.setResetTime();
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      } else if (_this.readyToReset()) {
        _this.setResetTime();
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      }
    };

    Popup.prototype.readyToReset = function() {
      var _this, expires, now, troop_local_storage;
      _this = this;
      troop_local_storage = JSON.parse(localStorage['troop-themes']);
      expires = troop_local_storage.popup_expires;
      now = new Date().getTime();
      if (parseFloat(expires - now) <= 0) {
        _this.setResetTime();
        return true;
      }
      return false;
    };

    Popup.prototype.setResetTime = function() {
      var _this, date, expires, object, seconds_from_now;
      _this = this;
      date = new Date();
      seconds_from_now = 1000 * 60 * 60 * 24 * _this.show_again_after;
      expires = date.setTime(date.getTime() + seconds_from_now);
      object = {
        popup_expires: expires
      };
      localStorage['troop-themes'] = JSON.stringify(object);
      return _this;
    };

    return Popup;

  })();

  theme.classes.ProductModel = (function(superClass) {
    extend(ProductModel, superClass);

    function ProductModel() {
      return ProductModel.__super__.constructor.apply(this, arguments);
    }

    return ProductModel;

  })(theme.classes.FrameworkProductModel);

  theme.classes.ProductRecommendations = (function(superClass) {
    extend(ProductRecommendations, superClass);

    function ProductRecommendations() {
      return ProductRecommendations.__super__.constructor.apply(this, arguments);
    }

    return ProductRecommendations;

  })(theme.classes.FrameworkProductRecommendations);

  theme.classes.ProductVideo = (function(superClass) {
    extend(ProductVideo, superClass);

    function ProductVideo() {
      return ProductVideo.__super__.constructor.apply(this, arguments);
    }

    return ProductVideo;

  })(theme.classes.FrameworkProductVideo);

  theme.classes.XMenu = (function(superClass) {
    extend(XMenu, superClass);

    function XMenu(root) {
      var _this;
      this.root = root;
      this.checkOverlap = bind(this.checkOverlap, this);
      this.alignSubmenus = bind(this.alignSubmenus, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.cart_count = $('.header--cart-count');
      _this.hide_when_overlapping = $('.layout--header .layout--login, .layout--header .popup--open, .layout--header .cart-link, .layout--header .header--search');
      XMenu.__super__.constructor.apply(this, arguments);
    }

    XMenu.prototype.load = function() {
      var _this;
      _this = this;
      XMenu.__super__.load.apply(this, arguments);
      return _this.alignSubmenus();
    };

    XMenu.prototype.alignSubmenus = function() {
      var _this, logo, logo_offset, sub_menus;
      _this = this;
      logo = $('.layout--header .fw--logo');
      logo_offset = logo.outerWidth();
      sub_menus = _this.root.find('[data-x-menu--depth="3"] .x-menu--level-2--container');
      return sub_menus.each(function() {
        return $(this).css({
          left: logo_offset,
          width: "calc(100% - " + logo_offset + "px)"
        });
      });
    };

    XMenu.prototype.checkOverlap = function() {
      var _this, header;
      _this = this;
      header = $('.layout--header');
      _this.cart_count.attr('data-menu-overlap', 'false');
      header.attr('data-menu-overlap', 'false');
      _this.hide_when_overlapping.css({
        display: 'inline-block'
      });
      XMenu.__super__.checkOverlap.apply(this, arguments);
      if (_this.root.attr('data-x-menu--overlap') === 'true') {
        header.attr('data-menu-overlap', 'true');
        _this.hide_when_overlapping.hide();
        if (parseInt(_this.cart_count.find('.count').text()) > 0) {
          return _this.cart_count.attr('data-menu-overlap', 'true');
        }
      }
    };

    return XMenu;

  })(theme.classes.FrameworkXMenu);

  theme.classes.Blog = (function(superClass) {
    extend(Blog, superClass);

    function Blog() {
      return Blog.__super__.constructor.apply(this, arguments);
    }

    return Blog;

  })(theme.classes.FrameworkBlog);

  theme.classes.CollectionPage = (function() {
    function CollectionPage(root) {
      var _this;
      this.root = root;
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.product_grid = _this.root.find('.product-grid');
      _this.items = _this.product_grid.find('.block');
      _this.load();
    }

    CollectionPage.prototype.load = function() {
      var _this;
      _this = this;
      _this.eventListeners();
      return _this.matchImageHeights();
    };

    CollectionPage.prototype.eventListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.CollectionPage', function() {
        return _this.matchImageHeights();
      });
    };

    CollectionPage.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.product_grid, _this.items, '.product--image-wrapper');
    };

    return CollectionPage;

  })();

  theme.classes.IndexCollection = (function() {
    function IndexCollection(container1) {
      var _this;
      this.container = container1;
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    IndexCollection.prototype.load = function() {
      var _this;
      _this = this;
      return _this.container.on('theme:section:load', function() {
        return $(_this.container.find('.fw--align--fill-y--dynamic')).each(function() {
          return new FrameworkAlign($(this), 'fill-y--dynamic');
        });
      });
    };

    return IndexCollection;

  })();

  theme.classes.ProductPage = (function() {
    function ProductPage(root) {
      var _this;
      this.root = root;
      this.pauseOtherMedia = bind(this.pauseOtherMedia, this);
      this.initiateVariants = bind(this.initiateVariants, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.swapMedia = bind(this.swapMedia, this);
      this.updateVariantImage = bind(this.updateVariantImage, this);
      this.addProductComplete = bind(this.addProductComplete, this);
      this.addToCartListener = bind(this.addToCartListener, this);
      this.quantityListeners = bind(this.quantityListeners, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.copyLink = bind(this.copyLink, this);
      this.reorderModalImages = bind(this.reorderModalImages, this);
      this.balanceColumns = bind(this.balanceColumns, this);
      this.indexContentBlocks = bind(this.indexContentBlocks, this);
      this.load = bind(this.load, this);
      _this = this;
      if (_this.root.hasClass('partial--product')) {
        _this.product = _this.root;
      } else {
        _this.product = _this.root.find('.partial--product');
      }
      _this.form = _this.product.find('.add-to-cart form');
      _this.add_button = _this.product.find('button.add');
      _this.compare_price = _this.product.find('.compare-price');
      _this.actual_price = _this.product.find('.actual-price');
      _this.product_unavailable = _this.product.find('.product-unavailable');
      _this.quantity = _this.product.find('.quantity');
      _this.handle = _this.product.data('handle');
      _this.id = _this.product.data('id');
      _this.view = _this.product.data('view');
      _this.smart_payment_buttons = _this.root.find('.product-page--smart-payment-buttons');
      _this.load();
    }

    ProductPage.prototype.load = function() {
      var _this;
      _this = this;
      _this.initiateVariants();
      _this.quantityListeners();
      _this.indexContentBlocks();
      _this.copyLink();
      _this.balanceColumns();
      _this.reorderModalImages();
      _this.resizeListeners();
      _this.pauseOtherMedia();
      if (theme.settings.cart_type === 'drawer') {
        _this.addToCartListener();
      }
      return _this.root.on('theme:section:load', function() {
        new Shopify.OptionSelectors("product-select-" + theme.product.id, {
          product: theme.product.json,
          onVariantSelected: _this.variantSelected,
          enableHistoryState: true
        });
        return _this.root.find('.fw--align--right').each(function() {
          return new FrameworkAlign($(this), 'right');
        });
      });
    };

    ProductPage.prototype.indexContentBlocks = function() {
      var content_blocks;
      content_blocks = $('.layout--main-content .product .content .block');
      return content_blocks.each(function(index) {
        return $(this).attr('data-block-index', index);
      });
    };

    ProductPage.prototype.balanceColumns = function() {
      var _this, content, content_blocks, image_count, images, left_side, right_side, single_column;
      _this = this;
      images = $('.layout--main-content .product .content .product-page--media');
      content = $('.layout--main-content .product .content');
      single_column = content.find('.single-column');
      content_blocks = content.find('.block');
      left_side = content.find('.left-side');
      right_side = content.find('.right-side');
      image_count = content.find('.photo:not(.hidden-variant-image)').length;
      if (content_blocks.find('iframe').length && theme.utils.mqs.current_window !== 'small' && left_side.children().length) {
        return false;
      }
      content_blocks.sort(function(a, b) {
        return +a.getAttribute('data-block-index') - +b.getAttribute('data-block-index');
      }).appendTo(single_column);
      single_column.show();
      left_side.hide();
      right_side.hide();
      if (image_count > 0 && theme.utils.mqs.current_window !== 'small') {
        content_blocks.each(function(index) {
          var left_height, right_height;
          left_height = left_side.outerHeight();
          right_height = right_side.outerHeight();
          if (left_height <= right_height) {
            return $(this).appendTo(left_side);
          } else {
            return $(this).appendTo(right_side);
          }
        });
        single_column.hide();
        left_side.show();
        return right_side.show();
      }
    };

    ProductPage.prototype.reorderModalImages = function() {
      var _this, modal_content_wrapper, modal_images, product_images;
      _this = this;
      product_images = _this.root.find('.modal--root >:not(.modal--content-wrapper) .product-page--media');
      modal_images = _this.root.find('.modal--root .modal--content .product-page--media');
      modal_content_wrapper = _this.root.find('.modal--content-wrapper');
      return product_images.each(function() {
        var modal_content;
        modal_content = modal_images.filter("[data-id='" + ($(this).data('id')) + "']").closest('.modal--content');
        return modal_content_wrapper.append(modal_content);
      });
    };

    ProductPage.prototype.copyLink = function() {
      var copy_link, copy_link_textarea;
      copy_link = $('.partial--social-media .copy-link a');
      copy_link_textarea = copy_link.parent().find('textarea');
      copy_link.on('click', function() {
        copy_link_textarea.toggle();
        copy_link_textarea.focus();
        return false;
      });
      return copy_link.parent().find('textarea').on('focus', function() {
        var $this;
        $this = $(this);
        $this.select();
        return $this.on('mouseup', function() {
          $this.unbind("mouseup");
          return false;
        });
      });
    };

    ProductPage.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.TemplateProduct', function() {
        _this.balanceColumns();
        return _this.reorderModalImages();
      });
    };

    ProductPage.prototype.quantityListeners = function() {
      var _this;
      _this = this;
      _this.quantity.find('.plus').on('click.PartialProduct', function() {
        var input;
        input = _this.quantity.find('input');
        return input.val(1 + parseInt(input.val()));
      });
      return _this.quantity.find('.minus').on('click.PartialProduct', function() {
        var input;
        input = _this.quantity.find('input');
        if (parseInt(input.val()) > 1) {
          return input.val(parseInt(input.val()) - 1);
        }
      });
    };

    ProductPage.prototype.addToCartListener = function() {
      var _this;
      _this = this;
      if (_this.form.length > 0 && theme.settings.cart_type === 'drawer') {
        return _this.form.on('submit', function() {
          _this.form.find('p.error').remove();
          _this.add_button.addClass('loading');
          theme.partials.Cart.addItem($(this), function(success, error) {
            if (success) {
              return theme.partials.Cart.updateAllHtml(function() {
                return _this.addProductComplete();
              });
            } else {
              _this.form.append("<p class='error'>" + error + "</p>");
              return _this.add_button.removeClass('loading');
            }
          });
          return false;
        });
      }
    };

    ProductPage.prototype.addProductComplete = function() {
      var _this;
      _this = this;
      _this.add_button.removeClass('loading');
      return $('[data-off-canvas--open="right-sidebar"]').first().trigger('click');
    };

    ProductPage.prototype.updateVariantImage = function(variant_id) {
      var _this, featured_media, modal_images, new_featured_media, new_first_modal_image, other_media, product;
      _this = this;
      product = $('.product');
      featured_media = product.find('.product-page--featured-media .product-page--media');
      other_media = product.find('.content .image-wrapper .product-page--media');
      modal_images = product.closest('.modal--root').find('.modal--content .product-page--media');
      if (variant_id && variant_id !== parseInt(featured_media.data('id'))) {
        new_featured_media = other_media.filter("[data-id='" + variant_id + "']");
        new_first_modal_image = modal_images.filter("[data-id='" + variant_id + "']");
        _this.swapMedia(featured_media, new_featured_media);
        _this.swapMedia(modal_images.first(), new_first_modal_image);
        _this.balanceColumns();
        _this.reorderModalImages();
      }
    };

    ProductPage.prototype.swapMedia = function(media_1, media_2) {
      var _this, media_1_clone, media_2_clone;
      _this = this;
      media_1_clone = media_1.clone();
      media_2_clone = media_2.clone();
      media_1.replaceWith(media_2_clone);
      return media_2.replaceWith(media_1_clone);
    };

    ProductPage.prototype.variantSelected = function(variant, selector, options) {
      var _this, product, product_title, product_variant_size;
      _this = this;
      product = $("#" + selector.domIdPrefix).closest('.partial--product');
      product_variant_size = product.data('variants-size');
      product_title = product.closest('.product').find('.details .title').html();
      _this.compare_price.html("");
      if (variant && variant.available) {
        _this.quantity.show();
        _this.add_button.show();
        _this.product_unavailable.hide();
        _this.smart_payment_buttons.show();
      } else {
        _this.quantity.hide();
        _this.add_button.hide();
        _this.smart_payment_buttons.hide();
        _this.product_unavailable.show();
        if (product_variant_size > 1 && variant) {
          _this.product_unavailable.find('form .email-body').attr('value', theme.translations.products_sold_out_email_description + ": " + product_title + " - " + variant.title);
        }
      }
      if (variant) {
        _this.actual_price.html(theme.utils.formatMoney(variant.price));
        if (variant.compare_at_price > variant.price) {
          _this.compare_price.html(theme.utils.formatMoney(variant.compare_at_price));
        }
        if (_this.view === 'product-page') {
          if (variant.featured_media) {
            _this.updateVariantImage(variant.featured_media.id);
          } else {
            _this.updateVariantImage(0);
          }
        }
      }
    };

    ProductPage.prototype.initiateVariants = function(json) {
      var _this, duplicate_exists, history_state, variant_id;
      _this = this;
      if (!$('.template--product').length) {
        variant_id = "product-select-" + _this.id;
        duplicate_exists = false;
        if ($.inArray(variant_id, theme.variant_id_list) === -1) {
          theme.variant_id_list.push(variant_id);
        } else {
          duplicate_exists = true;
          $("#" + variant_id).first().attr("id", variant_id + "--disabled");
        }
        history_state = false;
        if (_this.view === 'product-page') {
          history_state = true;
        }
        if (_this.product.find('select').length > 0) {
          new Shopify.OptionSelectors(variant_id, {
            product: theme.product_json[_this.id],
            onVariantSelected: _this.variantSelected,
            enableHistoryState: history_state
          });
        }
        if (duplicate_exists) {
          return $("#" + variant_id + "--disabled").first().attr("id", variant_id);
        }
      }
    };

    ProductPage.prototype.pauseOtherMedia = function() {
      var _this;
      _this = this;
      return _this.root.find('.product-page--media > *').on('click', function() {
        return _this.root.find('.product-page--media > *').not(this).trigger('pause-media');
      });
    };

    return ProductPage;

  })();

  jQuery(function($) {
    var MAIN, PAGE, digitalDownloads, fw_media_queries, isFirefox, resize_timer;
    PAGE = $('body');
    MAIN = $('.layout--main-content');
    $('.template--product .partial--product.view--full .actual-price').addClass('money');
    theme.sections = new theme.classes.Sections();
    fw_media_queries = new theme.classes.FrameworkMediaQueries();
    theme.utils = new theme.classes.FrameworkUtils();
    theme.a11y = new theme.classes.FrameworkA11y();
    theme.utils.mqs = fw_media_queries;
    theme.utils.a11yClick = function(event) {
      var code;
      if (event.type === 'click') {
        return true;
      } else if (event.type === 'keypress') {
        code = event.charCode || event.keyCode;
        if (code === 32) {
          event.preventDefault();
        }
        if (code === 32 || code === 13) {
          return true;
        }
      } else {
        return false;
      }
    };
    theme.utils.loadJsClasses = function() {
      return $('[data-js-class]').each(function() {
        var js_class, partial_class;
        js_class = $(this).attr('data-js-class');
        if ($(this).attr('data-js-loaded') !== 'true') {
          partial_class = theme.classes[js_class];
          if (typeof partial_class !== "undefined") {
            theme.partials[js_class] = new partial_class($(this));
            return $(this).attr('data-js-loaded', 'true');
          }
        }
      });
    };
    $('a').each(function() {
      var _this;
      _this = $(this);
      if (this.host === location.host) {
        return _this.attr('target', '_self');
      } else {
        return _this.attr('target', '_blank').attr('rel', 'noopener');
      }
    });
    isFirefox = typeof InstallTrigger !== "undefined";
    if (isFirefox) {
      $('img').addClass('image-scale-hack');
    }
    $('.fw--align--left').each(function() {
      return new FrameworkAlign($(this), 'left');
    });
    $('.fw--align--center-x').each(function() {
      return new FrameworkAlign($(this), 'center-x');
    });
    $('.fw--align--right').each(function() {
      return new FrameworkAlign($(this), 'right');
    });
    $('.fw--align--top').each(function() {
      return new FrameworkAlign($(this), 'top');
    });
    $('.fw--align--center-y').each(function() {
      return new FrameworkAlign($(this), 'center-y');
    });
    $('.fw--align--bottom').each(function() {
      return new FrameworkAlign($(this), 'bottom');
    });
    $('.partial--popup #mc-embedded-subscribe-form').on('submit', function(event) {
      $('.modal .close').click();
      return true;
    });
    $('.partial--popup #contact_form').on('submit', function(event) {
      var form, modal, wrapper;
      form = this;
      modal = $(this).closest('.partial--popup');
      modal.find('.error, .success').remove();
      wrapper = modal.find('.wrapper');
      event.preventDefault();
      if (modal.find('[type="email"]').val().length === 0) {
        return false;
      } else {
        wrapper.find('*').remove().end().prepend('<p class="success">' + theme.translations.mailing_list_success_message + '</p>').show();
        setTimeout(function() {
          return form.submit();
        }, 500);
      }
      return false;
    });
    if (PAGE.hasClass('template--search')) {
      $(document).on('shopify:section:load', function() {
        return checkLogoHeight();
      });
    }
    if (PAGE.hasClass('template--password')) {
      $(document).on('click', '.password--login-link', function() {
        $(this).css('visibility', 'hidden');
        $('.password--main').hide();
        $('.password--login-form').css('visibility', 'visible');
        $('.password--login-form input[type="password"]').focus();
        return false;
      }).on('click', '.password--login-form .cancel', function() {
        $('.password--login-link').css('visibility', 'visible');
        $('.password--main').fadeIn();
        $('.password--login-form').css('visibility', 'hidden');
        return false;
      });
      if ($('.password--login-form .errors').size()) {
        $('.password--login-link').click();
      }
    }
    digitalDownloads = function() {
      if ($('.sdd-download').length) {
        return $('.sdd-download-button').removeClass('sdd-download-button').css('visibility', 'visible');
      }
    };
    digitalDownloads();
    theme.utils.loadJsClasses();
    resize_timer = null;
    $(window).on('resize', function() {
      clearTimeout(resize_timer);
      return resize_timer = setTimeout(function() {
        return $('.fw--align--fill-y--dynamic').each(function() {
//           return new FrameworkAlign($(this), 'fill-y--dynamic');
        });
      }, 250);
    });
    $('#admin_bar_iframe').on('load', function() {
      var iframe;
      iframe = $('#admin_bar_iframe').contents();
      if (iframe.find('#storefront-bar-minimized').css('display') === 'none') {
        return setTimeout(function() {
          return $('html').css('padding-top', '40px');
        }, 10);
      }
    });
    $('.fw--align--fill-y--dynamic').each(function() {
      return new FrameworkAlign($(this), 'fill-y--dynamic');
    });
    $('.fw--align--max-img-height').each(function() {
      return new FrameworkAlign($(this), 'max-img-height');
    });
    $('html').addClass('after-js-loaded');
    return setTimeout(function() {
      return $(".owl-carousel").each(function() {
        return $(this).data('owlCarousel').calculateAll();
      });
    }, 0);
  });

}).call(this);


  theme.product = {};
  theme.product.json = {{ product | json }};
  theme.product.id = {{ product.id }};

  var selectCallback = function(variant, selector) {
    theme.partials.ProductPage.variantSelected(variant, selector);
    // add your selectCallback code here...
  };

  $(function() {
    new Shopify.OptionSelectors('product-select-' + theme.product.id, {
      product: theme.product.json,
      onVariantSelected: selectCallback,
      enableHistoryState: true
    });

    {% if product.options.size == 1 %}
      $('.selector-wrapper:eq(0)').prepend('<label class="font--accent">{{ product.options.first }}</label>');
    {% endif %}
  });


//

var a = document.getElementById('.slide'); //or grab it by tagname etc
a.href = "https://pinkmoon.co/products/pink-moon-lunar-drops-gua-sha-facial-oil"
