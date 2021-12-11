import React from "react";
import "./styles.css";

const NavMenu = ({ open, handleClose, children }) => {
  const className = `menu ${open ? "show" : null}`;
  return (
    <nav className={className}>
      <button onClick={handleClose}>&times;</button>
      <ul>{children}</ul>
    </nav>
  );
};

export default NavMenu;
