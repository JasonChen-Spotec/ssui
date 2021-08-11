import * as React from 'react';
import Icon from 'assui/lib/Icon';

function PlusOutlined(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M15.44 7.44H8.56V.56a.56.56 0 00-1.12 0v6.88H.56a.56.56 0 000 1.12h6.88v6.88a.56.56 0 001.12 0V8.56h6.88a.56.56 0 100-1.12z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PlusOutlined.displayName = 'PlusOutlined';
export default PlusOutlined;
