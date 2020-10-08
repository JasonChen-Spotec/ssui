import * as React from "react";

function SvgEye(props) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M8 3.21C3.89 3.21 0 8 0 8s3.64 4.8 8 4.8 8-4.75 8-4.75c-4.24-5.28-8-4.84-8-4.84zm0 7.92A3.13 3.13 0 1111.13 8 3.13 3.13 0 018 11.13z" />
      <circle cx={8} cy={8} r={1.91} />
    </svg>
  );
}

export default SvgEye;
