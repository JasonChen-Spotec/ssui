import BigNumber from 'bignumber.js';

const buildCalculateFunc =
  (method: 'times' | 'plus' | 'minus' | 'dividedBy') =>
  (...value: BigNumber.Value[]) => {
    const [firstValue, ...restValues] = value;
    let resultValue = new BigNumber(firstValue);

    if (restValues.length > 0) {
      restValues.forEach((v) => {
        resultValue = resultValue[method](v);
      });
    }

    return resultValue.toString();
  };

export const plus = buildCalculateFunc('plus');
export const times = buildCalculateFunc('times');
export const minus = buildCalculateFunc('minus');
export const divide = buildCalculateFunc('dividedBy');
