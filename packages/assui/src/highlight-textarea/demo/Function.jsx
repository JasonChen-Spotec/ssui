import React, { useState } from 'react';
import { HighlightTextarea } from 'assui';
import './index.css';

const Demo = () => {
  const [value, setValue] = useState('Sun Mon Tue Wed Thu Fri Sat :) <-- remove the smiley...');

  function getSmileyDayString(input) {
    const dayStrings = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    if (input.indexOf(':)') !== -1) {
      const dayIndex = new Date().getDay();
      return dayStrings[dayIndex];
    }
    // no smiley, no highlighting
    return '';
  }

  return (
    <div style={{ maxWidth: 800, border: 20 }}>
      <HighlightTextarea
        value={value}
        onChange={(v) => setValue(v)}
        highlight={getSmileyDayString}
      />
    </div>
  );
};
export default Demo;
