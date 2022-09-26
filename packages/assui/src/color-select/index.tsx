import type { ColorResult, SketchPickerProps } from 'react-color';
import { SketchPicker } from 'react-color';
import React, { useContext } from 'react';
import type { TriggerProps } from 'rc-trigger';
import RcTrigger from 'rc-trigger';
import classNames from 'classnames';
import useControllableValue from 'ahooks/lib/useControllableValue';
import ChevronRightOutlined from 'a-icons/lib/ChevronRightOutlined';
import LocaleContext from '../config-provider/context';
import formatMessage from '../messages';

export type ColorSelectProps = {
  value?: {
    hex?: string;
    rgb?: string;
  };
  /** 自定义总容器 class */
  classNameWrap?: string;
  /** 自定义其余描述展示 */
  renderExtra?: (value: ColorSelectProps['value']) => React.ReactElement;
  /** 自定义value class */
  className?: string;
  /** 组件react-color的props */
  reactColorProps?: Omit<SketchPickerProps, 'onChange'>;
  /** 组件rc-trigger */
  RcTriggerProps?: Omit<TriggerProps, 'popup'>;
  /** 自定义value的展示 */
  renderValueNode?: (value: ColorSelectProps['value']) => React.ReactElement;
};

const ColorSelect: React.FC<ColorSelectProps> = (props) => {
  const {
    className,
    classNameWrap,
    reactColorProps,
    RcTriggerProps,
    renderValueNode,
    renderExtra,
  } = props;
  const [value, onChangeValue] = useControllableValue(props);
  const messages = useContext(LocaleContext);

  const onChange = (nextValue: ColorResult) => {
    onChangeValue({
      hex: nextValue.hex,
      rgb: `${nextValue.rgb.r},${nextValue.rgb.g},${nextValue.rgb.b}`,
    });
  };

  const defaultValueNode = (
    <div className={classNames('color-select', className)} tabIndex={0}>
      {value ? (
        <div
          className="color-select-value"
          style={
            value
              ? {
                  backgroundColor: value.hex,
                }
              : undefined
          }
        />
      ) : (
        <span className="color-select-placeholder">
          {formatMessage(messages, 'global', 'placeholder')}
        </span>
      )}
      <div className="color-select-arrow">
        <ChevronRightOutlined rotate={90} />
      </div>
    </div>
  );

  return (
    <div className={classNames('color-select-wrap', classNameWrap)}>
      <RcTrigger
        popupAlign={{
          points: ['tl', 'bl'],
          offset: [0, 3],
        }}
        action={['click']}
        {...RcTriggerProps}
        popup={
          <SketchPicker
            width="320px"
            color={value ? value.hex : undefined}
            onChange={onChange}
            {...reactColorProps}
          />
        }
      >
        {renderValueNode ? renderValueNode(value) : defaultValueNode}
      </RcTrigger>
      {renderExtra && renderExtra(value)}
    </div>
  );
};

export default ColorSelect;
