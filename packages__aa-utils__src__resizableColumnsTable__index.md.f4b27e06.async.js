(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[59],{"3kZP":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq"),c=n("Hf60"),o=n("H1Ra"),i=n("dMo/"),u=l.a.memo((e=>{var t=e.demos,n=t["resizablecolumnstable-demo"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"resizablecolumnstable"},l.a.createElement(r["AnchorLink"],{to:"#resizablecolumnstable","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"resizableColumnsTable"),l.a.createElement("p",null,"table \u62d6\u52a8 \u5de5\u5177\u65b9\u6cd5"),l.a.createElement("h2",{id:"1-\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#1-\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1. \u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"11-\u57fa\u7840\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#11-\u57fa\u7840\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.1. \u57fa\u7840\u4f7f\u7528")),l.a.createElement(c["default"],t["resizablecolumnstable-demo"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("h3",{id:"\u4f7f\u7528api"},l.a.createElement(r["AnchorLink"],{to:"#\u4f7f\u7528api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528api"),l.a.createElement(o["a"],{code:"resizableColumnsTable(tableDom, options);",lang:"js"}),l.a.createElement("h3",{id:"options"},l.a.createElement(r["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"options"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027\u540d"),l.a.createElement("th",null,"\u63cf\u8ff0"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"liveDrag"),l.a.createElement("td",null,"\u662f\u5426\u5b9e\u65f6\u62d6\u52a8"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,"true")),l.a.createElement("tr",null,l.a.createElement("td",null,"defaultMinWidth"),l.a.createElement("td",null,"\u9ed8\u8ba4\u6ca1\u5217\u6700\u5c0f\u5bbd\u5ea6"),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,"30")),l.a.createElement("tr",null,l.a.createElement("td",null,"headerOnly"),l.a.createElement("td",null,"\u62d6\u52a8\u7ad6\u7ebf\u662f\u5426\u53ea\u6709thead"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,"true")),l.a.createElement("tr",null,l.a.createElement("td",null,"disabledColumns"),l.a.createElement("td",null,"\u4e0d\u80fd\u62d6\u52a8\u7684th"),l.a.createElement("td",null,l.a.createElement("code",null,"number[]")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"onResizing"),l.a.createElement("td",null,"\u6b63\u5728\u62d6\u52a8callback"),l.a.createElement("td",null,l.a.createElement("code",null,"()=> void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"onResized"),l.a.createElement("td",null,"\u62d6\u52a8\u7ed3\u675fcallback"),l.a.createElement("td",null,l.a.createElement("code",null,"()=> void")),l.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:n})}},"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},WpQk:function(e,t,n){},"dMo/":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("hKI/"),c=n.n(r);n("WpQk");function o(e,t){return s(e)||d(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),i=o(r,2),u=i[0],m=i[1],d=Object(a["useState"])(!1),s=o(d,2),E=s[0],b=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){m(e.scrollLeft>0),b(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E}}]);