import React, { useState } from "react";
import { Nav } from "react-bootstrap";

import { BiSearchAlt } from "react-icons/bi";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavigationBar.css";

export function NavigationBar() {
    const [menuStatus, setMenuStatus] = useState(false)

    const handleMenu = (e) => {
        e.stopPropagation();
        setMenuStatus(!menuStatus)
    }
  return (
    <Nav className="navigation-bar">
      <Nav.Item>
        <div>logo</div>
      </Nav.Item>
      <Nav.Item>
        <div className="search search-hide">
          <input type="text" disabled />
          <BiSearchAlt className="search-icon" />
        </div>
      </Nav.Item>
      <Nav.Item className="login-info">
        <div>login info</div>
      </Nav.Item>
      <Nav.Item className="menu-bar" onClick={handleMenu}>
        <div>menu</div>
        <div className={menuStatus? "menu-show" : "menu-hide"} >
          <div>Search</div>
          <div>Genres</div>
          <div>Trending</div>
          <div>Popular</div>
          <div>Recent</div>
        </div>
      </Nav.Item>
    </Nav>
  );
}
