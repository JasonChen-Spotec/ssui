---
mobile: false
title: NumberFormat
nav:
  title: assui
  path: /assui
group:
  title: 数据录入
  path: /components/input
---

# 格式化数字
### 1.1. 基本使用(NumberFormat)
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />

### 1.2. format(NumberFormat) format格式化
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/format.jsx" />

### 1.3. mask(NumberFormat) mask 占位
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/mask.jsx" />

### 1.4. maskArray(NumberFormat) maskArray 占位
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/maskArray.jsx" />

### 1.5. thousandSeparator(NumberFormat) thousandSeparator千位符  prefix 前缀
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/thousandSeparator.jsx" />

### 1.6 chineseWan(NumberFormat) thousandsGroupStyle千位分组方式   wan 中国式（万）
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/chineseWan.jsx" />

### 1.7 isAllowed(NumberFormat) isAllowed   检查输入值是否有效的检查函数
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/isAllowed.jsx" />

### 1.8 getInputRef(NumberFormat) getInputRef 
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/getInputRef.jsx" />



## API
|          参数               |           说明              |                            类型                                | 默认值      |
| -----------------------    | --------------------------- | --------------------------------------------------------------| ---------- |
| thousandSeparator          | 在数字上添加千位分隔符          |  混合：单个字符串或布尔值 true（true 默认为 ,）                     | -          |
| decimalSeparator           | 支持数字上的小数点              |  string 单个字符串                                             | .     |
| thousandsGroupStyle        | 定义千位分组方式，支持三种类型。千式（千）123,456,789：，印度式（十万）：，中国式（万）12,34,56,789 | ['thousand', 'lakh', 'wan'] | thousand     |
| decimalScale               | 如果已定义，则限制为给定的小数刻度 |  number                                                       | -         |
| fixedDecimalScale          |  没输入时,是否在定义的decimalScale添加0  |  boolean                                              | false     |
| allowNegative              |  允许负数                      |  boolean                                                      | true      |
| allowEmptyFormatting       | 将格式应用于空输入               |    boolean                                                    | false     |
| prefix                     | 数字前缀                       |    String                                                     | -         |
| suffix                     | 数字后缀                       |    String                                                     | -          |
| value                      | 数值格式。它可以是浮点数或格式化字符串。如果 value 是数字的字符串表示形式（未格式化），则 isNumericString 为 true      |    Number or String          | -          |
| defaultValue               | 默认内容                        |  Number or String                                             |-        |
| isNumericString            | If value is passed as string representation of numbers (unformatted) then this should be passed as true |    boolean                                                    | false        |
| displayType                | 渲染的是input框还是string       |    String: text / input                                        | input        |
| type                       | input框的类型                  |    One of ['text', 'tel', 'password']                          | text       |
| format                     | 根据hash格式化或者传入的function格式化内容 |String : 基于Hash的格式化 (#### #### #### ####)Or Function         | -         |
| removeFormatting           | 自定义格式方法                  |    (formattedValue) => numericString                           | -          |
| mask                       |If mask defined, component will show non entered placed with masked value. | String             | ' '       |
| customInput                | This allow supporting custom inputs with number format. |    Component Reference                                        | input    |
| onValueChange              | 输入框内容变化时的回调           |    (values, sourceInfo) => {}                                  | -          |
| isAllowed                  | 检查输入值是否有效的检查函数。如果此函数返回false，则不会触发 onChange 方法 |  (values) =>boolean        | -          |
| renderText                 | A renderText method useful if you want to render formattedValue in different element other than span. It also returns the custom props that are added to the component which can allow passing down props to the rendered element.                       |    (formattedValue, customProps) => React Element              | -          |
| getInputRef                | Method to get reference of input, span (based on displayType prop) or the customInput's reference  |    (elm) => void                                               | -          |
| allowedDecimalSeparators   | Characters which when pressed result in a decimal separator. When missing, decimal separator and '.' are used.                       |    array of char                                                      | -          |
| customNumerals             | an array of 10 single-character strings with represent numerals in different locales. ranging from 0 - 9. the result will be converted to english numeral and treated as number|  array of string                                                     | -          |
