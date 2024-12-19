import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function AtOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.3 2.055A11 11 0 0123 12v1a4 4 0 01-7.26 2.318A5 5 0 1115 8V7h2v6a2 2 0 004 0v-1a9 9 0 10-3.528 7.146l.794-.608 1.216 1.588-.794.608A11 11 0 117.3 2.055zM15 12a3 3 0 10-6 0 3 3 0 006 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AtOutlined.displayName = 'AtOutlined';
export default AtOutlined;
