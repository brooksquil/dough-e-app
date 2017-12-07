import './Navbar.css';
import React from 'react';
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';


const NavBar = () => ( // The variable should be a return function...
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Provence Bakery</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <MenuItem eventKey={4} href="/locations">Locations</MenuItem>
        <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href="/products/bread">Bread</MenuItem>
          <MenuItem eventKey={3.2} href="/products/pastry">Pastry</MenuItem>
          <MenuItem eventKey={3.3} href="/products/food">Food</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3} href="/products">Product Catalog</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <MenuItem eventKey={1} href="/login">Login</MenuItem>
        <MenuItem eventKey={2} href="/logout">Logout</MenuItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;