import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FilletFileListOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.99 9.53h6.7a.74.74 0 000-1.47h-6.7a.74.74 0 100 1.47zM7.99 17.53h4.78a.74.74 0 100-1.47H7.99a.74.74 0 100 1.47zM16.6 13.53H7.99a.74.74 0 110-1.47h8.61a.74.74 0 010 1.47z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.79 22.59h-7A4.8 4.8 0 014 17.79v-11A4.8 4.8 0 018.79 2h7a4.8 4.8 0 014.8 4.79v11a4.8 4.8 0 01-4.8 4.8zm-7-19a3.21 3.21 0 00-3.2 3.2v11A3.21 3.21 0 008.79 21h7A3.21 3.21 0 0019 17.79v-11a3.21 3.21 0 00-3.21-3.2h-7z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FilletFileListOutlined.displayName = 'FilletFileListOutlined';
export default FilletFileListOutlined;
