import * as React from 'react';
import Icon from 'assui/lib/Icon';

function TimeOutlined(componentProps) {
  const IconNode = (props) => (
    <svg
      data-name="\u56FE\u5C42 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 1.2a6.81 6.81 0 016.59 5.1A6.88 6.88 0 0114.8 8 6.8 6.8 0 116 1.51a6.56 6.56 0 012-.31M8 0a8.11 8.11 0 00-2.38.36A8 8 0 1016 8a8.24 8.24 0 00-.25-2A8 8 0 008 0z"
      />
      <path
        fill="currentColor"
        d="M8 12.75a.6.6 0 01-.6-.6V8a.63.63 0 01.17-.42L9.75 5.3a.61.61 0 01.85 0 .6.6 0 010 .85l-2 2.11v3.91a.6.6 0 01-.6.58z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TimeOutlined.displayName = 'TimeOutlined';
export default TimeOutlined;
