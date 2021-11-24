import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function LoopFolderOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.94 2.593H5.893a3.322 3.322 0 00-3.322 3.322v10.354a3.322 3.322 0 003.322 3.322h5.952a.786.786 0 110 1.572H5.894A4.904 4.904 0 011 16.269V5.915A4.904 4.904 0 015.894 1h4.045a2.756 2.756 0 012.756 2.756A1.195 1.195 0 0013.88 4.94h4.046a4.904 4.904 0 014.894 4.894.817.817 0 01-.786.828.754.754 0 01-.786-.754 3.343 3.343 0 00-3.322-3.396h-4.046a2.756 2.756 0 01-2.756-2.756A1.195 1.195 0 009.94 2.593zm10.007 13.361c.149.16.358.252.576.252.2 0 .393-.08.535-.22l1.551-1.467a.796.796 0 000-1.143l-1.562-1.467A.786.786 0 0020 13.062l.115.105H18.29a3.72 3.72 0 00-3.877 3.741.786.786 0 101.572 0 2.095 2.095 0 012.305-2.17h1.803l-.115.106a.786.786 0 00-.032 1.11zm2.117.703a.786.786 0 00-.786.785 2.096 2.096 0 01-2.305 2.17h-1.824l.115-.115a.786.786 0 10-1.048-1.143l-1.55 1.467a.796.796 0 000 1.143l1.56 1.467a.786.786 0 001.049-1.143l-.115-.104h1.792a3.73 3.73 0 003.877-3.742.775.775 0 00-.765-.785z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LoopFolderOutlined.displayName = 'LoopFolderOutlined';
export default LoopFolderOutlined;
