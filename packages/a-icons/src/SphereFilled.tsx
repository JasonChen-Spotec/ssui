import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SphereFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 1.045C5.394 1.55 1 6.262 1 12c0 6.075 4.925 11 11 11 2.154 0 4.164-.62 5.86-1.69l-6.654-8.702A1 1 0 0111 12V1.045z"
        fill="currentCOlor"
      />
      <path
        d="M19.449 20.094A10.972 10.972 0 0022.955 13h-8.931l5.425 7.094zM22.955 11H13V1.045A11.003 11.003 0 0122.955 11z"
        fill="currentCOlor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SphereFilled.displayName = 'SphereFilled';
export default SphereFilled;
