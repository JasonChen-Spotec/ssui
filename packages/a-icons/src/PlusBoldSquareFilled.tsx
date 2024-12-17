import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PlusBoldSquareFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="currentColor" d="M6 11h12v2H6z" />
      <path fill="currentColor" d="M13 6v12h-2V6z" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PlusBoldSquareFilled.displayName = 'PlusBoldSquareFilled';
export default PlusBoldSquareFilled;
