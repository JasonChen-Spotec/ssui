import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ArrowsChevronOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.91 14.28a.75.75 0 00-1.07 0l-3.4 3.41v-9a.75.75 0 00-1.5 0v9l-3.41-3.41a.753.753 0 00-1.07 1.06l4.7 4.66c.067.07.15.125.24.16a.718.718 0 00.57 0 .718.718 0 00.25-.16l4.69-4.69a.75.75 0 000-1.03zM11.47 9.72a.76.76 0 001.07 0 .75.75 0 000-1.06L7.84 4a.67.67 0 00-.24-.16.8.8 0 00-.57 0 .82.82 0 00-.25.16L2.09 8.66a.75.75 0 000 1.06.74.74 0 001.06 0l3.41-3.41v9a.75.75 0 001.5 0v-9l3.41 3.41z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowsChevronOutlined.displayName = 'ArrowsChevronOutlined';
export default ArrowsChevronOutlined;
