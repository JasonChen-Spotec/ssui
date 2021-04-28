// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/jianchen/work/assui/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/_demos/string",
    "component": require('../../components/highlight-textarea/demo/string.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/reg-exp",
    "component": require('../../components/highlight-textarea/demo/RegExp.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/range",
    "component": require('../../components/highlight-textarea/demo/Range.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/things",
    "component": require('../../components/highlight-textarea/demo/Things.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/function",
    "component": require('../../components/highlight-textarea/demo/Function.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/setting-class-name",
    "component": require('../../components/highlight-textarea/demo/settingClassName.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index",
    "component": require('../../components/highlight-words/demo/index.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-1",
    "component": require('../../components/number-input/demo/index.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-2",
    "component": require('../../components/qrcode/demo/index.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-3",
    "component": require('../../components/react-copy-to-clipboard/demo/index.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-4",
    "component": require('../../components/react-echart/demo/index.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-5",
    "component": require('../../components/react-image-crop/demo/index.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1",
    "component": require('../../components/react-split-panel/demo/Demo1.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2",
    "component": require('../../components/react-split-panel/demo/Demo2.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-6",
    "component": require('../../components/regex-input/demo/index.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-1",
    "component": require('../../components/rich-text-editor/demo/Demo1.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-1",
    "component": require('../../components/rich-text-editor/demo/Demo2.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-7",
    "component": require('../../components/sortable-hoc/demo/index.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/drag-handle",
    "component": require('../../components/sortable-hoc/demo/drag-handle.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-8",
    "component": require('../../components/transition-group/demo/index.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-9",
    "component": require('../../components/transition-group/demo/switch-transition/index.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/base",
    "component": require('../../svgs/demo/base.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/business-icon-section",
    "component": require('../../svgs/demo/BusinessIconSection.jsx').default,
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"/components":[{"title":"Components","path":"/components","meta":{"order":1},"children":[{"path":"/components/highlight-textarea","title":"highlight-textarea","meta":{"order":1}},{"path":"/components/rich-text-editor","title":"rich-text-editor","meta":{"order":1}},{"path":"/components/highlight-words","title":"highlight-words","meta":{}},{"path":"/components/icon","title":"Icon","meta":{}},{"path":"/components/number-input","title":"number-input","meta":{}},{"path":"/components/qrcode","title":"qrcode","meta":{}},{"path":"/components/react-copy-to-clipboard","title":"react-copy-to-clipboard","meta":{}},{"path":"/components/react-echart","title":"react-echart","meta":{}},{"path":"/components/react-image-crop","title":"react-image-crop","meta":{}},{"path":"/components/react-split-panel","title":"react-split-pane","meta":{}},{"path":"/components/regex-input","title":"regex-input","meta":{}},{"path":"/components/sortable-hoc","title":"sortable-hoc","meta":{}},{"path":"/components/text-loop","title":"text-loop","meta":{}}]},{"title":"animation","path":"/components/animation","meta":{"order":1},"children":[{"path":"/components/animation/transition-group","title":"react-transition-group","meta":{}}]}],"/icons":[{"title":"icons","path":"/icons","meta":{"order":11},"children":[]}],"*":[{"path":"/","title":"React Library","meta":{}}]}},"locales":[],"navs":{"*":[{"title":"icons","path":"/icons"},{"title":"Components","path":"/components"}]},"title":"assui","logo":"/reacticon.svg","mode":"site","repoUrl":"https://github.com/SPOTEC-LTD/assui"},
      ...props,
    }),
    "routes": [
      {
        "path": "/components/icon",
        "component": require('../../components/Icon/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Icon/index.md",
          "updatedTime": 1602587267000,
          "title": "Icon",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "1. 使用",
              "heading": "1-使用"
            },
            {
              "depth": 2,
              "value": "2. 基本应用",
              "heading": "2-基本应用"
            },
            {
              "depth": 2,
              "value": "3. 双色图标",
              "heading": "3-双色图标"
            },
            {
              "depth": 2,
              "value": "4. API",
              "heading": "4-api"
            }
          ]
        },
        "title": "Icon"
      },
      {
        "path": "/components/highlight-textarea",
        "component": require('../../components/highlight-textarea/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/highlight-textarea/index.md",
          "updatedTime": 1611989733000,
          "title": "highlight-textarea",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components"
          },
          "order": 1,
          "slugs": [
            {
              "depth": 3,
              "value": "String",
              "heading": "string"
            },
            {
              "depth": 3,
              "value": "RegExp",
              "heading": "regexp"
            },
            {
              "depth": 3,
              "value": "Array of Two Numbers (Range)",
              "heading": "array-of-two-numbers-range"
            },
            {
              "depth": 3,
              "value": "Array of Other Things",
              "heading": "array-of-other-things"
            },
            {
              "depth": 3,
              "value": "Function",
              "heading": "function"
            },
            {
              "depth": 3,
              "value": "Custom Object (with Class Name)",
              "heading": "custom-object-with-class-name"
            }
          ]
        },
        "title": "highlight-textarea"
      },
      {
        "path": "/components/highlight-words",
        "component": require('../../components/highlight-words/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/highlight-words/index.md",
          "updatedTime": 1611989733000,
          "title": "highlight-words",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "api",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "Props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "Custom highlight tag",
              "heading": "custom-highlight-tag"
            }
          ]
        },
        "title": "highlight-words"
      },
      {
        "path": "/components/number-input",
        "component": require('../../components/number-input/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/number-input/index.md",
          "updatedTime": 1607996189000,
          "title": "number-input",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "number-input"
      },
      {
        "path": "/components/qrcode",
        "component": require('../../components/qrcode/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/qrcode/index.md",
          "updatedTime": 1606380651000,
          "title": "qrcode",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "1. API",
              "heading": "1-api"
            },
            {
              "depth": 2,
              "value": "qrcode",
              "heading": "qrcode"
            },
            {
              "depth": 2,
              "value": "canvasToImage",
              "heading": "canvastoimage"
            }
          ]
        },
        "title": "qrcode"
      },
      {
        "path": "/components/react-copy-to-clipboard",
        "component": require('../../components/react-copy-to-clipboard/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/react-copy-to-clipboard/index.md",
          "updatedTime": 1607609936000,
          "title": "react-copy-to-clipboard",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components",
            "order": 1
          },
          "slugs": []
        },
        "title": "react-copy-to-clipboard"
      },
      {
        "path": "/components/react-echart",
        "component": require('../../components/react-echart/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/react-echart/index.md",
          "updatedTime": 1608531532000,
          "title": "react-echart",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "1. 使用默认全量导入的echarts",
              "heading": "1-使用默认全量导入的echarts"
            },
            {
              "depth": 2,
              "value": "公共API(core)",
              "heading": "公共apicore"
            },
            {
              "depth": 2,
              "value": "1. 默认全量导入echarts",
              "heading": "1-默认全量导入echarts"
            },
            {
              "depth": 2,
              "value": "2. 导入需要的echarts modules，减小打包大小",
              "heading": "2-导入需要的echarts-modules，减小打包大小"
            }
          ]
        },
        "title": "react-echart"
      },
      {
        "path": "/components/react-image-crop",
        "component": require('../../components/react-image-crop/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/react-image-crop/index.md",
          "updatedTime": 1608626380000,
          "title": "react-image-crop",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "react-image-crop"
      },
      {
        "path": "/components/react-split-panel",
        "component": require('../../components/react-split-panel/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/react-split-panel/index.md",
          "updatedTime": 1608629667000,
          "title": "react-split-pane",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 3,
              "value": "Multiple Horizontal",
              "heading": "multiple-horizontal"
            },
            {
              "depth": 3,
              "value": "Multiple Vertical",
              "heading": "multiple-vertical"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "react-split-pane"
      },
      {
        "path": "/components/regex-input",
        "component": require('../../components/regex-input/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/regex-input/index.md",
          "updatedTime": 1608086738000,
          "title": "regex-input",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "regex-input"
      },
      {
        "path": "/components/rich-text-editor",
        "component": require('../../components/rich-text-editor/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/rich-text-editor/index.md",
          "updatedTime": 1608616486000,
          "title": "rich-text-editor",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components"
          },
          "order": 1,
          "slugs": [
            {
              "depth": 3,
              "value": "非受控的富文本编辑器",
              "heading": "非受控的富文本编辑器"
            },
            {
              "depth": 3,
              "value": "受控的富文本编辑器",
              "heading": "受控的富文本编辑器"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "上传图片的API(config.uploadOptions)",
              "heading": "上传图片的apiconfiguploadoptions"
            },
            {
              "depth": 3,
              "value": "默认配置(defaultConfig)",
              "heading": "默认配置defaultconfig"
            }
          ]
        },
        "title": "rich-text-editor"
      },
      {
        "path": "/components/sortable-hoc",
        "component": require('../../components/sortable-hoc/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/sortable-hoc/index.md",
          "updatedTime": 1608533342000,
          "title": "sortable-hoc",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 3,
              "value": "api",
              "heading": "api"
            }
          ]
        },
        "title": "sortable-hoc"
      },
      {
        "path": "/components/text-loop",
        "component": require('../../components/text-loop/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/text-loop/index.md",
          "updatedTime": 1607580975000,
          "title": "text-loop",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "基本",
              "heading": "基本"
            },
            {
              "depth": 2,
              "value": "Fast",
              "heading": "fast"
            },
            {
              "depth": 2,
              "value": "Smooth",
              "heading": "smooth"
            },
            {
              "depth": 2,
              "value": "Variable",
              "heading": "variable"
            },
            {
              "depth": 2,
              "value": "Masked",
              "heading": "masked"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Props",
              "heading": "props"
            }
          ]
        },
        "title": "text-loop"
      },
      {
        "path": "/components/animation/transition-group",
        "component": require('../../components/transition-group/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/transition-group/index.md",
          "updatedTime": 1607580975000,
          "title": "react-transition-group",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "animation",
            "path": "/components/animation",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "react-transition-group"
      },
      {
        "path": "/icons/demo",
        "component": require('../../svgs/demo/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/svgs/demo/index.md",
          "updatedTime": 1615269947000,
          "title": "icons",
          "nav": {
            "title": "icons",
            "path": "/icons"
          },
          "group": {
            "title": "icons",
            "path": "/icons",
            "order": 11
          },
          "slugs": [
            {
              "depth": 2,
              "value": "1. 使用",
              "heading": "1-使用"
            },
            {
              "depth": 2,
              "value": "2. 图标列表",
              "heading": "2-图标列表"
            },
            {
              "depth": 2,
              "value": "3. 业务图标列表",
              "heading": "3-业务图标列表"
            }
          ]
        },
        "title": "icons"
      },
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1606383487000,
          "title": "React Library",
          "hero": {
            "title": "a react library",
            "actions": [
              {
                "text": "快速上手",
                "link": "/components/icon"
              }
            ]
          },
          "slugs": [
            {
              "depth": 2,
              "value": "轻松上手",
              "heading": "轻松上手"
            }
          ]
        },
        "title": "React Library"
      },
      {
        "path": "/components",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/components/highlight-textarea"
      },
      {
        "path": "/components/animation",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/components/animation/transition-group"
      },
      {
        "path": "/icons",
        "meta": {
          "order": 11
        },
        "exact": true,
        "redirect": "/icons/demo"
      }
    ],
    "title": "assui"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
