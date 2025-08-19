"use strict";

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
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = __importStar(require("react"));
var icon_1 = __importDefault(require("a-base-icon/lib/icon"));
function PeopleCardFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "fill",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M15.416 6.346a3.969 3.969 0 11-7.894-.83 3.969 3.969 0 017.894.83zM2.967 14.42c-.913 1.276.145 2.834 1.705 2.998l10.33 1.085c1.56.164 2.918-1.14 2.29-2.578a8.272 8.272 0 00-6.724-4.928 8.272 8.272 0 00-7.601 3.422z",
      fill: "currentColor"
    }), React.createElement("path", {
      d: "M9.374 17.832c-.355-1.774-.533-2.66-.092-3.322.44-.662 1.328-.84 3.102-1.195l5.402-1.082c1.774-.356 2.661-.534 3.323-.093.661.44.84 1.328 1.194 3.102l.343 1.708c.355 1.774.533 2.661.092 3.323-.44.662-1.327.84-3.101 1.195l-5.403 1.082c-1.774.356-2.661.534-3.323.093-.661-.441-.839-1.328-1.194-3.102l-.343-1.709z",
      fill: "inherit"
    }), React.createElement("path", {
      d: "M11.453 15.423l8.004-1.604.123.615-8.003 1.604-.124-.615zM11.946 17.885l8.004-1.604.123.616-8.004 1.604-.123-.616zM12.44 20.348l3.694-.74.123.616-3.694.74-.123-.616z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
PeopleCardFilled.displayName = 'PeopleCardFilled';
exports["default"] = PeopleCardFilled;