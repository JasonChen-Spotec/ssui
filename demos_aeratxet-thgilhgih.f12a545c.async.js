(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"+Tuj":function(e,t,n){var r=n("Uzga"),a=n("yAqI"),c=n("JMJj");function i(e,t,n){return t===t?c(e,t,n):r(e,a,n)}e.exports=i},"/42p":function(e,t,n){var r=n("+Tuj");function a(e,t){var n=-1,a=e.length;while(++n<a&&r(t,e[n],0)>-1);return n}e.exports=a},"0Klu":function(e,t,n){var r=n("NM02"),a=n("nob9"),c="[object Symbol]";function i(e){return"symbol"==typeof e||a(e)&&r(e)==c}e.exports=i},"0VtL":function(e,t,n){"use strict";n.r(t);var r=n("gY6z"),a=n("tJVT"),c=n("q1tI"),i=n.n(c),o=()=>{var e=Object(c["useState"])("apple watermelon banana orange mango"),t=Object(a["a"])(e,2),n=t[0],o=t[1];return i.a.createElement("div",{style:{maxWidth:800,border:20}},i.a.createElement(r["a"],{value:n,onChange:e=>o(e),rows:"8",highlight:["orange",/ba(na)*/gi,[0,5]]}))};t["default"]=o},"4czj":function(e,t,n){var r=n("mMY5"),a="object"==typeof self&&self&&self.Object===Object&&self,c=r||a||Function("return this")();e.exports=c},"8uf/":function(e,t,n){"use strict";n.r(t);var r=n("gY6z"),a=n("tJVT"),c=n("q1tI"),i=n.n(c),o=()=>{var e=Object(c["useState"])("eslint lines- potato between-class-members"),t=Object(a["a"])(e,2),n=t[0],o=t[1];return i.a.createElement("div",{style:{maxWidth:800,border:20}},i.a.createElement(r["a"],{value:n,highlight:"potato",onChange:e=>o(e),rows:"4"}))};t["default"]=o},"9gsd":function(e,t,n){"use strict";n.r(t);var r=n("gY6z"),a=n("tJVT"),c=n("q1tI"),i=n.n(c),o=()=>{var e=Object(c["useState"])("Sun Mon Tue Wed Thu Fri Sat :) <-- remove the smiley..."),t=Object(a["a"])(e,2),n=t[0],o=t[1];function s(e){var t=["sun","mon","tue","wed","thu","fri","sat"];if(-1!==e.indexOf(":)")){var n=(new Date).getDay();return t[n]}return""}return i.a.createElement("div",{style:{maxWidth:800,border:20}},i.a.createElement(r["a"],{value:n,onChange:e=>o(e),highlight:s}))};t["default"]=o},Alvd:function(e,t,n){var r=n("D4f7"),a=n("woj3"),c=n("u6+s");function i(e){return a(e)?c(e):r(e)}e.exports=i},D4f7:function(e,t){function n(e){return e.split("")}e.exports=n},DhVL:function(e,t){var n=Object.prototype,r=n.toString;function a(e){return r.call(e)}e.exports=a},HCTr:function(e,t,n){"use strict";n.r(t);var r=n("gY6z"),a=(n("cp16"),n("pHTo")),c=n("tJVT"),i=n("q1tI"),o=n.n(i),s=()=>{var e=Object(i["useRef"])(),t=Object(i["useState"])("\u8fd9\u4e2a\u70ab\u9177\u7684\u4f8b\u5b50\uff0c\u8bf7\u70b9\u51fb\u597d\u5b57"),n=Object(c["a"])(t,2),s=n[0],l=n[1],u=t=>{var n=e.current,r=n.selectionStart,a=n.selectionEnd,c=n.value.substring(0,r),i=n.value.substring(a,n.value.length),o="".concat(c).concat(t).concat(i);l(o),n.selectionStart=r+t.length,n.selectionEnd=r+t.length,n.focus()};return o.a.createElement("div",{style:{maxWidth:800,border:20}},o.a.createElement(a["a"],{color:"magenta",onClick:()=>u("\u597d"),style:{marginBottom:20,cursor:"pointer"}},"\u597d"),o.a.createElement(r["a"],{value:s,highlight:"\u597d",onChange:e=>l(e),rows:"4",ref:e}))};t["default"]=s},Ignf:function(e,t,n){},JMJj:function(e,t){function n(e,t,n){var r=n-1,a=e.length;while(++r<a)if(e[r]===t)return r;return-1}e.exports=n},NM02:function(e,t,n){var r=n("eQsU"),a=n("OE/v"),c=n("DhVL"),i="[object Null]",o="[object Undefined]",s=r?r.toStringTag:void 0;function l(e){return null==e?void 0===e?o:i:s&&s in Object(e)?a(e):c(e)}e.exports=l},"OE/v":function(e,t,n){var r=n("eQsU"),a=Object.prototype,c=a.hasOwnProperty,i=a.toString,o=r?r.toStringTag:void 0;function s(e){var t=c.call(e,o),n=e[o];try{e[o]=void 0;var r=!0}catch(s){}var a=i.call(e);return r&&(t?e[o]=n:delete e[o]),a}e.exports=s},PpiC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function a(e,t){if(null==e)return{};var n,a,c=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.d(t,"a",(function(){return a}))},R3is:function(e,t){var n=Array.isArray;e.exports=n},SBhN:function(e,t,n){"use strict";var r=n("3o1O"),a=n("q1tI"),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},i=c,o=n("RUFg"),s=function(e,t){return a["createElement"](o["a"],Object(r["a"])(Object(r["a"])({},e),{},{ref:t,icon:i}))};s.displayName="CloseOutlined";t["a"]=a["forwardRef"](s)},SRmD:function(e,t,n){var r=n("pgUg");function a(e,t,n){var a=e.length;return n=void 0===n?a:n,!t&&n>=a?e:r(e,t,n)}e.exports=a},Uzga:function(e,t){function n(e,t,n,r){var a=e.length,c=n+(r?1:-1);while(r?c--:++c<a)if(t(e[c],c,e))return c;return-1}e.exports=n},V69E:function(e,t,n){var r=n("a0AE");function a(e){return null==e?"":r(e)}e.exports=a},YQ8P:function(e,t,n){"use strict";n.r(t);var r=n("gY6z"),a=n("tJVT"),c=n("q1tI"),i=n.n(c),o=()=>{var e=Object(c["useState"])("Here's a blueberry. There's a strawberry. Surprise, it's a banananana! <h1>hello</h1>"),t=Object(a["a"])(e,2),n=t[0],o=t[1];return i.a.createElement("div",{style:{maxWidth:800,border:20}},i.a.createElement(r["a"],{value:n,onChange:e=>o(e),highlight:[{highlight:"strawberry",className:"red"},{highlight:"blueberry",className:"blue"},{highlight:/ba(na)*/gi,className:"yellow"}]}))};t["default"]=o},ZR4a:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n("Zs8g"),a=Object(r["a"])("success","processing","error","default","warning"),c=Object(r["a"])("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},a0AE:function(e,t,n){var r=n("eQsU"),a=n("cCDU"),c=n("R3is"),i=n("0Klu"),o=1/0,s=r?r.prototype:void 0,l=s?s.toString:void 0;function u(e){if("string"==typeof e)return e;if(c(e))return a(e,u)+"";if(i(e))return l?l.call(e):"";var t=e+"";return"0"==t&&1/e==-o?"-0":t}e.exports=u},btbp:function(e,t,n){var r=n("a0AE"),a=n("SRmD"),c=n("/42p"),i=n("Alvd"),o=n("V69E"),s=/^\s+/;function l(e,t,n){if(e=o(e),e&&(n||void 0===t))return e.replace(s,"");if(!e||!(t=r(t)))return e;var l=i(e),u=c(l,i(t));return a(l,u).join("")}e.exports=l},cCDU:function(e,t){function n(e,t){var n=-1,r=null==e?0:e.length,a=Array(r);while(++n<r)a[n]=t(e[n],n,e);return a}e.exports=n},cp16:function(e,t,n){"use strict";n("JH3g"),n("Ignf")},eQsU:function(e,t,n){var r=n("4czj"),a=r.Symbol;e.exports=a},gY6z:function(e,t,n){"use strict";var r=n("0Owb"),a=n("tJVT"),c=n("PpiC"),i=n("q1tI"),o=n.n(i),s=n("zfJ5"),l=n.n(s),u=n("btbp"),f=n.n(u),h=n("UgRX"),g=n.n(h);function d(e){var t=typeof e;if(!e)return"falsely";if(Array.isArray(e))return 2===e.length&&"number"===typeof e[0]&&"number"===typeof e[1]?"range":"array";if("object"===t){if(e instanceof RegExp)return"regexp";if(e.highlight)return"custom"}else if("function"===t||"string"===t)return t;return"other"}function v(e,t){var n=d(t);switch(n){case"array":return p(e,t);case"function":return b(e,t);case"regexp":return m(e,t);case"string":return x(e,t);case"range":return y(t);case"custom":return j(e,t);default:if(!t)return[];console.error("unrecognized highlight type")}return[]}function p(e,t){var n=t.map((t=>v(e,t)));return Array.prototype.concat.apply([],n)}function b(e,t){return v(e,t(e))}function m(e,t){var n,r=[];while(n=t.exec(e),null!==n)if(r.push([n.index,n.index+n[0].length]),!t.global)break;return r}function x(e,t){var n=[],r=e.toLowerCase(),a=t.toLowerCase(),c=0;while(c=r.indexOf(a,c),-1!==c)n.push([c,c+a.length]),c+=a.length;return n}function y(e){return[e]}function j(e,t){var n=v(e,t.highlight),r=[...n];return t.className&&r.forEach((e=>{var n=e[2]||{};n.className?n.className="".concat(t.className," ").concat(n.className):n.className=t.className,e[2]=n})),n}class O{constructor(e,t){this.beginIndex=void 0,this.endIndex=void 0,this.markClasses=void 0,this.isMark=void 0,this.text=void 0,this.beginIndex=t,this.endIndex=t+e.length,this.text=e,this.isMark=!1,this.markClasses=new Set}setMark(e){this.isMark=!0,e&&e.split(" ").forEach((e=>{this.markClasses.add(e)}))}carve(e){var t=this.text.slice(e-this.beginIndex);this.text=this.text.slice(0,e-this.beginIndex),this.endIndex=e;var n=new O(t,e);return n.isMark=this.isMark,n.markClasses=new Set([...this.markClasses]),n}get className(){return this.markClasses&&this.markClasses.size>0?[...this.markClasses].sort().join(" "):""}render(){if(this.isMark){var e=this.className;return e?o.a.createElement("mark",{key:this.beginIndex,className:e},this.text):o.a.createElement("mark",{key:this.beginIndex},this.text)}return o.a.createElement("span",{key:this.beginIndex},this.text)}}function C(e,t){var n=[new O(e,0)];return t.forEach((e=>{for(var t=e[0],r=e[1],a=e[2],c=a||{},i=c.className,o=void 0===i?"":i,s=0;s<n.length;s++){var l=n[s];if(t<l.endIndex)if(t===l.beginIndex)if(r<l.endIndex){var u=l.carve(r);l.setMark(o),n.splice(s+1,0,u),t=r,s+=1}else l.setMark(o),t=l.endIndex;else if(r<l.endIndex){var f=l.carve(t),h=f.carve(r);f.setMark(o),n.splice(s+1,0,f,h),t=r,s+=2}else{var g=l.carve(t);g.setMark(o),n.splice(s+1,0,g),t=g.endIndex,s+=1}if(t===r)break}})),n}var E=e=>{var t=e.value,n=e.highlight,r=v(t,n),a=C(t,r);return o.a.createElement(o.a.Fragment,null,a.map((e=>e.render())))},k=E,w=i["forwardRef"](((e,t)=>{var n=e.prefixCls,o=e.value,s=e.onChange,u=e.highlight,h=e.className,d=e.textAreaClassName,v=Object(c["a"])(e,["prefixCls","value","onChange","highlight","className","textAreaClassName"]),p=i["useState"](""),b=Object(a["a"])(p,2),m=b[0],x=b[1],y=o||m,j=i["useRef"](),O=i["useRef"](),C=()=>{var e,t=null===(e=j.current)||void 0===e?void 0:e.querySelector("textarea");O.current&&t&&(O.current.scrollLeft=t.scrollLeft,O.current.style.height="".concat(t.clientHeight+t.scrollTop,"px"),O.current.style.top="".concat(0-t.scrollTop,"px"))};g()((()=>{C()}));var E=e=>{var t=f()(e.target.value);s?s(t,e):x(t)},w=l()("".concat(n,"-input"),"highlight-textarea-input","highlight-content",d);return i["createElement"]("div",{className:l()("highlight-textarea",h),ref:e=>{j.current=e}},i["createElement"]("div",{className:"highlight-textarea-backdrop highlight-content",ref:e=>{O.current=e}},i["createElement"](k,{value:y,highlight:u})),i["createElement"]("textarea",Object(r["a"])({value:y,onChange:E,className:w},v,{onScroll:C,ref:t})))}));w.defaultProps={highlight:"",prefixCls:"ant"};t["a"]=w},"k/lB":function(e,t,n){"use strict";n.r(t);var r=n("gY6z"),a=n("tJVT"),c=n("q1tI"),i=n.n(c),o=()=>{var e=Object(c["useState"])("abcdefgh"),t=Object(a["a"])(e,2),n=t[0],o=t[1];return i.a.createElement("div",{style:{maxWidth:800,border:20}},i.a.createElement(r["a"],{value:n,onChange:e=>o(e),highlight:[2,6]}))};t["default"]=o},mMY5:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("IyRk"))},nob9:function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},pHTo:function(e,t,n){"use strict";var r=n("e7zj"),a=n("6f9U"),c=n("mfzu"),i=n("SBhN"),o=n("zfJ5"),s=n.n(o),l=n("7xKZ"),u=n("q1tI"),f=n("45WZ"),h=n("ZR4a"),g=n("WPgG"),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},v=function(e){var t,n=e.prefixCls,c=e.className,i=e.checked,o=e.onChange,l=e.onClick,h=d(e,["prefixCls","className","checked","onChange","onClick"]),g=u["useContext"](f["b"]),v=g.getPrefixCls,p=function(e){null===o||void 0===o||o(!i),null===l||void 0===l||l(e)},b=v("tag",n),m=s()(b,(t={},Object(r["a"])(t,"".concat(b,"-checkable"),!0),Object(r["a"])(t,"".concat(b,"-checkable-checked"),i),t),c);return u["createElement"]("span",Object(a["a"])({},h,{className:m,onClick:p}))},p=v,b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},m=new RegExp("^(".concat(h["a"].join("|"),")(-inverse)?$")),x=new RegExp("^(".concat(h["b"].join("|"),")$")),y=function(e,t){var n,o=e.prefixCls,h=e.className,d=e.style,v=e.children,p=e.icon,y=e.color,j=e.onClose,O=e.closeIcon,C=e.closable,E=void 0!==C&&C,k=b(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),w=u["useContext"](f["b"]),I=w.getPrefixCls,N=w.direction,S=u["useState"](!0),T=Object(c["a"])(S,2),R=T[0],z=T[1];u["useEffect"]((function(){"visible"in k&&z(k.visible)}),[k.visible]);var M=function(){return!!y&&(m.test(y)||x.test(y))},P=Object(a["a"])({backgroundColor:y&&!M()?y:void 0},d),A=M(),J=I("tag",o),U=s()(J,(n={},Object(r["a"])(n,"".concat(J,"-").concat(y),A),Object(r["a"])(n,"".concat(J,"-has-color"),y&&!A),Object(r["a"])(n,"".concat(J,"-hidden"),!R),Object(r["a"])(n,"".concat(J,"-rtl"),"rtl"===N),n),h),V=function(e){e.stopPropagation(),null===j||void 0===j||j(e),e.defaultPrevented||"visible"in k||z(!1)},q=function(){return E?O?u["createElement"]("span",{className:"".concat(J,"-close-icon"),onClick:V},O):u["createElement"](i["a"],{className:"".concat(J,"-close-icon"),onClick:V}):null},D="onClick"in k||v&&"a"===v.type,Y=Object(l["a"])(k,["visible"]),L=p||null,W=L?u["createElement"](u["Fragment"],null,L,u["createElement"]("span",null,v)):v,H=u["createElement"]("span",Object(a["a"])({},Y,{ref:t,className:U,style:P}),W,q());return D?u["createElement"](g["a"],null,H):H},j=u["forwardRef"](y);j.CheckableTag=p;t["a"]=j},pgUg:function(e,t){function n(e,t,n){var r=-1,a=e.length;t<0&&(t=-t>a?0:a+t),n=n>a?a:n,n<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;var c=Array(a);while(++r<a)c[r]=e[r+t];return c}e.exports=n},"u6+s":function(e,t){var n="\\ud800-\\udfff",r="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",c="\\u20d0-\\u20ff",i=r+a+c,o="\\ufe0e\\ufe0f",s="["+n+"]",l="["+i+"]",u="\\ud83c[\\udffb-\\udfff]",f="(?:"+l+"|"+u+")",h="[^"+n+"]",g="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",v="\\u200d",p=f+"?",b="["+o+"]?",m="(?:"+v+"(?:"+[h,g,d].join("|")+")"+b+p+")*",x=b+p+m,y="(?:"+[h+l+"?",l,g,d,s].join("|")+")",j=RegExp(u+"(?="+u+")|"+y+x,"g");function O(e){return e.match(j)||[]}e.exports=O},woj3:function(e,t){var n="\\ud800-\\udfff",r="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",c="\\u20d0-\\u20ff",i=r+a+c,o="\\ufe0e\\ufe0f",s="\\u200d",l=RegExp("["+s+n+i+o+"]");function u(e){return l.test(e)}e.exports=u},yAqI:function(e,t){function n(e){return e!==e}e.exports=n},yuV5:function(e,t,n){"use strict";n.r(t);var r=n("gY6z"),a=n("tJVT"),c=n("q1tI"),i=n.n(c),o=()=>{var e=Object(c["useState"])("Dog, cat, chicken, goose. Dogs, cats, chickens, geese."),t=Object(a["a"])(e,2),n=t[0],o=t[1];return i.a.createElement("div",{style:{maxWidth:800,border:20}},i.a.createElement(r["a"],{value:n,highlight:/dogs?|cats?|g(oo|ee)se/gi,onChange:e=>o(e)}))};t["default"]=o}}]);