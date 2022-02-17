import React from 'react';
import { CopyToClipboard } from 'assui';

export default () => (
  <CopyToClipboard text="成功复制信息" tooltipTitle="复制成功">
    <span>复制</span>
  </CopyToClipboard>
);
