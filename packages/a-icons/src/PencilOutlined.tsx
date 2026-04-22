import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PencilOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.17 12.415l-6.817 6.818v3.409h3.408l6.818-6.818m-3.409-3.409l2.445-2.444.001-.002c.337-.336.505-.505.7-.568a.852.852 0 01.526 0c.194.063.363.232.699.568l1.482 1.482c.338.338.507.506.57.701a.852.852 0 010 .527c-.063.194-.232.363-.569.7h0l-2.445 2.445m-3.409-3.409l3.409 3.41"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PencilOutlined.displayName = 'PencilOutlined';
export default PencilOutlined;
