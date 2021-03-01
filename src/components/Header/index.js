import React from "react";
import "./styles.css";
import { Router, Link, BrowserRouter, Switch} from "react-router-dom";
import {Navbar, Nav, NavDropdown, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Header = () => (

<header id="main-header">
    
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

<Navbar.Brand href="">
      <img
        alt=""
        src="logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Agenda Itanet
    </Navbar.Brand>


  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Agendamentos</Nav.Link>
      <Nav.Link href="/create">Agendar</Nav.Link>
      <Nav.Link href="/historic">Histórico</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</header>

);

export default Header;