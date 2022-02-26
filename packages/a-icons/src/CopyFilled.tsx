import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function CopyFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={2} y={2} width={16} height={16} rx={2} fill="currentColor" />
      <path
        d="M17 21.75H9a.76.76 0 01-.75-.76.75.75 0 01.75-.74h8a3.25 3.25 0 003.25-3.26v-8a.75.75 0 011.5 0v8A4.76 4.76 0 0117 21.75z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CopyFilled.displayName = 'CopyFilled';
export default CopyFilled;
