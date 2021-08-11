import * as React from 'react';
import Icon from 'assui/lib/Icon';

function CirleLockFilled(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 8.44a.69.69 0 00-.48 1.19v.78a.49.49 0 00.48.49.48.48 0 00.48-.49v-.79a.73.73 0 00.21-.49.7.7 0 00-.69-.69z"
      />
      <path
        fill="currentColor"
        d="M8 0a8 8 0 108 8 8 8 0 00-8-8zm.07 3.63a2.64 2.64 0 012.61 2.45h-1a1.63 1.63 0 00-3.23 0h-1a2.63 2.63 0 012.62-2.45zm3.52 7.65a1.09 1.09 0 01-1.09 1.09h-5a1.09 1.09 0 01-1.09-1.09V7.77a1.09 1.09 0 011.09-1.1h5a1.09 1.09 0 011.09 1.1z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CirleLockFilled.displayName = 'CirleLockFilled';
export default CirleLockFilled;
