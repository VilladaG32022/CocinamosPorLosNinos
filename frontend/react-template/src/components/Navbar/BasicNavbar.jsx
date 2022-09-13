import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Navbar/navbar.css";
import logo_color from "../../assets/Img/logo_color.png";
export default function NavScroll() {
  return (
    <div className="fixed-top">
      <Navbar className="nav" expand="lg">
        <Navbar.Brand href="/#home_section">
          <img src={logo_color} className="nav__logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="nav__link" href="/#home_section">
              Inicio
            </Nav.Link>
            <Nav.Link className="nav__link" href="/#news_section">
              Novedades
            </Nav.Link>
            <Nav.Link className="nav__link" href="/#volunteer_section">
              Voluntariado
            </Nav.Link>
            <Nav.Link className="nav__link" href="/#about_section">
              Nosotros
            </Nav.Link>
            <Nav.Link className="nav__link" href="/#donation_section">
              Donaciones
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="separator"></div>
    </div>
  );
}
