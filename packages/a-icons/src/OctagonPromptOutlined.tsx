import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function OctagonPromptOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.79 3.17l3.3 3.3a4 4 0 011.17 2.83v4.66a4 4 0 01-1.17 2.83l-3.3 3.3a4 4 0 01-2.83 1.17H9.3a4 4 0 01-2.83-1.17l-3.3-3.3A4 4 0 012 13.96V9.3a4 4 0 011.17-2.83l3.3-3.3A4 4 0 019.3 2h4.66a4 4 0 012.83 1.17zm2.11 12.46a2.33 2.33 0 00.67-1.67V9.27a2.33 2.33 0 00-.67-1.64l-3.27-3.27a2.33 2.33 0 00-1.7-.67H9.27a2.33 2.33 0 00-1.64.67L4.36 7.63a2.33 2.33 0 00-.67 1.67v4.69a2.33 2.33 0 00.67 1.64l3.27 3.27a2.33 2.33 0 001.67.67h4.69a2.33 2.33 0 001.64-.67l3.27-3.27z"
        fill="currentColor"
      />
      <path
        d="M11.63 13.49a.75.75 0 100 1.5.75.75 0 000-1.5zM11.63 12.12a.76.76 0 00.75-.75v-3.1a.75.75 0 00-1.5 0v3.1a.76.76 0 00.75.75z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

OctagonPromptOutlined.displayName = 'OctagonPromptOutlined';
export default OctagonPromptOutlined;
