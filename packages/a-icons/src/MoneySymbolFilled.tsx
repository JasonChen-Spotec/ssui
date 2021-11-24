import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function MoneySymbolFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7zm2.475 4.486a.7.7 0 10-.95 1.028l2.759 2.552H9.227a.7.7 0 100 1.4H11.3v1.217H9.227a.7.7 0 100 1.4H11.3V17a.7.7 0 101.4 0v-1.917h1.957a.7.7 0 100-1.4H12.7v-1.217h1.957a.7.7 0 100-1.4h-1.94l2.758-2.552a.7.7 0 10-.95-1.028L12 9.822 9.475 7.486z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MoneySymbolFilled.displayName = 'MoneySymbolFilled';
export default MoneySymbolFilled;
