import React from "react";
import "./styles.css";

const NavMenu = ({ open, handleClose, children }) => {
  return (
    <nav className={`menu ${open ? "show" : null}`}>
      <button onClick={handleClose}>&times;</button>
      <ul>{children}</ul>
    </nav>
  );
};

export default NavMenu;
