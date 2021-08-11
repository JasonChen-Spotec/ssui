import * as React from 'react';
import Icon from 'assui/lib/Icon';

function ArrowOutsideCircleOutlined(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M11.87 7.13V5.56L16 8.06l-4.13 2.42V9.1H7.44s-.53-.1-.53-.76v-.55a.66.66 0 01.69-.66z"
      />
      <path
        fill="currentColor"
        d="M8 16a8 8 0 115.9-13.45.86.86 0 01-.05 1.23.87.87 0 01-1.24 0 6.27 6.27 0 10-.15 8.66.88.88 0 011.24 1.24A8 8 0 018 16z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowOutsideCircleOutlined.displayName = 'ArrowOutsideCircleOutlined';
export default ArrowOutsideCircleOutlined;
