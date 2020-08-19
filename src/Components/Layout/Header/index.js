import React from "react";

import Logo from "Assets/Logo";
import HeaderMenu from "./headerMenu";

import "Styles/header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container flex-center">
          <Logo />
        </div>
        <div className="header-menu-container flex-center">
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
