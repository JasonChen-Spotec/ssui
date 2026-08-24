"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useClientOnly = void 0;
var react_1 = require("react");
var useClientOnly = function useClientOnly() {
  var _ref = (0, react_1.useState)(false),
    hasMounted = _ref[0],
    setHasMounted = _ref[1];
  (0, react_1.useEffect)(function () {
    setHasMounted(true);
  }, []);
  return hasMounted;
};
exports.useClientOnly = useClientOnly;