import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ImportOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.2 8.4H2.4v12h19.2v-12h-4.8M12 3.2v11.68"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.35 12.65L12 16l-3.35-3.35"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ImportOutlined.displayName = 'ImportOutlined';
export default ImportOutlined;
