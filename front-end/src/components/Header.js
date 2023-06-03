import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from '../assets/logo.png';

export default function Header() {
   return (
      <header>
         <Navbar
            scrolling
            dark
            collapseOnSelect
            expand="md"
            fixed="top"
            variant="dark"
         >
            <Container>
               <Navbar.Brand href="#">
                  <img src={logo} alt="logo" width="50" height="50" />
               </Navbar.Brand>
               <NavbarToggle aria-controls="responsive-navbar-nav" />
               <NavbarCollapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="#description">Описание</Nav.Link>
                     <Nav.Link href="#requirements">Условия</Nav.Link>
                     <Nav.Link href="#gallery">Галерея</Nav.Link>
                     <Nav.Link href="#contacts">Контакты</Nav.Link>
                  </Nav>
               </NavbarCollapse>
            </Container>
         </Navbar>
      </header>
   );
}
