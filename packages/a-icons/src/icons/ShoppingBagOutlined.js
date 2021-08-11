import * as React from 'react';
import Icon from 'assui/lib/Icon';

function ShoppingBagOutlined(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M14.35 12L14 3a.5.5 0 00-.5-.48h-2a.26.26 0 01-.24-.17A3.49 3.49 0 0010.47 1 3.44 3.44 0 008 0a3.51 3.51 0 00-3.3 2.32.26.26 0 01-.24.17h-2A.5.5 0 002 3l-.33 9-.11 3a1 1 0 001 1h10.9a1 1 0 001-1zM6.23 1.72a2.5 2.5 0 014 .68.06.06 0 01-.06.09H5.81a.06.06 0 01-.06-.09 2.7 2.7 0 01.48-.68zm-3 1.77h1.14a.13.13 0 01.13.13v1.87a.53.53 0 00.15.36A.47.47 0 005 6a.5.5 0 00.49-.51V3.62a.13.13 0 01.13-.13h4.75a.13.13 0 01.12.13v1.87a.53.53 0 00.15.36A.47.47 0 0011 6a.5.5 0 00.49-.51V3.62a.13.13 0 01.13-.13h1.18a.26.26 0 01.25.24l.3 8.2a.06.06 0 01-.06.06H2.71a.06.06 0 01-.06-.06L3 3.73a.26.26 0 01.2-.24zm-.68 11.24l.06-1.68a.06.06 0 01.06-.05h10.66a.06.06 0 01.06.06l.06 1.68a.25.25 0 01-.25.26H2.8a.24.24 0 01-.25-.27z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShoppingBagOutlined.displayName = 'ShoppingBagOutlined';
export default ShoppingBagOutlined;
