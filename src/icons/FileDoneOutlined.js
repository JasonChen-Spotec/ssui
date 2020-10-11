import * as React from "react";
import Icon from "../components/Icon";

function FileDoneOutlined(props) {
  const IconNode = () => (
    <svg viewBox="0 0 16 16">
      <path
        fill="currentColor"
        d="M12.27 16H3.73a2.64 2.64 0 01-2.66-2.67V4.8L5.76 0h6.51a2.64 2.64 0 012.66 2.67v10.66A2.64 2.64 0 0112.27 16zM2.13 5.23v8.1a1.64 1.64 0 001.6 1.6h8.54a1.64 1.64 0 001.6-1.6V2.67a1.64 1.64 0 00-1.6-1.6H6.19z"
      />
      <path
        fill="currentColor"
        d="M4.48 5.33H1.92V4.27h2.56a.84.84 0 00.85-.86V.53H6.4v2.88a1.91 1.91 0 01-1.92 1.92zm2.24 6a.63.63 0 01-.43-.11L4.16 8.85a.53.53 0 01.75-.74l2.24 2.24a.51.51 0 010 .74.57.57 0 01-.43.22z"
      />
      <path
        fill="currentColor"
        d="M6.72 11.31a.63.63 0 01-.43-.11.53.53 0 010-.75l4.59-4.58a.53.53 0 01.75.74l-4.48 4.48a.57.57 0 01-.43.22z"
      />
    </svg>
  );

  return <Icon {...props} component={IconNode} />;
}

export default FileDoneOutlined;
