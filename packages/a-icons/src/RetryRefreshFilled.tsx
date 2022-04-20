import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RetryRefreshFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.004 3h7.992A5.004 5.004 0 0121 8.004v7.992A5.004 5.004 0 0115.996 21H8.004A5.004 5.004 0 013 15.996V8.004A5.004 5.004 0 018.004 3zM6.338 14.885A6.084 6.084 0 0012 18.75a6.084 6.084 0 001.053-12.069l.144-.153a.748.748 0 10-1.053-1.062l-1.341 1.332a.738.738 0 000 1.062l1.34 1.341c.14.137.327.214.523.216a.783.783 0 00.53-.216.738.738 0 00.1-.9 4.608 4.608 0 11-4.41.999.748.748 0 00-1.017-1.098 6.084 6.084 0 00-1.531 6.683z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RetryRefreshFilled.displayName = 'RetryRefreshFilled';
export default RetryRefreshFilled;
