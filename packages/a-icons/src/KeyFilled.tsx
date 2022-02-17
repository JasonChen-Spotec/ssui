import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function KeyFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.313 11.566l7.94-7.94 2.121 2.121-1.414 1.414 2.121 2.121-3.535 3.536-2.121-2.121-2.99 2.99a5.003 5.003 0 01-7.97 5.849 5 5 0 015.848-7.97zm-.899 5.848a2 2 0 10-2.78-2.877 2 2 0 002.78 2.877z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

KeyFilled.displayName = 'KeyFilled';
export default KeyFilled;
