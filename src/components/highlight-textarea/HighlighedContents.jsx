import React from 'react';
import classNames from 'classnames';
import getRanges from './getRanges';
import extractSpansOfClasses from './extractSpansOfClasses';
import './styles/index.css';

const HighlighedContents = ({ value, highlight }) => {

  const ranges = getRanges(value, highlight);
  const parts = extractSpansOfClasses(value, ranges);

  return (
    <div>
      <div className={classNames('highlights', 'content')}>
        {parts.map(part => part.render())}
      </div>
    </div>
  );
};

export default HighlighedContents;
