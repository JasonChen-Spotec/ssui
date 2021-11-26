import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function CloseCircleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.4 12a7.6 7.6 0 1015.2 0 7.6 7.6 0 00-15.2 0zM12 3a9 9 0 100 18 9 9 0 000-18z"
        fill="currentColor"
      />
      <rect
        x={14.157}
        y={8.8}
        width={1.4}
        height={8}
        rx={0.7}
        transform="rotate(45 14.157 8.8)"
        fill="currentColor"
      />
      <rect
        x={15.288}
        y={14.457}
        width={1.4}
        height={8}
        rx={0.7}
        transform="rotate(135 15.288 14.457)"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CloseCircleOutlined.displayName = 'CloseCircleOutlined';
export default CloseCircleOutlined;
