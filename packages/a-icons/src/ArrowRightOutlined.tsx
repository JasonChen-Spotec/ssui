import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ArrowRightOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20.05 11.47l-7-7A.753.753 0 0012 5.55l5.71 5.7H4.48a.75.75 0 000 1.5H17.7l-5.7 5.7a.74.74 0 000 1.06.71.71 0 00.53.22.74.74 0 00.53-.22l7-7a.75.75 0 000-1.06l-.01.02z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowRightOutlined.displayName = 'ArrowRightOutlined';
export default ArrowRightOutlined;
