import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DollarOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 9h4a1 1 0 100-2h-2V6a1 1 0 00-2 0v1a3 3 0 000 6h2a1 1 0 010 2H9a1 1 0 000 2h2v1a1 1 0 002 0v-1a3 3 0 000-6h-2a1 1 0 010-2zm8-7H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v14z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DollarOutlined.displayName = 'DollarOutlined';
export default DollarOutlined;
