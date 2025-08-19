import type React from 'react';
type ClientOnlyProps = {
  /** 需要渲染的元素 */
  children: React.ReactElement;
};
declare const ClientOnly: React.FC<ClientOnlyProps>;
export default ClientOnly;
