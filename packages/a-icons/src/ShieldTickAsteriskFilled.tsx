import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ShieldTickAsteriskFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.052 6.353L11.91 4.33a.59.59 0 00-.367 0L5.41 6.383a.546.546 0 00-.379.515l.015 6.287c.18 3.69 6.256 5.937 6.514 6.03a.582.582 0 00.4 0c.258-.095 6.323-2.37 6.488-6.084l-.015-6.263a.545.545 0 00-.381-.514z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.857 9.76l-5.21 4.383-2.504-2.371.759-.719 1.789 1.694L15.144 9l.713.76z"
        fill="inherit"
      />
      <path
        d="M10.273 18.558c-.287-1.432-.431-2.148-.076-2.681.355-.534 1.07-.677 2.5-.963l4.743-.95c1.43-.287 2.144-.43 2.677-.075.533.355.677 1.071.964 2.503.287 1.432.43 2.148.075 2.681-.355.534-1.07.677-2.5.963l-4.743.95c-1.43.287-2.144.43-2.677.075-.533-.355-.677-1.071-.963-2.503z"
        fill="#DC4946"
      />
      <path
        d="M13.238 16.332l.504-.108.647 3.024-.504.108-.647-3.024z"
        fill="currentColor"
      />
      <path
        d="M14.438 16.352l.432.28-1.681 2.596-.433-.28 1.681-2.596z"
        fill="currentColor"
      />
      <path
        d="M12.654 16.733l-.28.433 2.596 1.681.28-.432-2.596-1.682zM17.361 15.3l.504-.107.647 3.025-.504.107-.647-3.024z"
        fill="currentColor"
      />
      <path
        d="M18.56 15.321l.433.28-1.681 2.596-.433-.28 1.681-2.596z"
        fill="currentColor"
      />
      <path
        d="M16.777 15.702l-.28.433 2.596 1.681.28-.432-2.596-1.682z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShieldTickAsteriskFilled.displayName = 'ShieldTickAsteriskFilled';
export default ShieldTickAsteriskFilled;
