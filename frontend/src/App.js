import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (<h1 id='width'>{width}</h1>);
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));