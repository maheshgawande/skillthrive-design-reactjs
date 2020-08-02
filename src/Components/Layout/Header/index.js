import React from "react";

import Logo from "Assets/logo";
import HeaderMenu from "./headerMenu";

import "Styles/header.css";

function Header() {
  return (
    <div className="header-container">
      <header>
        <div className="logo-container flex-center">
          <Logo />
        </div>
        <div className="header-menu-container flex-center">
          <HeaderMenu />
        </div>
      </header>
    </div>
  );
}

export default Header;
