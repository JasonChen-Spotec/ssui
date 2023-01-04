import React from 'react';
import { ClientOnly } from 'assui';

export default () => (
  <ClientOnly>
    <div>这是游览器端渲染的</div>{' '}
  </ClientOnly>
);
