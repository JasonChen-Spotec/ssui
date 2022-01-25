import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function FileOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.925 4h3.404a2.674 2.674 0 012.675 2.674.167.167 0 00.167.168h3.354a3.781 3.781 0 013.772 3.773v5.541a3.781 3.781 0 01-3.772 3.773h-9.6a3.773 3.773 0 01-3.772-3.773V7.773A3.764 3.764 0 016.925 4zm4.796 2.674c0-.782-.635-1.416-1.417-1.416H6.925A2.515 2.515 0 004.41 7.773v8.383a2.515 2.515 0 002.515 2.516H16.5a2.515 2.515 0 002.516-2.516v-5.541A2.515 2.515 0 0016.499 8.1h-3.353a1.425 1.425 0 01-1.425-1.426z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FileOutlined.displayName = 'FileOutlined';
export default FileOutlined;
