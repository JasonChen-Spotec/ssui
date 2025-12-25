import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ErrorWarningFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm-1-7v2h2v-2h-2zm0-10v8h2V6h-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ErrorWarningFilled.displayName = 'ErrorWarningFilled';
export default ErrorWarningFilled;
