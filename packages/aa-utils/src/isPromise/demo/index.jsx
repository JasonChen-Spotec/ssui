import { isPromise } from 'aa-utils';
import React from 'react';

const Demo = () => {
  let p1 = new Promise((resolve, reject) => {});
  return (
    <div>
      <p>{isPromise({})} object === false</p>
      <p>{isPromise(p1)} p1=== true </p>
    </div>
  );
};

export default Demo;
