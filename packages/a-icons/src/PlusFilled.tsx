import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PlusFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20.5 11H15a1 1 0 01-1-1V4.5a1.5 1.5 0 00-3 0V10a1 1 0 01-1 1H4.5a1.5 1.5 0 000 3H10a1 1 0 011 1v5.5a1.5 1.5 0 003 0V15a1 1 0 011-1h5.5a1.5 1.5 0 000-3z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PlusFilled.displayName = 'PlusFilled';
export default PlusFilled;
