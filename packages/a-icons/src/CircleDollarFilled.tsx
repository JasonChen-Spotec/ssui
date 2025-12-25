import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CircleDollarFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M23 9c0 2.98-1.629 5.579-4.045 6.956.03-.315.045-.634.045-.956C19 9.477 14.523 5 9 5c-.322 0-.641.015-.956.045A8 8 0 0123 9z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 15a8 8 0 11-16 0 8 8 0 0116 0zm-7-5v1h2v2H8a.5.5 0 00-.09.992L8 14h2a2.5 2.5 0 010 5v1H8v-1H6v-2h4a.5.5 0 00.09-.992L10 16H8a2.5 2.5 0 010-5v-1h2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CircleDollarFilled.displayName = 'CircleDollarFilled';
export default CircleDollarFilled;
