import React, { useState } from 'react';
import { Button } from 'antd';
import RcQRcode from 'assui/lib/rc-qrcode';

export default () => {
  const [count, setCount] = useState(1);
  const url = RcQRcode.useQrcode(`${count}`);

  return (
    <div>
      <img src={url} alt="" />
      <Button onClick={() => setCount(count + 1)}>刷新</Button>
    </div>
  );
};
