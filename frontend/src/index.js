import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
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
  if (width < 600) {
    return <h1>Too Small</h1>;
  } else {
    return (
    <div id='main'>
      <nav>
      <ul className="nav">
        <li className="links" id="home"><a href=""><i className="fa-solid fa-house fa-lg"></i></a></li>
        <li className="links" id="leader"><a href="">Leaderboard</a></li>
        <li className="links" id="calc"><a href="">Calculator</a></li>
        <li className="links" id="lookup"><a href="">Look Up</a></li>
      </ul>
      <ul className="acct">
        <li className="links" id="acct"><a href=""><i className="fa-solid fa-user fa-lg"></i></a></li>
      </ul>
    </nav>
    <div className="body">
      <div className="other"></div>
      <div className="info"></div>
      <div className="leader"></div>
    </div>
  </div>
  )}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);