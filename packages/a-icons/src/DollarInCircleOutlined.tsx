import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DollarInCircleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 9h4a1 1 0 100-2h-2V6a1 1 0 00-2 0v1a3 3 0 000 6h2a1 1 0 010 2H9a1 1 0 000 2h2v1a1 1 0 002 0v-1a3 3 0 000-6h-2a1 1 0 010-2zm1-8a11 11 0 100 22 11 11 0 000-22zm0 20a9 9 0 110-18 9 9 0 010 18z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DollarInCircleOutlined.displayName = 'DollarInCircleOutlined';
export default DollarInCircleOutlined;
