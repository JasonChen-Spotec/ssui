import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function HttpsLock(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x={0.556}
        y={0.556}
        width={18.889}
        height={18.889}
        rx={9.444}
        fill="#EFB041"
      />
      <rect
        x={0.556}
        y={0.556}
        width={18.889}
        height={18.889}
        rx={9.444}
        stroke="#fff"
        strokeWidth={1.111}
      />
      <path
        d="M13 7.5v1.75h1.25V15h-8.5V9.25H7V7.5a3 3 0 016 0zm-5 0v1.75h4V7.5a2 2 0 10-4 0zm2 3.625a1 1 0 100 2 1 1 0 000-2z"
        fill="#fff"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

HttpsLock.displayName = 'HttpsLock';
export default HttpsLock;
