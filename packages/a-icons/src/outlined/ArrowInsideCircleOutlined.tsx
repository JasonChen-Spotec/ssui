import * as React from 'react';
import Icon from 'assui/lib/icon';

function ArrowInsideCircleOutlined(componentProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M11 8.91v1.57L6.91 8 11 5.56v1.38h4.44s.56.06.56.77v.54a.67.67 0 01-.69.66z"
      />
      <path
        fill="currentColor"
        d="M8 16a8 8 0 115.9-13.45.86.86 0 01-.05 1.23.87.87 0 01-1.24 0 6.27 6.27 0 10-.15 8.66.88.88 0 011.24 1.24A8 8 0 018 16z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowInsideCircleOutlined.displayName = 'ArrowInsideCircleOutlined';
export default ArrowInsideCircleOutlined;
