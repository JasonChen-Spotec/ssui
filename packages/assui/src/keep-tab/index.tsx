import * as React from 'react';
import find from 'lodash/find';
import qsHelp from 'aa-utils/lib/qsHelp';
import type { BadgeProps } from 'antd/lib/badge';
import Badge from 'antd/lib/badge';
import type { TabPaneProps, TabsProps } from 'antd/lib/tabs';
import Tabs from 'antd/lib/tabs';
import useUrlState from '@ahooksjs/use-url-state';
import useControllableValue from 'ahooks/lib/useControllableValue';
import toArray from 'rc-util/lib/Children/toArray';

const { TabPane } = Tabs;

export interface KeepTabProps extends TabsProps {
  /** 由TabPane组成的children */
  children: React.ReactNode;
  /** 初始化选中面板的 key，如果没有设置 activeKey */
  defaultActiveKey?: string;
  /** 保存激活 tab 面板的的key名 */
  saveActiveKeyName: string;
  /** 当前激活 tab 面板的 key */
  activeKey?: string;
  /** 切换面板的回调 */
  onChange?: (activeKey: string) => void;
  /** antd Badge组件除count意外的所有props */
  badgeProps?: Omit<BadgeProps, 'count'>;
}

type DefaultUrlParamsType = Record<string, string | undefined>;

export interface SelfTabPaneProps extends TabPaneProps {
  count: Pick<BadgeProps, 'count'>;
}

const defaultBadgeProps = {};

const KeepTab = (props: KeepTabProps) => {
  const {
    children,
    defaultActiveKey,
    saveActiveKeyName,
    onChange,
    badgeProps = defaultBadgeProps,
    ...restProps
  } = props;
  const defaultUrlParams = qsHelp.getQueryObject() as DefaultUrlParamsType;
  const [urlParams, setUrlParams] = useUrlState({
    [saveActiveKeyName]: defaultUrlParams[saveActiveKeyName] || defaultActiveKey,
  });

  const [tabActiveKey, setTabActiveKey] = useControllableValue(props, {
    valuePropName: 'activeKey',
    defaultValue: defaultUrlParams[saveActiveKeyName] || defaultActiveKey,
  });

  const arrayChildren = toArray(children);

  React.useEffect(() => {
    if (!('activeKey' in props)) {
      const resultActiveTab = find(arrayChildren, { key: urlParams[saveActiveKeyName] });
      if (!resultActiveTab || resultActiveTab.props.disabled) {
        setUrlParams({ [saveActiveKeyName]: arrayChildren[0].key });
        setTabActiveKey(arrayChildren[0].key as string);
      }
    }
  }, [tabActiveKey]);

  const handleTabChange = (nextActiveKey: string) => {
    setUrlParams({ [saveActiveKeyName]: nextActiveKey });
    setTabActiveKey(nextActiveKey);
  };

  const resultChildren = arrayChildren.map((childItem: React.ReactElement<SelfTabPaneProps>) => {
    const count = childItem?.props?.count as React.ReactNode;
    if (count) {
      return React.cloneElement(childItem, {
        tab: (
          <Badge className="tab-badge" count={count} offset={[16, -9]} {...badgeProps}>
            <span>{childItem.props.tab}</span>
          </Badge>
        ),
      });
    }
    return childItem;
  });

  return (
    <Tabs
      animated={false}
      onChange={handleTabChange}
      destroyInactiveTabPane
      activeKey={tabActiveKey}
      {...restProps}
    >
      {resultChildren}
    </Tabs>
  );
};

KeepTab.defaultProps = {
  saveActiveKeyName: 'active',
};

KeepTab.displayName = 'KeepTab';
KeepTab.TabPane = TabPane;

export default KeepTab;
