import React from 'react';
import { useIntl } from 'react-intl';
import messages from '../intl/messages';
export default (function (_a) {
  var title = _a.title;
  var formatMessage = useIntl().formatMessage;
  return /*#__PURE__*/React.createElement("h1", null, title, /*#__PURE__*/React.createElement("div", null, formatMessage(messages.female)));
});