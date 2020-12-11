import React from 'react';
import { Descriptions } from 'antd'
import numberUtils from 'aa-utils/lib/numberUtils';

export default ()=>(
  <div>
    <Descriptions column={1}>
      <Descriptions.Item label="numberUtils.strip(0.09999999999999998)(把错误的数据纠正)">{numberUtils.strip(0.09999999999999998)}</Descriptions.Item>
      <Descriptions.Item label="numberUtils.plus(0.1, 0.2)(加法)"> { numberUtils.plus(0.1, 0.2) } </Descriptions.Item>
      <Descriptions.Item label="numberUtils.minus(1.0, 0.9)(减法)"> { numberUtils.minus(1.0, 0.9) } </Descriptions.Item>
      <Descriptions.Item label="numberUtils.times(3, 0.3)(乘法)"> { numberUtils.times(3, 0.3) } </Descriptions.Item>
      <Descriptions.Item label="numberUtils.times(0.362, 100)(乘法)"> { numberUtils.times(0.362, 100) } </Descriptions.Item>
      <Descriptions.Item label="numberUtils.divide(1.21, 1.1)(除法)"> { numberUtils.divide(1.21, 1.1) } </Descriptions.Item>
      <Descriptions.Item label="numberUtils.round(0.105, 2)(四舍五入默认最大保留2位小数)"> { numberUtils.round(0.105) } </Descriptions.Item>
      <Descriptions.Item label="numberUtils.round(0.105, 2)(四舍五入)最大保留1位小数"> { numberUtils.round(0.105, 1) } </Descriptions.Item>
      <Descriptions.Item label="numberUtils.digitLength(0.105)(获取小数长度)"> { numberUtils.digitLength(0.105) } </Descriptions.Item>
    </Descriptions>
  </div>
)
