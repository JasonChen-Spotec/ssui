import * as React from "react";

function SvgClose(props) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        d="M14.84 15.5a.66.66 0 01-.46-.19L8 8.93l-6.39 6.38a.64.64 0 01-.91 0 .65.65 0 01-.2-.46.68.68 0 01.19-.47L7.07 8 .69 1.62a.66.66 0 010-.92.63.63 0 01.47-.2.68.68 0 01.46.19L8 7.07 14.38.69a.66.66 0 01.93 0 .67.67 0 010 .93L8.93 8l6.38 6.38a.66.66 0 01-.47 1.12z"
        fill="#2c2c2c"
      />
    </svg>
  );
}

export default SvgClose;
