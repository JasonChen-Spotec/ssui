import React from 'react';
import type { Options, FormattedRes } from 'ahooks/lib/useCountDown';
export type CountDownProps = {
    options: Options;
    render?: (res: FormattedRes, countDown: number) => React.ReactNode;
};
declare const CountDown: React.FC<CountDownProps>;
export default CountDown;
