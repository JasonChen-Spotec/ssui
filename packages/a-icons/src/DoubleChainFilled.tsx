import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DoubleChainFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM8.18 16.77h-.07c-.97-.09-1.88-.54-2.56-1.26-1.6-1.68-1.6-4.41 0-6.09l2.19-2.3a4.05 4.05 0 012.95-1.28c1.12 0 2.17.45 2.95 1.28 1.6 1.68 1.6 4.41 0 6.09l-1.09 1.15c-.29.3-.76.31-1.06.03a.755.755 0 01-.03-1.06l1.09-1.15c1.06-1.11 1.06-2.92 0-4.02-.99-1.04-2.73-1.04-3.73 0l-2.19 2.3c-1.06 1.11-1.06 2.92 0 4.02.43.46 1.01.74 1.62.8.41.04.71.41.67.82a.74.74 0 01-.74.67zm10.27-2.18l-2.19 2.3a4.05 4.05 0 01-2.95 1.28c-1.12 0-2.17-.45-2.95-1.28-1.6-1.68-1.6-4.41 0-6.09l1.09-1.15c.29-.3.76-.31 1.06-.03.3.29.31.76.03 1.06l-1.09 1.15c-1.06 1.11-1.06 2.92 0 4.02.99 1.04 2.73 1.05 3.73 0l2.19-2.3c1.06-1.11 1.06-2.92 0-4.02-.43-.46-1.01-.74-1.62-.8a.75.75 0 01-.67-.82c.04-.41.4-.72.82-.67.97.1 1.88.54 2.56 1.26 1.59 1.67 1.59 4.41-.01 6.09z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleChainFilled.displayName = 'DoubleChainFilled';
export default DoubleChainFilled;
