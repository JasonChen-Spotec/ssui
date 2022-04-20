import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LinksOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.06 8.11l1.415 1.415a7 7 0 010 9.9l-.354.353a7 7 0 01-9.9-9.9l1.415 1.415a5 5 0 107.071 7.071l.354-.354a5 5 0 000-7.07l-1.415-1.415 1.415-1.414-.001-.001zm6.718 6.011l-1.414-1.414a5.001 5.001 0 00-3.531-8.551 5 5 0 00-3.54 1.48l-.354.354a5 5 0 000 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 010-9.9l.354-.353a7 7 0 119.9 9.9l-.001-.001z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LinksOutlined.displayName = 'LinksOutlined';
export default LinksOutlined;
