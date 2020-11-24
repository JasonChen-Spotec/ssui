// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/jianchen/work/aa-utils/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"/func":[{"title":"func","path":"/func","meta":{"order":1},"children":[{"path":"/func/formatted-number-func","title":"formattedNumberFunc","meta":{}},{"path":"/func/number-precision","title":"numberPrecision","meta":{}}]}],"*":[{"path":"/","title":"a utils","meta":{}}]}},"locales":[],"navs":{"*":[{"title":"func","path":"/func"}]},"title":"aa-utils","logo":"/reacticon.svg","mode":"site","repoUrl":"https://github.com/SPOTEC-LTD/aa-utils"},
      ...props,
    }),
    "routes": [
      {
        "path": "/func/formatted-number-func",
        "component": require('../../formattedNumberFunc/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/formattedNumberFunc/index.md",
          "updatedTime": 1606212644000,
          "title": "formattedNumberFunc",
          "nav": {
            "title": "func",
            "path": "/func"
          },
          "group": {
            "title": "func",
            "path": "/func",
            "order": 1
          },
          "slugs": []
        },
        "title": "formattedNumberFunc"
      },
      {
        "path": "/func/number-precision",
        "component": require('../../numberPrecision/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/numberPrecision/index.md",
          "updatedTime": 1606212644000,
          "title": "numberPrecision",
          "nav": {
            "title": "func",
            "path": "/func"
          },
          "group": {
            "title": "func",
            "path": "/func",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "1. API",
              "heading": "1-api"
            },
            {
              "depth": 3,
              "value": "1.1. strip",
              "heading": "11-strip"
            },
            {
              "depth": 3,
              "value": "1.2. times、plus、minus、divide",
              "heading": "12-times、plus、minus、divide"
            },
            {
              "depth": 3,
              "value": "1.3. float2Fixed",
              "heading": "13-float2fixed"
            },
            {
              "depth": 3,
              "value": "1.3. round",
              "heading": "13-round"
            }
          ]
        },
        "title": "numberPrecision"
      },
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1606212644000,
          "title": "a utils",
          "hero": {
            "title": "a utils",
            "actions": [
              {
                "text": "快速上手",
                "link": "/func/number-precision"
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
        "title": "a utils"
      },
      {
        "path": "/func",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/func/formatted-number-func"
      }
    ],
    "title": "aa-utils"
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
