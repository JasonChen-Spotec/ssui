import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CloseCircleFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-6.757-2.828L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586l2.828-2.829 1.415 1.415z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CloseCircleFilled.displayName = 'CloseCircleFilled';
export default CloseCircleFilled;
