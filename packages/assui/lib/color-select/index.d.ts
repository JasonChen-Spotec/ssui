import React from 'react';
import type { TriggerProps } from '@rc-component/trigger';
import type { SketchPickerProps } from 'react-color';
export type ColorSelectProps = {
    value?: {
        hex?: string;
        rgb?: string;
    };
    onChange?: (value: NonNullable<ColorSelectProps['value']>) => void;
    /** 自定义总容器 class */
    classNameWrap?: string;
    /** 自定义其余描述展示 */
    renderExtra?: (value: ColorSelectProps['value']) => React.ReactElement;
    /** 自定义value class */
    className?: string;
    /** 组件react-color的props */
    reactColorProps?: Omit<SketchPickerProps, 'onChange'>;
    /** 组件 @rc-component/trigger 的弹层配置 */
    RcTriggerProps?: Omit<TriggerProps, 'popup' | 'children'>;
    /** 自定义value的展示 */
    renderValueNode?: (value: ColorSelectProps['value']) => React.ReactElement;
};
declare const ColorSelect: React.FC<ColorSelectProps>;
export default ColorSelect;
