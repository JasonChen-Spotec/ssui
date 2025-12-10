"use strict";(self.webpackChunkassui=self.webpackChunkassui||[]).push([[326],{86791:function(R,h,i){var d=this&&this.__assign||function(){return d=Object.assign||function(n){for(var e,o=1,a=arguments.length;o<a;o++){e=arguments[o];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},d.apply(this,arguments)},I=this&&this.__createBinding||(Object.create?function(n,e,o,a){a===void 0&&(a=o);var t=Object.getOwnPropertyDescriptor(e,o);(!t||("get"in t?!e.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return e[o]}}),Object.defineProperty(n,a,t)}:function(n,e,o,a){a===void 0&&(a=o),n[a]=e[o]}),_=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),F=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var o in n)o!=="default"&&Object.prototype.hasOwnProperty.call(n,o)&&I(e,n,o);return _(e,n),e},m=this&&this.__rest||function(n,e){var o={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(o[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(n);t<a.length;t++)e.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(n,a[t])&&(o[a[t]]=n[a[t]]);return o},v=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(h,"__esModule",{value:!0});var O=F(i(67294)),C=v(i(74263)),w=i(62551),M=function(e){var o=e.className,a=e.component,t=e.viewBox,S=e.spin,E=e.rotate,B=e.tabIndex,l=e.onClick,s=e.children,c=m(e,["className","component","viewBox","spin","rotate","tabIndex","onClick","children"]);(0,w.useInsertStyles)();var u=(0,C.default)("spotecicon",o),r=(0,C.default)({"spotecicon-spin":!!S}),g=E?{msTransform:"rotate(".concat(E,"deg)"),transform:"rotate(".concat(E,"deg)")}:void 0,f=d(d({},w.svgBaseProps),{className:r,style:g,viewBox:t});t||delete f.viewBox;var y=function(){return a?O.createElement(a,d({},f),s):s?O.createElement("svg",d({},f,{viewBox:t}),s):null},p=B;return p===void 0&&l&&(p=-1),O.createElement("span",d({role:"img"},c,{tabIndex:p,onClick:l,className:u}),y())};M.displayName="SpotecIcon",h.default=M},62551:function(R,h,i){Object.defineProperty(h,"__esModule",{value:!0}),h.useInsertStyles=h.iconStyles=h.svgBaseProps=void 0;var d=i(67294),I=i(19454);h.svgBaseProps={"aria-hidden":"true",focusable:"false"},h.iconStyles=`
.spotecicon {
  display: inline-block;
  width: 24px;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.spotecicon > * {
  line-height: 1;
}

.spotecicon svg {
  display: inline-block;
}

.spotecicon::before {
  display: none;
}

.spotecicon .spotecicon-icon {
  display: block;
}

.spotecicon[tabindex] {
  cursor: pointer;
}

.spotecicon-spin::before,
.spotecicon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;var _=!1,F=function(v){v===void 0&&(v=h.iconStyles),(0,d.useEffect)(function(){_||((0,I.insertCss)(v,{prepend:!0}),_=!0)},[])};h.useInsertStyles=F},25562:function(R,h,i){var d=i(67294),I=i(86791),_=i.n(I),F=function(){return F=Object.assign||function(v){for(var O,C=1,w=arguments.length;C<w;C++){O=arguments[C];for(var M in O)Object.prototype.hasOwnProperty.call(O,M)&&(v[M]=O[M])}return v},F.apply(this,arguments)};function m(v){var O=function(w){return d.createElement("svg",F({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},w),d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 4.586l6 6 6-6L19.414 6l-6 6 6 6L18 19.414l-6-6-6 6L4.586 18l6-6-6-6L6 4.586z",fill:"currentColor"}))};return d.createElement(_(),F({},v,{component:O}))}m.displayName="CloseOutlined",h.Z=m},60069:function(R,h,i){var d=i(67294),I=i(63171),_=i.n(I),F=i(262),m=i(25562),v=function(){return v=Object.assign||function(n){for(var e,o=1,a=arguments.length;o<a;o++){e=arguments[o];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},v.apply(this,arguments)},O=function(n,e){var o={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(o[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(n);t<a.length;t++)e.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(n,a[t])&&(o[a[t]]=n[a[t]]);return o},C=function(n,e){var o=typeof Symbol=="function"&&n[Symbol.iterator];if(!o)return n;var a=o.call(n),t,S=[],E;try{for(;(e===void 0||e-- >0)&&!(t=a.next()).done;)S.push(t.value)}catch(B){E={error:B}}finally{try{t&&!t.done&&(o=a.return)&&o.call(a)}finally{if(E)throw E.error}}return S},w=function(e,o){var a=C(d.useState(!1),2),t=a[0],S=a[1],E=e.children,B=e.trigger,l=e.onOpen,s=e.onClose,c=e.onOk,u=e.onCancel,r=O(e,["children","trigger","onOpen","onClose","onOk","onCancel"]),g=function(){S(!0),l==null||l()},f=function(){S(!1),s==null||s()},y=d.useRef({open:g,close:f});d.useImperativeHandle(o,function(){return y.current});var p=function(b){return c?c(b):(f(),null)},x=function(b){u&&u(b),f()},j=B&&d.cloneElement(B,{onClick:g});return d.createElement(d.Fragment,null,j,d.createElement(F.Z,v({open:t,onOk:p,onCancel:x,centered:!0,maskClosable:!1,closeIcon:d.createElement(m.Z,null)},r),_()(E)?E(y.current):d.cloneElement(E,{modalAction:y.current})))},M=d.forwardRef(w);h.Z=M},24964:function(R,h,i){i.d(h,{Z:function(){return B}});var d=i(67294),I=i(11937),_=i.n(I),F=i(21329);function m(l){return["small","middle","large"].includes(l)}var v=function(){return v=Object.assign||function(l){for(var s,c=1,u=arguments.length;c<u;c++){s=arguments[c];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(l[r]=s[r])}return l},v.apply(this,arguments)},O=["wrap","nowrap","wrap-reverse"],C=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],w=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],M=function(s,c){var u={};return O.forEach(function(r){u["".concat(s,"-wrap-").concat(r)]=c.wrap===r}),u},n=function(s,c){var u={};return w.forEach(function(r){u["".concat(s,"-align-").concat(r)]=c.align===r}),u["".concat(s,"-align-stretch")]=!c.align&&!!c.vertical,u},e=function(s,c){var u={};return C.forEach(function(r){u["".concat(s,"-justify-").concat(r)]=c.justify===r}),u};function o(l,s){return _()(v(v(v({},M(l,s)),n(l,s)),e(l,s)))}var a=o,t=function(){return t=Object.assign||function(l){for(var s,c=1,u=arguments.length;c<u;c++){s=arguments[c];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(l[r]=s[r])}return l},t.apply(this,arguments)},S=function(l,s){var c={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&s.indexOf(u)<0&&(c[u]=l[u]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,u=Object.getOwnPropertySymbols(l);r<u.length;r++)s.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(l,u[r])&&(c[u[r]]=l[u[r]]);return c},E=d.forwardRef(function(l,s){var c,u=l.className,r=l.style,g=l.flex,f=l.gap,y=l.children,p=l.vertical,x=p===void 0?!1:p,j=l.component,A=j===void 0?"div":j,b=S(l,["className","style","flex","gap","children","vertical","component"]),P="as-flex",D=a(P,l),L=_()(u,P,D,(c={},c["".concat(P,"-gap-").concat(f)]=m(f),c["".concat(P,"-vertical")]=x,c)),N=t({},r);return g&&(N.flex=g),f&&!m(f)&&(N.gap=f),d.createElement(A,t({ref:s,className:L},(0,F.Z)(b,["justify","wrap","align"]),{style:N}),y)}),B=E},99686:function(){},23482:function(R,h,i){i.r(h),i.d(h,{default:function(){return c}});var d=i(99686),I=i(24964),_=i(13164),F=i(6055),m=i(67294),v=i(39545),O=i(11937),C=i.n(O),w=i(41863),M=i.n(w),n=i(60069),e=function(){return e=Object.assign||function(u){for(var r,g=1,f=arguments.length;g<f;g++){r=arguments[g];for(var y in r)Object.prototype.hasOwnProperty.call(r,y)&&(u[y]=r[y])}return u},e.apply(this,arguments)},o=function(u,r){var g=typeof Symbol=="function"&&u[Symbol.iterator];if(!g)return u;var f=g.call(u),y,p=[],x;try{for(;(r===void 0||r-- >0)&&!(y=f.next()).done;)p.push(y.value)}catch(j){x={error:j}}finally{try{y&&!y.done&&(g=f.return)&&g.call(f)}finally{if(x)throw x.error}}return p},a=function(r){var g=r.text,f=g===void 0?"":g,y=r.lines,p=y===void 0?3:y,x=r.className,j=x===void 0?"":x,A=r.tipType,b=r.buttonModalProps,P=r.tooltipProps,D=r.onEllipsisChange,L=r.onClick,N=m.useRef(null),U=o(m.useState(!1),2),T=U[0],K=U[1];m.useEffect(function(){var Z=N.current;Z&&requestAnimationFrame(function(){var k=window.getComputedStyle(Z),z=parseFloat(k.lineHeight),V=z*p,H=Z.scrollHeight>V+1;K(H),D==null||D(H)})},[f,p,D]);var W=m.createElement("div",{ref:N,className:C()("ellipsis",j,{cursor:T&&A}),style:{WebkitLineClamp:p,display:"-webkit-box",WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"pre-wrap",wordBreak:"break-all"},title:T?f:void 0,onClick:T?L:void 0},f);return T&&A==="modal"?m.createElement(n.Z,e({destroyOnClose:!0,width:325,footer:null},M()(b,"children"),{className:C()("ellipsis-modal",b==null?void 0:b.className),trigger:W}),(b==null?void 0:b.children)||m.createElement("div",{className:"ellipsis-modal-content"},f)):T&&A==="tooltip"?m.createElement(v.Z,e({},P,{overlayClassName:C()("ellipsis-tooltip",P==null?void 0:P.overlayClassName),title:m.createElement("div",{className:"ellipsis-tooltip-content"},f)}),W):W},t=a,S=i(5574),E=i.n(S),B=i(85893),l=`\u6211\u662F\u4E00\u6BB5\u957F\u6587\u6848\uFF0C
\u70B9\u51FB\u6211\u4E5F\u8BB8\u53EF\u4EE5\u67E5\u770B\u4EE5\u4E0B\u5B8C\u6574\u4FE1\u606F\uFF1A
  1. \u6587\u6848\u5E26\u6709\u4E00\u5B9A\u7684\u683C\u5F0F\uFF1A\u6362\u884C\u3001\u9996\u884C\u7F29\u8FDB\u7B49\uFF1B
  2. \u67D0\u4E9B\u6BB5\u843D\u4F1A\u5F88\u957F\uFF0C\u9700\u8981\u8003\u8651\u81EA\u7136\u6362\u884C\u7684\u60C5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\u51B5\uFF1B
  3. ...\u7684\u4F4D\u7F6E\u4E0D\u4E00\u5B9A\u5728\u884C\u672B\uFF0C\u53EF\u80FD\u4F1A\u5728\u884C\u4E2D\u95F4\u3002`,s=function(){var r=m.useState(l),g=E()(r,2),f=g[0],y=g[1],p=m.useState(4),x=E()(p,2),j=x[0],A=x[1];return(0,B.jsxs)(I.Z,{vertical:!0,gap:40,children:[(0,B.jsx)("textarea",{value:f,onChange:function(P){return y(P.target.value)},rows:5,style:{width:300}}),(0,B.jsx)("input",{value:j,onChange:function(P){return A(+P.target.value)},style:{width:300}}),(0,B.jsxs)("div",{children:[(0,B.jsx)("h4",{children:"\u65B9\u6848\u4E00\uFF1A\u5F39\u7A97\u5C55\u793A"}),(0,B.jsx)(t,{text:f,lines:j,tipType:"modal",className:"red-border",buttonModalProps:{title:"\u5F39\u7A97\u5C55\u793A\u5B8C\u6574\u6587\u6848"}})]}),(0,B.jsxs)("div",{children:[(0,B.jsx)("h4",{children:"\u65B9\u6848\u4E8C\uFF1A\u6D6E\u7A97\u5C55\u793A"}),(0,B.jsx)(t,{text:f,lines:j,tipType:"tooltip",className:"red-border"})]}),(0,B.jsxs)("div",{children:[(0,B.jsx)("h4",{children:"\u65B9\u6848\u4E09\uFF1A\u6EA2\u51FA\u7701\u7565\uFF0C\u4E0D\u5C55\u793A\u5B8C\u6574\u6587\u6848"}),(0,B.jsx)(t,{text:f,lines:j,className:"red-border"})]})]})},c=s}}]);
