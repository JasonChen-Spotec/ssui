import React from 'react';
import { CopyToClipboard } from 'assui';
import { CopyFilled } from 'a-icons';

export default () => (
  <div>
    <CopyToClipboard text="成功复制信息" tooltipTitle="复制成功">
      <span>复制</span>
    </CopyToClipboard>
    --------
    <CopyToClipboard text="成功复制信息" tooltipTitle="复制成功">
      <CopyFilled />
    </CopyToClipboard>
  </div>
);
