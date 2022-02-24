import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function FileSearchFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.172 2a2 2 0 011.414.586l3.828 3.828A2 2 0 0121 7.828v13.18a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2h11.179zm-1.643 12.446l2.21 2.21 1.415-1.413-2.21-2.21a4.002 4.002 0 00-6.276-4.861 4 4 0 004.861 6.274zm-.618-2.032a2 2 0 11-2.877-2.78 2 2 0 012.877 2.78z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FileSearchFilled.displayName = 'FileSearchFilled';
export default FileSearchFilled;
