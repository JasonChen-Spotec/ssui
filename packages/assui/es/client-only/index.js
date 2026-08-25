import { useClientOnly } from './useClientOnly';
var ClientOnly = function ClientOnly(_ref) {
  var children = _ref.children;
  var hasMounted = useClientOnly();
  if (!hasMounted) {
    return null;
  }
  return children;
};
export default ClientOnly;