import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RectsPlusFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2h-4.04c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23zM10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97zM10.5 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23H4.23c-1.59 0-2.23.64-2.23 2.23v4.04C2 21.36 2.64 22 4.23 22h4.04c1.59 0 2.23-.64 2.23-2.23z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 17.5h6M17.5 20.5v-6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RectsPlusFilled.displayName = 'RectsPlusFilled';
export default RectsPlusFilled;
