import React from 'react';
import { formatCountdown } from 'aa-utils/src/formatCountdown';

const Demo = () => {
  const deadline = 1000 * 60 * 60 * 24 * 2 + 1000 * 30;; // Moment is also OK
  return (
    <div>
      {formatCountdown(deadline, "D 天 HH 时 m 分 ss 秒")}
    </div>
  )
};

export default Demo;
