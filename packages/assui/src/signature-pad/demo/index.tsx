import { useCallback, useRef, useState } from 'react';
import type { SignaturePadRef } from 'assui';
import { SignaturePad } from 'assui';

const SigDemo = () => {
  const signaturePadRef = useRef<SignaturePadRef>(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [canUndo, setCanUndo] = useState(false);
  const [eventLog, setEventLog] = useState<string[]>([]);

  // 添加日志
  const addLog = useCallback((message: string) => {
    setEventLog((prev) => [
      ...prev.slice(-9),
      `${new Date().toLocaleTimeString()}: ${message}`,
    ]);
  }, []);

  // 签名开始回调
  const handleSignatureBegin = useCallback(() => {
    console.log('✅ 签名开始事件被调用');
    addLog('签名开始');
    setIsEmpty(false);
    setCanUndo(true);
  }, [addLog]);

  // 签名结束回调
  const handleSignatureEnd = useCallback(() => {
    console.log('✅ 签名结束事件被调用');
    addLog('签名结束');
    if (signaturePadRef.current) {
      const empty = signaturePadRef.current.isEmpty();
      console.log('签名结束时的isEmpty:', empty);
      setIsEmpty(empty);
      setCanUndo(!empty);
    }
  }, [addLog]);

  const handleClear = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clearSignature();
      addLog('清除签名');
      setIsEmpty(true);
      setCanUndo(false);
    }
  };

  const handleUndo = () => {
    console.log('撤销按钮点击, canUndo:', canUndo);
    addLog('点击撤销按钮');

    if (signaturePadRef.current && canUndo) {
      console.log('执行撤销操作');
      const success = signaturePadRef.current.undo();
      console.log('撤销结果:', success);
      addLog(`撤销操作: ${success ? '成功' : '失败'}`);

      if (success) {
        setTimeout(() => {
          if (signaturePadRef.current) {
            const empty = signaturePadRef.current.isEmpty();
            setIsEmpty(empty);
            setCanUndo(!empty);
          }
        }, 200);
      }
    }
  };

  const handleSave = () => {
    if (signaturePadRef.current) {
      const signatureData = signaturePadRef.current.saveSignature();
      if (signatureData) {
        // signaturePad.toDataURL(); // save image as PNG
        // signaturePad.toDataURL("image/jpeg"); // save image as JPEG
        // signaturePad.toDataURL("image/jpeg", 0.5); // save image as JPEG with 0.5 image quality
        // signaturePad.toDataURL("image/svg+xml"); // save image as SVG data url
        console.log('签名数据保存成功',signatureData.toDataURL());
        addLog('保存签名成功');
      } else {
        console.log('签名为空');
        addLog('保存失败：签名为空');
      }
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>手写签名演示 - 事件测试</h1>
      {/* 签名组件 */}
      <SignaturePad
        ref={signaturePadRef}
        defaultText="请在此处签名11"
        width={600}
        height={400}
        penColor="#1890ff"
        backgroundColor="#fafafa"
        backgroundTextColor="#d9d9d9"
        backgroundTextSize="50px"
        onBegin={handleSignatureBegin}
        onEnd={handleSignatureEnd}
      />
      {/* 状态显示 */}
      <div
        style={{
          margin: '16px 0',
          padding: '12px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
        }}
      >
        <h4>状态信息：</h4>
        <p>
          isEmpty: <strong>{isEmpty ? 'true ✅' : 'false ❌'}</strong>
        </p>
        <p>
          canUndo: <strong>{canUndo ? 'true ✅' : 'false ❌'}</strong>
        </p>
      </div>
      {/* 事件日志 */}
      <div
        style={{
          margin: '16px 0',
          padding: '12px',
          backgroundColor: '#e6f7ff',
          border: '1px solid #91d5ff',
          borderRadius: '4px',
        }}
      >
        <h4>事件日志：</h4>
        {eventLog.map((log, index) => (
          <div
            key={index}
            style={{ fontFamily: 'monospace', fontSize: '12px', margin: '2px 0' }}
          >
            {log}
          </div>
        ))}
        {eventLog.length === 0 && <p>暂无事件记录</p>}
      </div>
      {/* 操作按钮 */}
      <div
        className="signature-actions"
        style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
      >
        <button
          onClick={handleClear}
          style={{
            padding: '8px 16px',
            backgroundColor: isEmpty ? '#1890ff' : '#ff4d4f',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {isEmpty ? '开始签名' : '清除签名'}
        </button>

        <button
          onClick={handleSave}
          style={{
            padding: '8px 16px',
            backgroundColor: '#52c41a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          保存签名
        </button>

        <button
          onClick={handleUndo}
          disabled={!canUndo}
          style={{
            padding: '8px 16px',
            backgroundColor: canUndo ? '#faad14' : '#d9d9d9',
            color: canUndo ? 'white' : '#999',
            border: 'none',
            borderRadius: '4px',
            cursor: canUndo ? 'pointer' : 'not-allowed',
          }}
        >
          撤销
        </button>
      </div>
      <div
        style={{
          marginTop: '20px',
          padding: '12px',
          backgroundColor: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '4px',
        }}
      >
        <h4>测试说明：</h4>
        <p>1. 在画布上签名，观察"事件日志"是否显示"签名开始"和"签名结束"</p>
        <p>2. 检查状态信息中的 isEmpty 是否正确变化</p>
        <p>3. 测试撤销按钮是否可用</p>
      </div>
    </div>
  );
};

export default SigDemo;
