import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ConfirmCircleSolidFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.778 19.778A10.966 10.966 0 0112 23a10.966 10.966 0 01-7.778-3.222A10.966 10.966 0 011 12c0-3.038 1.231-5.788 3.222-7.778A10.966 10.966 0 0112 1c3.037 0 5.788 1.231 7.778 3.222A10.966 10.966 0 0123 12c0 3.038-1.231 5.788-3.222 7.778z"
        fill="currentColor"
      />
      <path
        d="M17.828 9.414l-6.707 6.707a1 1 0 01-1.414 0L6 12.414 7.414 11l3 3 6-6 1.414 1.414z"
        fill="inherit"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ConfirmCircleSolidFilled.displayName = 'ConfirmCircleSolidFilled';
export default ConfirmCircleSolidFilled;
