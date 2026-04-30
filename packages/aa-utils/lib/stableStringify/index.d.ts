/**
 * 稳定 JSON 序列化
 * 处理普通对象、数组和基础类型，满足下拉框 value 的稳定 stringify 需求
 */
declare const stableStringify: (val: any) => string | undefined;
export default stableStringify;
