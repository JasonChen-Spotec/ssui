import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FilletFileListFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2h8.28a4 4 0 014 4v12.62a4 4 0 01-4 4H8a4 4 0 01-4-4V6a4 4 0 014-4zm6.53 6.08h-6.7a.73.73 0 100 1.46h6.7a.73.73 0 100-1.46zm-1.91 9.46H7.83a.73.73 0 110-1.46h4.79a.73.73 0 110 1.46zm-4.79-4h8.62a.73.73 0 100-1.46H7.83a.73.73 0 100 1.46z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FilletFileListFilled.displayName = 'FilletFileListFilled';
export default FilletFileListFilled;
