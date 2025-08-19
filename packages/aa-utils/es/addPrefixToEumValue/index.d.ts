type ResTypes = Record<string, string>;
declare const prefixNamespace: <U extends ResTypes>(types: U, namespace: string) => U;
export default prefixNamespace;
