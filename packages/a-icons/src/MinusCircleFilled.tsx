import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function MinusCircleFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 0a8 8 0 108 8 8 8 0 00-8-8zm5.09 9.11H2.91V6.89h10.18v2.22z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MinusCircleFilled.displayName = 'MinusCircleFilled';
export default MinusCircleFilled;
