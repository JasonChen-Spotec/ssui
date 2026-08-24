"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function Pdf(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsxs)("g", {
        clipPath: "url(#pdf_svg__clip0_23648_109766)",
        children: [(0, jsx_runtime_1.jsx)("path", {
          d: "M35.22 36.2c0 .5-.2.98-.56 1.34-.36.36-.84.56-1.34.56H6.66c-.5 0-1-.2-1.34-.56-.36-.36-.56-.84-.56-1.34V1.9c0-.5.2-1 .56-1.34C5.66.2 6.16 0 6.66 0h16.36c.5 0 1 .2 1.36.56l10.3 10.3c.36.36.56.84.56 1.36V36.2h-.02z",
          fill: "#EBECF0"
        }), (0, jsx_runtime_1.jsx)("path", {
          d: "M35.22 36.2v1.9c0 .5-.2 1-.56 1.34-.36.36-.84.56-1.34.56H6.66c-1.06 0-1.9-.86-1.9-1.9v-1.9c0 .5.2.98.56 1.34.36.36.84.56 1.34.56h26.66c1.06 0 1.9-.86 1.9-1.9z",
          fill: "#C1C7D0"
        }), (0, jsx_runtime_1.jsx)("path", {
          d: "M4.76 20.96v-3.82L.94 20.96h3.82zm30.46 0l.04-3.82 3.8 3.82h-3.84z",
          fill: "#D30000"
        }), (0, jsx_runtime_1.jsx)("path", {
          d: "M35.22 12.22v.26h-10.3c-1.06 0-1.9-.86-1.9-1.9V0c.5 0 1 .2 1.36.56l10.32 10.3c.34.36.54.84.52 1.36z",
          fill: "#C1C7D0"
        }), (0, jsx_runtime_1.jsx)("path", {
          d: "M19.645 23.872h-1.567v5.585h1.54c1.747 0 2.692-.985 2.692-2.885 0-1.653-.864-2.678-2.665-2.7zm-8.905.003H8.498v2.373h2.242c.918 0 1.499-.315 1.499-1.203 0-.723-.445-1.17-1.5-1.17z",
          fill: "#FF1D1D"
        }), (0, jsx_runtime_1.jsx)("path", {
          d: "M.96 20.96v9.5c0 .52.2 1 .561 1.36.34.36.84.56 1.34.56h34.28c1.04 0 1.9-.84 1.9-1.9v-9.52H.961zm9.95 6.972H8.5v3.206H6.32v-8.936h4.623c2.078 0 3.46 1.05 3.46 2.809 0 1.758-1.302 2.92-3.494 2.92zm8.994 3.206h-3.993v-8.936h4.04c3.01 0 4.657 1.954 4.657 4.312 0 2.86-2.103 4.624-4.704 4.624zm13.842-7.21H28.56v2.031h4.837v1.738h-4.836v3.44h-2.169v-8.935h7.354v1.725z",
          fill: "#FF1D1D"
        }), (0, jsx_runtime_1.jsx)("path", {
          d: "M10.941 22.202H6.318v8.936h2.18v-3.206h2.41c2.192 0 3.493-1.094 3.493-2.921 0-1.827-1.381-2.809-3.46-2.809zm-.202 4.046H8.498v-2.373h2.241c1.054 0 1.5.447 1.5 1.17 0 .888-.582 1.203-1.5 1.203zm9.21-4.046h-4.04v8.936h3.994c2.6 0 4.704-1.764 4.704-4.624 0-2.358-1.647-4.312-4.658-4.312zm-.332 7.255h-1.54v-5.585h1.567c1.8.022 2.666 1.047 2.666 2.7 0 1.9-.945 2.885-2.693 2.885zm6.774 1.68h2.168v-3.44h4.836V25.96H28.56v-2.032h5.185v-1.726h-7.353v8.936z",
          fill: "#fff"
        })]
      }), (0, jsx_runtime_1.jsx)("defs", {
        children: (0, jsx_runtime_1.jsx)("clipPath", {
          id: "pdf_svg__clip0_23648_109766",
          children: (0, jsx_runtime_1.jsx)("path", {
            fill: "#fff",
            d: "M0 0h40v40H0z"
          })
        })
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
Pdf.displayName = "Pdf";
exports["default"] = Pdf;