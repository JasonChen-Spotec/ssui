import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ShapArrowRightFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0a6 6 0 016 6v12a6 6 0 01-6 6H6a6 6 0 01-6-6V6a6 6 0 016-6h12zM9.869 18.913a.769.769 0 01-.608.286.8.8 0 01-.608-.287c-.335-.381-.335-1 0-1.382l4.874-5.528-4.874-5.529c-.335-.382-.335-1 0-1.382a.802.802 0 01.608-.291c.229 0 .448.105.608.291l5.481 6.22c.335.382.335 1 0 1.382l-5.481 6.22z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShapArrowRightFilled.displayName = 'ShapArrowRightFilled';
export default ShapArrowRightFilled;
