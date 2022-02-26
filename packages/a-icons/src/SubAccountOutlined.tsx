import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function SubAccountOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 21c0-1.92.766-3.76 2.13-5.118a7.29 7.29 0 015.143-2.12 7.29 7.29 0 015.142 2.12A7.22 7.22 0 0117.545 21H3zm7.273-8.143c-3.014 0-5.455-2.43-5.455-5.428 0-3 2.441-5.429 5.455-5.429 3.013 0 5.454 2.43 5.454 5.429s-2.44 5.428-5.454 5.428zm9.09 3.62H23v1.809h-3.636v-1.81zm-2.727-4.525H23v1.81h-6.364v-1.81zm1.819-4.523H23v1.81h-4.546v-1.81z"
        stroke="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SubAccountOutlined.displayName = 'SubAccountOutlined';
export default SubAccountOutlined;
