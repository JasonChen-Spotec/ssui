import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DocumentFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.07 10.24h4.79a.5.5 0 01.5.5v6.92a4 4 0 01-4 4h-6.9a4 4 0 01-4-4V6.5a4 4 0 014-4h2.67a.5.5 0 01.5.5v4.78a2.45 2.45 0 002.44 2.46zm-1.83 4.44H7.81a.75.75 0 000 1.5h4.43a.75.75 0 000-1.5zm1.47 4h-5.9a.75.75 0 010-1.5h5.9a.75.75 0 010 1.5zM10.24 12H7.81a.75.75 0 000 1.5h2.43a.75.75 0 000-1.5z"
        fill="currentColor"
      />
      <path
        d="M12.68 3.08v4.57c0 .823.667 1.49 1.49 1.49h4.62a.55.55 0 00.39-1l-5.55-5.5a.56.56 0 00-.95.44z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DocumentFilled.displayName = 'DocumentFilled';
export default DocumentFilled;
