import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SettingSquareOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3h10.5a4 4 0 014 4v10.5a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm10.5 17a2.5 2.5 0 002.5-2.5V7a2.5 2.5 0 00-2.5-2.5H7A2.5 2.5 0 004.5 7v10.5A2.5 2.5 0 007 20h10.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.863 10.34a.78.78 0 00.707.48.76.76 0 01.77.77v1.32a.76.76 0 01-.77.77.78.78 0 00-.55 1.32.77.77 0 010 1.09l-.93.93a.76.76 0 01-1.09 0 .78.78 0 00-1.32.55.76.76 0 01-.77.77h-1.32a.76.76 0 01-.77-.77.77.77 0 00-.78-.77.78.78 0 00-.54.22.76.76 0 01-1.09 0l-.93-.93a.77.77 0 010-1.09.78.78 0 00-.55-1.32.76.76 0 01-.77-.77v-1.32a.76.76 0 01.77-.77.78.78 0 00.55-1.32.77.77 0 010-1.09l.93-.93a.76.76 0 011.09 0 .78.78 0 001.09-.002.77.77 0 00.23-.548.76.76 0 01.77-.77h1.32a.76.76 0 01.77.77.77.77 0 00.78.77.78.78 0 00.54-.22.76.76 0 011.09 0l.93.93a.77.77 0 010 1.09.78.78 0 00-.157.84zm-1.393 3.25a2.29 2.29 0 011.37-1.29v-.05a2.29 2.29 0 01-1.37-1.29 2.26 2.26 0 01.06-1.87l-.07-.07a2.26 2.26 0 01-1 .23 2.28 2.28 0 01-2.11-1.59h-.1a2.28 2.28 0 01-2.16 1.59 2.26 2.26 0 01-1-.23l-.07.07a2.26 2.26 0 01.06 1.87 2.29 2.29 0 01-1.37 1.29v.05a2.29 2.29 0 011.37 1.29 2.26 2.26 0 01-.06 1.87l.07.07a2.28 2.28 0 013.16 1.31h.05a2.28 2.28 0 013.16-1.31l.07-.07a2.26 2.26 0 01-.06-1.87z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1 12.25a2.15 2.15 0 114.3 0 2.15 2.15 0 01-4.3 0zm1.5 0a.65.65 0 101.3 0 .65.65 0 00-1.3 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SettingSquareOutlined.displayName = 'SettingSquareOutlined';
export default SettingSquareOutlined;
