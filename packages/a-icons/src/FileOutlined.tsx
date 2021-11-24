import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function FileOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.72 2H9.98a3.346 3.346 0 013.346 3.346.21.21 0 00.21.21h4.195a4.73 4.73 0 014.72 4.72v6.933a4.73 4.73 0 01-4.72 4.72H5.72A4.72 4.72 0 011 17.21V6.72A4.71 4.71 0 015.72 2zm6 3.346c0-.979-.794-1.773-1.773-1.773H5.72A3.147 3.147 0 002.573 6.72v10.49a3.147 3.147 0 003.147 3.146H17.7a3.147 3.147 0 003.146-3.147v-6.933A3.147 3.147 0 0017.7 7.129h-4.196a1.783 1.783 0 01-1.783-1.783z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FileOutlined.displayName = 'FileOutlined';
export default FileOutlined;
