import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ShieldOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.77 5.19l-5.9-3.27a3.78 3.78 0 00-3.74 0l-5.9 3.27a3.86 3.86 0 00-2 3.37v6.35a4 4 0 00.4 1.72v.05a3.21 3.21 0 00.63 3.62l2.23 2.12a2.6 2.6 0 001.81.73 2.63 2.63 0 001.8-.72l.93-.89a3.81 3.81 0 003.74 0l5.9-3.27a3.86 3.86 0 002-3.37V8.56a3.86 3.86 0 00-1.9-3.37zM9.09 20.5l-.92.88a1.17 1.17 0 01-1.63 0l-2.2-2.1a1.77 1.77 0 011.25-3 1.8 1.8 0 011.25.52l.52.52.51-.52a1.8 1.8 0 011.25-.52 1.77 1.77 0 011.25 3L9.09 20.5zM19 17a2.36 2.36 0 001.25-2.09l-.04-6.35A2.36 2.36 0 0019 6.5l-5.82-3.27a2.32 2.32 0 00-2.28 0L5 6.5a2.36 2.36 0 00-1.23 2.06v6.34a2.3 2.3 0 000 .45 3.23 3.23 0 013.56 0 3.21 3.21 0 014 5l-.09.09a2.33 2.33 0 001.86-.17L19 17z"
        fill="currentColor"
      />
      <path
        d="M16.9 7.64l-4.41 2.45a1 1 0 01-1 0L7.1 7.64A.772.772 0 106.37 9l4.41 2.46c.15.075.308.135.47.18v2.32a.75.75 0 001.5 0v-2.37c.164-.044.322-.108.47-.19L17.63 9a.75.75 0 10-.73-1.31v-.05z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShieldOutlined.displayName = 'ShieldOutlined';
export default ShieldOutlined;
