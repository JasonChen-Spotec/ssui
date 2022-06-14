type ObjectValueType = any[] | Record<string, any>;

export default {
  set(key: string, value: string) {
    // 存储单个属性
    window.localStorage.setItem(key, value);
  },
  get(key: string): string | null {
    // 读取单个属性
    return window.localStorage.getItem(key);
  },
  setObject(key: string, value: ObjectValueType) {
    // 存储对象，以JSON格式
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  getObject(key: string): ObjectValueType {
    // 读取对象，以JSON格式
    const value = window.localStorage.getItem(key) as string;
    let result;
    try {
      result = JSON.parse(value);
    } catch (error) {
      console.log('error', error);
    }

    return result;
  },
};
