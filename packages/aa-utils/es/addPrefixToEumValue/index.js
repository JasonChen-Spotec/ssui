var prefixNamespace = function prefixNamespace(types, namespace) {
  var resultActionTypes = {};
  Object.keys(types).forEach(function (key) {
    resultActionTypes[key] = namespace + "/" + types[key];
  });
  return resultActionTypes;
};
export default prefixNamespace;