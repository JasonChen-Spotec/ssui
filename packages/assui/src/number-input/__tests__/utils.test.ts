import { filterInt, filterFloat } from '../utils';

describe('number utils should work fine', () => {
  it('filterInt should be defined ', () => {
    expect(filterInt({ value: '23df 323.23,', preValue: '0' })).toEqual('2332323');

    expect(filterInt({ value: '-da2', preValue: '0' })).toEqual('2');
    expect(filterInt({ value: '-da2', enableMinus: true })).toEqual('-2');

    expect(filterInt({ value: 'da2-', enableMinus: true })).toEqual('');
    expect(filterInt({ value: 'da2-', enableMinus: true, preValue: '43' })).toEqual('43');
  });

  it('filterFloat should be defined ', () => {
    expect(filterFloat({ value: '23df 323.23333,' })).toEqual('23323.23');
    expect(filterFloat({ value: '23df 323.233993,', precision: 4 })).toEqual('23323.2339');
    expect(filterFloat({ value: '23df 323.23.333,' })).toEqual('');
    expect(filterFloat({ value: '23df 323.23.33399,', preValue: '2.3' })).toEqual('2.3');

    expect(filterFloat({ value: 'da2-', enableMinus: true })).toEqual('');
  });
});
