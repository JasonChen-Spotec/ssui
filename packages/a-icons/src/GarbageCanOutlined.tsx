import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function GarbageCanOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20 7v13a2 2 0 01-2 2H6a2 2 0 01-2-2V7H2V5h20v2h-2zM6 7v13h12V7H6zm1-5h10v2H7V2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.11 11.11a3.082 3.082 0 015.78 0 3.082 3.082 0 01-1.072 5.972h-3.636A3.082 3.082 0 019.11 11.11zM12 10.9c-.64 0-1.171.47-1.267 1.082l-.1.65-.65.101a1.282 1.282 0 00.199 2.549h3.636a1.282 1.282 0 00.2-2.549l-.65-.1-.101-.65A1.282 1.282 0 0012 10.9z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

GarbageCanOutlined.displayName = 'GarbageCanOutlined';
export default GarbageCanOutlined;
