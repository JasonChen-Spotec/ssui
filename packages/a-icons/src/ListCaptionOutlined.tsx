import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ListCaptionOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.37 10.5H5.75a.75.75 0 010-1.5h9.62a.75.75 0 010 1.5zM5.75 14h12.82a.75.75 0 010 1.5H5.75a.75.75 0 010-1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ListCaptionOutlined.displayName = 'ListCaptionOutlined';
export default ListCaptionOutlined;
