import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SettingSquareFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 3H7a4 4 0 00-4 4v10.5a4 4 0 004 4h10.5a4 4 0 004-4V7a4 4 0 00-4-4zm.84 9.91a.76.76 0 01-.77.77.78.78 0 00-.55 1.32.77.77 0 010 1.09l-.93.93a.77.77 0 01-1.09 0 .78.78 0 00-1.32.55.76.76 0 01-.77.77h-1.32a.76.76 0 01-.77-.77.78.78 0 00-1.32-.55.77.77 0 01-1.09 0l-.93-.93a.77.77 0 010-1.09.78.78 0 00-.55-1.32.76.76 0 01-.77-.77v-1.32a.76.76 0 01.77-.77.78.78 0 00.55-1.32.77.77 0 010-1.09l.93-.93a.77.77 0 011.09 0 .78.78 0 001.32-.55.76.76 0 01.77-.77h1.32a.76.76 0 01.77.77.78.78 0 001.32.55.77.77 0 011.09 0l.93.93a.77.77 0 010 1.09.78.78 0 00.55 1.32.76.76 0 01.77.77v1.32zm-6.09-2.81a2.15 2.15 0 100 4.3 2.15 2.15 0 000-4.3zm0 2.8a.65.65 0 110-1.3.65.65 0 010 1.3z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SettingSquareFilled.displayName = 'SettingSquareFilled';
export default SettingSquareFilled;
