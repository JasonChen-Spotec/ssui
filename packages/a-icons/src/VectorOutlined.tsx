import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function VectorOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.167 14h11.666V8.192c0-3.235-2.611-5.859-5.833-5.859s-5.833 2.624-5.833 5.86V14zM8 .667c4.142 0 7.5 3.369 7.5 7.525v7.475H.5V8.192C.5 4.036 3.858.667 8 .667zM5.917 16.5h4.166a2.083 2.083 0 11-4.166 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

VectorOutlined.displayName = 'VectorOutlined';
export default VectorOutlined;
