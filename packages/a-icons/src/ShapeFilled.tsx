import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ShapeFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.44 3.69v-.17c0-.84-.681-1.52-1.52-1.52H9.38c-.84 0-1.52.68-1.52 1.52v.14A4.21 4.21 0 004 7.88v10.64a4.22 4.22 0 004.23 4.22h6.85a4.22 4.22 0 004.23-4.22V7.88a4.22 4.22 0 00-3.87-4.19zm-6.062-.17h4.56v1.19h-4.56V3.52zm2.323 5.62h-3.12a.75.75 0 000 1.5h3.12a.75.75 0 000-1.5zm2.19 7.55h-5.31a.75.75 0 010-1.5h5.31a.75.75 0 010 1.5zm-5.31-2.93h6.14a.75.75 0 000-1.5h-6.14a.75.75 0 000 1.5z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShapeFilled.displayName = 'ShapeFilled';
export default ShapeFilled;
