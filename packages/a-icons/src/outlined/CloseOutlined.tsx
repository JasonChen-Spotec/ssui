import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function CloseOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        className="close-outlined_svg__st0"
        d="M.014 15.144L15.146.012l.849.848L.863 15.992z"
      />
      <path
        fill="currentColor"
        className="close-outlined_svg__st0"
        d="M15.153 15.986L.02.854.869.005l15.132 15.132z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CloseOutlined.displayName = 'CloseOutlined';
export default CloseOutlined;
