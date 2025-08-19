type ObjectValueType = any[] | Record<string, any>;
declare const _default: {
  set(key: string, value: string): void;
  get(key: string): string | null;
  setObject(key: string, value: ObjectValueType): void;
  getObject(key: string): ObjectValueType;
};
export default _default;
