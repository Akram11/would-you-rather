import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import React from "react";

export default function Nav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <NavLink to='/' exact> home </NavLink>
          <NavLink to='/new' exact> New Question </NavLink>
      </Navbar>
    </>
  );
}
