import type { ComponentConfig } from '../types';
export declare function getComponentConfig<C extends React.ComponentType<any>>(
  component: C,
  props: React.ComponentProps<C> & {
    name?: string;
    parseValue?: (v: any) => any;
  },
): ComponentConfig;
