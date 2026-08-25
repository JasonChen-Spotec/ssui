import React from 'react';
import type { FormattedRes, Options } from 'ahooks/lib/useCountDown';
export type CountDownProps = {
    options: Options;
    render?: (res: FormattedRes, countDown: number) => React.ReactNode;
};
declare const CountDown: React.FC<CountDownProps>;
export default CountDown;
