import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function TrashCanFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16.333 1H7.667v2h8.666V1z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4.333h22v2h-2.287l-.72 10.795c-.055.843-.101 1.534-.184 2.095-.085.582-.22 1.104-.496 1.589a4.334 4.334 0 01-1.875 1.754c-.502.243-1.032.343-1.619.39-.565.044-1.257.044-2.102.044h-3.434c-.845 0-1.537 0-2.102-.045-.587-.046-1.117-.146-1.619-.389a4.333 4.333 0 01-1.875-1.754c-.276-.485-.41-1.007-.496-1.59-.082-.56-.129-1.251-.185-2.094l-.72-10.795H1v-2zM8.778 16.89h2V9.333h-2v7.556zm4.444 0h2V9.333h-2v7.556z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TrashCanFilled.displayName = 'TrashCanFilled';
export default TrashCanFilled;
