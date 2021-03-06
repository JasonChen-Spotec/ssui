import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ErrorWarningOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ErrorWarningOutlined.displayName = 'ErrorWarningOutlined';
export default ErrorWarningOutlined;
