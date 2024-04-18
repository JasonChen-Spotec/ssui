---
mobile: false
title: genderType
nav:
  title: ec-common
  path: /ec-common
group:
  title: consts
  path: /consts
  order: 1
---


## genderType

## code

```ts
/** 男 */
const MALE = 1 as const;
/** 女 */
const FEMALE = 2 as const;
/** 第三性别 */
const OTHER = 3 as const;
/** 空 */
const EMPTY = -1 as const;

export { MALE, FEMALE, OTHER, EMPTY };

export type SexType = 1 | 2 | 3;

export const useGenderType = () => {
  const { formatMessage } = useIntl();

  const appellativeGenderTypeMap = {
    [MALE]: formatMessage(messages.male),
    [FEMALE]: formatMessage(messages.female),
    [OTHER]: '',
    [EMPTY]: '',
  };

  const genderTypeMap = {
    [MALE]: formatMessage(messages.male),
    [FEMALE]: formatMessage(messages.female),
    [OTHER]: formatMessage(messages.other),
    [EMPTY]: '-',
  };

  const genderTypeList = [
    {
      value: MALE,
      label: formatMessage(messages.male),
    },
    {
      value: FEMALE,
      label: formatMessage(messages.female),
    },
    {
      value: OTHER,
      label: formatMessage(messages.other),
    },
  ];

  return { genderTypeMap, genderTypeList, appellativeGenderTypeMap };
};

```
