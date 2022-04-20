import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function OpenMailOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.29 2.543l6.85 4.81a4 4 0 011.7 3.27v7.13a4.27 4.27 0 01-4.28 4.26H6.28A4.27 4.27 0 012 17.753v-7.13a4 4 0 011.7-3.27l6.85-4.81a2 2 0 012.74 0zm6.232 17.166a2.77 2.77 0 00.818-1.956v-7.13a2.5 2.5 0 00-1.06-2l-6.85-4.81-.11-.08a.56.56 0 00-.8 0l-.11.08-6.85 4.81a2.5 2.5 0 00-1.06 2v7.13a2.77 2.77 0 002.78 2.76h11.28a2.77 2.77 0 001.962-.804z"
        fill="currentColor"
      />
      <path
        d="M17.99 11.013l-5.54 3.87a.83.83 0 01-1.22-.05l-5.38-3.82a.75.75 0 10-.86 1.22l5.3 3.78a2.35 2.35 0 001.6.63 2.21 2.21 0 001.49-.63l5.47-3.82a.75.75 0 00.19-1 .76.76 0 00-1.05-.18z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

OpenMailOutlined.displayName = 'OpenMailOutlined';
export default OpenMailOutlined;
