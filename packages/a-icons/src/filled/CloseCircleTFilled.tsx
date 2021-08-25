import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function CloseCircleTFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <circle fill="currentColor" cx={8} cy={8} r={8} />
      <path
        fill="inherit"
        d="M12.05 5.18l-1.21-1.21L8.01 6.8 5.18 3.97 3.97 5.18 6.8 8.01l-2.83 2.83 1.21 1.21 2.83-2.83 2.83 2.83 1.21-1.21-2.83-2.83 2.83-2.83z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CloseCircleTFilled.displayName = 'CloseCircleTFilled';
export default CloseCircleTFilled;
