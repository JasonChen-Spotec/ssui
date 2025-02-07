import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ErrorWarningFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"
        fill="currentColor"
      />
      <path d="M11 18v-2h2v2h-2zM11 14V6h2v8h-2z" fill="inherit" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ErrorWarningFilled.displayName = 'ErrorWarningFilled';
export default ErrorWarningFilled;
