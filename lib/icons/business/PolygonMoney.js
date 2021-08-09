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
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
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

var Icon_1 = __importDefault(require("assui/lib/Icon"));

function PolygonMoney(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      id: "polygon-money_svg__\\u56FE\\u5C42_1",
      x: 0,
      y: 0,
      viewBox: "0 0 71.9 72.2",
      xmlSpace: "preserve"
    }, props), React.createElement("style", null, ".polygon-money_svg__st4{fill:#285a83}.polygon-money_svg__st5{fill:#ef6f53}"), React.createElement("defs", null, React.createElement("path", {
      id: "polygon-money_svg__SVGID_1_",
      d: "M-931.6-750.8h1920v1578h-1920z"
    })), React.createElement("clipPath", {
      id: "polygon-money_svg__SVGID_2_"
    }, React.createElement("use", {
      xlinkHref: "#polygon-money_svg__SVGID_1_",
      overflow: "visible"
    })), React.createElement("defs", null, React.createElement("path", {
      id: "polygon-money_svg__SVGID_3_",
      d: "M-933.5-739.7h1920v1578h-1920z"
    })), React.createElement("clipPath", {
      id: "polygon-money_svg__SVGID_4_"
    }, React.createElement("use", {
      xlinkHref: "#polygon-money_svg__SVGID_3_",
      overflow: "visible"
    })), React.createElement("path", {
      className: "polygon-money_svg__st4",
      d: "M35.9 72C16 72-.1 55.9-.1 36S16 0 35.9 0s36 16.1 36 36-16.1 36-36 36zm0-70c-18.7 0-34 15.3-34 34s15.3 34 34 34 34-15.3 34-34-15.2-34-34-34z"
    }), React.createElement("path", {
      className: "polygon-money_svg__st4",
      d: "M34.8 55.6L22.9 47c-1.3-.9-2-2.4-2-4V23.2c0-1.9 1.5-3.4 3.4-3.4h23.4c1.9 0 3.4 1.5 3.4 3.4V43c0 1.6-.8 3-2 4l-11.9 8.6c-.8.5-1.7.5-2.4 0zM24.2 21.9c-.8 0-1.4.6-1.4 1.4V43c0 .9.4 1.8 1.2 2.3l10.7 7.8c.7.5 1.6.5 2.3 0l10.7-7.8c.7-.5 1.2-1.4 1.2-2.3V23.2c0-.8-.6-1.4-1.4-1.4H24.2z"
    }), React.createElement("path", {
      className: "polygon-money_svg__st4",
      d: "M21.9 26.1h28.2v2H21.9z"
    }), React.createElement("path", {
      className: "polygon-money_svg__st5",
      d: "M37.4 45.1h-5.5c-.6 0-1-.4-1-1s.4-1 1-1h5.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-3c-1.9 0-3.5-1.6-3.5-3.5v-.2c0-1.9 1.6-3.5 3.5-3.5h5.5c.6 0 1 .4 1 1s-.4 1-1 1h-5.5c-.8 0-1.5.7-1.5 1.5v.2c0 .8.7 1.5 1.5 1.5h3c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5z"
    }), React.createElement("g", null, React.createElement("path", {
      className: "polygon-money_svg__st5",
      d: "M36 34.6c-.6 0-1-.4-1-1v-2.2c0-.6.4-1 1-1s1 .4 1 1v2.2c0 .5-.5 1-1 1z"
    })), React.createElement("g", null, React.createElement("path", {
      className: "polygon-money_svg__st5",
      d: "M36 47.7c-.6 0-1-.4-1-1v-2.6c0-.6.4-1 1-1s1 .4 1 1v2.6c0 .5-.5 1-1 1z"
    })));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

PolygonMoney.displayName = "PolygonMoney";
exports["default"] = PolygonMoney;