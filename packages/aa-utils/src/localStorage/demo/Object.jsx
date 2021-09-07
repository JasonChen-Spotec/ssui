import React from 'react';
import { localStorage } from 'aa-utils';

export default () => {
  localStorage.setObject('class', [{ name: '李小龙' }]);

  return <div>{JSON.stringify(localStorage.getObject('class'))}</div>;
};
