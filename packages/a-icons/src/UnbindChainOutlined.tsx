import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function UnbindChainOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.789 3.88a.75.75 0 01.75.75v1.474a.75.75 0 11-1.5 0V4.63a.75.75 0 01.75-.75zm3.244 1.857a3.698 3.698 0 115.23 5.23l-1.564 1.563a.75.75 0 01-1.06-1.06l1.563-1.564a2.198 2.198 0 00-3.108-3.108L12.53 8.36a.75.75 0 11-1.06-1.06l1.563-1.564zm-7.828-.532a.75.75 0 011.06 0l1.043 1.043a.75.75 0 01-1.06 1.06L5.205 6.266a.75.75 0 010-1.06zM3.88 9.79a.75.75 0 01.75-.75h1.474a.75.75 0 110 1.5H4.63a.75.75 0 01-.75-.75zm4.481 1.68a.75.75 0 010 1.061l-1.563 1.564a2.198 2.198 0 003.108 3.108l1.564-1.563a.75.75 0 111.06 1.06l-1.563 1.564a3.698 3.698 0 11-5.23-5.23l1.564-1.563a.75.75 0 011.06 0zm8.785 2.742a.75.75 0 01.75-.75h1.474a.75.75 0 110 1.5h-1.474a.75.75 0 01-.75-.75zm-.454 2.48a.75.75 0 011.06 0l1.043 1.043a.75.75 0 11-1.06 1.06l-1.043-1.041a.75.75 0 010-1.061zm-2.481.455a.75.75 0 01.75.75v1.474a.75.75 0 01-1.5 0v-1.474a.75.75 0 01.75-.75z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

UnbindChainOutlined.displayName = 'UnbindChainOutlined';
export default UnbindChainOutlined;
