import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SphereOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.045 9.985a9.45 9.45 0 00-1.61-.14 9.59 9.59 0 00-9.59 9.6 8.43 8.43 0 00.14 1.6 9.59 9.59 0 1111.06-11.06zM9.925 3.647a8.1 8.1 0 00-6.43 7.948 8.06 8.06 0 004.86 7.42 11.11 11.11 0 0110.66-10.69 8.1 8.1 0 00-9.09-4.678z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.645 11.045c.473 0 .944.04 1.41.12.089.468.132.944.13 1.42a8.46 8.46 0 01-9.88 8.34 7.358 7.358 0 01-.12-1.42 8.46 8.46 0 018.46-8.46zm.07 1.5a7 7 0 00-7 7 7 7 0 007-7z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SphereOutlined.displayName = 'SphereOutlined';
export default SphereOutlined;
