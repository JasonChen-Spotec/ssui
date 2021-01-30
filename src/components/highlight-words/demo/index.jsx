import React from 'react';
import HighlightWords from 'assui/src/components/highlight-words';

const index = () => {
  return (
    <div>
      <HighlightWords
        highlightClassName="YourHighlightClass"
        searchWords={['and', 'or', 'the']}
        autoEscape
        textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
      />
    </div>
  );
};

export default index;
