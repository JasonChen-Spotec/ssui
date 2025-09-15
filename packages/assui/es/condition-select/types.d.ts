import type { SelectProps } from 'antd';
export type ValueType = Record<string, any>;
export type ComponentConfig<C extends React.ComponentType<any> = React.ComponentType<any>> = {
    component?: C;
    componentProps?: React.ComponentProps<C> & {
        parseValue?: (value: any) => any;
        onChange: (value: any) => any;
    };
};
export type DynamicComponentType = {
    label: string | React.ReactNode;
    value: any;
} & ComponentConfig;
export type ConditionSelectProps = {
    value?: ValueType;
    onChange?: (value: ValueType) => void;
    option: DynamicComponentType[];
    selectName: string;
    selectProps: SelectProps;
};
