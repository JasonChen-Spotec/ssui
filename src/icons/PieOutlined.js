import * as React from "react";
import Icon from "../components/Icon";

function PieOutlined(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 8.9l-.4-.2-.1-.1-2.3-2.3-3.1-3c-2.7 3.2-2.4 8.1.8 10.8 3.1 2.7 7.8 2.4 10.6-.5.6-.7 1.1-1.4 1.4-2.2l-2.2-.8L8 8.9zm-.8-1.8L6.1 6 2.2 2.1C3.6.8 5.3.1 7.2 0v7.1zm1-6.8c4.2.1 7.6 3.6 7.5 7.9 0 .7-.1 1.5-.4 2.2L8.2 7.8V.3z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

export default PieOutlined;
