export default {
  set: function set(key, value) {
    // 存储单个属性
    window.localStorage.setItem(key, value);
  },
  get: function get(key) {
    // 读取单个属性
    return window.localStorage.getItem(key);
  },
  setObject: function setObject(key, value) {
    // 存储对象，以JSON格式
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  getObject: function getObject(key) {
    // 读取对象，以JSON格式
    var value = window.localStorage.getItem(key);
    var result;
    try {
      result = JSON.parse(value);
    } catch (error) {
      console.log('error', error);
    }
    return result;
  },
};
