import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function HomeOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.73 2.89L20.29 7A4.15 4.15 0 0122 10.33v7.44A4.34 4.34 0 0117.56 22H6.44A4.34 4.34 0 012 17.77v-7.43A4.14 4.14 0 013.72 7l5.55-4.11a4.63 4.63 0 015.46 0zm2.83 17.61a2.84 2.84 0 002.94-2.73v-7.44a2.61 2.61 0 00-1.11-2.12L13.84 4.1a3.12 3.12 0 00-3.68 0L4.61 8.2a2.65 2.65 0 00-1.11 2.14v7.43a2.85 2.85 0 002.94 2.73h11.12z"
        fill="currentColor"
      />
      <path d="M16.5 15.75h-9a.75.75 0 000 1.5h9a.75.75 0 000-1.5z" fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

HomeOutlined.displayName = 'HomeOutlined';
export default HomeOutlined;
