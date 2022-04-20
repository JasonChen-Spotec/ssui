import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LineUpOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.81 2h12.38A3.81 3.81 0 0122 5.81v12.38A3.81 3.81 0 0118.19 22H5.81A3.81 3.81 0 012 18.19V5.81A3.81 3.81 0 015.81 2zm12.38 18.571a2.38 2.38 0 002.381-2.38V5.81a2.38 2.38 0 00-2.38-2.381H5.81a2.381 2.381 0 00-2.381 2.38v12.382a2.38 2.38 0 002.38 2.38h12.382z"
        fill="currentColor"
      />
      <path
        d="M17.238 8.905h-2.857a.714.714 0 000 1.428h.886l-3.39 3.39L9.97 11.82a1.295 1.295 0 00-1.828 0l-2.486 2.41a.714.714 0 001.01 1.01l2.352-2.353 1.905 1.905c.508.504 1.33.504 1.838 0l3.724-3.724v1.41a.714.714 0 101.428 0V9.618a.724.724 0 00-.676-.714z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LineUpOutlined.displayName = 'LineUpOutlined';
export default LineUpOutlined;
