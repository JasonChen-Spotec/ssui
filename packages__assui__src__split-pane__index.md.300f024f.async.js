(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[106],{"+pnj":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,a=e.export,i=Object(r["useApiData"])(t),o=Object(n["useContext"])(r["context"]),m=o.locale,d=/^zh|cn$/i.test(m)?c["zh-CN"]:c["en-US"];return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement("table",{style:{marginTop:24}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,d.name),l.a.createElement("th",null,d.description),l.a.createElement("th",null,d.type),l.a.createElement("th",null,d.default))),l.a.createElement("tbody",null,i[a].map((function(e){return l.a.createElement("tr",{key:e.identifier},l.a.createElement("td",null,e.identifier),l.a.createElement("td",null,e.description||"--"),l.a.createElement("td",null,l.a.createElement("code",null,e.type)),l.a.createElement("td",null,l.a.createElement("code",null,e.default||e.required&&d.required||"--")))})))))}},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},w5in:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("Hf60"),i=a("+pnj"),o=l.a.memo((e=>{var t=e.demos,a=t["split-pane-demo1"].component,n=t["split-pane-demo2"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"splitpane\u5206\u5272\u9762\u677f"},l.a.createElement(r["AnchorLink"],{to:"#splitpane\u5206\u5272\u9762\u677f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"SplitPane(\u5206\u5272\u9762\u677f)"),l.a.createElement("p",null,"\u6c34\u5e73\u6216\u8005\u5782\u76f4\u5206\u5272\u9762\u677f"),l.a.createElement("h2",{id:"1-\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#1-\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1. \u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"11-\u57fa\u7840\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#11-\u57fa\u7840\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.1. \u57fa\u7840\u4f7f\u7528")),l.a.createElement(c["default"],t["split-pane-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"12-\u591a\u7a97\u53e3\u6c34\u5e73\u5206\u5272"},l.a.createElement(r["AnchorLink"],{to:"#12-\u591a\u7a97\u53e3\u6c34\u5e73\u5206\u5272","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2. \u591a\u7a97\u53e3\u6c34\u5e73\u5206\u5272")),l.a.createElement(c["default"],t["split-pane-demo2"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(i["a"],{identifier:"split-pane",export:"default"}),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u66f4\u591a\u8be6\u60c5",l.a.createElement(r["Link"],{to:"https://github.com/tomkp/react-split-pane"},"react-split-pane"))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:a})}}}]);