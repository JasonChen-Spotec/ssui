import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function HomeFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.523 1.336a2 2 0 00-1.046 0c-.397.108-.732.37-.998.58l-.075.059-6.86 5.335c-.377.292-.709.55-.956.884a3 3 0 00-.477.975c-.112.4-.111.82-.11 1.298v7.371c0 .528 0 .982.03 1.357.032.395.103.789.296 1.167a3 3 0 001.311 1.311c.379.193.772.264 1.167.296.375.031.83.031 1.357.031h11.677c.527 0 .982 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 001.311-1.311c.193-.378.264-.772.297-1.167.03-.375.03-.83.03-1.356v-7.372c0-.477.001-.897-.11-1.298a3 3 0 00-.478-.975c-.247-.334-.579-.592-.956-.884l-6.86-5.335-.074-.059c-.267-.21-.602-.472-1-.58zM17 18v-2H7v2h10z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

HomeFilled.displayName = 'HomeFilled';
export default HomeFilled;
