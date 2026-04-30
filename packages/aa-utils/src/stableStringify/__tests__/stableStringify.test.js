import stableStringify from '../index';

describe('stableStringify (保留原貌版)', () => {
  // --------------------------------------------------------
  // 1. 核心痛点：对象键名排序测试
  // --------------------------------------------------------
  it('应该对普通对象的 key 进行字典序排序', () => {
    const obj1 = { type: 1, channelId: 16 };
    const obj2 = { channelId: 16, type: 1 };

    const expected = '{"channelId":16,"type":1}';

    expect(stableStringify(obj1)).toBe(expected);
    expect(stableStringify(obj2)).toBe(expected);
  });

  // --------------------------------------------------------
  // 2. 核心痛点：数组严格保序测试
  // --------------------------------------------------------
  it('应该保持数组元素的原始顺序，仅对内部对象的 key 排序', () => {
    const arr = [
      { step: 2, action: 'review' },
      { action: 'submit', step: 1 },
    ];
    // 数组的第一项和第二项顺序不变
    const expected = '[{"action":"review","step":2},{"action":"submit","step":1}]';

    expect(stableStringify(arr)).toBe(expected);
  });

  // --------------------------------------------------------
  // 3. 业务场景：Ant Design 回显匹配测试
  // --------------------------------------------------------
  it('无论前后端数据键名顺序如何，序列化后必须全等（解决 Select 回显失败）', () => {
    const backendData = [{ channelId: 7, type: 1 }, { channelId: 9, type: 1 }];
    const frontendFormValue = [{ type: 1, channelId: 7 }, { type: 1, channelId: 9 }];

    expect(stableStringify(backendData)).toEqual(stableStringify(frontendFormValue));
  });

  // --------------------------------------------------------
  // 4. 基础类型测试
  // --------------------------------------------------------
  it('应该正确处理基础数据类型', () => {
    expect(stableStringify('hello')).toBe('"hello"');
    expect(stableStringify(123)).toBe('123');
    expect(stableStringify(true)).toBe('true');
    expect(stableStringify(null)).toBe('null');
  });

  // --------------------------------------------------------
  // 5. 完全保留 undefined 和 function 的真实原貌
  // --------------------------------------------------------
  it('应该在对象和数组中如实保留 undefined 和 function', () => {
    expect(stableStringify(undefined)).toBe('undefined');

    // 定义一个简单的测试函数
    const testFunc = function () { return 1; };
    const funcStr = testFunc.toString();
    expect(stableStringify(testFunc)).toBe(funcStr);

    // 测试对象中的原貌保留
    const obj = { b: undefined, a: 1, c: testFunc };
    // 预期结果：按 a, b, c 排序，并如实拼接 undefined 和 function 源码
    expect(stableStringify(obj)).toBe(`{"a":1,"b":undefined,"c":${funcStr}}`);

    // 测试数组中的原貌保留
    const arr = [1, undefined, testFunc, 2];
    expect(stableStringify(arr)).toBe(`[1,undefined,${funcStr},2]`);
  });
});
