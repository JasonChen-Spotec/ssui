---
mobile: false
title: CountDown
nav:
  title: assui
  path: /assui
group:
  title: 展示
  path: /components/show
  order: 2
---

# CopyToClipboard 复制到粘贴板

## 1. 代码演示

### 1.1. 基础使用
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Base.tsx" />


## API
| 参数       | 说明                 | 类型         | 默认值 |
| ---------- | -------------------- | ------------ | ------ |
| options   | 倒计时入参     | `object`     | -      |
| render  | 自定义暂时             | `(FormattedRes, countdown)=>React.ReactNode`      | -      |

### options

| 参数       | 说明                 | 类型         | 默认值 |
| ---------- | -------------------- | ------------ | ------ |
| leftTime   | 剩余时间（毫秒）     | `number`     | -      |
| targetDate | 目标时间             | `TDate`      | -      |
| interval   | 变化时间间隔（毫秒） | `number`     | `1000` |
| onEnd      | 倒计时结束触发       | `() => void` | -      |

```typescript
interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

```
### render

| 参数         | 说明                 | 类型           |
| ------------ | -------------------- | -------------- |
| formattedRes | 格式化后的倒计时     | `FormattedRes` |
| countdown    | 倒计时时间戳（毫秒） | `number`       |

## 备注

`leftTime`、`targetDate`、`interval`、`onEnd` 支持动态变化
