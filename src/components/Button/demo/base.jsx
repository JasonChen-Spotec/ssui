/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 默认切换布尔值状态，也可以接收一个参数作为新的值。
 */

import React from 'react';
import { Button } from 'antd';

export default () => {
  return (
    <div>
      <p>
        <Button type="button">
          Toggle
        </Button>
        <Button type="button" >
          Set false
        </Button>
        <Button type="button">
          Set true
        </Button>
      </p>
    </div>
  );
};
