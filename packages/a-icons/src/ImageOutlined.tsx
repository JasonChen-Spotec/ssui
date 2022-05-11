import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ImageOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.24 2H10a8 8 0 00-8 8v4.24a8 8 0 008 8h4.24a8 8 0 008-8V10a8 8 0 00-8-8zM10 3.5h4.24a6.5 6.5 0 016.43 5.62h-1.55a11.76 11.76 0 00-10.14 5.82 7.42 7.42 0 00-4.63-1.61H3.5V10A6.51 6.51 0 0110 3.5zM4.35 14.83h-.82a6.5 6.5 0 003.87 5.36 11.64 11.64 0 01.89-3.88 6 6 0 00-3.94-1.48zm9.89 5.91H10a5.998 5.998 0 01-1.12-.11A10.26 10.26 0 0119.12 10.6h1.62v3.64a6.51 6.51 0 01-6.5 6.5zM8.12 10.08a2 2 0 100-4 2 2 0 000 4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ImageOutlined.displayName = 'ImageOutlined';
export default ImageOutlined;
