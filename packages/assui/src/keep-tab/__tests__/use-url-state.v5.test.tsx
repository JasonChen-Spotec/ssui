import { act, renderHook } from '@testing-library/react';
import useUrlState from '../use-url-state';

const mockPush = jest.fn();
const mockReplace = jest.fn();
let mockLocation = { search: '?active=first&filter=open', hash: '#section', state: { page: 2 } };

jest.mock('react-router', () => ({
  useLocation: () => mockLocation,
  useHistory: () => ({ push: mockPush, replace: mockReplace }),
}));

describe('React Router 5 URL-state adapter', () => {
  beforeEach(() => {
    mockLocation = { search: '?active=first&filter=open', hash: '#section', state: { page: 2 } };
  });

  it('passes v5 history state separately and uses the latest query with a stable setter', () => {
    const { result, rerender } = renderHook(() => useUrlState({ active: 'default' }));
    const setQuery = result.current[1];
    act(() => setQuery({ active: 'second' }));
    expect(mockPush).toHaveBeenLastCalledWith({
      search: 'active=second&filter=open', hash: '#section',
    }, { page: 2 });

    mockLocation = { ...mockLocation, search: '?active=second&filter=closed' };
    rerender();
    expect(result.current[1]).toBe(setQuery);
    expect(result.current[0].active).toBe('second');
    act(() => setQuery((current) => ({ active: `${current.active}-next` })));
    expect(mockPush).toHaveBeenLastCalledWith({
      search: 'active=second-next&filter=closed', hash: '#section',
    }, { page: 2 });
  });

  it('uses replace and preserves an empty query when deleting the last parameter', () => {
    mockLocation = { ...mockLocation, search: '?active=first' };
    const { result } = renderHook(() => useUrlState({}, { navigateMode: 'replace' }));
    act(() => result.current[1]({ active: undefined }));
    expect(mockReplace).toHaveBeenCalledWith({ search: '?', hash: '#section' }, { page: 2 });
    expect(mockPush).not.toHaveBeenCalled();
  });
});
