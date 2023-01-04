import type React from 'react';
import { useClientOnly } from './useClientOnly';

type ClientOnlyProps = {
  /** 需要渲染的元素 */
  children: React.ReactElement;
};

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const hasMounted = useClientOnly();

  if (!hasMounted) {
    return null;
  }

  return children;
};

export default ClientOnly;
