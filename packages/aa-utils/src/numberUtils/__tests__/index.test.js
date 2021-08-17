import numberUtils from '../index';

const { formatNumber, formatPercent } = numberUtils;

describe('numberUtils', () => {
  it('formatNumber - default options should be defined', () => {
    expect(formatNumber(2)).toEqual('2.00');
    expect(formatNumber(2232323.101)).toEqual('2232323.10');
    expect(formatNumber(2.10444)).toEqual('2.10');
    expect(formatNumber(2.10544)).toEqual('2.11');
  });

  it('formatNumber - useGrouping and usePlus is true should be defined', () => {
    expect(formatNumber(2232323.101, { useGrouping: true, usePlus: true })).toEqual(
      '+2,232,323.10',
    );

    expect(formatNumber(-232323.101, { useGrouping: true, usePlus: true })).toEqual('-232,323.10');
  });

  it('formatNumber - if minFractionDigits !== maxFractionDigits should be defined', () => {
    expect(formatNumber(23.101, { minFractionDigits: 1, maxFractionDigits: 5 })).toEqual('23.101');
    expect(formatNumber(23.234, { minFractionDigits: 4, maxFractionDigits: 5 })).toEqual('23.2340');
    expect(formatNumber(23.234597, { minFractionDigits: 4, maxFractionDigits: 5 })).toEqual(
      '23.23460',
    );
    expect(formatNumber(23.2, { minFractionDigits: 2, maxFractionDigits: 5 })).toEqual('23.20');
  });

  it('formatNumber - number is to long should be defined', () => {
    expect(
      formatNumber('77777777.77777777', { minFractionDigits: 8, maxFractionDigits: 8 }),
    ).toEqual('77777777.77777777');
  });

  it('formatNumber - roundingMode should be defined', () => {
    expect(formatNumber(2.10544, { roundingMode: 'down' })).toEqual('2.10');
    expect(formatNumber(2.10244, { roundingMode: 'up' })).toEqual('2.11');
  });

  it('formatPercent default options should be defined', () => {
    expect(formatPercent(0.12343)).toEqual('12.34%');
    expect(formatPercent(-0.1)).toEqual('-10.00%');

    expect(formatPercent(0.1, { usePlus: true })).toEqual('+10.00%');
    expect(formatPercent(-0.1, { usePlus: true })).toEqual('-10.00%');
  });

  it('formatPercent useUnit is false should be defined', () => {
    expect(formatPercent(0.12343, { useUnit: false })).toEqual('12.34');
  });
});
