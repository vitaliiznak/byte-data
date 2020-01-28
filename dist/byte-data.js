/*! https://github.com/rochars/byte-data
Copyright (c) 2019 Rafael da Silva Rocha */
!function(){if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()){var e=Object.defineProperty;Object.defineProperty=function(t,r,o){if(e)try{return e(t,r,o)}catch(e){}if(t!==Object(t))throw TypeError("Object.defineProperty called on non-object");return Object.prototype.__defineGetter__&&"get"in o&&Object.prototype.__defineGetter__.call(t,r,o.get),Object.prototype.__defineSetter__&&"set"in o&&Object.prototype.__defineSetter__.call(t,r,o.set),"value"in o&&(t[r]=o.value),t}}}();try{Object.getOwnPropertyDescriptor({t:"o"},"t")}catch(e){Object.getOwnPropertyDescriptor=function(e,t){return null!=("function"==typeof e.__lookupGetter__&&"function"==typeof e.__lookupSetter__?e.__lookupGetter__(t)||e.__lookupSetter__(t):null)?{configurable:!0,enumerable:!0,get:e.__lookupGetter__(t),set:e.__lookupSetter__(t)}:{configurable:!0,writable:!0,enumerable:!0,value:e[t]}}};var byteData=(function(exports){var exports=exports||{};var l="function"==typeof Object.defineProperties?Object.defineProperty:function(c,a,d){c!=Array.prototype&&c!=Object.prototype&&(c[a]=d.value)},m="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function p(c,a){if(a){for(var d=m,b=c.split("."),e=0;e<b.length-1;e++){var f=b[e];f in d||(d[f]={});d=d[f]}b=b[b.length-1];e=d[b];f=a(e);f!=e&&null!=f&&l(d,b,{configurable:!0,writable:!0,value:f})}}
p("String.prototype.codePointAt",function(c){return c?c:function(a){if(null==this)throw new TypeError("The 'this' value for String.prototype.codePointAt must not be null or undefined");var d=this.length;a=Number(a)||0;if(0<=a&&a<d){a|=0;var b=this.charCodeAt(a);if(55296>b||56319<b||a+1===d)return b;a=this.charCodeAt(a+1);return 56320>a||57343<a?b:1024*(b-55296)+a+9216}}});Object.defineProperty(exports,"__esModule",{value:!0});
function q(c,a,d,b){b=void 0===b?c.length:b;for(d=void 0===d?0:d;d<b;d+=a){var e=c,f=a,h=d;f--;for(var g=0;g<f;g++){var k=e[h+g];e[h+g]=e[h+f];e[h+f]=k;f--}}}function r(c,a,d){d=void 0===d?0:d;for(var b=0,e=c.length;b<e;){var f=c.codePointAt(b);if(128>f)a[d]=f,d++;else{var h=0,g=0;2047>=f?(h=1,g=192):65535>=f?(h=2,g=224):1114111>=f&&(h=3,g=240,b++);a[d]=(f>>6*h)+g;for(d++;0<h;)a[d]=128|f>>6*(h-1)&63,d++,h--}b++}return d}
function t(c,a,d){this.bits=c;this.a=Math.ceil(c/8);this.max=Math.pow(2,c)-1;this.min=0;this.unpack=this.c;if(void 0===a?0:a)this.max=Math.pow(2,c)/2-1,this.min=-this.max-1,this.unpack=this.g;if(void 0===d?0:d)this.b=this.f}t.prototype.pack=function(c,a,d){d=void 0===d?0:d;if("number"!==typeof a||!isFinite(a)||Math.floor(a)!==a)throw new TypeError;a=this.b(a);for(var b=0,e=this.a;b<e;b++)c[d]=Math.floor(a/Math.pow(2,8*b))&255,d++;return d};
t.prototype.c=function(c,a){a=void 0===a?0:a;for(var d=0,b=0;b<this.a;b++)d+=c[a+b]*Math.pow(256,b);return d};t.prototype.g=function(c,a){var d=this.c(c,void 0===a?0:a);d>this.max&&(d-=2*this.max+2);return d};t.prototype.b=function(c){if(c>this.max||c<this.min)throw new RangeError;return c};t.prototype.f=function(c){return c>this.max?this.max:c<this.min?this.min:c};
function u(c,a){this.b=c;this.c=a;this.a=(1<<c-1)-1;this.f=Math.ceil((c+a)/8);this.g=Math.pow(2,this.a+1);this.h=c+a;this.i=Math.pow(2,-(8*this.f-1-c))}
u.prototype.pack=function(c,a,d){if("number"!=typeof a)throw new TypeError;Math.abs(a)>this.g-2*this.h&&(a=0>a?-Infinity:Infinity);var b=0>((a=+a)||1/a)?1:0>a?1:0;a=Math.abs(a);var e=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),f=v(a/Math.pow(2,e)*Math.pow(2,this.c));a!==a?(f=Math.pow(2,this.c-1),e=(1<<this.b)-1):0!==a&&(a>=Math.pow(2,1-this.a)?(2<=f/Math.pow(2,this.c)&&(e+=1,f=1),e>this.a?(e=(1<<this.b)-1,f=0):(e+=this.a,f=v(f)-Math.pow(2,this.c))):(f=v(a/Math.pow(2,1-this.a-this.c)),e=0));a=
[];a.push(b);for(b=this.b;0<b;--b)a[b]=e%2?1:0,e=Math.floor(e/2);b=a.length;for(e=this.c;0<e;--e)a[b+e]=f%2?1:0,f=Math.floor(f/2);b=a.join("");f=this.f+d-1;for(a=d;f>=d;)c[f]=parseInt(b.substring(0,8),2),b=b.substring(8),f--,a++;return a};
u.prototype.unpack=function(c,a){for(var d=(1<<this.b)-1,b="",e=this.f-1;0<=e;e--){var f=c[e+a].toString(2);b+="00000000".substring(f.length)+f}e="1"==b.charAt(0)?-1:1;b=b.substring(1);f=parseInt(b.substring(0,this.b),2);b=b.substring(this.b);if(f==d)return 0!==parseInt(b,2)?NaN:Infinity*e;0===f?(f+=1,d=parseInt(b,2)):d=parseInt("1"+b,2);return e*d*this.i*Math.pow(2,f-this.a)};function v(c){var a=Math.floor(c);c-=a;return.5>c?a:.5<c?a+1:a%2?a+1:a}
function w(c,a,d,b,e){b=void 0===b?0:b;a=a||{};var f=x(a.bits,a.fp,a.signed,void 0===e?!1:e),h=Math.ceil(a.bits/8);e=0;var g=b;try{for(var k=c.length;e<k;e++)b=f.pack(d,c[e],b);a.be&&q(d,h,g,b)}catch(n){throw a=n,a.message=a.constructor.name+" at index "+e+": "+c[e],a;}return b}
function y(c,a,d,b,e,f){b=void 0===b?0:b;e=void 0===e?c.length:e;f=void 0===f?!1:f;a=a||{};var h=x(a.bits,a.fp,a.signed,!1),g=Math.ceil(a.bits/8),k=(e-b)%g;if(f&&(k||c.length<g))throw Error("Bad buffer length");e-=k;f=0;k=b;for(a.be&&q(c,g,b,e);k<e;k+=g,f++)d[f]=h.unpack(c,k);a.be&&q(c,g,b,e)}function z(c,a,d,b,e){return w([c],a,d,void 0===b?0:b,void 0===e?!1:e)}
function x(c,a,d,b){if(a){if(!c||16!==c&&32!==c&&64!==c)throw Error("Unsupported type: float, bits: "+c);}else if(!c||1>c||53<c)throw Error("Unsupported type: int, bits: "+c);return a&&16===c?new u(5,11):a&&32==c?new u(8,23):a&&64==c?new u(11,52):new t(c,d,b)}exports.pack=function(c,a,d){var b=[];z(c,a,b,0,void 0===d?!1:d);return b};exports.packArray=function(c,a,d){var b=[];w(c,a,b,0,void 0===d?!1:d);return b};exports.packArrayTo=w;exports.packString=function(c){var a=[];r(c,a,0);return a};
exports.packStringTo=function(c,a,d){return r(c,a,void 0===d?0:d)};exports.packTo=z;exports.unpack=function(c,a,d,b){d=void 0===d?0:d;var e=[];y(c,a,e,d,d+Math.ceil(a.bits/8),void 0===b?!1:b);return e[0]};exports.unpackArray=function(c,a,d,b,e){b=void 0===b?c.length:b;var f=[];y(c,a,f,void 0===d?0:d,b,void 0===e?!1:e);return f};exports.unpackArrayTo=y;
exports.unpackString=function(c,a,d){d=void 0===d?c.length:d;var b=void 0===a?0:a;d=void 0===d?c.length:d;a="";for(b=void 0===b?0:b;b<d;){var e=128,f=191,h=!1,g=c[b++];if(0<=g&&127>=g)a+=String.fromCharCode(g);else{var k=0;194<=g&&223>=g?k=1:224<=g&&239>=g?(k=2,224===c[b]&&(e=160),237===c[b]&&(f=159)):240<=g&&244>=g?(k=3,240===c[b]&&(e=144),244===c[b]&&(f=143)):h=!0;g&=(1<<8-k-1)-1;for(var n=0;n<k;n++){if(c[b]<e||c[b]>f)h=!0;g=g<<6|c[b]&63;b++}h?a+=String.fromCharCode(65533):65535>=g?a+=String.fromCharCode(g):
(g-=65536,a+=String.fromCharCode((g>>10&1023)+55296,(g&1023)+56320))}}return a};typeof module!=='undefined'?module.exports=exports :typeof define==='function'&&define.amd?define(['exports'],exports) :typeof global!=='undefined'?global.byteData=exports:null;return exports;})();
