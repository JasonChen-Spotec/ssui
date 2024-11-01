import React from 'react';
import { useCountUp } from 'assui/es/count-up';

const SimpleHook = () => {
  useCountUp({ ref: 'counter', end: 1234567 });
  return <span id="counter" />;
};

export default SimpleHook;
