import React from 'react';
import { Button } from 'antd';
import emitter from './emitter';

const EmitButtonTwo = () => (
  <Button style={{ marginRight: 20 }} onClick={() => emitter.emit('console', 'console 事件')}>
    触发console
  </Button>
);

export default EmitButtonTwo;
