import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PauseFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.713 5.082l10.844 6.92L7.713 18.92V5.082zm1.82 3.32V15.6L15.173 12l-5.64-3.598z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PauseFilled.displayName = 'PauseFilled';
export default PauseFilled;
