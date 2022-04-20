import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BankCardFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21 11.222v7.89a.883.883 0 01-.264.628.906.906 0 01-.636.26H3.9a.906.906 0 01-.636-.26A.883.883 0 013 19.11v-7.889h18zm0-1.778H3V5.89c0-.236.095-.462.264-.629A.906.906 0 013.9 5h16.2c.239 0 .468.094.636.26A.883.883 0 0121 5.89v3.555zm-6.3 6.112v1.777h3.6v-1.777h-3.6z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BankCardFilled.displayName = 'BankCardFilled';
export default BankCardFilled;
