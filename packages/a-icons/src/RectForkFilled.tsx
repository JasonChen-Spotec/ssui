import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RectForkFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.1 21.6a2.7 2.7 0 01-2.7-2.7V5.1a2.7 2.7 0 012.7-2.7h3a2.7 2.7 0 012.7 2.7v13.8a2.7 2.7 0 01-2.7 2.7h-3zM15.9 21.6a2.7 2.7 0 01-2.7-2.7v-3a2.7 2.7 0 012.7-2.7h3a2.7 2.7 0 012.7 2.7v3a2.7 2.7 0 01-2.7 2.7h-3zM15.9 10.8a2.7 2.7 0 01-2.7-2.7v-3a2.7 2.7 0 012.7-2.7h3a2.7 2.7 0 012.7 2.7v3a2.7 2.7 0 01-2.7 2.7h-3z"
        fill="currentColor"
      />
      <path d="M9.6 18v-1.2h4.8V18H9.6zM9.6 7.2V6h4.8v1.2H9.6z" fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RectForkFilled.displayName = 'RectForkFilled';
export default RectForkFilled;
