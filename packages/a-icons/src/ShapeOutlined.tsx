import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ShapeOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.27 2a1.52 1.52 0 011.52 1.44A4.74 4.74 0 0120 8.09v10.09a4.76 4.76 0 01-4.75 4.75h-6.5A4.76 4.76 0 014 18.18V8.09a4.74 4.74 0 014.21-4.65A1.53 1.53 0 019.73 2h4.54zm.02 1.44H9.73v1.19h4.56V3.44zm4.21 14.74a3.26 3.26 0 01-3.25 3.26h-6.5a3.26 3.26 0 01-3.25-3.26V8.09a3.25 3.25 0 012.73-3.2 1.51 1.51 0 001.5 1.26h4.54a1.51 1.51 0 001.5-1.26 3.25 3.25 0 012.73 3.2v10.09zm-6.45-7.22H8.93a.75.75 0 010-1.5h3.12a.75.75 0 010 1.5zm-3.12 1.61h6.14a.75.75 0 010 1.5H8.93a.75.75 0 010-1.5zm5.3 2.93h-5.3a.75.75 0 000 1.5h5.3a.75.75 0 000-1.5z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShapeOutlined.displayName = 'ShapeOutlined';
export default ShapeOutlined;
