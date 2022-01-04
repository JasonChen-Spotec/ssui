import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function ChevronRightOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 20.75c.2 0 .39-.078.53-.22l8-8a.75.75 0 000-1.06l-8-8a.75.75 0 00-1.06 1.06L14.94 12l-7.47 7.47A.75.75 0 008 20.75z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ChevronRightOutlined.displayName = 'ChevronRightOutlined';
export default ChevronRightOutlined;
