import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function UpgradeFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11.707-4.707a1 1 0 00-1.414 0L6.586 12 8 13.414l3-3V17h2v-6.586l3 3L17.414 12l-4.707-4.707z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

UpgradeFilled.displayName = 'UpgradeFilled';
export default UpgradeFilled;
