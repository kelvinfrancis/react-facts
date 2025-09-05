import React from "react";
import reactLogo from "../assets/react.svg";

function Header() {
  return (
    <header className="header">
      <img src={reactLogo} alt="react-logo" width="40px" />
      <nav>
        <ul className="nav-list">
          <li className="nav-item">Pricing</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
