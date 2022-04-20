import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function StarFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.44 4.537l.66 2a2.25 2.25 0 002.13 1.56h2.08a2.24 2.24 0 011.32 4.06l-1.71 1.24a2.25 2.25 0 00-.82 2.51l.66 2a2.24 2.24 0 01-3.45 2.54l-1.68-1.25a2.25 2.25 0 00-2.64 0l-1.68 1.25a2.24 2.24 0 01-3.45-2.51l.66-2a2.25 2.25 0 00-.82-2.51l-1.75-1.26a2.24 2.24 0 011.36-4.07h2.08a2.25 2.25 0 002.13-1.54l.66-2a2.24 2.24 0 014.26-.02z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

StarFilled.displayName = 'StarFilled';
export default StarFilled;
