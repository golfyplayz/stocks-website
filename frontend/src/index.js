import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
  if (width < 800) {
    return (
      <div id='main'>
        <nav>
          <ul className="nav">
            <li className="links" id="home"><a href="./"><i className="fa-solid fa-house fa-lg"></i></a></li>
          </ul>
          <h2 className='user'>Welcome User!</h2>
          <ul className="menu">
            <li className="links" id="leader"><a href="./"><i class="fa-solid fa-bars fa-lg"></i></a></li>
          </ul>
        </nav>
        <div className="body">
          <div className="info"></div>
          <div className="leader"></div>
          <div className="stocks"></div>
        </div>
      </div>
  );} else {
    return (
    <div id='main'>
      <nav>
      <ul className="nav">
        <li className="links" id="home"><a href="./"><i className="fa-solid fa-house fa-lg"></i></a></li>
        <li className="links" id="leader"><a href="./">Leaderboard</a></li>
        <li className="links" id="calc"><a href="./">Calculator</a></li>
        <li className="links" id="lookup"><a href="./">Stocks</a></li>
      </ul>
      <ul className="acct">
        <li className="links" id="acct"><a href="./"><i className="fa-solid fa-user fa-lg"></i></a></li>
      </ul>
    </nav>
    <div className="body">
      <div className="stocks"></div>
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