import * as React from "react";
import Icon from "assui/lib/components/Icon";

function SearchOutlined(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M16 15.08l-3.37-3.38a7.14 7.14 0 10-.92.92L15 16a.4.4 0 00.29-.17l.46-.46a.93.93 0 00.25-.29zM7.09 13A5.87 5.87 0 1113 7.1 5.86 5.86 0 017.09 13z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

export default SearchOutlined;
