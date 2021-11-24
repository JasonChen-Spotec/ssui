import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function MoneySymbolOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        fill="#fff"
        x={3.7}
        y={3.7}
        width={16.6}
        height={16.6}
        rx={3.3}
        stroke="currentColor"
        strokeWidth={1.4}
      />
      <path
        d="M9 8l3 2.775L15 8m-5.5 3.766H12m2.657 0H12m-2.5 2.617h5.157M12 11.766V17"
        stroke="currentColor"
        fill="#fff"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MoneySymbolOutlined.displayName = 'MoneySymbolOutlined';
export default MoneySymbolOutlined;
