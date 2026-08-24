import React from 'react';
import type { FormattedRes, Options } from 'ahooks/lib/useCountDown';
import useCountDown from 'ahooks/lib/useCountDown';
import isFunction from 'lodash/isFunction';

export type CountDownProps = {
  options: Options;
  render?: (res: FormattedRes, countDown: number) => React.ReactNode;
};

const CountDown: React.FC<CountDownProps> = ({ options, render }) => {
  const [countDown, formattedRes] = useCountDown(options);
  const { days, hours, minutes, seconds, milliseconds } = formattedRes;
  if (isFunction(render)) {
    return <>{render(formattedRes, countDown)}</>;
  }

  return (
    <div>
      {days} days {hours} hours {minutes} minutes {seconds} seconds {milliseconds}
    </div>
  );
};

export default CountDown;
