import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ComputerOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19 3.63H5a2.9 2.9 0 00-2.75 3v6.91a2.91 2.91 0 002.75 3h2a.75.75 0 000-1.5H5a1.43 1.43 0 01-1.25-1.55V6.67A1.42 1.42 0 015 5.13h14a1.42 1.42 0 011.25 1.54v6.91A1.43 1.43 0 0119 15.13h-2a.75.75 0 000 1.5h2a2.91 2.91 0 002.75-3V6.67a2.9 2.9 0 00-2.75-3v-.04z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.84 15.75a1.64 1.64 0 011.16-.48v.03c.435 0 .852.172 1.16.48l2.31 2.31a1.63 1.63 0 01-1.16 2.79H9.69a1.63 1.63 0 01-1.16-2.79l2.31-2.34zm3.31 3.4L12 17l-2.15 2.15h4.3z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ComputerOutlined.displayName = 'ComputerOutlined';
export default ComputerOutlined;
