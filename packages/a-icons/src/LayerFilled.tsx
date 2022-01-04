import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function LayerFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M2.35 9.55l7.92 4a3 3 0 002.55 0l8.79-4a1 1 0 000-1.75l-8.79-4a3 3 0 00-2.55.05l-7.92 4a1 1 0 000 1.7z"
      />
      <path
        fill="currentColor"
        d="M21.29 12l-8.85 3.69a2 2 0 01-1.71 0L2.89 12a.76.76 0 00-1 .37.75.75 0 00.37 1L10.08 17a3.56 3.56 0 001.56.36c.483 0 .96-.101 1.4-.3l8.82-3.67a.751.751 0 00-.57-1.39z"
      />
      <path
        fill="currentColor"
        d="M21.29 15.08l-8.85 3.69a2 2 0 01-1.71 0l-7.84-3.68a.754.754 0 00-.63 1.37l7.82 3.62a3.57 3.57 0 001.56.37 3.4 3.4 0 001.4-.31l8.82-3.67a.75.75 0 10-.57-1.39z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LayerFilled.displayName = 'LayerFilled';
export default LayerFilled;
