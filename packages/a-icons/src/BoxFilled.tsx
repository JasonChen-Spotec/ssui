import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BoxFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.46 2.81l6 3.33A3 3 0 0121 8.77v6.46a3 3 0 01-1.54 2.63l-6 3.33a3 3 0 01-2.92 0l-6-3.33A3 3 0 013 15.23V8.77a3 3 0 011.54-2.63l6-3.33a3 3 0 012.92 0zm-.23 9.06l4.23-2.35h-.04a.75.75 0 00.21-1 .76.76 0 00-1-.3l-4.22 2.35a1 1 0 01-.9 0L7.29 8.22a.76.76 0 00-1 .3.75.75 0 00.29 1l4.27 2.35a2.2 2.2 0 00.51.21v4.42a.7.7 0 001.39 0v-4.43a2.45 2.45 0 00.48-.2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BoxFilled.displayName = 'BoxFilled';
export default BoxFilled;
