type ResTypes = Record<string, string>;

const prefixNamespace = <U extends ResTypes>(types: U, namespace: string): U => {
  const resultActionTypes: ResTypes = {};

  Object.keys(types).forEach((key: string) => {
    resultActionTypes[key] = `${namespace}/${types[key]}`;
  });

  return resultActionTypes as U;
};

export default prefixNamespace;
