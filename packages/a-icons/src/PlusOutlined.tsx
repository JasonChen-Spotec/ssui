import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PlusOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19.75 11H12.5V3.75a.75.75 0 00-1.5 0V11H3.75a.75.75 0 000 1.5H11v7.25a.75.75 0 001.5 0V12.5h7.25a.75.75 0 000-1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PlusOutlined.displayName = 'PlusOutlined';
export default PlusOutlined;
