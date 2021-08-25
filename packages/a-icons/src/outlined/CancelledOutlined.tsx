import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function CancelledOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M14.65 15.77L8 9.12l-6.65 6.65a.79.79 0 11-1.12-1.12L6.88 8 .23 1.35A.79.79 0 011.35.23L8 6.88 14.65.23a.79.79 0 111.12 1.12L9.12 8l6.65 6.65a.79.79 0 11-1.12 1.12z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CancelledOutlined.displayName = 'CancelledOutlined';
export default CancelledOutlined;
