import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function CameraFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={12.43} cy={12.78} fill="currentColor" r={2.5} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.94 5H7.06A4.05 4.05 0 003 9.05v6.9A4.05 4.05 0 007.06 20h10.88A4.05 4.05 0 0022 15.95v-6.9A4.05 4.05 0 0017.94 5zm-5.51 11.78a4 4 0 110-8 4 4 0 010 8zm5.5-7a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CameraFilled.displayName = 'CameraFilled';
export default CameraFilled;
