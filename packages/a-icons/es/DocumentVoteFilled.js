function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function DocumentVoteFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M14.432 1c.252 0 .498 0 .707.017.228.018.498.063.77.2a2 2 0 01.873.875c.138.271.183.54.201.77l.01.146c.394.013.733.046 1.042.129a4 4 0 012.83 2.828C21 6.476 21 7.067 21 7.862v9.38c0 .804 0 1.469-.044 2.01-.046.562-.144 1.08-.392 1.564a4.002 4.002 0 01-1.748 1.748c-.485.248-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.011-.044-.562-.046-1.078-.145-1.563-.392a4.002 4.002 0 01-1.748-1.748c-.248-.485-.347-1.002-.393-1.564C3 18.711 3 18.046 3 17.242v-9.38c0-.795 0-1.386.137-1.897a4 4 0 012.828-2.828c.31-.083.648-.116 1.043-.13.002-.05.005-.099.009-.146.018-.228.063-.498.2-.77a2 2 0 01.875-.873c.271-.139.542-.183.77-.201C9.07 1 9.316 1 9.568 1h4.864zM12 13.086l-2.5-2.5L8.086 12l2.5 2.5-2.5 2.5L9.5 18.414l2.5-2.5 2.5 2.5L15.914 17l-2.5-2.5 2.5-2.5-1.414-1.414-2.5 2.5zM9.6 3c-.296 0-.459.001-.576.01l-.012.002-.001.012C9 3.141 9 3.304 9 3.6v.8c0 .297.001.459.01.576l.002.012.012.001c.117.01.28.011.577.011h4.8c.296 0 .458-.001.575-.01l.012-.002.002-.012c.01-.117.01-.28.01-.576v-.8c0-.297 0-.459-.01-.576l-.002-.012-.012-.001A8.102 8.102 0 0014.4 3H9.6z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
DocumentVoteFilled.displayName = "DocumentVoteFilled";
export default DocumentVoteFilled;