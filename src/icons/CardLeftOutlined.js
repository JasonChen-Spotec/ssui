import * as React from "react";
import Icon from "assui/lib/components/Icon";

function CardLeftOutlined(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <g fill="currentColor">
        <path d="M11 9c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5-.2.5-.5zM2.5 10.5c-.3 0-.5.2-.5.5s.2.5.5.5h4c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-4z" />
        <path d="M14 1.5H2c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h7.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H2c-.6 0-1-.4-1-1v-7h14v3.6c0 .3.2.5.5.5s.5-.2.5-.5V3.5c0-1.1-.9-2-2-2zm-13 3v-1c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v1H1z" />
        <path d="M8 9c0-.3-.2-.5-.5-.5h-5c-.3 0-.5.2-.5.5s.2.5.5.5h5c.3 0 .5-.2.5-.5zM11.8 12.6l2.4-2.2c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-2.8 2.5c-.1.1-.2.2-.2.4 0 .1 0 .3.1.4l2.8 2.9c.1.1.2.2.4.2.1 0 .3 0 .3-.1.2-.2.2-.5 0-.7l-2.3-2.7z" />
      </g>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CardLeftOutlined.displayName = "CardLeftOutlined";
export default CardLeftOutlined;
