'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    ((obj.constructor && obj.constructor.name === 'Promise') ||
      typeof obj.then === 'function')
  );
}
exports['default'] = isPromise;
