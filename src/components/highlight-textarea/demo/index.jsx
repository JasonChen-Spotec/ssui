import React, { useState, useRef } from 'react';
import HighlightTextarea from 'assui/src/components/highlight-textarea';
import './index.css';

const data = [[
  'String',
  'Note that this is case-insensitive.',
  'Potato potato tomato potato.',
  '\'potato\'',
  'potato'
],[
  'RegExp',
  <span>Don't forget the <code>g</code> (find all) and <code>i</code> (case-insensitive) flags if you need them.</span>,
  'Dog, cat, chicken, goose. Dogs, cats, chickens, geese.',
  '/dogs?|cats?|g(oo|ee)se/gi',
  /dogs?|cats?|g(oo|ee)se/gi
],[
  'Array of Two Numbers (Range)',
  'An array of exactly two numbers is treated as a range. Highlighting starts at the first character index (inclusive) and ends at the second character index (exclusive).',
  'abcdefgh',
  '[2, 6]',
  [2, 6]
], [
  'Array of Other Things',
  'You can highlight multiple things, using any types mentioned here, with an array.',
  'apple watermelon banana orange mango',
  `[
    'orange',
    /ba(na)*/gi,
    [0, 5]
  ]`,
  [ 'orange', /ba(na)*/gi, [0, 5] ]
], [
  'Function',
  <span>You can use a function for custom logic. It can return any of the types mentioned here. Return anything falsey (<code>false</code>, <code>undefined</code>, etc.) to indicate no highlighting. The current textarea input is provided to it for convenience.</span>,
  'Sun Mon Tue Wed Thu Fri Sat :) <-- remove the smiley...',
  `function getSmileyDayString(input) {
    const dayStrings = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    if (input.indexOf(':)') !== -1) {
        let dayIndex = (new Date()).getDay();
        return dayStrings[dayIndex];
    } else {
        // no smiley, no highlighting
        return false;
    }
  }`,
  function getSmileyDayString(input) {
    const dayStrings = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    if (input.indexOf(':)') !== -1) {
      const dayIndex = (new Date()).getDay();
      return dayStrings[dayIndex];
    }
    // no smiley, no highlighting
    return false;

  }
], [
  'Custom Object (with Class Name)',
  <span>Any type mentioned here can be put in an object wrapper with <code>highlight</code> and <code>className</code> properties. This lets you set CSS classes in the highlight markup for custom styling, such as changing the highlight color.</span>,
  'Here\'s a blueberry. There\'s a strawberry. Surprise, it\'s a banananana! <h1>hello</h1>',
  `[
    {
      highlight: 'strawberry',
      className: 'red'
    },
    {
      highlight: 'blueberry',
      className: 'blue'
    },
    {
      highlight: /ba(na)*/gi,
      className: 'yellow'
    }
  ]`,
  [
    {
      highlight: 'strawberry',
      className: 'red'
    },
    {
      highlight: 'blueberry',
      className: 'blue'
    },
    {
      highlight: /ba(na)*/gi,
      className: 'yellow'
    }
  ]
]];


const crToBR = text => {
  const split = text.split('\n');
  const arr = [];

  for (const index in split) {
    arr.push(<span key={index}>{split[index]}</span>);
    arr.push(<br key={`b${ index}`} />);
  }
  arr.pop();
  return arr;
};

const Example = ({ title, text, initialValue, highlightText, highlight }) => {
  const [value, setValue] = useState(initialValue);


  const re = useRef();

  const onFocus = () => {
    const selObj = window.getSelection();
    console.log('selObj', selObj);
    console.log('re232', re);
  };

  console.log('re', re);

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <HighlightTextarea
          ref={re}
          value={value}
          highlight={highlight}
          onFocus={onFocus}
          onChange= {v => setValue(v)}
          rows="4"
          containerStyle={{ width: '100%' }}
          style={{ width: '100%' }}
        />
        <pre>
          function Demo() {'{'}<br />
          {'  '}const highlight = {crToBR(highlightText)};<br /><br />
          {'  '}{'return <HighlightTextarea highlight={highlight} />;'}<br />
          {'}'}
        </pre>
      </div>
    </div>
  );
};

const Demo = () => {
  const re = useRef();
  const onFocus = () => {
    console.log('re232', re);
  };


  return (
    <div style={{ maxWidth: 800, border: 20, margin: 'auto' }}>
      <HighlightTextarea
        highlight="potato"
        rows="4"
        onFocus={onFocus}
        ref={re}
        containerStyle={{ width: '100%' }}
        style={{ width: '100%' }}
      />

      {
        data.map(d =>
          <Example
            key={d[0]}
            title={d[0]}
            text={d[1]}
            initialValue={d[2]}
            highlightText={d[3]}
            highlight={d[4]}
          />
        )
      }
    </div>
  );
};
export default Demo;
