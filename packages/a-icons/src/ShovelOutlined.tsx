import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function ShovelOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M1.4 6.4v7.72a.69.69 0 00.68.68h11.84a.68.68 0 00.68-.68V6.4a.6.6 0 01.6-.6.59.59 0 01.59.6v8.75a.85.85 0 01-.85.85H1.06a.85.85 0 01-.85-.85V6.4a.59.59 0 01.59-.6.58.58 0 01.6.6zM9 .3a.6.6 0 01.82-.22L14 2.48a.6.6 0 01.22.82.6.6 0 01-.82.22l-1.55-.9L10 5.74l1.87 1.06a.88.88 0 01.31 1.2l-2 3.4A3.6 3.6 0 014 7.79l2-3.4a.88.88 0 011.19-.32L9 5.14 10.79 2l-1.56-.9A.61.61 0 019 .3zM7 5.37a.18.18 0 00-.26.07L5 8.4a2.4 2.4 0 00.73 3.18l.15.1A2.42 2.42 0 009.1 11l.1-.15 1.69-3a.19.19 0 00-.07-.26l-1.39-.82-.91 1.56a.59.59 0 01-.81.22.59.59 0 01-.22-.82l.9-1.55z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShovelOutlined.displayName = 'ShovelOutlined';
export default ShovelOutlined;
