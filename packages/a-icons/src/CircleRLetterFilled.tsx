import Icon, { IconProps } from 'a-base-icon/lib/icon';
import * as React from 'react';

function CircleRLetterFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.5 7a3.5 3.5 0 011.82 6.49L16.868 17h-2.472l-2.18-3H10v3H8V7h4.5zm0 2H10v3h2.5a1.5 1.5 0 001.493-1.355L14 10.5A1.5 1.5 0 0012.5 9z"
        fill="currentColor"
      />
      <path
        d="M23 12c0-6.072-4.928-11-11-11S1 5.928 1 12s4.928 11 11 11 11-4.928 11-11zM3.2 12c0-4.862 3.938-8.8 8.8-8.8s8.8 3.938 8.8 8.8-3.938 8.8-8.8 8.8A8.798 8.798 0 013.2 12z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CircleRLetterFilled.displayName = 'CircleRLetterFilled';
export default CircleRLetterFilled;
