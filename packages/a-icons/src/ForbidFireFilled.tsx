import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ForbidFireFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.225 1.226A1 1 0 008.593 2c0 .687-.098 1.573-.273 2.43-.178.87-.417 1.623-.66 2.08-.302.568-.455.81-.606 1.007a7.49 7.49 0 01-.418.484c-.093.102-.206.226-.346.383-.164.184-.314.344-.456.497-.481.517-.876.94-1.422 1.828-.8 1.302-.912 2.944-.912 4C3.5 19.492 7.374 23 12 23a8.573 8.573 0 003.512-.747 5.5 5.5 0 014.87-9.578 13.036 13.036 0 00-.555-2.285c-.284-.854-.468-1.377-.664-1.826-.2-.457-.404-.82-.704-1.345a1 1 0 00-1.861.377 3.752 3.752 0 01-.487 1.49c-.043-.13-.089-.263-.137-.4-.376-1.068-.935-2.4-1.64-3.433-1.152-1.688-2.67-2.887-3.662-3.671-.165-.13-.315-.249-.447-.356z"
        fill="currentCOlor"
      />
      <path
        d="M22.535 20.121L20.415 18l2.12-2.121-1.414-1.415L19 16.587l-2.121-2.121-1.415 1.414L17.586 18l-2.122 2.121 1.415 1.415 2.12-2.122 2.122 2.121 1.414-1.414z"
        fill="currentCOlor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ForbidFireFilled.displayName = 'ForbidFireFilled';
export default ForbidFireFilled;
