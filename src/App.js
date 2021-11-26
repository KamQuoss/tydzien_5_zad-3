import React, { useState } from "react";
import "./styles.css";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "./components/Button";
import NavMenu from "./components/NavMenu/NavMenu";

export default function App() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>Tydzień 5: Budowa interfejsu</h1>
      <h2>Zadanie 3</h2>
      <Button onClick={handleClick}>Open Navigation</Button>
      <Outlet />
      <NavMenu open={isOpen} handleClose={handleClick}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavMenu>
    </div>
  );
}
