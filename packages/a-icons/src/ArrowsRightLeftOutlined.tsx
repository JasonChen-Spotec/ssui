import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ArrowsRightLeftOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1.586l4.707 4.707a1 1 0 010 1.414L16 12.414 14.586 11l3-3H3V6h14.586l-3-3L16 1.586zM9.414 13l-3 3H21v2H6.414l3 3L8 22.414l-4.707-4.707a1 1 0 010-1.414L8 11.586 9.414 13z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowsRightLeftOutlined.displayName = 'ArrowsRightLeftOutlined';
export default ArrowsRightLeftOutlined;
