import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CircleStopFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm7.109-3.454C8 8.76 8 9.04 8 9.6v4.8c0 .56 0 .84.109 1.054a1 1 0 00.437.437C8.76 16 9.04 16 9.6 16h4.8c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C16 15.24 16 14.96 16 14.4V9.6c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437C15.24 8 14.96 8 14.4 8H9.6c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CircleStopFilled.displayName = 'CircleStopFilled';
export default CircleStopFilled;
