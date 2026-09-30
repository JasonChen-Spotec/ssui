function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
import { useMemo, useRef } from 'react';
import * as reactRouter from 'react-router';
import useMemoizedFn from "ahooks/es/useMemoizedFn";
import useUpdate from "ahooks/es/useUpdate";
import { parse, stringify } from 'query-string';
// These hooks differ between React Router 5 and 6. Read them from the namespace
// so consumers can use either version without importing a missing named export.
var router = reactRouter;
var useUrlState = function useUrlState(initialState, options) {
  if (initialState === void 0) {
    initialState = {};
  }
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$navigateMode = _options.navigateMode,
    navigateMode = _options$navigateMode === void 0 ? 'push' : _options$navigateMode,
    parseOptions = _options.parseOptions,
    stringifyOptions = _options.stringifyOptions;
  var location = router.useLocation();
  var history = router.useHistory == null ? void 0 : router.useHistory();
  var navigate = router.useNavigate == null ? void 0 : router.useNavigate();
  var update = useUpdate();
  var initialStateRef = useRef(typeof initialState === 'function' ? initialState() : initialState);
  var queryFromUrl = useMemo(function () {
    return parse(location.search, _extends({
      parseNumbers: false,
      parseBooleans: false
    }, parseOptions));
  }, [location.search]);
  var targetQuery = useMemo(function () {
    return _extends({}, initialStateRef.current, queryFromUrl);
  }, [queryFromUrl]);
  var setState = useMemoizedFn(function (value) {
    var newQuery = typeof value === 'function' ? value(targetQuery) : value;
    // A setter must still update when the serialized URL does not change.
    update();
    var nextLocation = {
      hash: location.hash,
      search: stringify(_extends({}, queryFromUrl, newQuery), _extends({
        skipNull: false,
        skipEmptyString: false
      }, stringifyOptions)) || '?'
    };
    if (history) {
      history[navigateMode](nextLocation, location.state);
    }
    if (navigate) {
      navigate(nextLocation, {
        replace: navigateMode === 'replace',
        state: location.state
      });
    }
  });
  return [targetQuery, setState];
};
export default useUrlState;