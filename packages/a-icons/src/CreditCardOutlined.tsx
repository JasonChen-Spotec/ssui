import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CreditCardOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 5H6a4 4 0 00-4 4v6a4 4 0 004 4h12a4 4 0 004-4V9a4 4 0 00-4-4zM6 6.5h12A2.5 2.5 0 0120.5 9v4.25h-17V9A2.5 2.5 0 016 6.5zm0 11h12a2.5 2.5 0 002.5-2.5v-.25h-17V15A2.5 2.5 0 006 17.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CreditCardOutlined.displayName = 'CreditCardOutlined';
export default CreditCardOutlined;
