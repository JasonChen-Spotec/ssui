"use strict";

exports.__esModule = true;
exports.useInsertStyles = exports.iconStyles = exports.svgBaseProps = void 0;

var _react = require("react");

var _insertCss = require("insert-css");

var svgBaseProps = {
  'aria-hidden': 'true',
  'focusable': 'false'
};
exports.svgBaseProps = svgBaseProps;
var iconStyles = "\n.spotecicon {\n  display: inline-block;\n  width: 16px;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.spotecicon > * {\n  line-height: 1;\n}\n\n.spotecicon svg {\n  display: inline-block;\n}\n\n.spotecicon::before {\n  display: none;\n}\n\n.spotecicon .spotecicon-icon {\n  display: block;\n}\n\n.spotecicon[tabindex] {\n  cursor: pointer;\n}\n\n.spotecicon-spin::before,\n.spotecicon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
exports.iconStyles = iconStyles;
var cssInjectedFlag = false;

var useInsertStyles = function useInsertStyles(styleStr) {
  if (styleStr === void 0) {
    styleStr = iconStyles;
  }

  console.log('insertCss', _insertCss.insertCss);
  (0, _react.useEffect)(function () {
    if (!cssInjectedFlag) {
      (0, _insertCss.insertCss)(styleStr, {
        prepend: true
      });
      cssInjectedFlag = true;
    }
  }, []);
};

exports.useInsertStyles = useInsertStyles;