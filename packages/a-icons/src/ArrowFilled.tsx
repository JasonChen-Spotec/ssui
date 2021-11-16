import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function ArrowFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path fill="currentColor" d="M8 0L.9 7.9h3.5V16h7V7.9h3.7L8 0z" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowFilled.displayName = 'ArrowFilled';
export default ArrowFilled;
