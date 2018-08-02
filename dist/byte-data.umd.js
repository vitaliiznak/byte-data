!function(){if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}()){var t=Object.defineProperty;Object.defineProperty=function(r,o,e){if(t)try{return t(r,o,e)}catch(t){}if(r!==Object(r))throw TypeError("Object.defineProperty called on non-object");return Object.prototype.__defineGetter__&&"get"in e&&Object.prototype.__defineGetter__.call(r,o,e.get),Object.prototype.__defineSetter__&&"set"in e&&Object.prototype.__defineSetter__.call(r,o,e.set),"value"in e&&(r[o]=e.value),r}}}();var testObject={t:"o"},replaceGetOwnPropertyDescriptor=!1;replaceGetOwnPropertyDescriptor&&(Object.getOwnPropertyDescriptor=function(t,r){return null!=("function"==typeof t.__lookupGetter__&&"function"==typeof t.__lookupSetter__?t.__lookupGetter__(r)||t.__lookupSetter__(r):null)?{configurable:!0,enumerable:!0,get:t.__lookupGetter__(r),set:t.__lookupSetter__(r)}:{configurable:!0,writable:!0,enumerable:!0,value:t[r]}});var m,l="function"==typeof Object.create?Object.create:function(t){function r(){}return r.prototype=t,new r};if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;t:{var p={f:!0},q={};try{q.__proto__=p,n=q.f;break t}catch(t){}n=!1}m=n?function(t,r){if(t.__proto__=r,t.__proto__!==r)throw new TypeError(t+" is not extensible");return t}:null}var r=m;function t(t,o){if(t.prototype=l(o.prototype),t.prototype.constructor=t,r)r(t,o);else for(var e in o)if("prototype"!=e)if(Object.defineProperties){var n=Object.getOwnPropertyDescriptor(o,e);n&&Object.defineProperty(t,e,n)}else t[e]=o[e];t.m=o.prototype}var u="function"==typeof Object.defineProperties?Object.defineProperty:function(t,r,o){t!=Array.prototype&&t!=Object.prototype&&(t[r]=o.value)},v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function w(t){if(t){for(var r=v,o=["String","prototype","codePointAt"],e=0;e<o.length-1;e++){var n=o[e];n in r||(r[n]={}),r=r[n]}(t=t(e=r[o=o[o.length-1]]))!=e&&null!=t&&u(r,o,{configurable:!0,writable:!0,value:t})}}w(function(t){return t||function(t){if(null==this)throw new TypeError("The 'this' value for String.prototype.codePointAt must not be null or undefined");var r=this.length;if(0<=(t=+t||0)&&t<r){t|=0;var o=this.charCodeAt(t);return 55296>o||56319<o||t+1===r?o:56320>(t=this.charCodeAt(t+1))||57343<t?o:1024*(o-55296)+t+9216}}});var byteData,y={unpackString:function(t,r,o){var e=void 0===r?0:r;for(o=null!==(o=void 0===(o=void 0===o?null:o)?null:o)?o+1:t.length,r="",e=void 0===e?0:e;e<o;){var n=128,i=191,a=!1,p=t[e++];if(0<=p&&127>=p)r+=String.fromCharCode(p);else{var f=0;194<=p&&223>=p?f=1:224<=p&&239>=p?(f=2,224===t[e]&&(n=160),237===t[e]&&(i=159)):240<=p&&244>=p?(f=3,240===t[e]&&(n=144),244===t[e]&&(i=143)):a=!0,p&=(1<<8-f-1)-1;for(var u=0;u<f;u++)(t[e]<n||t[e]>i)&&(a=!0),p=p<<6|63&t[e],e++;a?r+="�":65535>=p?r+=String.fromCharCode(p):r+=String.fromCharCode(55296+((p-=65536)>>10&1023),56320+(1023&p))}}return r},packStringTo:function(t,r,o){return x(t,r,void 0===o?0:o)},pack:function(t,r){var o=[];return(0,y.packTo)(t,r,o),o},packTo:function(t,r,o,e){return(0,y.packArrayTo)([t],r,o,void 0===e?0:e)},packArray:function(t,r){var o=[];return(0,y.packArrayTo)(t,r,o),o},packArrayTo:function(t,r,o,e){e=void 0===e?0:e;for(var n=new z(r),i=t.length,a=0;a<i;a++){var p=t[a];if(void 0===p)throw Error("Undefined value");if(null!==p&&p.constructor!=Number&&p.constructor!=Boolean)throw Error("Can't pack "+p.constructor);for(p=e+n.a;e<p;)e=n.pack(o,t[a],e);r.be&&A(o,n.a,e-n.a,e)}return e},unpack:function(t,r,o){o=void 0===o?0:o;var e=new z(r);if(e.a+o>t.length)throw Error("Bad buffer length");r.be&&A(t,e.a,o,o+e.a);var n=e.unpack(t,o);return r.be&&A(t,e.a,o,o+e.a),n},unpackArray:function(t,r,o,e,n){e=void 0===e?t.length:e;var i=[];return(0,y.unpackArrayTo)(t,r,i,void 0===o?0:o,e,void 0!==n&&n),i},unpackArrayTo:function(t,r,o,e,n,i){e=void 0===e?0:e,n=void 0===n?t.length:n,i=void 0!==i&&i;var a=new z(r),p=e;if(i){if((n-e)%a.a)throw Error("Bad buffer length")}else for(;(n-e)%a.a;)n--;for(r.be&&A(t,a.a,e,n),i=0;e<n;e+=a.a)o[i]=a.unpack(t,e),i++;r.be&&A(t,a.a,p,n)},packString:function(t){var r;if("function"==typeof Uint8Array){for(var o=r=0,e=t.length;o<e;o++){var n=t.codePointAt(o);128>n||(2047>=n?r++:65535>=n?r+=2:1114111>=n&&(o++,r+=3)),r++}r=new Uint8Array(r)}else r=[];return x(t,r,0),r}},exports=y||{};function A(t,r,o,e){if((e=void 0===e?t.length:e)%r)throw Error("Bad buffer length.");for(o=void 0===o?0:o;o<e;o+=r){var n=t,i=r,a=o;i--;for(var p=0;p<i;p++){var f=n[a+p];n[a+p]=n[a+i],n[a+i]=f,i--}}}function x(t,r,o){o=void 0===o?0:o;for(var e=0,n=t.length;e<n;e++){var i=t.codePointAt(e);if(128>i)r[o]=i,o++;else{var a=0,p=0;for(2047>=i?(a=1,p=192):65535>=i?(a=2,p=224):1114111>=i&&(a=3,p=240,e++),r[o]=(i>>6*a)+p,o++;0<a;)r[o]=128|i>>6*(a-1)&63,o++,a--}}return o}function B(t){this.bits=t,this.a=8>t?1:Math.ceil(t/8),this.max=Math.pow(2,t)-1,this.min=0,t=8-(1+(t-1|7)-t),this.c=Math.pow(2,0<t?t:8)-1}function D(t,r){if(r>t.max||r<t.min)throw Error("Overflow")}function E(t){B.call(this,t),this.max=Math.pow(2,this.bits)/2-1,this.min=-this.max-1}function F(t,r){this.b=r?new E(t):new B(t)}function G(t,r,o,e,n){var i=(1<<e-1)-1;Math.abs(o)>Math.pow(2,i+1)-2*(e+n)&&(o=0>o?-1/0:1/0);var a=0>((o=+o)||1/o)?1:0>o?1:0,p=Math.min(Math.floor(Math.log(o=Math.abs(o))/Math.LN2),1023),f=H(o/Math.pow(2,p)*Math.pow(2,n));for(o!=o?(f=Math.pow(2,n-1),p=(1<<e)-1):0!==o&&(o>=Math.pow(2,1-i)?(2<=f/Math.pow(2,n)&&(p+=1,f=1),p>i?(p=(1<<e)-1,f=0):(p+=i,f=H(f)-Math.pow(2,n))):(f=H(o/Math.pow(2,1-i-n)),p=0)),i=p,(o=[]).push(a),a=e;0<a;--a)o[a]=i%2?1:0,i=Math.floor(i/2);for(a=o.length,i=n;0<i;--i)o[a+i]=f%2?1:0,f=Math.floor(f/2);for(a=o.join(""),e=Math.floor((e+n+1)/8)+r-1,n=r;e>=r;)t[e]=parseInt(a.substring(0,8),2),a=a.substring(8),e--,n++;return n}function I(t,r,o,e){var n=Math.ceil((o+e)/8);e=Math.pow(2,-(8*n-1-o));var i="";for(--n;0<=n;n--){var a=t[n+r].toString(2);i+="00000000".substring(a.length)+a}return t="1"==i.charAt(0)?-1:1,i=i.substring(1),r=parseInt(i.substring(0,o),2),i=i.substring(o),r==(1<<o)-1?0!==parseInt(i,2)?NaN:1/0*t:(0===r?(r+=1,i=parseInt(i,2)):i=parseInt("1"+i,2),t*i*e*Math.pow(2,r-((1<<o-1)-1)))}function H(t){var r=Math.floor(t);return.5>(t-=r)?r:.5<t?r+1:r%2?r+1:r}function z(t){if(!t)throw Error("Unsupported type");if(t.fp=t.float||t.fp,t.fp){if(16!=t.bits&&32!=t.bits&&64!=t.bits)throw Error("Unsupported type")}else if(1>t.bits||53<t.bits)throw Error("Unsupported type");t.signed=!t.fp&&t.signed,F.call(this,t.bits,t.signed),this.a=this.b.a,this.b.a=64===this.b.bits?4:this.b.a,t.fp?16==t.bits?(this.unpack=this.c,this.pack=this.i):32==t.bits?(this.unpack=this.g,this.pack=this.j):(this.unpack=this.h,this.pack=this.l):(this.unpack=F.prototype.unpack,this.pack=F.prototype.pack)}Object.defineProperty(y,"__esModule",{value:!0}),B.prototype.pack=function(t,r,o){if(o=void 0===o?0:o,r!=r)throw Error("NaN");D(this,r),t[o]=255&(0>r?r+Math.pow(2,this.bits):r),o++;for(var e=this.a,n=2;n<e;n++)t[o]=255&Math.floor(r/Math.pow(2,8*(n-1))),o++;return 8<this.bits&&(t[o]=Math.floor(r/Math.pow(2,8*(this.a-1)))&this.c,o++),o},B.prototype.unpack=function(t,r){var o=this.b(t,void 0===r?0:r);return D(this,o),o},B.prototype.b=function(t,r){for(var o=0,e=0;e<this.a;e++)o+=t[r+e]*Math.pow(256,e);return o},t(E,B),E.prototype.pack=function(t,r,o){return B.prototype.pack.call(this,t,r,void 0===o?0:o)},E.prototype.unpack=function(t,r){var o=B.prototype.b.call(this,t,void 0===r?0:r);return o>this.max&&(o-=2*this.max+2),D(this,o),o},F.prototype.pack=function(t,r,o){return this.b.pack(t,r,void 0===o?0:o)},F.prototype.unpack=function(t,r){return this.b.unpack(t,void 0===r?0:r)},t(z,F),z.prototype.c=function(t,r){return I(t,void 0===r?0:r,5,11)},z.prototype.g=function(t,r){return I(t,void 0===r?0:r,8,23)},z.prototype.h=function(t,r){return I(t,void 0===r?0:r,11,52)},z.prototype.i=function(t,r,o){return G(t,void 0===o?0:o,r,5,11)},z.prototype.j=function(t,r,o){return G(t,void 0===o?0:o,r,8,23)},z.prototype.l=function(t,r,o){return G(t,void 0===o?0:o,r,11,52)},"undefined"!=typeof module?module.exports=exports:"function"==typeof define&&define.amd?define(["exports"],exports):"undefined"!=typeof global?global.byteData=exports:byteData=exports;
