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

function CirleComplete(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      id: "cirle-complete_svg__\\u56FE\\u5C42_1",
      x: 0,
      y: 0,
      viewBox: "0 0 71.9 72.2",
      xmlSpace: "preserve"
    }, props), React.createElement("style", null, ".cirle-complete_svg__st4{fill:#285a83}"), React.createElement("defs", null, React.createElement("path", {
      id: "cirle-complete_svg__SVGID_1_",
      d: "M-931.6-750.8h1920v1578h-1920z"
    })), React.createElement("clipPath", {
      id: "cirle-complete_svg__SVGID_2_"
    }, React.createElement("use", {
      xlinkHref: "#cirle-complete_svg__SVGID_1_",
      overflow: "visible"
    })), React.createElement("defs", null, React.createElement("path", {
      id: "cirle-complete_svg__SVGID_3_",
      d: "M-933.5-739.7h1920v1578h-1920z"
    })), React.createElement("clipPath", {
      id: "cirle-complete_svg__SVGID_4_"
    }, React.createElement("use", {
      xlinkHref: "#cirle-complete_svg__SVGID_3_",
      overflow: "visible"
    })), React.createElement("g", null, React.createElement("path", {
      className: "cirle-complete_svg__st4",
      d: "M35.9 72C16 72-.1 55.9-.1 36S16 0 35.9 0s36 16.1 36 36-16.1 36-36 36zm0-70c-18.7 0-34 15.3-34 34s15.3 34 34 34 34-15.3 34-34-15.2-34-34-34z"
    })), React.createElement("g", null, React.createElement("path", {
      className: "cirle-complete_svg__st4",
      d: "M50 52.9H22c-1.9 0-3.5-1.6-3.5-3.5V26.1c0-1.9 1.6-3.5 3.5-3.5h28c1.9 0 3.5 1.6 3.5 3.5v23.3c-.1 1.9-1.6 3.5-3.5 3.5zM21.9 24.6c-.8 0-1.5.7-1.5 1.5v23.3c0 .8.7 1.5 1.5 1.5h28c.8 0 1.5-.7 1.5-1.5V26.1c0-.8-.7-1.5-1.5-1.5h-28z"
    }), React.createElement("path", {
      className: "cirle-complete_svg__st4",
      d: "M30 28.2c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1s1 .4 1 1v7c0 .5-.5 1-1 1zM42.9 28.2c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1s1 .4 1 1v7c0 .5-.4 1-1 1zM52.4 33.6H19.5c-.6 0-1-.4-1-1s.4-1 1-1h32.9c.6 0 1 .4 1 1s-.4 1-1 1z"
    }), React.createElement("path", {
      d: "M28.5 47.7c-.2 0-.5-.1-.7-.3l-4.3-3.9c-.4-.4-.4-1-.1-1.4.4-.4 1-.4 1.4-.1l3.5 3.1 5.7-8c.3-.5.9-.6 1.4-.2s.6.9.2 1.4l-6.4 9c-.2.2-.4.4-.7.4.1 0 .1 0 0 0z",
      fill: "#ef6f53"
    }), React.createElement("path", {
      className: "cirle-complete_svg__st4",
      d: "M47.7 38.8h-6.9c-.6 0-1-.4-1-1s.4-1 1-1h6.9c.6 0 1 .4 1 1s-.4 1-1 1zM47.7 43.3h-6.9c-.6 0-1-.4-1-1s.4-1 1-1h6.9c.6 0 1 .4 1 1s-.4 1-1 1zM47.7 47.9h-6.9c-.6 0-1-.4-1-1s.4-1 1-1h6.9c.6 0 1 .4 1 1s-.4 1-1 1z"
    })));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

CirleComplete.displayName = "CirleComplete";
exports["default"] = CirleComplete;