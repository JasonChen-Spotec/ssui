import type { BadgeProps } from 'antd/lib/badge';
import type { TabPaneProps, TabsProps } from 'antd/lib/tabs';
import type { Tab } from 'rc-tabs/lib/interface';
import * as React from 'react';
interface NewTab extends Tab {
  count?: React.ReactNode;
}
export interface KeepTabProps extends Omit<TabsProps, 'items'> {
  /** 初始化选中面板的 key，如果没有设置 activeKey */
  defaultActiveKey?: string;
  /** 保存激活 tab 面板的的key名 */
  saveActiveKeyName?: string;
  /** 当前激活 tab 面板的 key */
  activeKey?: string;
  /** 切换面板的回调 */
  onChange?: (activeKey: string) => void;
  /** antd Badge组件除count意外的所有props */
  badgeProps?: Omit<BadgeProps, 'count'>;
  items: NewTab[];
}
export interface SelfTabPaneProps extends TabPaneProps {
  count: Pick<BadgeProps, 'count'>;
}
declare const KeepTab: {
  (props: KeepTabProps): JSX.Element;
  displayName: string;
  TabPane: React.FC<TabPaneProps>;
};
export default KeepTab;
