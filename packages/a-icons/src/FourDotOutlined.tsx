import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FourDotOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 6.75a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0zM6.75 4.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM17.25 2.5a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM15 6.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM17.25 13a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM15 17.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM6.75 13a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM4.5 17.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FourDotOutlined.displayName = 'FourDotOutlined';
export default FourDotOutlined;
