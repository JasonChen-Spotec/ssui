import * as React from "react";
import Icon from "assui/lib/components/Icon";

function MUpwardArrow(componentProps) {
  const IconNode = (props) => (
    <svg
      id="m-upward-arrow_svg__\u56FE\u5C42_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 16 16"
      xmlSpace="preserve"
      {...props}
    >
      <style>{".m-upward-arrow_svg__st0{fill:#285a83}"}</style>
      <path
        className="m-upward-arrow_svg__st0"
        d="M3.8 16H3c-.8 0-1.5-.7-1.5-1.5v-2.8c0-.8.7-1.5 1.5-1.5h.8c.8 0 1.5.7 1.5 1.5v2.8c-.1.8-.7 1.5-1.5 1.5zM3 11.1c-.3 0-.6.3-.6.6v2.8c0 .3.3.6.6.6h.8c.3 0 .6-.3.6-.6v-2.8c0-.3-.3-.6-.6-.6H3zM8.4 16h-.8c-.8 0-1.5-.7-1.5-1.5V9.2c0-.8.7-1.5 1.5-1.5h.8c.8 0 1.5.7 1.5 1.5v5.3c0 .8-.7 1.5-1.5 1.5zm-.8-7.4c-.3 0-.6.3-.6.6v5.3c0 .3.3.6.6.6h.8c.3 0 .6-.3.6-.6V9.2c0-.3-.3-.6-.6-.6h-.8zM13 16h-.8c-.8 0-1.5-.7-1.5-1.5V6.4c0-.8.7-1.5 1.5-1.5h.8c.8 0 1.5.7 1.5 1.5v8.2c0 .7-.7 1.4-1.5 1.4zm-.8-10.2c-.3 0-.6.3-.6.6v8.2c0 .3.3.6.6.6h.8c.3 0 .6-.3.6-.6V6.4c0-.3-.3-.6-.6-.6h-.8z"
      />
      <path
        d="M14.2 1.1c0-.1-.1-.2-.1-.2s-.1 0-.1-.1L11.6 0c-.2-.1-.5 0-.5.3-.1.2 0 .5.3.5l1.3.5L1.8 7c-.2.1-.3.4-.2.6.1.1.3.2.4.2h.2l11-5.8-.3 1.5c0 .2.1.5.3.5.2 0 .5-.1.5-.3l.5-2.4v-.2z"
        fill="#ef6f53"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MUpwardArrow.displayName = "MUpwardArrow";
export default MUpwardArrow;
