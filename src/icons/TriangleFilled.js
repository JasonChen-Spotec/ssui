import * as React from "react";
import Icon from "../components/Icon";

function TriangleFilled(props) {
  const IconNode = () => (
    <svg viewBox="0 0 16 16">
      <path d="M1.15 3.37L8 3.35l6.88.06a2.09 2.09 0 01.91.12.64.64 0 010 1l-7.28 8a.78.78 0 01-1 0l-7.28-8a.65.65 0 010-1c.13-.11.37-.16.94-.16z" />
    </svg>
  );

  return <Icon {...props} component={IconNode} />;
}

export default TriangleFilled;
