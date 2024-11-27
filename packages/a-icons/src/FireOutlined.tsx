import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FireOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.56 14.36h.06a8.56 8.56 0 004.39-4.41v4.36a7 7 0 01-4.21 6.44h-.07c-.847.359-1.76.54-2.68.53a6.62 6.62 0 01-2.59-.52l-.26-.11A6.84 6.84 0 015 14.3v-.18a5.39 5.39 0 011.61-3.77l.18-.17a19.49 19.49 0 003.88-5.38L12.04 2s1.42 2 2.74 4a5.43 5.43 0 01-1.22 7.36H13.44a.75.75 0 00.06 1 .56.56 0 00.41.13 2.14 2.14 0 00.65-.13zm-.44 5h.07v-.01a5.53 5.53 0 003.31-5.03 7.859 7.859 0 01-2.28 1.4l-.13.05a3.378 3.378 0 01-1.18.23 2 2 0 01-1.47-.57 2.25 2.25 0 01-.18-3c.088-.109.188-.207.3-.29h.07a3.93 3.93 0 00.9-5.36c-.43-.64-.86-1.28-1.26-1.85l-.25.52a20.998 20.998 0 01-4.18 5.73l-.18.17a3.9 3.9 0 00-1.16 2.71v.19a5.35 5.35 0 003.28 5l.26.11a5.22 5.22 0 004.08 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FireOutlined.displayName = 'FireOutlined';
export default FireOutlined;
