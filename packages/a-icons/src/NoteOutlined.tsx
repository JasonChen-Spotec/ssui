import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function NoteOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.759 1H14a1 1 0 01.707.293l6 6A1 1 0 0121 8v4.6h-2V9h-3.432c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.2 2 2 0 01-.874-.875 2.022 2.022 0 01-.201-.77C13 6.93 13 6.684 13 6.432V3H8.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 00-.874.874c-.08.156-.145.38-.18.819C5 5.361 5 5.943 5 6.8v10.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.819.18C7.361 21 7.943 21 8.8 21H12v2H8.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 18.71 3 18.046 3 17.242V6.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C7.29 1 7.954 1 8.758 1zM15 4.414L17.586 7H15.6a8.194 8.194 0 01-.589-.011v-.014A8.205 8.205 0 0115 6.4V4.414z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.293 14.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-5 5A1 1 0 0116 23h-2a1 1 0 01-1-1v-2a1 1 0 01.293-.707l5-5zM15 20.414V21h.586l4-4-.586-.586-4 4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

NoteOutlined.displayName = 'NoteOutlined';
export default NoteOutlined;
