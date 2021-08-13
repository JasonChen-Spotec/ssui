import React from 'react';
import { Button } from 'antd';
import emitter from './emitter';

const EmitButtonOne = () => (
  <Button
    style={{ marginRight: 20 }}
    onClick={() => emitter.emit('message', 'message hello world')}
  >
    触发message
  </Button>
);

export default EmitButtonOne;
