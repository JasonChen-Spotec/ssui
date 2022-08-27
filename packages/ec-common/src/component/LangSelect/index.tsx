import find from 'lodash/find';
import React from 'react';
import ChevronRightOutlined from 'a-icons/lib/ChevronRightOutlined';
import classNames from 'classnames';
import ASelect from 'assui/lib/a-select';
import type { LanguagesType, Languages } from '../../consts/langType';
import { languagesFlagMap, I18NList } from '../../consts/langType';

require('./index.less');

const { Option } = ASelect;

type LangSelectPropsType = {
  defaultValue: LanguagesType;
  onChange: (v: Languages) => void;
  className?: string;
};

const LangSelect = (props: LangSelectPropsType) => {
  const { defaultValue, onChange, className } = props;

  const valueRender = (value: LanguagesType) => {
    const lang = find(I18NList, ['code', value]);
    return (
      <div className="lang-select-value-wrap">
        {languagesFlagMap[value]}
        <span>{lang?.name}</span>
      </div>
    );
  };

  return (
    <ASelect
      className={classNames('lang-select', className)}
      valueRender={valueRender}
      defaultValue={defaultValue}
      bordered={false}
      size="small"
      getPopupContainer={(triggerNode: any) => triggerNode}
      onChange={onChange}
      suffixIcon={<ChevronRightOutlined className="chevron" />}
    >
      {I18NList.map(({ name, code }) => (
        <Option value={code} key={code}>
          {name}
        </Option>
      ))}
    </ASelect>
  );
};

export default LangSelect;
