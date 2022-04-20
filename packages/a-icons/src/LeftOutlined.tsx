import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LeftOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16 20.75a.74.74 0 01-.53-.22l-8-8a.75.75 0 010-1.06l8-8a.75.75 0 011.06 1.06L9.06 12l7.47 7.47a.75.75 0 01-.53 1.28z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LeftOutlined.displayName = 'LeftOutlined';
export default LeftOutlined;
