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

function CirleDoc(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      id: "cirle-doc_svg__\\u56FE\\u5C42_1",
      x: 0,
      y: 0,
      viewBox: "0 0 71.9 72.2",
      xmlSpace: "preserve"
    }, props), React.createElement("style", null, ".cirle-doc_svg__st4{fill:#285a83}.cirle-doc_svg__st5{fill:#ef6f53}"), React.createElement("defs", null, React.createElement("path", {
      id: "cirle-doc_svg__SVGID_1_",
      d: "M-931.6-750.8h1920v1578h-1920z"
    })), React.createElement("clipPath", {
      id: "cirle-doc_svg__SVGID_2_"
    }, React.createElement("use", {
      xlinkHref: "#cirle-doc_svg__SVGID_1_",
      overflow: "visible"
    })), React.createElement("defs", null, React.createElement("path", {
      id: "cirle-doc_svg__SVGID_3_",
      d: "M-933.5-739.7h1920v1578h-1920z"
    })), React.createElement("clipPath", {
      id: "cirle-doc_svg__SVGID_4_"
    }, React.createElement("use", {
      xlinkHref: "#cirle-doc_svg__SVGID_3_",
      overflow: "visible"
    })), React.createElement("g", null, React.createElement("path", {
      className: "cirle-doc_svg__st4",
      d: "M26.7 46.8h-1.1c-1.9 0-3.5-1.6-3.5-3.5v-.1c0-1.9 1.6-3.5 3.5-3.5h1.1c1.9 0 3.5 1.6 3.5 3.5v.1c0 2-1.6 3.5-3.5 3.5zm-1.1-5.1c-.8 0-1.5.7-1.5 1.5v.1c0 .8.7 1.5 1.5 1.5h1.1c.8 0 1.5-.7 1.5-1.5v-.1c0-.8-.7-1.5-1.5-1.5h-1.1z"
    }), React.createElement("path", {
      className: "cirle-doc_svg__st4",
      d: "M50.2 51.3H21.7c-1.9 0-3.5-1.6-3.5-3.5V24.1c0-1.9 1.6-3.5 3.5-3.5h28.5c1.9 0 3.5 1.6 3.5 3.5v23.7c-.1 2-1.6 3.5-3.5 3.5zM21.7 22.7c-.8 0-1.5.7-1.5 1.5v23.7c0 .8.7 1.5 1.5 1.5h28.5c.8 0 1.5-.7 1.5-1.5V24.1c0-.8-.7-1.5-1.5-1.5H21.7z"
    }), React.createElement("path", {
      className: "cirle-doc_svg__st5",
      d: "M48.7 29.1H23.2c-.6 0-1-.4-1-1s.4-1 1-1h25.5c.6 0 1 .4 1 1s-.5 1-1 1zM48.7 33.9H23.2c-.6 0-1-.4-1-1s.4-1 1-1h25.5c.6 0 1 .4 1 1s-.5 1-1 1z"
    })), React.createElement("g", null, React.createElement("path", {
      className: "cirle-doc_svg__st4",
      d: "M35.9 72C16 72-.1 55.9-.1 36S16 0 35.9 0s36 16.1 36 36-16.1 36-36 36zm0-70c-18.7 0-34 15.3-34 34s15.3 34 34 34 34-15.3 34-34-15.2-34-34-34z"
    })));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

CirleDoc.displayName = "CirleDoc";
exports["default"] = CirleDoc;