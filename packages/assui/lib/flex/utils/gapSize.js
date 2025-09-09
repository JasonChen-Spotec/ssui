"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPresetSize = isPresetSize;
function isPresetSize(size) {
  return ['small', 'middle', 'large'].includes(size);
}