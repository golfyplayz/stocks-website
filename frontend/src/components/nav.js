import React, { useState } from 'react';
import './css/nav.css';

function NavBar(props) {
  // State to control the visibility of the dropdown menu
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  //render navbar
  if (props.width < 900) {
    return (
      <nav>
        <ul className="nav">
          <li className="links" id="home">
            <a href="./">
              <i className="fa-solid fa-house fa-lg"></i>
            </a>
          </li>
        </ul>
        <h2 className="user">Welcome User!</h2>
        <ul className="menu">
          <li className="links" id="leader">
            <a href="./">
              <i className="fa-solid fa-bars fa-lg"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul className="nav">
          <li className="links" id="home">
            <a href="./">
              <i className="fa-solid fa-house fa-lg"></i>
            </a>
          </li>
          <li className="links" id="leader">
            <a href="./">Leaderboard</a>
          </li>
          <li className="links" id="calc">
            <a href="./">Calculator</a>
          </li>
          <li className="links" id="lookup">
            <a href="./">Stocks</a>
          </li>
        </ul>
        <ul className="acct">
          <li className="links" id="acct" onMouseDown={toggleDropdown}>
            <a href="./">
              <i className="fa-solid fa-user fa-lg"></i>
            </a>
            {isDropdownVisible && (
            <ul className="dropdown">
              <li><a href="./profile">Profile</a></li>
              <li><a href="./settings">Settings</a></li>
              <li><a href="./logout">Logout</a></li>
            </ul>
          )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;