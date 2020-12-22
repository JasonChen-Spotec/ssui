import React, { useEffect, useState } from 'react'
import ResizeObserver from 'aa-utils/src/ResizeObserver';

export default () => {
  const [ elementContentRect, setElementContentRect ] = useState({});
  useEffect(()=>{
    const ro = new ResizeObserver((entries, observer) => {
      for (const entry of entries) {
          const {left, top, width, height} = entry.contentRect;
          setElementContentRect(entry.contentRect);
          console.log('Element:', entry.target);
          console.log(`Element's size: ${ width }px x ${ height }px`);
          console.log(`Element's paddings: ${ top }px ; ${ left }px`);
      }
  });

  ro.observe(document.body);

  return () => {
    ro.disconnect();
  };

  }, [])
  return (
    <div>
      {`Element's size: ${ elementContentRect.width }px - ${ elementContentRect.height }px`}
    </div>
  )
}
