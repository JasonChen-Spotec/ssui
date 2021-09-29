import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function PendingFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <circle fill="currentColor" cx={8} cy={8} r={8} />
      <circle fill="inherit" className="pending-filled_svg__cls-1" cx={3.72} cy={8} r={1.06} />
      <circle fill="inherit" className="pending-filled_svg__cls-1" cx={8} cy={8} r={1.06} />
      <circle fill="inherit" className="pending-filled_svg__cls-1" cx={12.28} cy={8} r={1.06} />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PendingFilled.displayName = 'PendingFilled';
export default PendingFilled;
