import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ForbidFireOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.196 5.961a5.807 5.807 0 01.71 5.041 5.668 5.668 0 00-2.14.657 4.21 4.21 0 00.092-4.863c-.46-.685-.92-1.37-1.349-1.98l-.268.556a22.484 22.484 0 01-4.475 6.135l-.193.182a4.176 4.176 0 00-1.242 2.902v.203a5.728 5.728 0 003.512 5.354l.278.117c.741.315 1.532.462 2.32.443a5.712 5.712 0 002 1.3c-.7.215-1.432.32-2.168.313a7.088 7.088 0 01-2.773-.557l-.278-.118a7.323 7.323 0 01-4.497-6.798v-.193a5.77 5.77 0 011.724-4.036l.193-.182a20.867 20.867 0 004.154-5.76l1.467-2.998s1.52 2.141 2.933 4.282zM17.988 11.553a5.7 5.7 0 01.737.433V10.19a9.165 9.165 0 01-.737 1.363z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.52 21.433a4.754 4.754 0 100-9.508 4.754 4.754 0 000 9.508zm0-1.427a3.328 3.328 0 002.804-5.122l-4.597 4.598a3.312 3.312 0 001.794.524zm1.796-6.13l-4.598 4.598a3.328 3.328 0 014.598-4.598z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ForbidFireOutlined.displayName = 'ForbidFireOutlined';
export default ForbidFireOutlined;
