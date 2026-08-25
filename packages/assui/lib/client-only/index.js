"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var useClientOnly_1 = require("./useClientOnly");
var ClientOnly = function ClientOnly(_ref) {
  var children = _ref.children;
  var hasMounted = (0, useClientOnly_1.useClientOnly)();
  if (!hasMounted) {
    return null;
  }
  return children;
};
exports["default"] = ClientOnly;