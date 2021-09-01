import React from 'react';
import { sortableHoc } from 'assui';
import style from './index.modules.less';

const { sortableHandle } = sortableHoc;

const Handle = sortableHandle(({ tabIndex }) => (
  <div className={style.handle} tabIndex={tabIndex}>
    <svg viewBox="0 0 50 50">
      <path
        d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"
        color="#000"
      />
    </svg>
  </div>
));

export default Handle;
