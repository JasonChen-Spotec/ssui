import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SquareFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={5} y={5} width={14} height={14} rx={2} fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SquareFilled.displayName = 'SquareFilled';
export default SquareFilled;
