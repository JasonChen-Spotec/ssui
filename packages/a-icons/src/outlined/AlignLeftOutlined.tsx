import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function AlignLeftOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <g fill="currentColor">
        <path d="M14.9 9.2H1.1C.5 9.2 0 8.7 0 8s.5-1.2 1.1-1.2h13.8c.6 0 1.1.5 1.1 1.2s-.5 1.2-1.1 1.2zM14.9 3H1.1C.5 3 0 2.5 0 1.8S.5.6 1.1.6h13.8c.6 0 1.1.6 1.1 1.2S15.5 3 14.9 3zM9.9 15.4H1.1c-.6 0-1.1-.6-1.1-1.2 0-.7.5-1.2 1.1-1.2H10c.6 0 1.1.6 1.1 1.2-.1.7-.6 1.2-1.2 1.2z" />
      </g>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AlignLeftOutlined.displayName = 'AlignLeftOutlined';
export default AlignLeftOutlined;
