import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BoxOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.46 2.81l6 3.33A3 3 0 0121 8.77v6.46a3 3 0 01-1.54 2.63l-6 3.33a3 3 0 01-2.92 0l-6-3.33A3 3 0 013 15.23V8.77a3 3 0 011.54-2.63l6-3.33a3 3 0 012.92 0zm5.23 13.74a1.53 1.53 0 00.77-1.32V8.77a1.53 1.53 0 00-.77-1.32l-6-3.33a1.5 1.5 0 00-1.46 0l-6 3.33a1.53 1.53 0 00-.77 1.32v6.46a1.53 1.53 0 00.77 1.32l6 3.33a1.5 1.5 0 001.46 0l6-3.33z"
      />
      <path
        fill="currentColor"
        d="M16.68 8.2l-4.23 2.35a.9.9 0 01-.9 0L7.32 8.2a.75.75 0 10-.73 1.31l4.23 2.35c.14.075.288.135.44.18v4.46a.75.75 0 001.5 0V12c.146-.04.287-.097.42-.17l4.23-2.35a.75.75 0 00-.73-1.31v.03z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BoxOutlined.displayName = 'BoxOutlined';
export default BoxOutlined;
