import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ClockCircleOutline(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm12-7v6.382l4.342 2.17-.895 1.79-4.894-2.448A1 1 0 0111 12V5h2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ClockCircleOutline.displayName = 'ClockCircleOutline';
export default ClockCircleOutline;
