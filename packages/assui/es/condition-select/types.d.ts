import type { SelectProps } from 'antd';
export type ValueType = Record<string, any>;
export type ComponentConfig<
  C extends React.ComponentType<any> = React.ComponentType<any>,
> = {
  component?: C;
  componentProps?: React.ComponentProps<C> & {
    parseValue?: (value: any) => any;
    onChange: (value: any) => any;
  };
};
export type DynamicComponentType = {
  label: string | React.ReactNode;
  value: any;
  name: string;
} & ComponentConfig;
export type ConditionSelectProps = {
  option: DynamicComponentType[];
  value?: ValueType;
  onChange?: (value: ValueType) => void;
  /** antd Form.Item 传递下来的name */
  id?: string;
  selectProps: SelectProps;
};
