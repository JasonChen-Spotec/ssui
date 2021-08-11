import * as React from 'react';
import Icon from 'assui/lib/icon';

function MoneyLockOutlined(componentProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M11.32 12.49a2 2 0 013.9 0 .78.78 0 01.78.78v2a.76.76 0 01-.76.76H11.3a.76.76 0 01-.76-.76v-2a.78.78 0 01.78-.78zm1.17 0h1.56a.78.78 0 10-1.56 0zm1.89-3.79a6.05 6.05 0 00.06-1A6.81 6.81 0 008 1.17 6.65 6.65 0 001.17 8a6.81 6.81 0 006.48 6.41 6.05 6.05 0 001-.06.59.59 0 01.67.58.59.59 0 01-.51.58 8.24 8.24 0 01-1.22.07 7.81 7.81 0 118-8 8.24 8.24 0 01-.07 1.22.59.59 0 01-.58.51.59.59 0 01-.56-.61zM11.71 14v.43a.36.36 0 00.37.37h2.38a.36.36 0 00.37-.37V14a.36.36 0 00-.37-.37h-2.38a.36.36 0 00-.37.37zM8.42 5.11l2.09 2.08a.89.89 0 010 1.23l-2.09 2.09a.89.89 0 01-1.23 0L5.11 8.42a.87.87 0 010-1.23l2.08-2.08a.87.87 0 011.23 0zM6.36 8L7.6 9.25a.28.28 0 00.41 0L9.25 8a.28.28 0 000-.41L8 6.36a.28.28 0 00-.41 0L6.36 7.6a.28.28 0 000 .4z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MoneyLockOutlined.displayName = 'MoneyLockOutlined';
export default MoneyLockOutlined;
