import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function FileFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20.14 10.284v6.484a2.95 2.95 0 01-2.95 2.951H5.95A2.95 2.95 0 013 16.77V6.95A2.95 2.95 0 015.95 4h3.953c.92 0 1.667.746 1.667 1.667.015.91.757 1.64 1.667 1.639h3.952a2.95 2.95 0 012.95 2.978z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FileFilled.displayName = 'FileFilled';
export default FileFilled;
