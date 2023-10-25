import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function EyeCornerFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.126 12.148c0-1.544 1.192-2.796 2.663-2.796 1.47 0 2.663 1.252 2.663 2.796 0 1.544-1.192 2.796-2.663 2.796-1.471 0-2.663-1.252-2.663-2.796zm1.737 0c0 .537.414.973.926.973.511 0 .926-.436.926-.973 0-.537-.415-.973-.926-.973-.512 0-.926.436-.926.973z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.242 7.005l4.84 4.06c.313.264.496.662.496 1.083 0 .42-.183.819-.495 1.082l-4.84 4.06c-3.19 2.674-7.718 2.674-10.908 0l-4.84-4.06A1.413 1.413 0 011 12.148c0-.42.182-.819.495-1.082l4.84-4.06c3.19-2.674 7.718-2.674 10.907 0zm-9.83 8.924c2.562 2.14 6.192 2.14 8.754 0l4.423-3.781-4.423-3.72c-2.562-2.141-6.192-2.141-8.754 0l-4.423 3.72 4.423 3.781z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EyeCornerFilled.displayName = 'EyeCornerFilled';
export default EyeCornerFilled;
