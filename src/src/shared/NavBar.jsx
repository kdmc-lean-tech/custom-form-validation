import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Todo App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink activeClassName='active' to='/' className='nav-item nav-link'>Home</NavLink>
          <NavLink activeClassName='active' to='/add-todo' className='nav-item nav-link'>Add Todo</NavLink>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
