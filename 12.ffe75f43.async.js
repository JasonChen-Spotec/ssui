(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{gFTJ:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){if(Array.isArray(e))return e}function c(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0)if(c.push(r.value),t&&c.length===t)break}catch(i){l=!0,o=i}finally{try{a||null==n["return"]||n["return"]()}finally{if(l)throw o}}return c}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){return o(e)||c(e,t)||l(e,t)||i()}n.r(t),n.d(t,"DescriptionsContext",(function(){return H}));var u=n("rTrx"),m=n("TSYQ"),f=n.n(m),d=n("q1tI"),p=n.n(d),y=n("TOwV");function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];return p.a.Children.forEach(e,(function(e){(void 0!==e&&null!==e||t.keepEmpty)&&(Array.isArray(e)?n=n.concat(b(e)):Object(y["isFragment"])(e)&&e.props?n=n.concat(b(e.props.children,t)):n.push(e))})),n}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var h=function(e,t){return t||(e?"ant-".concat(e):"ant")},x=d["createContext"]({getPrefixCls:h});x.Consumer;var w=d["isValidElement"];function E(e,t,n){return w(e)?d["cloneElement"](e,"function"===typeof n?n(e.props||{}):n):t}function g(e,t){return E(e,e,t)}var S=["xxl","xl","lg","md","sm","xs"],C={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},N=new Map,j=-1,k={},O={matchHandlers:{},dispatch:function(e){return k=e,N.forEach((function(e){return e(k)})),N.size>=1},subscribe:function(e){return N.size||this.register(),j+=1,N.set(j,e),e(k),j},unsubscribe:function(e){N["delete"](e),N.size||this.unregister()},unregister:function(){var e=this;Object.keys(C).forEach((function(t){var n=C[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),N.clear()},register:function(){var e=this;Object.keys(C).forEach((function(t){var n=C[t],o=function(n){var o=n.matches;e.dispatch(v(v({},k),r({},t,o)))},c=window.matchMedia(n);c.addListener(o),e.matchHandlers[n]={mql:c,listener:o},o(c)}))}},P=O,A=function(e){var t=e.children;return t},T=A;function I(e){return void 0!==e&&null!==e}var L=function(e){var t,n=e.itemPrefixCls,o=e.component,c=e.span,a=e.className,l=e.style,i=e.labelStyle,s=e.contentStyle,u=e.bordered,m=e.label,p=e.content,y=e.colon,b=o;return u?d["createElement"](b,{className:f()((t={},r(t,"".concat(n,"-item-label"),I(m)),r(t,"".concat(n,"-item-content"),I(p)),t),a),style:l,colSpan:c},I(m)&&d["createElement"]("span",{style:i},m),I(p)&&d["createElement"]("span",{style:s},p)):d["createElement"](b,{className:f()("".concat(n,"-item"),a),style:l,colSpan:c},d["createElement"]("div",{className:"".concat(n,"-item-container")},(m||0===m)&&d["createElement"]("span",{className:f()("".concat(n,"-item-label"),r({},"".concat(n,"-item-no-colon"),!y)),style:i},m),(p||0===p)&&d["createElement"]("span",{className:f()("".concat(n,"-item-content")),style:s},p)))},z=L;function M(e,t,n){var r=t.colon,o=t.prefixCls,c=t.bordered,a=n.component,l=n.type,i=n.showLabel,s=n.showContent,u=n.labelStyle,m=n.contentStyle;return e.map((function(e,t){var n=e.props,f=n.label,p=n.children,y=n.prefixCls,b=void 0===y?o:y,h=n.className,x=n.style,w=n.labelStyle,E=n.contentStyle,g=n.span,S=void 0===g?1:g,C=e.key;return"string"===typeof a?d["createElement"](z,{key:"".concat(l,"-").concat(C||t),className:h,style:x,labelStyle:v(v({},u),w),contentStyle:v(v({},m),E),span:S,colon:r,component:a,itemPrefixCls:b,bordered:c,label:i?f:null,content:s?p:null}):[d["createElement"](z,{key:"label-".concat(C||t),className:h,style:v(v(v({},u),x),w),span:1,colon:r,component:a[0],itemPrefixCls:b,bordered:c,label:f}),d["createElement"](z,{key:"content-".concat(C||t),className:h,style:v(v(v({},m),x),E),span:2*S-1,component:a[1],itemPrefixCls:b,bordered:c,content:p})]}))}var q=function(e){var t=d["useContext"](H),n=e.prefixCls,r=e.vertical,o=e.row,c=e.index,a=e.bordered;return r?d["createElement"](d["Fragment"],null,d["createElement"]("tr",{key:"label-".concat(c),className:"".concat(n,"-row")},M(o,e,v({component:"th",type:"label",showLabel:!0},t))),d["createElement"]("tr",{key:"content-".concat(c),className:"".concat(n,"-row")},M(o,e,v({component:"td",type:"content",showContent:!0},t)))):d["createElement"]("tr",{key:c,className:"".concat(n,"-row")},M(o,e,v({component:a?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},F=q,H=d["createContext"]({}),J={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function V(e,t){if("number"===typeof e)return e;if("object"===Object(u["a"])(e))for(var n=0;n<S.length;n++){var r=S[n];if(t[r]&&void 0!==e[r])return e[r]||J[r]}return 3}function D(e,t,n){var r=e;return(void 0===t||t>n)&&(r=g(e,{span:n})),r}function Q(e,t){var n=b(e).filter((function(e){return e})),r=[],o=[],c=t;return n.forEach((function(e,a){var l,i=null===(l=e.props)||void 0===l?void 0:l.span,s=i||1;if(a===n.length-1)return o.push(D(e,i,c)),void r.push(o);s<c?(c-=s,o.push(e)):(o.push(D(e,s,c)),r.push(o),c=t,o=[])})),r}function U(e){var t,n=e.prefixCls,o=e.title,c=e.extra,a=e.column,l=void 0===a?J:a,i=e.colon,m=void 0===i||i,p=e.bordered,y=e.layout,b=e.children,v=e.className,h=e.style,w=e.size,E=e.labelStyle,g=e.contentStyle,S=d["useContext"](x),C=S.getPrefixCls,N=S.direction,j=C("descriptions",n),k=d["useState"]({}),O=s(k,2),A=O[0],T=O[1],I=V(l,A);d["useEffect"]((function(){var e=P.subscribe((function(e){"object"===Object(u["a"])(l)&&T(e)}));return function(){P.unsubscribe(e)}}),[]);var L=Q(b,I),z=d["useMemo"]((function(){return{labelStyle:E,contentStyle:g}}),[E,g]);return d["createElement"](H.Provider,{value:z},d["createElement"]("div",{className:f()(j,(t={},r(t,"".concat(j,"-").concat(w),w&&"default"!==w),r(t,"".concat(j,"-bordered"),!!p),r(t,"".concat(j,"-rtl"),"rtl"===N),t),v),style:h},(o||c)&&d["createElement"]("div",{className:"".concat(j,"-header")},o&&d["createElement"]("div",{className:"".concat(j,"-title")},o),c&&d["createElement"]("div",{className:"".concat(j,"-extra")},c)),d["createElement"]("div",{className:"".concat(j,"-view")},d["createElement"]("table",null,d["createElement"]("tbody",null,L.map((function(e,t){return d["createElement"](F,{key:t,index:t,colon:m,prefixCls:j,vertical:"vertical"===y,bordered:p,row:e})})))))))}U.Item=T;t["default"]=U},rTrx:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,"a",(function(){return r}))}}]);