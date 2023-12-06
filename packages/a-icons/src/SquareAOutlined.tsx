import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SquareAOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2 4.8H4.8v14.4h14.4V4.8zM2.4 2.4v19.2h19.2V2.4H2.4z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10.277l-2.677 6.028-1.646-.73 3.5-7.88h1.646l3.5 7.88-1.646.73L12 10.277z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.35 13.31a.9.9 0 01.9-.9h3.5a.9.9 0 010 1.8h-3.5a.9.9 0 01-.9-.9z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SquareAOutlined.displayName = 'SquareAOutlined';
export default SquareAOutlined;
