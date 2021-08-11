import * as React from 'react';
import Icon from 'assui/lib/icon';

function CheckCircleFilled(componentProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <circle fill="currentColor" cx={8} cy={8} r={8} />
      <path
        fill="inherit"
        className="check-circle-filled_svg__st0"
        d="M12.5 4.4c-.2-.2-.5-.2-.7 0l-5 5c-.2.2-.5.2-.7 0l-2-2c-.1-.2-.4-.2-.6 0l-.7.8c-.2.2-.2.5 0 .7l3.3 3.3c.2.2.6.2.8 0l6.3-6.3c.2-.2.2-.5 0-.7l-.7-.8z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CheckCircleFilled.displayName = 'CheckCircleFilled';
export default CheckCircleFilled;
