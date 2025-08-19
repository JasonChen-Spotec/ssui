import type { FormattedRes, Options } from 'ahooks/lib/useCountDown';
import React from 'react';
export type CountDownProps = {
  options: Options;
  render?: (res: FormattedRes, countDown: number) => React.ReactNode;
};
declare const CountDown: React.FC<CountDownProps>;
export default CountDown;
