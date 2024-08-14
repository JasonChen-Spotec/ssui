import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CardLoopOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.523 16.206a.786.786 0 01-.576-.252.786.786 0 01.032-1.11l.115-.105H18.29a2.096 2.096 0 00-2.305 2.169.786.786 0 11-1.572 0 3.72 3.72 0 013.877-3.741h1.824L20 13.062a.786.786 0 011.047-1.153l1.562 1.467a.797.797 0 010 1.143l-1.551 1.467a.765.765 0 01-.535.22zm.755 1.236c0-.434.352-.785.786-.785a.776.776 0 01.765.785 3.73 3.73 0 01-3.877 3.742H17.16l.115.104a.786.786 0 01-1.048 1.143l-1.562-1.467a.796.796 0 010-1.143l1.551-1.467a.786.786 0 111.048 1.143l-.115.115h1.823a2.096 2.096 0 002.306-2.17z"
        fill="currentColor"
      />
      <path
        d="M21 10V5a2 2 0 00-2-2H5a2 2 0 00-2 2v13a2 2 0 002 2h7.5m8-12H4m5.5 7h-3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CardLoopOutlined.displayName = 'CardLoopOutlined';
export default CardLoopOutlined;
