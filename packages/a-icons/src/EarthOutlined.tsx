import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function EarthOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.73 7.882A9.54 9.54 0 0111.55 2a9.53 9.53 0 019.53 9.54A9.54 9.54 0 112.73 7.882zm16.3 6.558c.35-.927.526-1.91.52-2.9a8 8 0 00-1.7-5.03c-.45.75-1.3 1.87-2.35 1.87a3.37 3.37 0 00-1.2.12v.11c0 .18.49.67.75.93a3.07 3.07 0 011.2 2c0 1.6.16 2.09.3 2.21a6.48 6.48 0 012.48.69zm-15.48-2.9a8 8 0 011.66-4.92c.284.517.831.833 1.42.82a6.52 6.52 0 012.1 1.68 5.19 5.19 0 00-1.14.95l-.1.097c-.276.269-.671.654-.84.663a1.68 1.68 0 00-1.73 1.73.76.76 0 00.08.33l.9 1.8a10.46 10.46 0 00.49 3.05 8 8 0 01-2.84-6.2zm5.27 7.52a8 8 0 002.73.48v.03a8 8 0 006.8-3.7 6.63 6.63 0 00-1.91-.59c-1.73 0-1.73-2.48-1.73-3.68 0-.181-.446-.626-.721-.901l-.039-.039a3.08 3.08 0 01-1.19-2c0-1.73 1.76-1.73 2.7-1.73.26-.01.88-.75 1.26-1.49A8 8 0 006.43 5.4a.75.75 0 010 .26c.01.24.12.24.23.24 1.2 0 3.89 2.44 3.93 3.58a.9.9 0 01-1 .9c-.18.01-.67.5-.93.76a3.12 3.12 0 01-2 1.2c-.08 0-.2 0-.2.1l.87 1.67a.76.76 0 01.08.33c0 1.09.24 2.86.76 3.39.363.314.595.753.65 1.23z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EarthOutlined.displayName = 'EarthOutlined';
export default EarthOutlined;
