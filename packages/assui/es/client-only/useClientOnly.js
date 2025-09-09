var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
import { useEffect, useState } from 'react';
export var useClientOnly = function useClientOnly() {
  var _a = __read(useState(false), 2),
    hasMounted = _a[0],
    setHasMounted = _a[1];
  useEffect(function () {
    setHasMounted(true);
  }, []);
  return hasMounted;
};