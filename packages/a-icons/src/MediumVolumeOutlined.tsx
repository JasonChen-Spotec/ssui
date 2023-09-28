import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function MediumVolumeOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.43 4.1a1 1 0 00-1 .12L6.65 8H3a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78A1 1 0 0012 20a.909.909 0 00.43-.1A1 1 0 0013 19V5a1 1 0 00-.57-.9zM11 16.92l-3.38-2.7A1 1 0 007 14H4v-4h3a1 1 0 00.62-.22L11 7.08v9.84zm8.66-10.58a1.004 1.004 0 00-1.42 1.42 5.999 5.999 0 01-.38 8.84 1 1 0 00.64 1.76 1 1 0 00.64-.23 8.001 8.001 0 00.52-11.79zm-2.83 2.83a1.003 1.003 0 10-1.42 1.42A2 2 0 0116 12a2 2 0 01-.71 1.53 1 1 0 00.175 1.654 1 1 0 001.105-.124A4 4 0 0018 12a4.06 4.06 0 00-1.17-2.83z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MediumVolumeOutlined.displayName = 'MediumVolumeOutlined';
export default MediumVolumeOutlined;
