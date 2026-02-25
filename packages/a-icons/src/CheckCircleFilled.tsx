import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CheckCircleFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.998 1c3.038 0 5.788 1.232 7.778 3.223A10.965 10.965 0 0122.998 12c0 3.038-1.231 5.788-3.222 7.778A10.966 10.966 0 0111.998 23a10.965 10.965 0 01-7.777-3.222A10.967 10.967 0 01.998 12c0-3.037 1.232-5.787 3.223-7.777A10.965 10.965 0 0111.998 1z"
        fill="currentColor"
      />
      <path
        d="M17.914 9l-6.707 6.707a1 1 0 01-1.414 0L6.086 12 7.5 10.586l3 3 6-6L17.914 9z"
        fill="inherit"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CheckCircleFilled.displayName = 'CheckCircleFilled';
export default CheckCircleFilled;
