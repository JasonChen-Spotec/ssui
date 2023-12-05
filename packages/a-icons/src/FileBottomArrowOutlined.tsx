import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FileBottomArrowOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20 8.94a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19h-.1a1.099 1.099 0 00-.31-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V9v-.06zm-6-3.53L16.59 8H15a1 1 0 01-1-1V5.41zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v9zm-4.71-4.71l-.29.3V12a1 1 0 00-2 0v2.59l-.29-.3a1.004 1.004 0 10-1.42 1.42l2 2a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l2-2a1.004 1.004 0 10-1.42-1.42z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FileBottomArrowOutlined.displayName = 'FileBottomArrowOutlined';
export default FileBottomArrowOutlined;
