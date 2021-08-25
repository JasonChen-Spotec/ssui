import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function DoubleUpOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 7.1c.2 0 .4.1.6.3l7.1 7c.4.4.4.9 0 1.1-.4.4-.9.4-1.2 0L8 9.1l-6.6 6.4c-.4.4-.9.4-1.2 0s-.4-.9 0-1.1l7.1-7c.3-.2.5-.3.7-.3z"
      />
      <path
        fill="currentColor"
        d="M8 .2c.2 0 .4.1.6.3l7.1 7c.4.4.4.9 0 1.1-.4.4-.9.4-1.2 0L8 2.2 1.4 8.7c-.3.3-.8.3-1.1 0s-.4-.9 0-1.1l7.1-7c.2-.3.4-.4.6-.4z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleUpOutlined.displayName = 'DoubleUpOutlined';
export default DoubleUpOutlined;
