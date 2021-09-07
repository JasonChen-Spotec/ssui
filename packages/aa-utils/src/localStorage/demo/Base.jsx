import React from 'react';
import { localStorage } from 'aa-utils';

export default () => {
  localStorage.set('name', '李小龙');

  return <div>{localStorage.get('name')}</div>;
};
