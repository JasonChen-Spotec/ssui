import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function MentalHealthOutlied(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 2a8.002 8.002 0 017.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17a2 2 0 01-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0111 2zm-.53 5.763a1.75 1.75 0 10-2.475 2.474L11 13.243l3.005-3.006a1.75 1.75 0 10-2.475-2.474l-.53.53-.53-.53z"
        stroke="currentColor"
      />
      <path fill="currentColor" d="M7 6h9v8H7z" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MentalHealthOutlied.displayName = 'MentalHealthOutlied';
export default MentalHealthOutlied;