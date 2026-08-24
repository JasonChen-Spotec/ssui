import { useEffect, useState } from 'react';
export var useClientOnly = function useClientOnly() {
  var _useState = useState(false),
    hasMounted = _useState[0],
    setHasMounted = _useState[1];
  useEffect(function () {
    setHasMounted(true);
  }, []);
  return hasMounted;
};