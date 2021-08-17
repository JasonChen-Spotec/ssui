/**
 * title: 只触发一次
 * desc: once执行一次
 */

import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import EventEmitter from 'aa-utils/lib/events';

const ee = new EventEmitter();

const TextButton = () => (
  <Button onClick={() => ee.emit('message', 'hello world')}>只触发一次</Button>
);

export default () => {
  useEffect(() => {
    ee.once('message', (text) => {
      console.log('TextButton');
      message.info(text);
    });
  }, []);
  return (
    <div>
      <TextButton />
    </div>
  );
};
