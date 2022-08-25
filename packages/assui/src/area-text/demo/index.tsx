import React from 'react';
import { AreaText } from 'assui';

const Index = () => {
  const text =
    'Submission time：{{applyTime}}\nReview time：{{time}}\nApply for leverage：{{lever}}\nReason for rejection：{{remark}}';
  return (
    <div>
      <AreaText value={text} />
    </div>
  );
};

export default Index;
