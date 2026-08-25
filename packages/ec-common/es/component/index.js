import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useIntl } from 'react-intl';
import messages from '../intl/messages';
export default (function (_ref) {
  var title = _ref.title;
  var _useIntl = useIntl(),
    formatMessage = _useIntl.formatMessage;
  return _jsxs("h1", {
    children: [title, _jsx("div", {
      children: formatMessage(messages.female)
    })]
  });
});