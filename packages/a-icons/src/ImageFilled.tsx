import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ImageFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.23 2H10a8 8 0 00-8 8v4.24a8 8 0 008 8h4.23a8 8 0 008-8V10a8 8 0 00-8-8zM8.12 6.12a2 2 0 110 4 2 2 0 010-4zm7.39 14a7.26 7.26 0 004.72-6.78l-.03-1.72c0-.41-.08-1.18-.08-1.18h-1.63a10 10 0 00-8.91 5.52 6.72 6.72 0 00-4.46-1.71H3.91a6 6 0 003.24 5.56 5.11 5.11 0 002.4.6h4.17a5.21 5.21 0 001.79-.29z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ImageFilled.displayName = 'ImageFilled';
export default ImageFilled;
