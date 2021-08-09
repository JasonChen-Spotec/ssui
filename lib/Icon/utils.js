"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInsertStyles = exports.iconStyles = exports.svgBaseProps = void 0;

var react_1 = require("react");

var insert_css_1 = require("insert-css");

exports.svgBaseProps = {
  'aria-hidden': 'true',
  'focusable': 'false'
};
exports.iconStyles = "\n.spotecicon {\n  display: inline-block;\n  width: 16px;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.spotecicon > * {\n  line-height: 1;\n}\n\n.spotecicon svg {\n  display: inline-block;\n}\n\n.spotecicon::before {\n  display: none;\n}\n\n.spotecicon .spotecicon-icon {\n  display: block;\n}\n\n.spotecicon[tabindex] {\n  cursor: pointer;\n}\n\n.spotecicon-spin::before,\n.spotecicon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var cssInjectedFlag = false;

var useInsertStyles = function useInsertStyles(styleStr) {
  if (styleStr === void 0) {
    styleStr = exports.iconStyles;
  }

  react_1.useEffect(function () {
    if (!cssInjectedFlag) {
      insert_css_1.insertCss(styleStr, {
        prepend: true
      });
      cssInjectedFlag = true;
    }
  }, []);
};

exports.useInsertStyles = useInsertStyles;