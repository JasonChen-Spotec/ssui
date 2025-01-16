import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function TrashCanFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 2H8v2h8V2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5h20v2h-2.064l-.642 9.625c-.05.756-.092 1.381-.167 1.89-.078.53-.201 1.014-.458 1.465a4 4 0 01-1.731 1.62c-.467.226-.959.317-1.493.36-.512.04-1.139.04-1.896.04h-3.098c-.757 0-1.384 0-1.896-.04-.534-.043-1.025-.134-1.493-.36a4 4 0 01-1.73-1.62c-.258-.451-.381-.935-.46-1.465-.074-.509-.116-1.134-.166-1.89L4.064 7H2V5zm7 11.5h2v-7H9v7zm4 0h2v-7h-2v7z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TrashCanFilled.displayName = 'TrashCanFilled';
export default TrashCanFilled;
