"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var useClientOnly_1 = require("./useClientOnly");
var ClientOnly = function ClientOnly(_a) {
  var children = _a.children;
  var hasMounted = (0, useClientOnly_1.useClientOnly)();
  if (!hasMounted) {
    return null;
  }
  return children;
};
exports["default"] = ClientOnly;