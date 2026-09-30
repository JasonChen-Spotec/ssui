/*!
 * Adapted from @ahooksjs/use-url-state 3.5.1 for React 19.
 *
 * MIT License
 * Copyright (c) 2020 ahooks
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import type { SetStateAction } from 'react';
import { useMemo, useRef } from 'react';
import * as reactRouter from 'react-router';
import useMemoizedFn from 'ahooks/lib/useMemoizedFn';
import useUpdate from 'ahooks/lib/useUpdate';
import type { ParseOptions, StringifyOptions } from 'query-string';
import { parse, stringify } from 'query-string';

interface Options {
  navigateMode?: 'push' | 'replace';
  parseOptions?: ParseOptions;
  stringifyOptions?: StringifyOptions;
}

type QueryValue = string | number | boolean | null | undefined;
type UrlState = Record<string, QueryValue | QueryValue[]>;
type UrlChange = { search: string; hash: string };

// These hooks differ between React Router 5 and 6. Read them from the namespace
// so consumers can use either version without importing a missing named export.
const router = reactRouter as unknown as {
  useLocation: () => UrlChange & { state: unknown };
  useHistory?: () => Record<'push' | 'replace', (to: UrlChange, state: unknown) => void>;
  useNavigate?: () => (
    to: UrlChange,
    options: { replace: boolean; state: unknown },
  ) => void;
};

const useUrlState = (
  initialState: UrlState | (() => UrlState) = {},
  options: Options = {},
) => {
  const { navigateMode = 'push', parseOptions, stringifyOptions } = options;
  const location = router.useLocation();
  const history = router.useHistory?.();
  const navigate = router.useNavigate?.();
  const update = useUpdate();
  const initialStateRef = useRef(
    typeof initialState === 'function' ? initialState() : initialState,
  );
  const queryFromUrl = useMemo(
    () =>
      parse(location.search, {
        parseNumbers: false,
        parseBooleans: false,
        ...parseOptions,
      }),
    [location.search],
  );
  const targetQuery = useMemo<UrlState>(
    () => ({ ...initialStateRef.current, ...queryFromUrl }),
    [queryFromUrl],
  );

  const setState = useMemoizedFn((value: SetStateAction<UrlState>) => {
    const newQuery = typeof value === 'function' ? value(targetQuery) : value;
    // A setter must still update when the serialized URL does not change.
    update();
    const nextLocation = {
      hash: location.hash,
      search:
        stringify(
          { ...queryFromUrl, ...newQuery },
          { skipNull: false, skipEmptyString: false, ...stringifyOptions },
        ) || '?',
    };
    if (history) {
      history[navigateMode](nextLocation, location.state);
    }
    if (navigate) {
      navigate(nextLocation, {
        replace: navigateMode === 'replace',
        state: location.state,
      });
    }
  });

  return [targetQuery, setState] as const;
};

export default useUrlState;
