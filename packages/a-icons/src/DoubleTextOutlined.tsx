import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DoubleTextOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.99 2h4.08a4.75 4.75 0 014.75 4.75v7.32a4.74 4.74 0 01-3.07 4.48 4 4 0 01-4 3.63h-5A4.75 4.75 0 014 17.43V9.21a4 4 0 013.52-4A4.75 4.75 0 0111.99 2zM8.71 20.64h5a2.49 2.49 0 002.4-1.82h-4.12a4.75 4.75 0 01-4.75-4.75V6.79a2.49 2.49 0 00-1.78 2.38v8.22a3.25 3.25 0 003.25 3.25zm10.61-6.57a3.25 3.25 0 01-3.25 3.25h-4.08a3.26 3.26 0 01-3.25-3.25V6.75a3.26 3.26 0 013.25-3.25h4.08a3.25 3.25 0 013.25 3.25v7.32zm-3.53-5.92h-4.91a.68.68 0 010-1.36h4.91a.68.68 0 110 1.36zm-4.88 4.51h3.5a.68.68 0 110 1.36h-3.5a.68.68 0 010-1.36zm6.28-2.94h-6.31a.69.69 0 100 1.37h6.31a.69.69 0 000-1.37z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleTextOutlined.displayName = 'DoubleTextOutlined';
export default DoubleTextOutlined;
