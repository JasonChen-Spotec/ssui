var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
import * as React from 'react';
import Icon from 'a-base-icon/lib/icon';
function PersonGroupFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("rect", {
      width: 24,
      height: 24,
      rx: 4,
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.378 7.127c.31 0 .588.067.831.202.244.135.454.3.63.497s.31.41.404.638c.093.228.14.43.14.606v8.782c0 .3-.06.57-.179.808-.12.239-.274.44-.466.607a2.207 2.207 0 01-.645.388c-.239.093-.477.14-.715.14H6.715c-.197 0-.412-.057-.645-.171a2.727 2.727 0 01-.653-.45 2.556 2.556 0 01-.505-.646 1.51 1.51 0 01-.203-.738V9.132c0-.218.052-.443.156-.676.104-.233.238-.448.404-.645.166-.197.358-.36.575-.49.218-.13.446-.194.684-.194h7.85zm1.834-2.922c.445 0 .855.132 1.228.396s.697.59.971.98c.275.388.49.807.645 1.258.156.451.234.863.234 1.236v8.254c0 .217-.065.417-.195.598s-.287.337-.474.466a2.58 2.58 0 01-.606.311c-.218.078-.42.117-.606.117h-.062v-9.28c-.083-.715-.306-1.264-.669-1.647-.363-.384-.844-.632-1.445-.746-.601-.114-7.586 0-7.586 0a.267.267 0 00.016-.11c0-.206.062-.419.186-.637a2.29 2.29 0 01.49-.59c.202-.176.427-.321.676-.435.249-.114.498-.171.746-.171h6.45zM10.7 9.585a1.847 1.847 0 00-1.845 1.846c0 1 .78 1.808 1.798 1.843a.312.312 0 01.086 0h.027a1.84 1.84 0 001.778-1.842A1.847 1.847 0 0010.7 9.585zm-2.214 4.86c1.227-.742 3.214-.742 4.432 0 .55.336.852.79.856 1.281 0 .495-.305.95-.856 1.29-.611.374-1.415.562-2.218.562-.804 0-1.607-.188-2.218-.563-.55-.335-.856-.79-.856-1.28 0-.492.305-.95.86-1.29z",
      fill: "inherit"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
PersonGroupFilled.displayName = 'PersonGroupFilled';
export default PersonGroupFilled;