import React from 'react';
import { CountUp } from 'assui';

const index = () => (
  <>
    <div>基础使用</div>
    <CountUp end={100} />

    <br />
    <br />
    <div>手动触发</div>
    <CountUp
      start={-875.039}
      end={160527.012}
      duration={2.75}
      separator=" "
      decimals={4}
      decimal=","
      prefix="EUR "
      suffix=" left"
      onEnd={() => console.log('Ended! 👏')}
      onStart={() => console.log('Started! 💨')}
    >
      {({ countUpRef, start }) => (
        <div>
          <span ref={countUpRef} />
          <br />
          <button onClick={start}>在此处手动触发Start</button>
        </div>
      )}
    </CountUp>

    <br />
    <div>延迟触发</div>
    <CountUp start={0} end={100} delay={0}>
      {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} />
          <div>delay={0}将自动开始递增计数</div>
        </div>
      )}
    </CountUp>
  </>
);

export default index;
