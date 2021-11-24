import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function LoopFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.12 2H8a6 6 0 00-6 6v7.12a6 6 0 006 6h7.12a6 6 0 006-6V8a6 6 0 00-6-6zm-5.31 8.73a.73.73 0 01-.53-.17.74.74 0 010-1.06l.49-.49h-.88a1.94 1.94 0 00-1.94 1.94v1.32a1.94 1.94 0 001.94 1.89.75.75 0 010 1.5 3.45 3.45 0 01-3.44-3.44V10.9a3.45 3.45 0 013.44-3.44h.88l-.49-.49a.74.74 0 010-1.06.75.75 0 011.06 0l1.77 1.77a.82.82 0 01.16.25.71.71 0 010 .57.67.67 0 01-.16.24l-1.77 1.82a.74.74 0 01-.53.17zm4.42 4.93a3.45 3.45 0 003.44-3.44V10.9a3.45 3.45 0 00-3.44-3.44.75.75 0 000 1.5 1.94 1.94 0 011.94 1.94v1.32a1.94 1.94 0 01-1.94 1.94h-.88l.49-.49a.75.75 0 00-1.06-1.06l-1.77 1.77a.67.67 0 00-.16.24.8.8 0 000 .57.82.82 0 00.16.25l1.77 1.77a.79.79 0 00.53.22.77.77 0 00.53-.22.75.75 0 000-1.07l-.49-.48h.88z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LoopFilled.displayName = 'LoopFilled';
export default LoopFilled;
