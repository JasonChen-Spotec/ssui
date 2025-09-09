"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("@testing-library/jest-dom");
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var index_1 = __importDefault(require("./index"));
describe('<Foo />', function () {
  it('render Foo with dumi', function () {
    var msg = 'dumi';
    (0, react_2.render)(react_1["default"].createElement(index_1["default"], {
      title: msg
    }));
    expect(react_2.screen.queryByText(msg)).toBeInTheDocument();
  });
});