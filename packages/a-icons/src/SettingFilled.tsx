import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SettingFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={11.8} cy={11.81} r={1.96} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.226 8.73c.19.465.642.769 1.144.77a1.24 1.24 0 011.24 1.24v2.14a1.24 1.24 0 01-1.24 1.24 1.24 1.24 0 00-.87 2.12 1.26 1.26 0 010 1.76L18 19.5a1.26 1.26 0 01-1.76 0 1.24 1.24 0 00-2.12.87 1.24 1.24 0 01-1.24 1.24h-2.14a1.24 1.24 0 01-1.24-1.24 1.24 1.24 0 00-2.12-.87 1.26 1.26 0 01-1.76 0L4.12 18a1.26 1.26 0 010-1.76 1.24 1.24 0 00-.88-2.12A1.24 1.24 0 012 12.88v-2.14c0-.685.555-1.24 1.24-1.24a1.24 1.24 0 00.87-2.12 1.26 1.26 0 010-1.76l1.5-1.5a1.26 1.26 0 011.76 0 1.24 1.24 0 002.12-.88c0-.685.555-1.24 1.24-1.24h2.15a1.24 1.24 0 011.24 1.24 1.24 1.24 0 002.12.88 1.26 1.26 0 011.76 0l1.5 1.5a1.26 1.26 0 010 1.76 1.24 1.24 0 00-.274 1.35zM8.34 11.81a3.46 3.46 0 106.92 0 3.46 3.46 0 00-6.92 0z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SettingFilled.displayName = 'SettingFilled';
export default SettingFilled;
