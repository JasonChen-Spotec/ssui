import * as React from "react";
import Icon from "assui/lib/components/Icon";

function TipCirccleOutlined(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M11.78 4.83h-1L9 3.2a1.44 1.44 0 00-2 0L5.18 4.83h-1a1.5 1.5 0 00-1.5 1.5v4.56a1.5 1.5 0 001.5 1.5h7.56a1.5 1.5 0 001.5-1.5V6.33a1.5 1.5 0 00-1.46-1.5zM7.49 3.72a.75.75 0 011 0l1.27 1.11H6.22zm5.1 7.17a.81.81 0 01-.81.81H4.22a.81.81 0 01-.81-.81V6.33a.8.8 0 01.81-.8h7.56a.8.8 0 01.81.8v4.56z"
      />
      <path
        fill="currentColor"
        d="M10.68 7.91H5.23a.35.35 0 110-.7h5.45a.35.35 0 110 .7zm-1.63 2H5.23a.35.35 0 01-.35-.35.35.35 0 01.35-.34h3.82a.35.35 0 01.35.34.35.35 0 01-.35.37z"
      />
      <path
        fill="currentColor"
        d="M8 .6A7.4 7.4 0 11.6 8 7.41 7.41 0 018 .6M8 0a8 8 0 108 8 8 8 0 00-8-8z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TipCirccleOutlined.displayName = "TipCirccleOutlined";
export default TipCirccleOutlined;
