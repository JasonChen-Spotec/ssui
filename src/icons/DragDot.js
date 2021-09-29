import * as React from "react";
import Icon from "assui/lib/components/Icon";

function DragDot(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <circle fill="currentColor" cx={4.8} cy={8} r={1.6} />
      <circle fill="currentColor" cx={11.2} cy={8} r={1.6} />
      <circle fill="currentColor" cx={4.8} cy={14.4} r={1.6} />
      <circle fill="currentColor" cx={11.2} cy={14.4} r={1.6} />
      <circle fill="currentColor" cx={4.8} cy={1.6} r={1.6} />
      <circle fill="currentColor" cx={11.2} cy={1.6} r={1.6} />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DragDot.displayName = "DragDot";
export default DragDot;
