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
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"/components":[{"title":"Components","path":"/components","meta":{"order":11},"children":[{"path":"/components/button","title":"Button","meta":{}},{"path":"/components/icon","title":"Icon","meta":{}}]}],"*":[{"path":"/","title":"React Library","meta":{}}]}},"locales":[],"navs":{"*":[{"title":"Components","path":"/components"}]},"title":"ssui","logo":"/reacticon.svg","mode":"site","repoUrl":"https://github.com/SPOTEC-LTD/ssui"},
      ...props,
    }),
    "routes": [
      {
        "path": "/components/button",
        "component": require('../../components/Button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Button/index.md",
          "updatedTime": 1601209826312,
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
          "updatedTime": 1601208767799,
          "title": "Icon",
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
        "title": "Icon"
      },
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1601201972000,
          "title": "React Library",
          "hero": {
            "title": "a react library",
            "actions": [
              {
                "text": "快速上手",
                "link": "/zh-CN/docs/getting-started"
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
