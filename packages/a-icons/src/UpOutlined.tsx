import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function UpOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.69 7.46l3.73 3.72a.84.84 0 010 1.19.86.86 0 01-1.19 0l-2.29-2.3v10.09a.84.84 0 01-1.68 0V10.07l-2.29 2.3a.86.86 0 01-1.19 0 .84.84 0 010-1.19l3.73-3.72a.81.81 0 01.59-.25.79.79 0 01.59.25zm-5.81 8.12H5.67a4.57 4.57 0 01-4.47-4.65V7.12a4.57 4.57 0 014.47-4.65l12.86.08A4.57 4.57 0 0123 7.2v3.81a4.57 4.57 0 01-4.47 4.68h-1.21a.84.84 0 110-1.68h1.21a2.88 2.88 0 002.79-3V7.23a2.88 2.88 0 00-2.79-3L5.67 4.09a2.88 2.88 0 00-2.79 3v3.81a2.88 2.88 0 002.79 3h1.21a.84.84 0 010 1.68z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

UpOutlined.displayName = 'UpOutlined';
export default UpOutlined;
