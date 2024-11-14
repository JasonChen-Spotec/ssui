import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SignalLineOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.405 1.587l-.368.368a4.897 4.897 0 000 6.925l.368.367-.735.736-.368-.368a5.937 5.937 0 010-8.396L2.67.852l.735.735zM10.33.852l.368.367a5.937 5.937 0 010 8.396l-.368.368-.735-.736.368-.367a4.897 4.897 0 000-6.925l-.368-.368.735-.735zM4.937 3.119l-.367.368a2.73 2.73 0 000 3.86l.367.368-.735.736-.368-.368a3.77 3.77 0 010-5.332l.368-.367.735.735zm3.861-.735l.368.367a3.77 3.77 0 010 5.332l-.368.368-.735-.736.367-.368a2.73 2.73 0 000-3.86l-.367-.368.735-.735zM6.5 4.854a.563.563 0 100 1.126.563.563 0 000-1.126zm-1.603.563A1.603 1.603 0 117.02 6.934v4.961H5.98v-4.96a1.604 1.604 0 01-1.083-1.518z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SignalLineOutlined.displayName = 'SignalLineOutlined';
export default SignalLineOutlined;
