import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button'
import { NavLink } from "react-router-dom";
import {Form, FormControl} from 'react-bootstrap'
import React from "react";

export default function Nav(props) {
  console.log(props)
  
  return (
    <>
      <Navbar bg="dark" variant="dark" className = 'nav-bar'>
          <NavLink className = 'nav-elm' to='/' exact> home </NavLink>
          <NavLink className = 'nav-elm' to='/new' exact> New Question </NavLink>
          <NavLink className = 'nav-elm' to='/Leader-Board'> Leader Board </NavLink> 

          <img
              width={64}
              height={64}
              className='mr-3'
              src='https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568248-stock-illustration-male-face-avatar-logo-template.jpg'
              alt='Generic placeholder'
            />
         

          <Button  variant="outline-light">sign out</Button>
  
      </Navbar>
    </>
  );
}
