import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RectTwoBarFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM9.91 16.19c0 .64-.52 1.16-1.17 1.16-.64 0-1.16-.52-1.16-1.16v-3.26c0-.64.52-1.16 1.16-1.16.65 0 1.17.52 1.17 1.16v3.26zm6.51 0c0 .64-.52 1.16-1.16 1.16-.65 0-1.17-.52-1.17-1.16V7.81c0-.64.52-1.16 1.17-1.16.64 0 1.16.52 1.16 1.16v8.38z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RectTwoBarFilled.displayName = 'RectTwoBarFilled';
export default RectTwoBarFilled;
