/**
 * title: 区间执行
 * desc: 规定时间区间内只执行一次callback
 */

import React, { useState, useEffect } from 'react';
import { Descriptions } from 'antd';
import { intervalExecution } from 'aa-utils';

const Demo = () => {
  const [visibility, setVisibility] = useState('minimized');
  useEffect(() => {
    intervalExecution(() => {
      setVisibility('maximized');
      console.log('我执行了一次');
    });
  }, []);

  return <div>{visibility}</div>;
};

export default Demo;
