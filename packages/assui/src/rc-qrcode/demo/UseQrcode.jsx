import React, { useState } from 'react';
import { Button } from 'antd';
import { RcQrcode } from 'assui';

export default () => {
  const [count, setCount] = useState(1);
  const url = RcQrcode.useQrcode(`${count}`);

  return (
    <div>
      <img src={url} alt="" />
      <Button onClick={() => setCount(count + 1)}>刷新</Button>
    </div>
  );
};
