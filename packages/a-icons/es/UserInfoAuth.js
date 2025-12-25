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
function UserInfoAuth(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M11.541 4.33a.593.593 0 01.368 0l6.142 2.024c.228.075.381.28.382.512l.013 6.263c-.164 3.713-6.224 5.987-6.486 6.084a.584.584 0 01-.4.001c-.259-.094-6.335-2.34-6.515-6.03L5.03 6.897c0-.232.152-.439.38-.515L11.54 4.33zm-.85 8.416l-1.789-1.693-.758.719 2.504 2.37 5.21-4.382-.713-.76-4.454 3.746z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.271 18.558c-.286-1.432-.43-2.148-.075-2.681.355-.533 1.07-.677 2.5-.963l4.743-.95c1.43-.287 2.144-.43 2.677-.075.533.355.677 1.071.964 2.503.287 1.432.43 2.148.075 2.681-.355.534-1.07.677-2.5.963l-4.743.95c-1.43.287-2.144.43-2.677.075-.533-.355-.676-1.071-.963-2.503z",
      fill: "#DC4946"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.236 16.332l.504-.108.646 3.024-.504.108-.646-3.024z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.435 16.352l.433.28-1.681 2.596-.433-.28 1.681-2.596z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.653 16.733l-.28.433 2.596 1.681.28-.433-2.596-1.681zM17.36 15.301l.504-.108.646 3.025-.504.107-.646-3.024z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.56 15.321l.432.28-1.681 2.596-.433-.28 1.682-2.596z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.777 15.702l-.28.433 2.596 1.681.28-.432-2.596-1.682z",
      fill: "#fff"
    }));
  };
  return /*#__PURE__*/React.createElement(Icon, __assign({}, componentProps, {
    component: IconNode
  }));
}
UserInfoAuth.displayName = 'UserInfoAuth';
export default UserInfoAuth;