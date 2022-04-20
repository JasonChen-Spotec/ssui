import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LayerOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.27 13.61l-7.92-4a1 1 0 010-1.65l7.92-4a3 3 0 012.55-.05l8.79 4a1 1 0 010 1.75l-8.79 4a3 3 0 01-2.55-.05zm1.38-8.5a1.44 1.44 0 00-.65.15L4 8.75l7 3.48c.202.1.425.152.65.15.207.002.412-.042.6-.13l7.71-3.5-7.71-3.51a1.38 1.38 0 00-.6-.13z"
        fill="currentColor"
      />
      <path
        d="M21.29 12.05l-8.85 3.69a2 2 0 01-1.71 0l-7.84-3.68a.754.754 0 00-.63 1.37l7.82 3.62c.485.24 1.019.367 1.56.37.484.001.962-.105 1.4-.31l8.82-3.67a.75.75 0 00.41-1 .76.76 0 00-.98-.39z"
        fill="currentColor"
      />
      <path
        d="M21.29 15.13l-8.85 3.69a2 2 0 01-1.71 0l-7.84-3.67a.75.75 0 10-.63 1.36l7.82 3.62a3.43 3.43 0 001.55.37 3.26 3.26 0 001.37-.31l8.82-3.67a.75.75 0 00.41-1 .77.77 0 00-.94-.39z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LayerOutlined.displayName = 'LayerOutlined';
export default LayerOutlined;
