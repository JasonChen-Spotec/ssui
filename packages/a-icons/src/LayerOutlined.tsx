import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function LayerOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.118L19.764 7 12 10.882 4.236 7 12 3.118zm-.197 7.862zm.394 0zm-.473-9.895a1.5 1.5 0 01.553 0 1.902 1.902 0 01.528.2l9.642 4.82a1 1 0 010 1.79l-9.642 4.82-.025.014c-.094.047-.287.146-.503.186a1.5 1.5 0 01-.553 0c-.217-.04-.41-.139-.503-.186l-.026-.013-9.642-4.822a1 1 0 010-1.788l9.642-4.822.026-.013c.093-.047.286-.146.502-.186zM.657 12.447l.895-1.789L12 15.882l10.447-5.224.895 1.79-10.537 5.267-.025.014c-.094.047-.287.146-.503.186a1.5 1.5 0 01-.553 0c-.217-.04-.41-.139-.503-.186l-.026-.014L.658 12.447zm11.145 3.533zm.394 0zM.658 17.447l.895-1.789L12 20.882l10.447-5.224.895 1.79-10.537 5.267-.025.014c-.094.047-.287.146-.503.186a1.5 1.5 0 01-.553 0c-.217-.04-.41-.139-.503-.186l-.026-.014L.658 17.447z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LayerOutlined.displayName = "LayerOutlined";
export default LayerOutlined;
