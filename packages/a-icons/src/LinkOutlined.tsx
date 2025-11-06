import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LinkOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.368 6.944a6.001 6.001 0 014.376 2.391l.6.801-1.602 1.197-.6-.8a4 4 0 00-5.875-.58l-.156.148-2.988 2.987-.133.145a4.002 4.002 0 002.975 6.634 4.002 4.002 0 002.815-1.123l2.404-2.405 1.414 1.415-2.417 2.417-.229.211a6 6 0 01-8.466-8.467l.21-.228 3-3 .234-.222a6.001 6.001 0 014.438-1.521zM15.94 0a6 6 0 014.263 10.168l-3.012 3.013a6.003 6.003 0 01-7.12 1.023 6.003 6.003 0 01-1.928-1.671l-.599-.801 1.602-1.198.598.801a4 4 0 006.033.432l3-3a4 4 0 00-5.668-5.644h-.001L10.69 5.527 9.28 4.11l2.43-2.415.009-.01A6.001 6.001 0 0115.939 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LinkOutlined.displayName = 'LinkOutlined';
export default LinkOutlined;
