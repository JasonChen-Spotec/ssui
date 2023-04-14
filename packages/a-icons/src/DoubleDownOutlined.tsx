import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DoubleDownOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 23.39a.856.856 0 00.618-.26l9.334-9.5a.902.902 0 00-.022-1.238.864.864 0 00-1.215-.022L12 21.241l-8.715-8.87a.864.864 0 00-1.215.021.902.902 0 00-.022 1.237l9.334 9.5a.856.856 0 00.618.261z"
        fill="currentColor"
      />
      <path
        d="M12 13.89a.856.856 0 00.618-.26l9.334-9.5a.902.902 0 00-.022-1.238.864.864 0 00-1.215-.022L12 11.741l-8.715-8.87a.864.864 0 00-1.215.021.902.902 0 00-.022 1.237l9.334 9.5a.856.856 0 00.618.261z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleDownOutlined.displayName = 'DoubleDownOutlined';
export default DoubleDownOutlined;
