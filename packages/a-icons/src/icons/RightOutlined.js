import * as React from 'react';
import Icon from 'assui/lib/Icon';

function RightOutlined(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M10.92 8L4 14.91a.63.63 0 000 .9.65.65 0 00.91 0l6.93-6.92a1.26 1.26 0 000-1.78L4.9.19a.65.65 0 00-.9 0 .63.63 0 000 .9z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RightOutlined.displayName = 'RightOutlined';
export default RightOutlined;
