import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function TreeOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.666 13.875a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75zM18.666 7.21a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75zM18.666 20.541a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75zM5.334 13.875a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z"
        fill="currentColor"
      />
      <path
        d="M17.832 12.627a.63.63 0 00.625-.626.63.63 0 00-.625-.624h-6.041V7.835c0-1.317.558-1.875 1.875-1.875h4.166a.63.63 0 00.625-.625.63.63 0 00-.625-.625h-4.166c-2.017 0-3.125 1.108-3.125 3.125v3.542H6.166a.63.63 0 00-.625.624.63.63 0 00.625.626h4.375v3.541c0 2.017 1.108 3.125 3.125 3.125h4.166a.63.63 0 00.625-.625.63.63 0 00-.625-.625h-4.166c-1.317 0-1.875-.558-1.875-1.875v-3.541h6.041z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TreeOutlined.displayName = 'TreeOutlined';
export default TreeOutlined;
