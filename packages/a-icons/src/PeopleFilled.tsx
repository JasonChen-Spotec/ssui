import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PeopleFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM7 14a5 5 0 00-5 5v3h20v-3a5 5 0 00-5-5H7z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleFilled.displayName = 'PeopleFilled';
export default PeopleFilled;
