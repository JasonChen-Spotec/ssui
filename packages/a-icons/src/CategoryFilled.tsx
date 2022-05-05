import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CategoryFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={2.33} y={2} width={8.67} height={6.67} rx={2.25} fill="currentColor" />
      <rect x={13.67} y={2} width={8} height={11.33} rx={2.25} fill="currentColor" />
      <rect x={13.67} y={16} width={8} height={6} rx={2.25} fill="currentColor" />
      <rect
        x={2.33}
        y={11.33}
        width={8.67}
        height={10.67}
        rx={2.25}
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CategoryFilled.displayName = 'CategoryFilled';
export default CategoryFilled;
