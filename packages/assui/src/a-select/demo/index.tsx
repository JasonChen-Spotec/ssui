import { ASelect } from 'assui';
import { BusinessCardOutlined } from 'a-icons';
import { Space } from 'antd';
import React from 'react';
import './index.less';

const { Option } = ASelect;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};


interface MultiLineEllipsisTextProps {
  text: string
  lines?: number
  className?: string
  onEllipsisChange?: (isEllipsis: boolean) => void
}

const MultiLineEllipsisText: React.FC<MultiLineEllipsisTextProps> = ({
  text,
  lines = 3,
  className = '',
  onEllipsisChange,
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isEllipsis, setIsEllipsis] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    // 等待浏览器渲染完再计算高度
    requestAnimationFrame(() => {
      const style = window.getComputedStyle(el)
      const lineHeight = parseFloat(style.lineHeight)
      const maxHeight = lineHeight * lines

      const overflow = el.scrollHeight > maxHeight + 1 // +1 容差
      setIsEllipsis(overflow)
      onEllipsisChange?.(overflow)
    })
  }, [text, lines, onEllipsisChange])

  return (
    <div
      ref={ref}
      className={`ellipsis ${className}`}
      style={{
        WebkitLineClamp: lines,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
      }}
      title={isEllipsis ? text : undefined} // 鼠标悬浮显示完整内容
    >
      {text}
    </div>
  )
}


function TApp() {
  const [text, setText] = React.useState(
    '这是一个很长很长的文本，用来测试多行文本是否能够正常显示省略号。' +
    'React 组件会自动检测溢出状态。'
  )

  const [isEllipsis, setIsEllipsis] = React.useState(false)

  return (
    <div style={{ padding: 20 }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
        style={{ width: 300, display: 'block', marginBottom: 12 }}
      />
      <MultiLineEllipsisText
        text={text}
        lines={3}
        onEllipsisChange={setIsEllipsis}
      />
      <div style={{ marginTop: 8, color: '#666' }}>
        {isEllipsis ? '👉 已出现省略号' : '✅ 文本完整显示'}
      </div>
    </div>
  )
}



const App: React.FC = () => {
  const valueRender = (value) => {
    return (
      <div className="a-select-value-wrap">
        <BusinessCardOutlined />
        <span>{value}</span>
      </div>
    );
  };

  const options = [
    { label: 'Jack', value: 'jack' },
    { label: 'Lucy', value: 'lucy' },
    { label: 'Yiminghe', value: 'yiminghe' },
  ];

  return (
    <div>
      <ASelect
        valueRender={valueRender}
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
        options={options}
      />

      <TApp />
    </div>

  );
};

export default App;
