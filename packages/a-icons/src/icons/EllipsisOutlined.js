import * as React from 'react';
import Icon from 'assui/lib/Icon';

function EllipsisOutlined(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <circle fill="currentColor" cx={1.06} cy={8} r={1.06} />
      <circle fill="currentColor" cx={8} cy={8} r={1.06} />
      <circle fill="currentColor" cx={14.94} cy={8} r={1.06} />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EllipsisOutlined.displayName = 'EllipsisOutlined';
export default EllipsisOutlined;
