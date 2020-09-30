// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/jianchen/work/ssui/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/_demos/base",
    "component": require('../../components/Button/demo/base.jsx').default,
    "exact": true
  },
  {
    "path": "/_demos/base-1",
    "component": require('../../icons/demo/base.jsx').default,
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"/components":[{"title":"Components","path":"/components","meta":{"order":1},"children":[{"path":"/components/button","title":"Button","meta":{}},{"path":"/components/icon","title":"Icon","meta":{}}]}],"/icons":[{"title":"icons","path":"/icons","meta":{"order":11},"children":[]}],"*":[{"path":"/","title":"React Library","meta":{}}]}},"locales":[],"navs":{"*":[{"title":"icons","path":"/icons"},{"title":"Components","path":"/components"}]},"title":"ssui","logo":"/reacticon.svg","mode":"site","repoUrl":"https://github.com/SPOTEC-LTD/ssui"},
      ...props,
    }),
    "routes": [
      {
        "path": "/components/button",
        "component": require('../../components/Button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Button/index.md",
          "updatedTime": 1601210984000,
          "title": "Button",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Components",
            "path": "/components",
            "order": 11
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useBoolean",
              "heading": "useboolean"
            },
            {
              "depth": 2,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Actions",
              "heading": "actions"
            }
          ]
        },
        "title": "Button"
      },
      {
        "path": "/components/icon",
        "component": require('../../components/Icon/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Icon/index.md",
          "updatedTime": 1601210984000,
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
        "path": "/icons/demo",
        "component": require('../../icons/demo/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/icons/demo/index.md",
          "updatedTime": 1601430927982,
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
              "value": "图标列表",
              "heading": "图标列表"
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
          "updatedTime": 1601210984000,
          "title": "React Library",
          "hero": {
            "title": "a react library",
            "actions": [
              {
                "text": "快速上手",
                "link": "/components/button"
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
          "order": 11
        },
        "exact": true,
        "redirect": "/components/button"
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
    "title": "ssui"
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
