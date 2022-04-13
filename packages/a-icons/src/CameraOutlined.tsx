import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function CameraOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.274 4h11.452A4.263 4.263 0 0122 8.263v7.263a4.263 4.263 0 01-4.274 4.264H6.274A4.263 4.263 0 012 15.526V8.263A4.263 4.263 0 016.274 4zm11.452 14.21a2.695 2.695 0 002.695-2.631V8.263a2.695 2.695 0 00-2.695-2.684H6.274a2.695 2.695 0 00-2.695 2.684v7.263a2.695 2.695 0 002.695 2.684h11.452z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.716 12.19a4.21 4.21 0 118.42 0 4.21 4.21 0 01-8.42 0zm1.579 0a2.632 2.632 0 105.263 0 2.632 2.632 0 00-5.263 0z"
        fill="currentColor"
      />
      <rect x={16.137} y={6.916} width={2.105} height={2.116} rx={0.5} fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CameraOutlined.displayName = 'CameraOutlined';
export default CameraOutlined;
