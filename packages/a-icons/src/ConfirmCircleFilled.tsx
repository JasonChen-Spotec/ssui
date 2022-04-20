import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ConfirmCircleFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a9 9 0 100 18 9 9 0 000-18zm4.48 6.323a.7.7 0 00-.99 0l-4.172 4.172-2.333-2.333a.7.7 0 10-.99.99l2.687 2.687c.024.024.05.046.076.066a.7.7 0 001.056.076l4.666-4.668a.7.7 0 000-.99z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ConfirmCircleFilled.displayName = 'ConfirmCircleFilled';
export default ConfirmCircleFilled;
