import { useClientOnly } from './useClientOnly';
var ClientOnly = function ClientOnly(_a) {
  var children = _a.children;
  var hasMounted = useClientOnly();
  if (!hasMounted) {
    return null;
  }
  return children;
};
export default ClientOnly;