(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[89],{"+pnj":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("dEAq"),i=n("dMo/"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,n=e.export,o=Object(l["useApiData"])(t),u=Object(a["useContext"])(l["context"]),d=u.locale,m=/^zh|cn$/i.test(d)?c["zh-CN"]:c["en-US"];return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,m.name),r.a.createElement("th",null,m.description),r.a.createElement("th",null,m.type),r.a.createElement("th",null,m.default))),r.a.createElement("tbody",null,o[n].map((function(e){return r.a.createElement("tr",{key:e.identifier},r.a.createElement("td",null,e.identifier),r.a.createElement("td",null,e.description||"--"),r.a.createElement("td",null,r.a.createElement("code",null,e.type)),r.a.createElement("td",null,r.a.createElement("code",null,e.default||e.required&&m.required||"--")))})))))}},"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},WpQk:function(e,t,n){},"dMo/":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("hKI/"),i=n.n(l);n("WpQk");function c(e,t){return s(e)||m(e,t)||u(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(a=n.next()).done);i=!0)if(l.push(a.value),t&&l.length===t)break}catch(o){c=!0,r=o}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function s(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),o=c(l,2),u=o[0],d=o[1],m=Object(a["useState"])(!1),s=c(m,2),f=s[0],p=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=i()((function(){d(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f},viih:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("dEAq"),i=n("Hf60"),c=n("+pnj"),o=r.a.memo((e=>{var t=e.demos,n=t["label-input-demo"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"labelinput"},r.a.createElement(l["AnchorLink"],{to:"#labelinput","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"LabelInput"),r.a.createElement("p",null,"\u8f93\u5165 Input \u7ec4\u4ef6"),r.a.createElement("h2",{id:"1-\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#1-\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"1. \u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"11-\u57fa\u7840\u4f7f\u7528"},r.a.createElement(l["AnchorLink"],{to:"#11-\u57fa\u7840\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"1.1. \u57fa\u7840\u4f7f\u7528")),r.a.createElement(i["default"],t["label-input-demo"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{identifier:"label-input",export:"default"}))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:n})}}}]);