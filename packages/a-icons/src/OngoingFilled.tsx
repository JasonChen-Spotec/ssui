import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function OngoingFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={12} cy={12} r={9} fill="currentColor" />
      <circle cx={8} cy={12.1} r={1.1} fill="inherit" />
      <circle cx={12} cy={12.1} r={1.1} fill="inherit" />
      <circle cx={16} cy={12.1} r={1.1} fill="inherit" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

OngoingFilled.displayName = 'OngoingFilled';
export default OngoingFilled;
