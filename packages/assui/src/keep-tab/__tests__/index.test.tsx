import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation, useNavigate, useNavigationType } from 'react-router';
import KeepTab from '../index';
import useUrlState from '../use-url-state';

const initialEntry = {
  pathname: '/reports',
  search: '?active=first&tag=one&tag=two&empty=&flag&encoded=a%2Bb',
  hash: '#section',
  state: { from: 'dashboard' },
};

function LocationProbe() {
  const location = useLocation();
  const navigationType = useNavigationType();
  return <output data-testid="location">{JSON.stringify({ ...location, navigationType })}</output>;
}

const readLocation = () => JSON.parse(screen.getByTestId('location').textContent!);

function HookDemo({ replace = false }: { replace?: boolean }) {
  const [query, setQuery] = useUrlState({ active: 'default', fallback: 'retained' }, {
    navigateMode: replace ? 'replace' : 'push',
  });
  const navigate = useNavigate();
  return (
    <>
      <output data-testid="query">{JSON.stringify(query)}</output>
      <button onClick={() => setQuery((current) => ({ active: `${current.active}-next` }))}>Next</button>
      <button onClick={() => navigate(-1)}>Back</button>
      <LocationProbe />
    </>
  );
}

describe('KeepTab URL state with React 19 and React Router 6', () => {
  it('keeps query values, path, hash and navigation state when pushing, and follows back navigation', () => {
    render(<MemoryRouter initialEntries={[initialEntry]}><HookDemo /></MemoryRouter>);
    expect(JSON.parse(screen.getByTestId('query').textContent!)).toEqual({
      active: 'first', fallback: 'retained', tag: ['one', 'two'], empty: '', flag: null, encoded: 'a+b',
    });

    fireEvent.click(screen.getByText('Next'));
    expect(readLocation()).toMatchObject({
      pathname: '/reports',
      search: '?active=first-next&empty=&encoded=a%2Bb&flag&tag=one&tag=two',
      hash: '#section',
      state: { from: 'dashboard' },
      navigationType: 'PUSH',
    });
    fireEvent.click(screen.getByText('Back'));
    expect(JSON.parse(screen.getByTestId('query').textContent!).active).toBe('first');
    expect(readLocation().search).toBe(initialEntry.search);
  });

  it('replaces the current history entry when requested', () => {
    render(
      <MemoryRouter initialEntries={['/previous', initialEntry]} initialIndex={1}>
        <HookDemo replace />
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByText('Next'));
    expect(readLocation().navigationType).toBe('REPLACE');
    fireEvent.click(screen.getByText('Back'));
    expect(readLocation().pathname).toBe('/previous');
  });

  it('persists a tab selection while retaining unrelated URL parameters', () => {
    window.history.replaceState(null, '', '/reports?active=first&filter=open');
    const onChange = jest.fn();
    render(
      <React.StrictMode>
        <MemoryRouter initialEntries={['/reports?active=first&filter=open#section']}>
          <KeepTab onChange={onChange} items={[
            { key: 'first', label: 'First', children: 'First panel' },
            { key: 'second', label: 'Second', children: 'Second panel' },
          ]} />
          <LocationProbe />
        </MemoryRouter>
      </React.StrictMode>,
    );
    fireEvent.click(screen.getByRole('tab', { name: 'Second' }));
    expect(readLocation()).toMatchObject({
      pathname: '/reports', search: '?active=second&filter=open', hash: '#section',
    });
    expect(screen.getByRole('tab', { name: 'Second' }).getAttribute('aria-selected')).toBe('true');
    expect(onChange).toHaveBeenCalledWith('second');
    window.history.replaceState(null, '', '/');
  });
});
