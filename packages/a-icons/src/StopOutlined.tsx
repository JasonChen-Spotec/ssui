import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function StopOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0012 2zM3.5 12a8.48 8.48 0 0114.27-6.22l-12 12A8.43 8.43 0 013.5 12zm3.4 6.78A8.48 8.48 0 0018.78 6.9L6.9 18.78z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

StopOutlined.displayName = 'StopOutlined';
export default StopOutlined;
