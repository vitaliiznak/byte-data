(function(a){function d(c){if(b[c])return b[c].a;var f=b[c]={qa:c,S:!1,a:{}};a[c].call(f.a,f,f.a,d);f.S=!0;return f.a}var b={};d.i=a;d.f=b;d.b=function(a,b){d.c(a)||Object.defineProperty(a,"a",{configurable:!1,enumerable:!0,get:b})};d.g=function(a){var b=a&&a.pa?function(){return a["default"]}:function(){return a};d.b(b,b);return b};d.c=function(a){return Object.prototype.hasOwnProperty.call(a,"a")};d.h="";return d(d.j=0)})([function(a,d,b){a=b(1);window.byteData=a;window.byteData.pack=a.V;window.byteData.unpack=
a.la;window.byteData.packArray=a.W;window.byteData.unpackArray=a.ma;window.byteData.chr=a.o;window.byteData.fourCC=a.C;window.byteData.bool=a.m;window.byteData.int2=a.G;window.byteData.uInt2=a.aa;window.byteData.int4=a.L;window.byteData.uInt4=a.fa;window.byteData.int8=a.R;window.byteData.uInt8=a.ka;window.byteData.int16=a.D;window.byteData.uInt16=a.Z;window.byteData.float16=a.s;window.byteData.int24=a.H;window.byteData.uInt24=a.ba;window.byteData.int32=a.J;window.byteData.uInt32=a.da;window.byteData.float32=
a.v;window.byteData.int40=a.M;window.byteData.uInt40=a.ga;window.byteData.int48=a.O;window.byteData.uInt48=a.ia;window.byteData.float64=a.A;window.byteData.int16BE=a.F;window.byteData.uInt16BE=a.$;window.byteData.float16BE=a.u;window.byteData.int24BE=a.I;window.byteData.uInt24BE=a.ca;window.byteData.int32BE=a.K;window.byteData.uInt32BE=a.ea;window.byteData.float32BE=a.w;window.byteData.int40BE=a.N;window.byteData.uInt40BE=a.ha;window.byteData.int48BE=a.P;window.byteData.uInt48BE=a.ja;window.byteData.float64BE=
a.B},function(a,d,b){function c(a,k){k.be&&w(a,k.offset);var e=a.length,b=[];e-=k.offset-1;for(var c=0;c<e;c+=k.offset)b.push(m(a,c));return b}function f(a,k){for(var e=0,b=[],c=a.length,f=0;f<c;f++)e=n(b,a[f],e);k.be&&w(b,k.offset);return b}function z(a,b){return g.read(a,b)}function h(a,b){a=g.read(a,b);b=(a&31744)>>10;var e=a&1023;return(b?Math.pow(2,b-15)*(1+e/1024):e/1024*.00006103515625)*(a>>15?-1:1)}function p(a,b){l[0]=g.read(a,b);return t[0]}function q(a,b){l[0]=g.read(a,b);l[1]=g.read(a,
b+4);return x[0]}function u(a,b){for(var e="",c=0;c<g.offset;c++)e+=String.fromCharCode(a[b+c]);return e}function v(a,b,c){return g.write(a,b,c)}function A(a,b,c){t[0]=b;var e=l[0];b=e>>16&32768;var f=e>>12&2047;e=e>>23&255;103<=e&&(b=(b|e-112<<10|f>>1)+(f&1));a[c++]=b&255;a[c++]=b>>>8&255;return c}function B(a,b,c){t[0]=b;return g.write(a,l[0],c)}function C(a,b,c){x[0]=b;c=g.write(a,l[0],c);return g.write(a,l[1],c)}function D(a,b,c){for(var e=0;e<b.length;e++)a[c++]=b.charCodeAt(e);return c}function r(a){if(!a)throw Error("Undefined type.");
if(a["float"]){if(-1==[16,32,64].indexOf(a.bits))throw Error("Not a supported float type.");}else if(a["char"]){if(8>a.bits||a.bits%2)throw Error("Wrong offset for type char.");}else if(1>a.bits||53<a.bits)throw Error("Not a supported type.");a.offset=8>a.bits?1:Math.ceil(a.bits/8);a["float"]?16==a.bits?m=h:32==a.bits?m=p:64==a.bits&&(m=q):a["char"]?m=u:m=z;a["float"]?16==a.bits?n=A:32==a.bits?n=B:64==a.bits&&(n=C):a["char"]?n=D:n=v;a["char"]?g.offset=8>a.bits?1:Math.ceil(a.bits/8):g=new E(64==a.bits?
32:a.bits,a["float"]?!1:a.signed)}function y(a,b){a.constructor==String&&(a=a.length>=b.offset?a.slice(0,b.offset):"");return a}var w=b(2),E=b(3);d=new Int8Array(8);var l=new Uint32Array(d.buffer),t=new Float32Array(d.buffer),x=new Float64Array(d.buffer),m,n,g={};a.a.o={bits:8,"char":!0};a.a.C={bits:32,"char":!0};a.a.m={bits:1};a.a.G={bits:2,signed:!0};a.a.aa={bits:2};a.a.L={bits:4,signed:!0};a.a.fa={bits:4};a.a.R={bits:8,signed:!0};a.a.ka={bits:8};a.a.D={bits:16,signed:!0};a.a.Z={bits:16};a.a.s=
{bits:16,"float":!0};a.a.H={bits:24,signed:!0};a.a.ba={bits:24};a.a.J={bits:32,signed:!0};a.a.da={bits:32};a.a.v={bits:32,"float":!0};a.a.M={bits:40,signed:!0};a.a.ga={bits:40};a.a.O={bits:48,signed:!0};a.a.ia={bits:48};a.a.A={bits:64,"float":!0};a.a.F={bits:16,signed:!0,be:!0};a.a.$={bits:16,be:!0};a.a.u={bits:16,"float":!0,be:!0};a.a.I={bits:24,signed:!0,be:!0};a.a.ca={bits:24,be:!0};a.a.K={bits:32,signed:!0,be:!0};a.a.ea={bits:32,be:!0};a.a.w={bits:32,"float":!0,be:!0};a.a.N={bits:40,signed:!0,
be:!0};a.a.ha={bits:40,be:!0};a.a.P={bits:48,signed:!0,be:!0};a.a.ja={bits:48,be:!0};a.a.B={bits:64,"float":!0,be:!0};a.a.V=function(a,b){r(b);var c=[];if(void 0===a)return c;a=y(a,b);return f([a],b)};a.a.la=function(a,b){r(b);return(a=c(a.slice(0,b.offset),b))?a[0]:b["char"]?"":null};a.a.W=function(a,b){r(b);if(b["char"])for(var c=a.length,d=0;d<c;d++)a[d]=y(a[d],b);return f(a,b)};a.a.ma=function(a,b){r(b);return c(a,b)}},function(a){a.a=function(a,b){for(var c=a.length,f=0;f<c;){for(var d=a,h=f,
p=0,q=b-1,u=parseInt(b/2,10);p<u;){var v=d[h+p];d[h+p]=d[h+q];d[h+q]=v;p++;q--}f+=b}}},function(a){function d(a,c){this.b=a;this.Y=void 0===c?!1:c;this.offset=0;this.min=-Infinity;this.max=Infinity;this.f=this.b;this.g=255;this.i()}d.prototype.read=function(a,c){c=void 0===c?0:c;for(var b=0,d=this.offset-1;0<d;)b|=a[d+c]<<8*d,d--;b=(a[c]|b)>>>0;return this.c(this.h(b))};d.prototype.write=function(a,c,d){d=void 0===d?0:d;c=this.c(c);a[d++]=c&255;for(var b=2;b<=this.offset;b++)a[d++]=Math.floor(c/Math.pow(2,
8*(b-1)))&255;return d};d.prototype.oa=function(a,c,d){c=this.c(c);d=this.l(a,c,void 0===d?0:d);for(var b=2;b<this.offset;b++)a[d++]=Math.floor(c/Math.pow(2,8*(b-1)))&255;8<this.b&&(a[d++]=Math.floor(c/Math.pow(2,8*(this.offset-1)))&this.g);return d};d.prototype.j=function(a,c){c=void 0===c?0:c;for(var b="",d=0;d<this.offset;){var h=a[c+d].toString(2);b=Array(9-h.length).join("0")+h+b;d++}return this.c(this.h(parseInt(b,2)))};d.prototype.i=function(){this.na();this.X();this.T();this.U();this.offset=
8>this.b?1:Math.ceil(this.f/8);if(this.f!=this.b||8>this.b||32<this.b)this.write=this.oa,this.read=this.j};d.prototype.h=function(a){a>this.max&&(a-=2*this.max+2);return a};d.prototype.c=function(a){a>this.max?a=this.max:a<this.min&&(a=this.min);return a};d.prototype.U=function(){var a=Math.pow(2,this.b);this.Y?(this.max=a/2-1,this.min=-a/2):(this.max=a-1,this.min=0)};d.prototype.na=function(){if(1>this.b||64<this.b)throw Error("Not a supported type.");};d.prototype.X=function(){8<this.b&&(this.f=
(this.b-1|7)+1)};d.prototype.T=function(){var a=8-(this.f-this.b);this.g=Math.pow(2,0<a?a:8)-1};d.prototype.l=function(a,c,d){8>this.b?a[d++]=0>c?c+Math.pow(2,this.b):c:a[d++]=c&255;return d};a.a=d}]);