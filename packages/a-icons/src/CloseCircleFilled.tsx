import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function CloseCircleFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm10.662-2.705a.7.7 0 11.99.99l-1.768 1.768 1.91 1.909a.7.7 0 01-.99.99l-1.91-1.91-1.91 1.91a.7.7 0 11-.989-.99l1.91-1.91-1.768-1.767a.7.7 0 01.99-.99l1.767 1.768 1.768-1.768z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CloseCircleFilled.displayName = 'CloseCircleFilled';
export default CloseCircleFilled;
