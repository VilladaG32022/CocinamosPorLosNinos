import React from 'react';
import 'cdbreact';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../Footer/Footer.css';
import logo_color from '../../assets/Img/logo_color.png';

import { redirects } from '../../utils/constants';

export default function FooterSection(props) {
  return (
    <MDBFooter className="text-center text-lg-start text-muted">
      <section className="footer">
        <div className="footer__separator"></div>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="footer__row mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4" id="logo__col">
              <img src={logo_color} className="footer__logo" alt="logo" />
              <h5 className="text-uppercase fw-bold mb-4">COCINAMOS POR LOS NIÑOS</h5>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <p>
                <a href={redirects.about} className="text-reset">
                  Acerca de nosotros
                </a>
              </p>
              <p>
                <a href={redirects.about} className="text-reset">
                  Qué hacemos
                </a>
              </p>
              <p>
                <a href={redirects.about} className="text-reset">
                  Dónde estamos
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <p>
                <a href={redirects.volunteer} className="text-reset">
                  Involucrate
                </a>
              </p>
              <p>
                <a href={redirects.donate} className="text-reset">
                  Donaciones
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <p className="media__link">
                <MDBIcon fab icon="facebook" className="me-3" />
                <a href="https://www.facebook.com" className="text-reset">
                  Nuestro Facebook
                </a>
              </p>
              <p className="media__link">
                <MDBIcon fab icon="instagram" className="me-3" />
                <a href="https://www.instagram.com" className="text-reset">
                  Nuestro Instagram
                </a>
              </p>
              <p>
                <MDBIcon fas icon="envelope" className="me-3" />
                cocinamosporlosniños@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />+ 351 000 0000
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer__line"></div>
        <div className="footer__low text-center p-4">© 2022 Copyright - Cocinamos por los Niños</div>
        <div className="footer__separator"></div>
      </section>
    </MDBFooter>
  );
}
