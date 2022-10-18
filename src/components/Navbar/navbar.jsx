import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { redirects } from '../../utils/constants';

import '../Navbar/navbar.css';
import logo_cuenco_favicon from '../../assets/Img/favicon/android-chrome-192x192.png';

export default function NavScroll() {
  return (
    <div className="fixed-top">
      <Navbar className="nav" expand="lg" collapseOnSelect>  
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link className="nav__link" href={redirects.home}>
              Inicio
            </Nav.Link>
            <Nav.Link className="nav__link" href={redirects.about}>
              Nosotros
            </Nav.Link>
            <Nav.Link className="nav__link" href={redirects.donate}>
              Donaciones
            </Nav.Link>
            <Nav.Link className="nav__link" href={redirects.news}>
              Novedades
            </Nav.Link>
            <Nav.Link className="nav__link" href={redirects.volunteer}>
              Voluntariado
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="separator"></div>
    </div>
  );
}
