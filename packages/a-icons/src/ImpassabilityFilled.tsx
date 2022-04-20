import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ImpassabilityFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11v2h10v-2H7z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ImpassabilityFilled.displayName = 'ImpassabilityFilled';
export default ImpassabilityFilled;
