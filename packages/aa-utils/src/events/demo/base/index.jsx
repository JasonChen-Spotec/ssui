/**
 * title: 基本用法
 * desc: 基础事件监听、事件触发、移除
 */

import React, { useEffect } from 'react';
import { message, Button } from 'antd';
import emitter from './emitter';
import EmitButtonTwo from './EmitButtonTwo';
import EmitButtonOne from './EmitButtonOne';

const consoleFunc = (arg1) => {
  message.info(arg1);
};

export default () => {
  useEffect(() => {
    emitter.on('message', (text) => {
      message.info(text);
    });

    emitter.on('console', consoleFunc);
    console.log('emitter', emitter);
  }, []);

  const offConsoleFunc = () => {
    emitter.off('console', consoleFunc);
  };

  return (
    <>
      <EmitButtonOne />
      <EmitButtonTwo />
      <Button onClick={offConsoleFunc}>移除console事件</Button>
    </>
  );
};
