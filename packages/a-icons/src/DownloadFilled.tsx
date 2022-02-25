import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function DownloadFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 19h16v-7h2v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h2v7z" fill="currentColor" />
      <path d="M11 3v7H7l5 6 5-6h-4V3h-2z" fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DownloadFilled.displayName = 'DownloadFilled';
export default DownloadFilled;
