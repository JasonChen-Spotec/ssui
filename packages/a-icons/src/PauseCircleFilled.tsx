import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PauseCircleFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm-3.5-7h2V8h-2v8zm5 0h2V8h-2v8z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PauseCircleFilled.displayName = 'PauseCircleFilled';
export default PauseCircleFilled;
