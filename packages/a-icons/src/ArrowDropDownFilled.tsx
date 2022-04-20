import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ArrowDropDownFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 14l-4-4h8l-4 4z" fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowDropDownFilled.displayName = 'ArrowDropDownFilled';
export default ArrowDropDownFilled;
