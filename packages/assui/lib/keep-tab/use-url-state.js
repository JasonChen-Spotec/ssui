"use strict";

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
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var react_1 = require("react");
var reactRouter = tslib_1.__importStar(require("react-router"));
var useMemoizedFn_1 = tslib_1.__importDefault(require("ahooks/lib/useMemoizedFn"));
var useUpdate_1 = tslib_1.__importDefault(require("ahooks/lib/useUpdate"));
var query_string_1 = require("query-string");
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
  var update = (0, useUpdate_1["default"])();
  var initialStateRef = (0, react_1.useRef)(typeof initialState === 'function' ? initialState() : initialState);
  var queryFromUrl = (0, react_1.useMemo)(function () {
    return (0, query_string_1.parse)(location.search, _extends({
      parseNumbers: false,
      parseBooleans: false
    }, parseOptions));
  }, [location.search]);
  var targetQuery = (0, react_1.useMemo)(function () {
    return _extends({}, initialStateRef.current, queryFromUrl);
  }, [queryFromUrl]);
  var setState = (0, useMemoizedFn_1["default"])(function (value) {
    var newQuery = typeof value === 'function' ? value(targetQuery) : value;
    // A setter must still update when the serialized URL does not change.
    update();
    var nextLocation = {
      hash: location.hash,
      search: (0, query_string_1.stringify)(_extends({}, queryFromUrl, newQuery), _extends({
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
exports["default"] = useUrlState;