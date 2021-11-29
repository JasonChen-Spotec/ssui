import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function CreditCardFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5h12a4 4 0 014 4v6a4 4 0 01-4 4H6a4 4 0 01-4-4V9a4 4 0 014-4zm-.74 9.75h13.48a.75.75 0 000-1.5H5.26a.75.75 0 000 1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CreditCardFilled.displayName = 'CreditCardFilled';
export default CreditCardFilled;
