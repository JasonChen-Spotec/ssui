import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function DocumentOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.13 14.84h4.43a.75.75 0 000-1.5H8.13a.75.75 0 000 1.5zM8.13 12.2h2.43a.75.75 0 000-1.5H8.13a.75.75 0 000 1.5zM14 15.87H8.13a.75.75 0 000 1.5H14a.75.75 0 000-1.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.53 9.44l-7-7a.79.79 0 00-.53-.19H9A4.75 4.75 0 004.25 7v10A4.75 4.75 0 009 21.75h6A4.75 4.75 0 0019.75 17v-7a.79.79 0 00-.22-.56zm-6.78-4.65l4.46 4.46H14c-.69 0-1.25-.56-1.25-1.25V4.79zM5.75 17A3.26 3.26 0 009 20.25h6A3.26 3.26 0 0018.25 17v-6.25H14A2.75 2.75 0 0111.25 8V3.75H9A3.26 3.26 0 005.75 7v10z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DocumentOutlined.displayName = 'DocumentOutlined';
export default DocumentOutlined;
