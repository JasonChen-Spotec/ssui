import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RefreshRightOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20.22 14.89c.26-.87.43-1.83.43-2.89 0-4.79-3.88-8.67-8.67-8.67-4.8 0-8.68 3.88-8.68 8.67s3.88 8.67 8.67 8.67c1.78 0 3.44-.54 4.82-1.46M19.68 16.13L23 13.24M19.68 16.13l-2.46-3.37"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RefreshRightOutlined.displayName = 'RefreshRightOutlined';
export default RefreshRightOutlined;
