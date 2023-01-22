import React from 'react';
import { Container, Nav, Offcanvas } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import SearchBarSection from './search';

function NavigationBar() {
  return (
    <div>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="menu" fixed="top">
          <Container>
            <Navbar.Brand href="/" className="brand-logo">
              <img src={logo} alt="h-logo" width="100px" height="50px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex me-auto menu">
                  <Nav.Link as={Link} to="/">
                    Om oss
                  </Nav.Link>
                  <Nav.Link as={Link} to="/erbjudande">
                    Offers
                  </Nav.Link>
                  <Nav.Link as={Link} to="/kontakt">
                    Contact
                  </Nav.Link>
                </Nav>
                <SearchBarSection />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavigationBar;
